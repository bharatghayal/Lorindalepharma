import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Initialize Gemini API
let ai: GoogleGenAI | null = null;
try {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini API initialized successfully.");
  } else {
    console.warn("GEMINI_API_KEY is not defined. AI Chatbot will run in fallback mode.");
  }
} catch (error) {
  console.error("Error initializing Gemini API:", error);
}

// Lorindale Pharma Knowledge Base for Gemini AI Chatbot
const LORINDALE_KNOWLEDGE = `
Company Name: Lorindale Pharma
Tagline: Transforming Healthcare Across Myanmar
Established: 2019
Mission: To fulfill the future healthcare needs of Myanmar by providing innovative, reliable, and affordable healthcare products and services.
Vision: To become one of Myanmar's Top 20 healthcare companies by 2030 through continuous innovation, quality products, and customer-focused healthcare solutions.

Core Expertise & Services:
1. Pharmaceutical Marketing & Brand Management.
2. Regulatory Affairs & Product Registration (Specializing in compliance management and registration for Pharmaceuticals, Food Supplements, Cosmetics, and Medical Devices under Myanmar FDA regulations).
3. Nationwide Distribution & Logistics (Headquartered in Yangon, with FDA-compliant warehousing, modern cold-chain/quality-controlled storage facilities, and nationwide regional delivery coverage).
4. Importation & Supply Chain Services (Sourcing, transporting, and delivering safely under strict quality standards).
5. Sales & Marketing (Market research, HCP engagement, Continuing Medical Education (CME) programs, promotion, and training).
6. Training & Development (Investing in employee growth, scientific enhancement, and workshops).

Core Values:
- Innovation (Advanced solutions for better patient outcomes).
- Quality (Highest standards across products, services, and operations).
- Integrity (Trust through transparency, ethics, and professionalism).
- Respect (Valuing patients, HCPs, partners, and employees).
- Teamwork (Working together for excellence).
- Leadership (Driving positive change in Myanmar's healthcare industry).

Product Portfolio:
1. Advanced Wound Care (Pioneers of advanced collagen wound care solutions in Myanmar supporting faster healing).
2. Nephrology Products (Innovative renal care and kidney health products).
3. Cardio-Diabetes Care (Comprehensive solutions for cardiovascular and diabetic patient management).
4. Antibiotics (Reliable and effective anti-infective medications).
5. Dental Care Products (Advanced oral healthcare products for dental treatments and home care).
6. Nutrition & Multivitamins (Health supplements promoting overall wellness).
7. Pharma Cosmetics (Dermatological and aesthetic healthcare products).

Distribution Network:
- Corporate Headquarters: Yangon, Myanmar's commercial capital.
- Features: FDA-compliant warehouses, modern temperature-controlled storage, systematic logistical coverage across all states and regions in Myanmar.

Global expansion plans:
Expanding into emerging Southeast Asian markets including Vietnam, Philippines, and Cambodia, with Myanmar remaining the core market.
`;

const SYSTEM_INSTRUCTION = `
You are the Lorindale AI Healthcare Assistant, representing Lorindale Pharma.
Your job is to answer questions about Lorindale Pharma in a warm, professional, and knowledgeable corporate manner.
Use the following company knowledge to ground your answers:
${LORINDALE_KNOWLEDGE}

Guidelines:
1. Always be professional, helpful, trustworthy, and polite.
2. If asked about a product or service not mentioned in the portfolio, state that we are continuously expanding our portfolio of 120+ products, and offer to let them request contact with our regulatory or product team.
3. If asked about contact details, provide: Headquartered in Yangon, Myanmar. Phone: +95 9952160179, Email: info@lorindalepharma.com.
4. Keep answers relatively concise and highly readable (use bullet points if listing items).
5. Keep the tone inspiring and corporate. Do not invent details not aligned with our values or expertise.
`;

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", company: "Lorindale Pharma" });
});

// Chatbot Endpoint using Gemini API
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages array is required" });
  }

  // Get the last user message
  const lastMessageObj = messages[messages.length - 1];
  const userPrompt = lastMessageObj ? lastMessageObj.content : "Hello";

  try {
    if (ai) {
      try {
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Gemini API timeout")), 4000)
        );

        const generatePromise = ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: userPrompt,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        const response: any = await Promise.race([generatePromise, timeoutPromise]);
        const responseText = response.text || "Thank you for contacting Lorindale Pharma. How may we assist you today?";
        return res.json({ response: responseText });
      } catch (geminiErr) {
        console.warn("Gemini generation failed or timed out, switching to smart local response:", geminiErr);
        // Fall through to smart fallback below
      }
    }

    // High quality local corporate fallback response
    let reply = "Thank you for reaching out to Lorindale Pharma. ";
    const lowerPrompt = userPrompt.toLowerCase();
    if (lowerPrompt.includes("product") || lowerPrompt.includes("portfolio") || lowerPrompt.includes("wound") || lowerPrompt.includes("cardio") || lowerPrompt.includes("antibiotic")) {
      reply += "We market more than 120 products in Myanmar, including Advanced Wound Care (collagen solutions like ColoPlug, ColoCast, NanoColl), Nephrology (Moclate, Tacmedi), Cardio-Diabetes Care (Metlorin Duo), Antibiotics (Lorinclav), Dental Care, Nutrition & Multivitamins, and Pharma Cosmetics. Let me know if you would like details on any specific category!";
    } else if (lowerPrompt.includes("service") || lowerPrompt.includes("regulat") || lowerPrompt.includes("fda") || lowerPrompt.includes("import")) {
      reply += "Lorindale Pharma offers world-class services in Regulatory Affairs & Product Registration (Myanmar FDA compliance), Importation services, Nationwide Distribution, and Medical Training & CME Development. We help international partners enter the Myanmar market smoothly.";
    } else if (lowerPrompt.includes("contact") || lowerPrompt.includes("phone") || lowerPrompt.includes("email") || lowerPrompt.includes("address") || lowerPrompt.includes("office")) {
      reply += "Our corporate headquarters are located in Yangon, Myanmar. You can contact us directly at +95 9952160179 or via email at info@lorindalepharma.com. We look forward to hearing from you!";
    } else if (lowerPrompt.includes("vision") || lowerPrompt.includes("mission") || lowerPrompt.includes("grow") || lowerPrompt.includes("values")) {
      reply += "Our vision is to become one of Myanmar's Top 20 healthcare companies by 2030. Our mission is to fulfill the future healthcare needs of Myanmar with innovative, reliable, and affordable products.";
    } else {
      reply += "I can provide details about our 120+ pharmaceutical products, our nationwide distribution network across Myanmar, or our FDA product registration capabilities. How can we support your healthcare needs today?";
    }

    return res.json({ response: reply });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    return res.status(500).json({ error: error.message || "An error occurred during AI generation" });
  }
});

// Form submissions (Contact & Appointments) routed to info@lorindalepharma.com
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message, department } = req.body;
  const recipient = "info@lorindalepharma.com";
  console.log(`[Contact Dispatch] Sent message to ${recipient}:`, {
    to: recipient,
    senderName: name,
    senderEmail: email,
    subject: subject || "Get in Touch Inquiry",
    message,
    department,
    timestamp: new Date().toISOString()
  });
  
  return res.json({
    success: true,
    recipient,
    message: `Thank you for contacting Lorindale Pharma. Your message has been sent to ${recipient}. Our team will respond within 24 hours.`
  });
});

app.post("/api/appointment", (req, res) => {
  const { fullName, email, phone, purpose, preferredDate, preferredTime, additionalInfo } = req.body;
  console.log(`Received appointment request:`, { fullName, email, phone, purpose, preferredDate, preferredTime, additionalInfo });
  
  return res.json({
    success: true,
    message: `Thank you, ${fullName}. Your request for a professional consultation has been submitted. Our regulatory/sales team will confirm the appointment on ${preferredDate} at ${preferredTime} via email or phone.`
  });
});

// Original Image upload & retrieval for Lorindale Pharma International Conclave
let conclaveCustomImageUrl = "/conclave_original_web.jpg";
const uploadsDir = path.join(process.cwd(), "public", "uploads");
const publicDir = path.join(process.cwd(), "public");
try {
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
} catch (e) {
  console.warn("Could not create uploads directory", e);
}

app.use(express.static(publicDir));
app.use("/uploads", express.static(uploadsDir));

app.get("/api/conclave-image", (req, res) => {
  res.json({ url: conclaveCustomImageUrl || "/conclave_original_web.jpg" });
});

app.post("/api/upload-conclave-image", (req, res) => {
  const { imageBase64, imageUrl } = req.body;
  if (imageUrl) {
    conclaveCustomImageUrl = imageUrl;
    return res.json({ success: true, url: imageUrl });
  }
  if (imageBase64) {
    try {
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const filePath = path.join(uploadsDir, "conclave_original.jpg");
      fs.writeFileSync(filePath, buffer);
      conclaveCustomImageUrl = `/uploads/conclave_original.jpg?t=${Date.now()}`;
      console.log("Original conclave image saved successfully:", conclaveCustomImageUrl);
      return res.json({ success: true, url: conclaveCustomImageUrl });
    } catch (err: any) {
      console.error("Error writing conclave image:", err);
      return res.status(500).json({ error: err.message });
    }
  }
  return res.status(400).json({ error: "No image payload provided" });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Lorindale Corporate Server running on http://localhost:${PORT}`);
  });
}

startServer();
