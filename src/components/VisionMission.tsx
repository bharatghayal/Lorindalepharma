import { motion } from "motion/react";
import { Eye, Rocket, ShieldCheck, HeartPulse, ChevronRight } from "lucide-react";
import { Language } from "../types";
import ScrollFadeIn from "./ScrollFadeIn";

interface VisionMissionProps {
  lang: Language;
}

export default function VisionMission({ lang }: VisionMissionProps) {
  const t = {
    visionTitle: { en: "Our Vision", mm: "ကျွန်ုပ်တို့၏ မျှော်မှန်းချက်" },
    visionText: {
      en: "To become one of Myanmar's Top 20 healthcare companies by 2030 through continuous innovation, quality products, and customer-focused healthcare solutions.",
      mm: "စဉ်ဆက်မပြတ် ဆန်းသစ်တီထွင်မှု၊ စိတ်ချရသော ဆေးဝါးများနှင့် ဝန်ဆောင်မှုကောင်းများမှတစ်ဆင့် ၂၀၃၀ ခုနှစ်တွင် မြန်မာနိုင်ငံ၏ အကောင်းဆုံး ကျန်းမာရေးကုမ္ပဏီ အယောက် ၂၀ စာရင်းဝင် ဖြစ်လာရန်။"
    },
    missionTitle: { en: "Our Mission", mm: "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်" },
    missionText: {
      en: "To fulfill the future healthcare needs of Myanmar by providing innovative, reliable, and affordable healthcare products and services.",
      mm: "မြန်မာနိုင်ငံ၏ အနာဂတ် ကျန်းမာရေးလိုအပ်ချက်များကို ဖြည့်ဆည်းပေးရန်အတွက် ခေတ်မီ၊ စိတ်ချရပြီး သင့်တင့်သော ဆေးဝါးများနှင့် ဝန်ဆောင်မှုများကို ထောက်ပံ့ပေးရန်။"
    },
    tag: { en: "CORE ASPIRATIONS", mm: "ဦးတည်ချက်နှင့် ရည်မှန်းချက်" },
    heading: { en: "Driving Healthcare Excellence", mm: "ပိုမိုကောင်းမွန်သော အနာဂတ်ကို ဖော်ဆောင်ခြင်း" }
  };

  return (
    <section className="relative py-28 bg-[#0B1528] overflow-hidden text-white">
      {/* Decorative premium clinical light orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D4B11A]/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <ScrollFadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-blue-300 bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 rounded-full">
              {t.tag[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-5 tracking-tight leading-none text-white">
              {t.heading[lang]}
            </h2>
            <div className="w-20 h-1.5 bg-premium-highlight mx-auto mt-6 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.3)]" />
          </div>
        </ScrollFadeIn>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-10 sm:p-12 rounded-[32px] bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-blue-400/30 hover:bg-white/[0.04] transition-all duration-500 shadow-3xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient top corner hover glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Fine design stamp detail */}
            <span className="absolute top-6 right-8 text-[9px] font-mono font-bold text-slate-500/50 select-none">PORTAL_01 / LRN</span>

            <div className="space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/5">
                <Eye className="w-7 h-7" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{t.visionTitle[lang]}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
                  {t.visionText[lang]}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-blue-400 uppercase tracking-widest">
              <div className="flex items-center">
                <ShieldCheck className="w-4.5 h-4.5 mr-2 text-emerald-400" />
                <span>{lang === "en" ? "Top 20 by 2030" : "၂၀၃၀ အရောက်ဖြစ်မြောက်ရန်"}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-10 sm:p-12 rounded-[32px] bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#D4B11A]/30 hover:bg-white/[0.04] transition-all duration-500 shadow-3xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient top corner hover glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4B11A]/15 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Fine design stamp detail */}
            <span className="absolute top-6 right-8 text-[9px] font-mono font-bold text-slate-500/50 select-none">PORTAL_02 / LRN</span>

            <div className="space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-[#D4B11A]/10 border border-[#D4B11A]/20 flex items-center justify-center text-[#D4B11A] group-hover:bg-[#D4B11A] group-hover:text-gray-950 transition-all duration-500 shadow-xl shadow-[#D4B11A]/5">
                <Rocket className="w-7 h-7" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{t.missionTitle[lang]}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
                  {t.missionText[lang]}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#D4B11A] uppercase tracking-widest">
              <div className="flex items-center">
                <HeartPulse className="w-4.5 h-4.5 mr-2 text-[#D4B11A]" />
                <span>{lang === "en" ? "Affordable & Quality Care" : "သင့်တင့်သော နှုန်းထား၊ မြင့်မားသော အရည်အသွေး"}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#D4B11A]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

