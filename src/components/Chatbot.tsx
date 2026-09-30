import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Pill, FileText, Phone, Award, HelpCircle } from "lucide-react";
import { Language, ChatMessage } from "../types";

interface ChatbotProps {
  lang: Language;
}

export default function Chatbot({ lang }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const t = {
    chatTitle: { en: "Lorindale Assistant", mm: "လော်ရင်ဒေး AI လက်ထောက်" },
    onlineTag: { en: "Healthcare Advisor", mm: "ကျန်းမာရေး အကြံပေးအရာရှိ" },
    placeholder: { en: "Ask about FDA, products...", mm: "ဆေးဝါးနှင့် စာရွက်စာတမ်းများ မေးမြန်းပါ..." },
    introMsg: {
      en: "Hello! I am the Lorindale AI Healthcare Assistant. How can I assist you today? Feel free to ask about our 120+ pharmaceutical products, FDA registration process, or how to partner with us in Myanmar.",
      mm: "မင်္ဂလာပါ! ကျွန်တော်ကတော့ လော်ရင်ဒေး ဆေးဝါးလုပ်ငန်းရဲ့ AI ကျန်းမာရေး လက်ထောက်ဖြစ်ပါတယ်။ ဆေးဝါးထုတ်ကုန်များ၊ မြန်မာနိုင်ငံ FDA မှတ်ပုံတင်ခြင်းဆိုင်ရာ ကိစ္စရပ်များနှင့် နိုင်ငံတကာ ပူးပေါင်းဆောင်ရွက်မှုများအကြောင်း မေးမြန်းနိုင်ပါသည်။"
    },
    suggestFDA: { en: "Myanmar FDA requirements?", mm: "မြန်မာ FDA လိုအပ်ချက်များ?" },
    suggestWound: { en: "Collagen Wound Care", mm: "ကော်လဂျင် အနာကျက်ဂျဲလ်" },
    suggestContact: { en: "Corporate Phone & Email", mm: "ဆက်သွယ်ရန်လိပ်စာ" }
  };

  // Pre-populate with first greeting message when chatbot is loaded
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: t.introMsg[lang],
          timestamp: new Date()
        }
      ]);
    }
  }, [lang]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal("");
    setIsTyping(true);

    try {
      // Post query history to server side
      const history = messages.concat(userMessage).map((m) => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history })
      });

      const data = await response.json();
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "I apologize, but I am experiencing connectivity issues. Please try again later.",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot API Error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Thank you for reaching out. It seems the live AI server is currently syncing. You can reach our clinical team directly at info@lorindalepharma.com.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating launcher button */}
      <motion.button
        id="chatbot-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1E5BB8] to-[#184A9E] text-white flex items-center justify-center shadow-2xl shadow-blue-500/20 cursor-pointer relative"
        title="Lorindale AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X key="close" className="w-6 h-6" />
          ) : (
            <MessageSquare key="open" className="w-6 h-6" />
          )}
        </AnimatePresence>
        {/* Glowing badge */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D4B11A] rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>

      {/* Floating Chat Container Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-[340px] sm:w-[380px] h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#1E5BB8] to-[#184A9E] text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white font-extrabold shadow-inner relative">
                  <Pill className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-teal-400" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm">{t.chatTitle[lang]}</h4>
                  <div className="flex items-center space-x-1">
                    <span className="text-[9px] font-black uppercase text-blue-200 tracking-wider">
                      {t.onlineTag[lang]}
                    </span>
                  </div>
                </div>
              </div>
              <button
                id="chatbot-close-panel-btn"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/80 hover:text-white" />
              </button>
            </div>

            {/* Chat History Messages panel */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50/50">
              {messages.map((msg) => {
                const isAssistant = msg.role === "assistant";
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isAssistant ? "justify-start" : "justify-end"} items-end space-x-2`}
                  >
                    {isAssistant && (
                      <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] shrink-0 font-extrabold">
                        L
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-2xl max-w-[80%] text-xs sm:text-sm font-semibold leading-relaxed shadow-sm ${
                        isAssistant
                          ? "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                          : "bg-blue-600 text-white rounded-br-none"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator bubble */}
              {isTyping && (
                <div className="flex justify-start items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] shrink-0 font-extrabold">
                    L
                  </div>
                  <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-bl-none flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-150" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-300" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Overlay */}
            {messages.length === 1 && (
              <div className="p-3 bg-gray-50/50 border-t border-gray-100 flex flex-wrap gap-2 justify-start">
                <button
                  id="suggest-fda-btn"
                  onClick={() => handleSend(t.suggestFDA[lang])}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-blue-200 text-[10px] sm:text-xs font-bold text-gray-700 hover:text-blue-600 transition-all flex items-center"
                >
                  <FileText className="w-3.5 h-3.5 mr-1 text-teal-500" />
                  <span>{t.suggestFDA[lang]}</span>
                </button>
                <button
                  id="suggest-wound-btn"
                  onClick={() => handleSend(t.suggestWound[lang])}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-blue-200 text-[10px] sm:text-xs font-bold text-gray-700 hover:text-blue-600 transition-all flex items-center"
                >
                  <Pill className="w-3.5 h-3.5 mr-1 text-blue-500" />
                  <span>{t.suggestWound[lang]}</span>
                </button>
                <button
                  id="suggest-contact-btn"
                  onClick={() => handleSend(t.suggestContact[lang])}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-blue-200 text-[10px] sm:text-xs font-bold text-gray-700 hover:text-blue-600 transition-all flex items-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1 text-indigo-500" />
                  <span>{t.suggestContact[lang]}</span>
                </button>
              </div>
            )}

            {/* Chat Input Box */}
            <div className="p-3 border-t border-gray-100 bg-white flex items-center space-x-2">
              <input
                id="chatbot-input-text"
                type="text"
                placeholder={t.placeholder[lang]}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend(inputVal);
                }}
                className="flex-grow px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm font-semibold"
              />
              <button
                id="chatbot-submit-btn"
                onClick={() => handleSend(inputVal)}
                className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
