import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, CheckCircle, Clock, Send, Building2 } from "lucide-react";
import { Language } from "../types";
import ScrollFadeIn from "./ScrollFadeIn";
// @ts-ignore
import smilingProfessional from "../assets/images/smiling_professional_1782468051446.jpg";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  // Redesigned form state matching the uploaded screenshot
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);
  
  const [contactStatus, setContactStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

  const t = {
    tag: { en: "Get in Touch", mm: "ဆက်သွယ်ရန်" },
    title: { en: "Let's Chat, Reach Out to Us", mm: "ကျွန်ုပ်တို့ထံ ဆက်သွယ်စကားပြောဆိုပါ" },
    subtitle: {
      en: "Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.",
      mm: "မေးမြန်းလိုသည်များ သို့မဟုတ် တုံ့ပြန်ချက်များရှိပါသလား? ကျွန်ုပ်တို့ ကူညီရန် အဆင်သင့်ရှိပါသည်။ ကျွန်ုပ်တို့ထံ မက်ဆေ့ခ်ျပို့ပါ၊ ၂၄ နာရီအတွင်း အကြောင်းပြန်ပေးပါမည်။"
    },
    firstName: { en: "First Name", mm: "နာမည်" },
    lastName: { en: "Last Name", mm: "မျိုးရိုးအမည်" },
    email: { en: "Email Address", mm: "အီးမေးလ်လိပ်စာ" },
    message: { en: "Message", mm: "မက်ဆေ့ခ်ျ" },
    agreePolicy: { en: "I agree to our friendly privacy policy", mm: "ကျွန်ုပ်တို့၏ ကိုယ်ရေးအချက်အလက် ထိန်းသိမ်းမှု မူဝါဒကို သဘောတူပါသည်။" },
    submitBtn: { en: "Send Message", mm: "မက်ဆေ့ခ်ျ ပို့ရန်" },
    submitting: { en: "Sending to info@lorindalepharma.com...", mm: "info@lorindalepharma.com သို့ ပို့နေပါသည်..." },
    successMsg: {
      en: "Your message has been sent to info@lorindalepharma.com! Our team will respond within 24 hours.",
      mm: "သင့်မက်ဆေ့ခ်ျအား info@lorindalepharma.com သို့ အောင်မြင်စွာ ပို့ဆောင်ပြီးပါပြီ။ ၂၄ နာရီအတွင်း အကြောင်းပြန်ပေးပါမည်။"
    },
    errorMsg: { en: "Could not send. Please try again or email us directly at info@lorindalepharma.com.", mm: "မက်ဆေ့ခ်ျမပို့နိုင်ပါ။ ထပ်မံကြိုးစားပါ သို့မဟုတ် info@lorindalepharma.com သို့ တိုက်ရိုက် အီးမေးလ်ပို့ပါ။" },
    directNote: {
      en: "Inquiries are delivered directly to info@lorindalepharma.com",
      mm: "မေးမြန်းမှုများကို info@lorindalepharma.com သို့ တိုက်ရိုက် ပို့ဆောင်ပေးပါသည်"
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeToPolicy) {
      alert(lang === "en" ? "Please agree to our privacy policy first." : "မူဝါဒကို အရင် သဘောတူပေးပါ။");
      return;
    }
    setIsContactSubmitting(true);
    setContactStatus(null);

    const senderFullName = `${firstName} ${lastName}`.trim();
    const mailRecipient = "info@lorindalepharma.com";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: mailRecipient,
          name: senderFullName,
          email: contactEmail,
          subject: "Get in Touch Inquiry",
          message: contactMessage,
          department: "general"
        })
      });

      const data = await response.json();
      if (data.success) {
        setContactStatus({
          success: true,
          message: data.message || t.successMsg[lang]
        });
        setFirstName("");
        setLastName("");
        setContactEmail("");
        setContactMessage("");
        setAgreeToPolicy(false);
      } else {
        setContactStatus({ success: false, message: t.errorMsg[lang] });
      }
    } catch (error) {
      console.error(error);
      setContactStatus({ success: false, message: t.errorMsg[lang] });
    } finally {
      setIsContactSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background washes matching the user-uploaded image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-white to-sky-50/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-blue-100/20 via-sky-100/5 to-transparent filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-blue-50/30 via-transparent to-transparent filter blur-3xl pointer-events-none" />

      {/* Elegant curves/waves in the top right matching the uploaded image */}
      <div className="absolute top-0 right-0 w-[60%] h-[70%] max-w-[800px] pointer-events-none select-none z-0 opacity-80 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="curve-gradient-contact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.4" /> {/* Purple */}
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.5" /> {/* Light Blue */}
              <stop offset="100%" stopColor="#1E5BB8" stopOpacity="0.1" /> {/* Lorindale Blue */}
            </linearGradient>
          </defs>
          <path d="M 100 -100 Q 350 450 900 150" stroke="url(#curve-gradient-contact)" strokeWidth="1.5" />
          <path d="M 150 -100 Q 380 430 900 200" stroke="url(#curve-gradient-contact)" strokeWidth="1.5" />
          <path d="M 200 -100 Q 410 410 900 250" stroke="url(#curve-gradient-contact)" strokeWidth="1.5" />
          <path d="M 250 -100 Q 440 390 900 300" stroke="url(#curve-gradient-contact)" strokeWidth="1.2" />
          <path d="M 300 -100 Q 470 370 900 350" stroke="url(#curve-gradient-contact)" strokeWidth="1" />
          <path d="M 350 -100 Q 500 350 900 400" stroke="url(#curve-gradient-contact)" strokeWidth="1" />
          <path d="M 400 -100 Q 530 330 900 450" stroke="url(#curve-gradient-contact)" strokeWidth="0.8" />
          <path d="M 450 -100 Q 560 310 900 500" stroke="url(#curve-gradient-contact)" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Large Watermark in the bottom-left corner matching the uploaded image */}
      <div className="absolute bottom-[-5%] left-[-2%] text-[7rem] sm:text-[10rem] lg:text-[13rem] font-black text-slate-100/35 select-none pointer-events-none tracking-tight leading-none font-sans">
        Establishment
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Grid layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Container */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-[32px] border border-slate-100/80 shadow-2xl shadow-slate-100/50 flex flex-col justify-between">
            <ScrollFadeIn direction="left" className="space-y-6">
              <div>
                <span className="text-sm font-black tracking-tight text-[#E28413] block mb-2">
                  {t.tag[lang]}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  {t.title[lang]}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed font-semibold">
                  {t.subtitle[lang]}
                </p>
              </div>

              <div className="border-b border-slate-100 my-6" />

              <form onSubmit={handleContactSubmit} className="space-y-5">
                {/* First and Last Name Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-firstname" className="text-xs font-black text-slate-800 tracking-wider">
                      {t.firstName[lang]}
                    </label>
                    <input
                      id="contact-firstname"
                      type="text"
                      required
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5BB8] focus:border-transparent text-sm font-semibold transition-all shadow-2xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-lastname" className="text-xs font-black text-slate-800 tracking-wider">
                      {t.lastName[lang]}
                    </label>
                    <input
                      id="contact-lastname"
                      type="text"
                      required
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5BB8] focus:border-transparent text-sm font-semibold transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-black text-slate-800 tracking-wider">
                    {t.email[lang]}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Email address"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5BB8] focus:border-transparent text-sm font-semibold transition-all shadow-2xs"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-black text-slate-800 tracking-wider">
                    {t.message[lang]}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Leave us message"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5BB8] focus:border-transparent text-sm font-semibold transition-all shadow-2xs resize-none"
                  />
                </div>

                {/* Privacy Agreement Checkbox matching screenshot */}
                <div className="flex items-start pt-2">
                  <label className="flex items-center space-x-3 text-slate-500 text-xs sm:text-sm cursor-pointer select-none">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={agreeToPolicy}
                        onChange={() => setAgreeToPolicy(!agreeToPolicy)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-md border transition-all flex items-center justify-center ${
                        agreeToPolicy ? "bg-[#1E5BB8] border-[#1E5BB8]" : "bg-white border-slate-300"
                      }`}>
                        {agreeToPolicy && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="font-semibold text-slate-600 hover:text-slate-800 transition-colors">
                      {t.agreePolicy[lang].split("privacy policy")[0]}
                      <span className="underline decoration-[#1E5BB8] text-slate-950 font-bold hover:text-[#1E5BB8] transition-colors">privacy policy</span>
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  id="submit-contact-btn"
                  type="submit"
                  disabled={isContactSubmitting}
                  className="w-full mt-4 py-4 rounded-2xl font-black text-sm tracking-wide text-white bg-[#1E5BB8] hover:bg-[#1E5BB8]/95 active:scale-[0.99] disabled:opacity-70 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-[#1E5BB8]/20"
                >
                  <span>{isContactSubmitting ? t.submitting[lang] : t.submitBtn[lang]}</span>
                  <Send className="w-4 h-4" />
                </button>

                {/* Routing indicator */}
                <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 font-medium pt-1">
                  <Mail className="w-3.5 h-3.5 text-[#1E5BB8] shrink-0" />
                  <span>{t.directNote[lang]}</span>
                </div>

                <AnimatePresence>
                  {contactStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`p-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center space-x-3 ${
                        contactStatus.success ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-rose-50 text-rose-700 border border-rose-100"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span>{contactStatus.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </ScrollFadeIn>
          </div>

          {/* Right Column: Smiling Professional Card & Contact Blocks */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <ScrollFadeIn direction="right" className="space-y-6">
              
              {/* Top Card: Smiling Professional Portrait with concentric circles background */}
              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-blue-100/30 to-blue-50/10 border border-slate-100/50 aspect-square sm:aspect-[4/3] lg:aspect-[5/4] flex items-end justify-center shadow-xl">
                {/* Concentric rings in blue tones on top of the professional's card */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-40">
                  <div className="absolute w-[95%] aspect-square border-4 border-blue-200/40 rounded-full" />
                  <div className="absolute w-[80%] aspect-square border-4 border-blue-200/50 rounded-full" />
                  <div className="absolute w-[65%] aspect-square border-4 border-blue-200/60 rounded-full" />
                  <div className="absolute w-[50%] aspect-square border-4 border-blue-200/70 rounded-full" />
                  <div className="absolute w-[35%] aspect-square border-4 border-blue-200/85 rounded-full" />
                </div>

                {/* Portrait of professional */}
                <img
                  src={smilingProfessional}
                  alt="Lorindale Professional"
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-full h-full object-cover object-center select-none pointer-events-none transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Stacked White Blocks for Email and Phone */}
              <div className="space-y-4">
                {/* Email block */}
                <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100/80 shadow-md flex items-center space-x-5 hover:bg-slate-50 transition-all group">
                  <div className="w-12 h-12 bg-blue-100/60 border border-blue-100 text-[#1E5BB8] rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase tracking-wider text-slate-400">Email</span>
                    <a
                      href="mailto:info@lorindalepharma.com"
                      className="text-base sm:text-lg font-black text-slate-900 hover:text-[#1E5BB8] transition-colors mt-0.5 block break-all"
                    >
                      info@lorindalepharma.com
                    </a>
                  </div>
                </div>

                {/* Phone block */}
                <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100/80 shadow-md flex items-center space-x-5 hover:bg-slate-50 transition-all group">
                  <div className="w-12 h-12 bg-blue-100/60 border border-blue-100 text-[#1E5BB8] rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase tracking-wider text-slate-400">Phone</span>
                    <a
                      href="tel:+959952160179"
                      className="text-base sm:text-lg font-black text-slate-900 hover:text-[#1E5BB8] transition-colors mt-0.5 block"
                    >
                      +95 9952160179
                    </a>
                  </div>
                </div>
              </div>

            </ScrollFadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
