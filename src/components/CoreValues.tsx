import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { Language } from "../types";
import { CORE_VALUES_DATA } from "../data";
import ScrollFadeIn from "./ScrollFadeIn";

interface CoreValuesProps {
  lang: Language;
}

export default function CoreValues({ lang }: CoreValuesProps) {
  const t = {
    tag: { en: "OUR CORE VALUES", mm: "ကျွန်ုပ်တို့၏ တန်ဖိုးထားမှုများ" },
    title: { en: "The Pillars of Lorindale Pharma", mm: "လော်ရင်ဒေး၏ အခြေခံမူဝါဒ ၆ ချက်" },
    subtitle: {
      en: "Guiding our relationships, clinical diligence, and regulatory solutions to reinforce absolute patient and practitioner trust across Myanmar.",
      mm: "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ဆေးဘက်ဆိုင်ရာ ကျွမ်းကျင်သူများနှင့် ပြည်သူလူထု၏ ယုံကြည်ကိုးစားမှုကို အပြည့်အဝရရှိစေရန် ဤတန်ဖိုးထားမှုများက လမ်းညွှန်ပေးလျက်ရှိပါသည်။"
    }
  };

  return (
    <section className="py-16 bg-[#fafbfe] overflow-hidden relative">
      {/* Soft Background Accent Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/25 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-rose-100/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading (Matching the elegant centered styling of the reference image) */}
        <ScrollFadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-rose-500 font-sans">
              {t.tag[lang]}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] mt-2 tracking-tight leading-tight">
              {t.title[lang]}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed font-semibold max-w-xl mx-auto">
              {t.subtitle[lang]}
            </p>
          </div>
        </ScrollFadeIn>

        {/* 6 Core Value Cards Grid (Pristine 3-column layout matching reference image cards, more compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {CORE_VALUES_DATA.map((val, index) => {
            // Dynamically select the icon component
            const IconComponent = (Icons as any)[val.iconName] || Icons.HelpCircle;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="group relative px-5 py-8 rounded-[20px] bg-white border border-slate-100/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.02),0_4px_8px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden h-full justify-between"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Centered Circular Icon Container with fuzzy color shadow behind it */}
                  <div className="relative flex justify-center items-center mt-0 mb-5">
                    {/* Glowing colored backing shadow */}
                    <div className={`absolute w-10 h-10 rounded-full blur-md opacity-75 bg-gradient-to-br ${val.color} group-hover:scale-125 transition-transform duration-500`} />
                    
                    {/* Vibrant solid gradient icon frame */}
                    <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${val.color} flex items-center justify-center text-white z-10 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-[#0f172a] group-hover:text-blue-600 transition-colors tracking-tight">
                    {val.title[lang]}
                  </h3>
                </div>

                {/* Light gray small round arrow button at the bottom */}
                <div className="mt-5 flex justify-center">
                  <div className="w-7.5 h-7.5 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
                    <Icons.ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

