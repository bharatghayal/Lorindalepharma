import { motion } from "motion/react";
import { Language } from "../types";
import { PARTNERS_DATA } from "../data";
import ScrollFadeIn from "./ScrollFadeIn";

interface PartnersProps {
  lang: Language;
}

export default function Partners({ lang }: PartnersProps) {
  const t = {
    tag: { en: "GLOBAL ALLIANCES", mm: "နိုင်ငံတကာ မိတ်ဖက်များ" },
    title: { en: "Trusted Strategic Partners", mm: "ယုံကြည်စိတ်ချရသော နိုင်ငံတကာထုတ်လုပ်သူများ" },
    subtitle: {
      en: "We collaborate with leading international WHO-GMP certified manufacturers and healthcare organizations to deliver quality solutions.",
      mm: "ကမ္ဘာ့အဆင့်မီ အရည်အသွေးမြင့်မားသော ဆေးဝါးများကို တင်သွင်းရန် နိုင်ငံတကာရှိ နာမည်ကြီး ဆေးဝါးထုတ်လုပ်သူများနှင့် အတူတကွ လက်တွဲဆောင်ရွက်လျက်ရှိပါသည်။"
    },
    manufacturingBadge: { en: "WHO-GMP Certified", mm: "WHO-GMP အသိအမှတ်ပြု" }
  };

  // We have exactly 12 items. Let's divide them into Row 1 and Row 2.
  const row1 = PARTNERS_DATA.slice(0, 6);
  const row2 = PARTNERS_DATA.slice(6, 12);

  // Duplicate for seamless infinite marquee scroll
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  // Helper to determine width classes matching the asymmetric sizes in the reference image
  const getRow1CardWidth = (originalIndex: number) => {
    const index = originalIndex % row1.length;
    // 0: Wide, 1: Square, 2: Wide, 3: Square, 4: Wide, 5: Square
    return index % 2 === 0
      ? "w-44 sm:w-60 md:w-64 flex-[2_2_0%] min-w-[170px]"
      : "w-24 sm:w-28 md:w-32 flex-[1_1_0%] min-w-[90px]";
  };

  const getRow2CardWidth = (originalIndex: number) => {
    const index = originalIndex % row2.length;
    // 0: Square, 1: Wide, 2: Square, 3: Square, 4: Wide, 5: Square
    if (index === 0 || index === 2 || index === 3 || index === 5) {
      return "w-24 sm:w-28 md:w-32 flex-[1_1_0%] min-w-[90px]";
    }
    return "w-44 sm:w-60 md:w-64 flex-[2_2_0%] min-w-[170px]";
  };

  return (
    <section className="py-24 bg-[#fafbfe] border-y border-slate-100 relative overflow-hidden">
      {/* Decorative fine-line border grid overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/20 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-rose-100/15 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-rose-500 font-sans">
              {t.tag[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] mt-4 tracking-tight leading-tight">
              {t.title[lang]}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed font-semibold">
              {t.subtitle[lang]}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Asymmetric Bento Logo Grid Deck with Left/Right Infinite Marquee */}
        <div className="space-y-6 max-w-7xl mx-auto overflow-hidden relative py-4">
          {/* Shadow gradients for fade-off borders on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#fafbfe] via-[#fafbfe]/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#fafbfe] via-[#fafbfe]/40 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Sliding Left */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee-left space-x-4 sm:space-x-6">
              {marqueeRow1.map((partner, index) => (
                <div
                  key={`r1-${index}`}
                  className={`group flex items-center justify-center h-24 sm:h-28 rounded-2xl bg-white border border-slate-100/80 shadow-[0_4px_12px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-blue-100/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden px-5 shrink-0 select-none ${getRow1CardWidth(index)}`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    referrerPolicy="no-referrer"
                    className="max-w-[90%] max-h-[80%] object-contain opacity-95 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const fallback = e.currentTarget.parentElement?.querySelector(".logo-fallback");
                      if (fallback) fallback.classList.remove("hidden");
                    }}
                  />
                  {/* Fallback Text if image fails to load */}
                  <div className="logo-fallback hidden text-center px-2">
                    <span className="text-sm font-black text-slate-400 group-hover:text-blue-600 tracking-tight transition-colors duration-300 block leading-tight">
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-slate-300 block mt-0.5 font-semibold uppercase tracking-wider">
                      {partner.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Right */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee-right space-x-4 sm:space-x-6">
              {marqueeRow2.map((partner, index) => (
                <div
                  key={`r2-${index}`}
                  className={`group flex items-center justify-center h-24 sm:h-28 rounded-2xl bg-white border border-slate-100/80 shadow-[0_4px_12px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-blue-100/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden px-5 shrink-0 select-none ${getRow2CardWidth(index)}`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    referrerPolicy="no-referrer"
                    className="max-w-[90%] max-h-[80%] object-contain opacity-95 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const fallback = e.currentTarget.parentElement?.querySelector(".logo-fallback");
                      if (fallback) fallback.classList.remove("hidden");
                    }}
                  />
                  {/* Fallback Text if image fails to load */}
                  <div className="logo-fallback hidden text-center px-2">
                    <span className="text-sm font-black text-slate-400 group-hover:text-blue-600 tracking-tight transition-colors duration-300 block leading-tight">
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-slate-300 block mt-0.5 font-semibold uppercase tracking-wider">
                      {partner.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
