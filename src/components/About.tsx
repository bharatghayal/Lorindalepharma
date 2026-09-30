import { motion } from "motion/react";
import { CheckCircle, Award, Landmark, Layers, Briefcase, Activity, ShieldCheck, HeartPulse } from "lucide-react";
import { Language } from "../types";
import { HIGHLIGHTS_DATA } from "../data";
import ScrollFadeIn from "./ScrollFadeIn";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = {
    sectionTitle: { en: "About Lorindale Pharma", mm: "လော်ရင်ဒေးအကြောင်း မိတ်ဆက်" },
    subtitle: { en: "WHO WE ARE", mm: "ကျွန်ုပ်တို့၏ အဓိကလုပ်ငန်းစဉ်များ" },
    introTitle: { en: "Transforming Healthcare Access Throughout Myanmar", mm: "မြန်မာတစ်နိုင်ငံလုံးအတွက် အရည်အသွေးမြင့် ကျန်းမာရေးဝန်ဆောင်မှုများ" },
    introText1: {
      en: "Founded in 2019, Lorindale Pharma was established with a clear objective: to make quality healthcare accessible to every citizen of Myanmar. Through innovation, quality assurance, and affordability, we strive to address the evolving healthcare needs of the nation.",
      mm: "လော်ရင်ဒေး ဆေးဝါးလုပ်ငန်းကို ၂၀၁၉ ခုနှစ်တွင် တည်ထောင်ခဲ့ပြီး မြန်မာနိုင်ငံသားတိုင်း အရည်အသွေးမြင့် ဆေးဝါးနှင့် ကျန်းမာရေးထုတ်ကုန်များကို လွယ်ကူလျင်မြန်စွာ ရရှိနိုင်စေရန် ရည်ရွယ်ပါသည်။ ဆန်းသစ်တီထွင်မှု၊ စိတ်ချရသော အရည်အသွေးနှင့် သင့်တင့်မျှတသော စျေးနှုန်းများဖြင့် ပြည်သူတို့၏ ကျန်းမာရေးလိုအပ်ချက်များကို ဖြည့်ဆည်းပေးလျက်ရှိပါသည်။"
    },
    introText2: {
      en: "Today, Lorindale Pharma manages robust nationwide distribution, professional regulatory affairs, medical sales, marketing, and strategic product development. We currently market more than 120 high-quality products across Myanmar and continue to expand our portfolio through collaborations with global manufacturers.",
      mm: "ယနေ့တွင် လော်ရင်ဒေးသည် တစ်နိုင်ငံလုံး ဖြန့်ဖြူးရေး၊ စနစ်ကျသော FDA မှတ်ပုံတင်ရေး၊ ဆေးဘက်ဆိုင်ရာ အရောင်းစျေးကွက်မြှင့်တင်ရေးနှင့် ထုတ်ကုန်သစ်ရှာဖွေရေး လုပ်ငန်းများကို လုပ်ကိုင်လျက်ရှိပါသည်။ လက်ရှိတွင် မြန်မာနိုင်ငံတစ်ဝှမ်း ထုတ်ကုန်ပေါင်း ၁၂၀ ကျော်ကို အောင်မြင်စွာ ဖြန့်ဖြူးလျက်ရှိပြီး နိုင်ငံတကာ ကုမ္ပဏီများနှင့်လည်း ဆက်လက်လက်တွဲလျက်ရှိပါသည်။"
    },
    badgeText: { en: "6+ Years of Medical Trust", mm: "၆ နှစ်ကျော် ဆေးဘက်ဆိုင်ရာယုံကြည်မှု" },
    statTitle1: { en: "Nationwide Impact", mm: "တစ်နိုင်ငံလုံး အကျိုးသက်ရောက်မှု" },
    statTitle2: { en: "Quality Standard", mm: "အရည်အသွေး စံစံနှုန်း" },
    statTitle3: { en: "Clinical Trust", mm: "ဆေးဘက်ဆိုင်ရာ ယုံကြည်ကိုးစားမှု" }
  };

  const icons = [
    <Layers className="w-5 h-5 text-blue-600" />,
    <Landmark className="w-5 h-5 text-[#D4B11A]" />,
    <Award className="w-5 h-5 text-emerald-600" />,
    <Briefcase className="w-5 h-5 text-indigo-600" />
  ];

  return (
    <section id="about" className="py-28 bg-gradient-to-tr from-slate-50/80 via-blue-50/25 to-sky-100/40 relative overflow-hidden">
      {/* Premium Editorial Vector Curves & Ambient Gradients (matching the user's reference image) */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none select-none z-0 overflow-hidden">
        <svg
          className="absolute -top-20 -right-20 w-[110%] h-[120%] opacity-[0.45] lg:opacity-[0.7]"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vector-curve-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#8b5cf6" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
            </linearGradient>
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Main glowing ambient backdrops underneath */}
          <circle cx="700" cy="200" r="280" fill="url(#vector-curve-grad)" opacity="0.08" filter="url(#glow-filter)" />
          <circle cx="900" cy="100" r="180" fill="#06b6d4" opacity="0.05" filter="url(#glow-filter)" />

          {/* Programmatic elegant parallel flowing waves */}
          {Array.from({ length: 32 }).map((_, i) => {
            const offset = i * 12;
            const strokeOpacity = Math.max(0.12, 0.7 - i * 0.015);
            const strokeWidth = Math.max(0.75, 1.8 - i * 0.03);
            return (
              <path
                key={i}
                d={`M ${450 + offset} -150 C ${550 + offset * 1.1} ${120 + i * 4.5}, ${700 + offset * 0.85} ${280 + i * 8.5}, ${1150 + offset * 0.6} ${420 + i * 13}`}
                fill="none"
                stroke="url(#vector-curve-grad)"
                strokeWidth={strokeWidth}
                strokeOpacity={strokeOpacity}
              />
            );
          })}
        </svg>
      </div>

      {/* Elegant faded watermark text in bottom left (from reference image) */}
      <div className="absolute bottom-[-5%] left-[-2%] text-slate-900/[0.035] font-black tracking-tight select-none pointer-events-none z-0 text-[12vw] leading-none uppercase font-sans">
        Establishment
      </div>

      {/* Additional ambient color spot in bottom left */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/8 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Decorative fine-line border grid overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full">
              {t.subtitle[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-5 tracking-tight leading-none">
              {t.sectionTitle[lang]}
            </h2>
            <div className="w-20 h-1.5 bg-premium-highlight mx-auto mt-6 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.3)]" />
          </div>
        </ScrollFadeIn>

        {/* Corporate Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* Left Column: Premium Interactive Collage */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollFadeIn direction="left">
              <div className="relative rounded-[32px] border border-white bg-white/70 p-3 shadow-[0_32px_96px_-24px_rgba(15,23,42,0.06)] backdrop-blur-md group overflow-hidden transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-400/80 hover:shadow-[0_48px_128px_-16px_rgba(37,99,235,0.2)]">
                
                {/* Premium Background Glow Aura */}
                <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-tr from-blue-600 via-emerald-500 to-[#D4B11A] opacity-0 group-hover:opacity-25 group-hover:blur-xl transition-all duration-1000 ease-out pointer-events-none" />
                
                <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/5] bg-slate-100 z-10">
                  <img
                    src="https://lh3.googleusercontent.com/d/1hWJi5Y_T_4D-4UHQK2io3jJ73YxEZvuI"
                    alt="Lorindale Lab Researcher Inspecting Medicine Vial"
                    className="w-full h-full object-cover group-hover:scale-[1.06] group-hover:brightness-[1.08] group-hover:contrast-[1.02] transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Vibrant Animated Fluid Gradient Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/80 via-[#D4B11A]/50 to-emerald-500/80 opacity-0 group-hover:opacity-35 transition-all duration-1000 ease-out mix-blend-color-dodge animate-fluid-gradient pointer-events-none" />
                  
                  {/* Expanding Center Radial Color Bloom */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.5)_0%,_rgba(16,185,129,0.25)_40%,_transparent_70%)] opacity-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-screen pointer-events-none filter blur-xl animate-pulse-glow" />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent" />
                  
                  {/* Floating clinical specs */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
                    <div className="bg-white/95 backdrop-blur-sm py-2 px-3.5 rounded-xl border border-white/50 shadow-md">
                      <span className="text-[9px] font-black uppercase text-blue-600 tracking-wider block">GLP Compliance</span>
                      <span className="text-xs font-bold text-slate-900">Validated 2026</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm py-2 px-3.5 rounded-xl border border-white/50 shadow-md flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-extrabold uppercase text-slate-800 tracking-wider">Clinical Grade</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Premium Editorial Metrics Block */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between h-24">
                <span className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight leading-none">31M+</span>
                <div>
                  <span className="block text-[8px] font-black uppercase text-slate-400 tracking-widest leading-tight">{t.statTitle1[lang]}</span>
                  <span className="block text-[9px] text-slate-500 font-semibold mt-0.5 leading-none">Citizens Reached</span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between h-24">
                <span className="text-2xl sm:text-3xl font-black text-[#D4B11A] tracking-tight leading-none">100%</span>
                <div>
                  <span className="block text-[8px] font-black uppercase text-slate-400 tracking-widest leading-tight">{t.statTitle2[lang]}</span>
                  <span className="block text-[9px] text-slate-500 font-semibold mt-0.5 leading-none">FDA Approvals</span>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between h-24">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight leading-none">15k+</span>
                <div>
                  <span className="block text-[8px] font-black uppercase text-slate-400 tracking-widest leading-tight">{t.statTitle3[lang]}</span>
                  <span className="block text-[9px] text-slate-500 font-semibold mt-0.5 leading-none">HCPs Engaged</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Highlights Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            
            {/* Descriptive texts */}
            <ScrollFadeIn direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-snug tracking-tight">
                  {t.introTitle[lang]}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  {t.introText1[lang]}
                </p>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
                  {t.introText2[lang]}
                </p>
              </div>
            </ScrollFadeIn>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {HIGHLIGHTS_DATA.map((hl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-[24px] bg-white border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-slate-200/50 hover:bg-slate-50/20 transition-all duration-300 group relative flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Icon enclosure */}
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-white transition-all duration-300">
                      {icons[index]}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-extrabold text-slate-900 text-base tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                        {hl.title[lang]}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                        {hl.description[lang]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

