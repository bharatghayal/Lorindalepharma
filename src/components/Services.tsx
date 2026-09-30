import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronRight, X, Layers, FileSpreadsheet, Truck, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";
import { Language, ServiceCard } from "../types";
import { SERVICES_DATA } from "../data";
import ScrollFadeIn from "./ScrollFadeIn";

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const [activeModal, setActiveModal] = useState<ServiceCard | null>(null);

  const t = {
    tag: { en: "CORPORATE SERVICES", mm: "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ" },
    title: { en: "Comprehensive Pharmaceutical Solutions", mm: "ဘက်စုံ ဆေးဝါးဝန်ဆောင်မှုများ" },
    subtitle: {
      en: "From international compliance guidelines to cold-chain delivery operations, Lorindale Pharma manages your end-to-end commercial operations in Myanmar.",
      mm: "နိုင်ငံတကာဆေးဝါးများကို မြန်မာနိုင်ငံ စျေးကွက်သို့ စနစ်တကျ တင်သွင်းရန်နှင့် တစ်နိုင်ငံလုံး ဖြန့်ဖြူးရန်အတွက် စာရွက်စာတမ်း အကောက်ခွန် ကိစ္စရပ်များအားလုံးကို တစ်နေရာတည်းတွင် ဆောင်ရွက်ပေးပါသည်။"
    },
    learnMore: { en: "Review Clinical Capabilities", mm: "အသေးစိတ် ဖတ်ရှုရန်" },
    deliverables: { en: "Key Deliverables & Strengths", mm: "အဓိက ဆောင်ရွက်ပေးချက်များနှင့် အားသာချက်များ" },
    modalCTA: { en: "Request Consultation", mm: "ဆက်သွယ်ဆွေးနွေးရန်" }
  };

  const iconMap: Record<string, React.ReactNode> = {
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-blue-600" />,
    Truck: <Truck className="w-5 h-5 text-emerald-600" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-indigo-600" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-purple-600" />
  };

  const colorConfig: Record<string, { bg: string, border: string, accent: string, glow: string }> = {
    FileSpreadsheet: {
      bg: "bg-blue-50 border-blue-100",
      border: "hover:border-blue-500/20",
      accent: "text-blue-600",
      glow: "from-blue-500/5 to-transparent"
    },
    Truck: {
      bg: "bg-emerald-50 border-emerald-100",
      border: "hover:border-emerald-500/20",
      accent: "text-emerald-600",
      glow: "from-emerald-500/5 to-transparent"
    },
    TrendingUp: {
      bg: "bg-indigo-50 border-indigo-100",
      border: "hover:border-indigo-500/20",
      accent: "text-indigo-600",
      glow: "from-indigo-500/5 to-transparent"
    },
    GraduationCap: {
      bg: "bg-purple-50 border-purple-100",
      border: "hover:border-purple-500/20",
      accent: "text-purple-600",
      glow: "from-purple-500/5 to-transparent"
    }
  };

  return (
    <section id="services" className="py-28 bg-slate-50/50 relative overflow-hidden">
      {/* Editorial aesthetic ambient backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/3 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full">
              {t.tag[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-5 tracking-tight leading-none">
              {t.title[lang]}
            </h2>
            <div className="w-20 h-1.5 bg-premium-highlight mx-auto mt-6 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.3)]" />
            <p className="text-slate-500 text-sm sm:text-base mt-6 leading-relaxed font-semibold">
              {t.subtitle[lang]}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((srv, index) => {
            const config = colorConfig[srv.iconName] || colorConfig.FileSpreadsheet;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-10 sm:p-12 rounded-[32px] bg-white border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.01)] hover:shadow-2xl ${config.border} transition-all duration-500 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle internal gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${config.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="space-y-8 relative z-10">
                  {/* Header icon row */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${config.bg}`}>
                      {iconMap[srv.iconName] || <Layers className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight leading-tight">
                      {srv.title[lang]}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                      {srv.description[lang]}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <div className="pt-8 border-t border-slate-100 mt-10 relative z-10 flex items-center justify-between">
                  <button
                    id={`learn-more-${srv.id}`}
                    onClick={() => setActiveModal(srv)}
                    className="inline-flex items-center text-xs font-black uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>{t.learnMore[lang]}</span>
                    <ChevronRight className="w-4 h-4 ml-1.5" />
                  </button>
                  <span className="text-[10px] font-mono font-black text-slate-300 group-hover:text-slate-400 transition-colors select-none">CAPABILITY_SRV_{srv.id.toUpperCase()}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal Layer */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/40 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-[32px] w-full max-w-xl overflow-hidden shadow-3xl border border-slate-100 relative"
            >
              {/* Cover Graphic Accent */}
              <div className="h-2 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600" />
              
              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={() => setActiveModal(null)}
                className="absolute top-8 right-6 p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all border border-slate-100"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 sm:p-10 space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${colorConfig[activeModal.iconName]?.bg || "bg-blue-50 border-blue-100"}`}>
                    {iconMap[activeModal.iconName] || <Layers className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">{activeModal.title[lang]}</h3>
                    <span className="text-[9px] font-black uppercase text-blue-600 tracking-widest block mt-0.5">LORINDALE SPECIFICATION</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  {activeModal.description[lang]}
                </p>

                <div className="space-y-4">
                  <h4 className="font-extrabold text-gray-900 text-xs sm:text-sm uppercase tracking-wider">{t.deliverables[lang]}</h4>
                  <ul className="space-y-3">
                    {activeModal.details[lang].map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-3 bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                        <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mt-0.5 shrink-0">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    id="modal-cancel-btn"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-extrabold tracking-wider uppercase text-slate-500 hover:bg-slate-50 transition-colors"
                  >
                    {lang === "en" ? "Close" : "ပိတ်ရန်"}
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-[#1E5BB8] to-[#184A9E] shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.01] transition-all"
                  >
                    {t.modalCTA[lang]}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

