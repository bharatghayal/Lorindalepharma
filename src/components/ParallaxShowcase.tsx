import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FlaskConical, Sparkles, Shield, ArrowRight, Layers, HelpCircle, Activity, Globe } from "lucide-react";
import { Language } from "../types";

interface ParallaxShowcaseProps {
  lang: Language;
}

export default function ParallaxShowcase({ lang }: ParallaxShowcaseProps) {
  // We establish a scroll container reference to calculate scroll progress relative to this specific viewport section.
  const containerRef = useRef<HTMLDivElement>(null);

  // The useScroll hook tracks the progress of the container's position in the viewport.
  // "start end" triggers tracking as soon as the top of our component reaches the bottom of the viewport screen.
  // "end start" stops tracking when the bottom of our component leaves the top of the viewport screen.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // ==========================================
  // PARALLAX LAYER MAPPINGS (GPU-Accelerated)
  // ==========================================
  // We use useTransform to map the scroll percentage (0 to 1) into pixel-based Y translation values.
  // By binding these to CSS 'transform: translateY()', the browser uses hardware acceleration
  // to process positions without triggering costly layout reflows or repaints, guaranteeing 60FPS.

  // Layer 1: Slower Background Elements (Speed factor: ~0.12x)
  // These subtle visual cues move slightly to establish immediate focal distance.
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bgGridY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Layer 2: Medium Speed Midground Cards & Science Badges (Speed factor: ~0.35x)
  // Holds supporting clinical specifications and molecular compound illustrations.
  const midCardLeftY = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const midCardRightY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  // Layer 3: Fast Foreground Focal Assets (Speed factor: ~0.65x)
  // Prominent product vectors and floating active items that overlap with adjacent sections.
  const fgProductY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const fgLeavesY = useTransform(scrollYProgress, [0, 1], [-190, 190]);

  // English & Myanmar Translation Dictionary
  const t = {
    badge: { en: "60FPS SCROLL PARALLAX ENGINE", mm: "၆၀ FPS ပရက်လက်စ် အထူးပြုလုပ်ချက်" },
    title: { en: "Experiencing Depth Through Physics", mm: "ရုပ်ပိုင်းဆိုင်ရာ အတိုင်းအတာဖြင့် ခံစားကြည့်ရှုပါ" },
    desc: {
      en: "This interactive showcase demonstrates high-performance web animations. By separating elements into background, midground, and foreground layers, we create a beautiful optical depth of field as you scroll. Scroll down and see the elements shift at independent speeds.",
      mm: "ဤအပိုင်းသည် စွမ်းဆောင်ရည်မြင့် ဝဘ်အန်နီမေးရှင်းများကို သရုပ်ပြသပေးထားခြင်း ဖြစ်ပါသည်။ အနောက်ခံ၊ အလယ်ပိုင်းနှင့် အရှေ့ဘက်အလွှာများကို သီးခြားခွဲထုတ်ပြီး ကွဲပြားခြားနားသော အမြန်နှုန်းများဖြင့် လှုပ်ရှားစေကာ လှပသော မြင်ကွင်းအနက်ကို ဖန်တီးပေးထားပါသည်။"
    },
    layer3: { en: "Foreground (Fast Speed)", mm: "အရှေ့ဘက်အလွှာ (မြန်နှုန်းမြင့်)" },
    layer2: { en: "Midground (Medium Speed)", mm: "အလယ်ပိုင်းအလွှာ (အလယ်အလတ်)" },
    layer1: { en: "Background (Slow Speed)", mm: "အနောက်ခံအလွှာ (နှေးကွေးသော)" },
    spec1: { en: "GPU Rendered", mm: "GPU ဖြင့် ထုတ်လုပ်ခြင်း" },
    spec2: { en: "Zero Layout Shift", mm: "ရွှေ့ပြောင်းမှုမရှိခြင်း" },
    spec3: { en: "Natural Easing", mm: "သဘာဝကျကျ ရွေ့လျားမှု" },
    hoverTitle1: { en: "Interactive Molecular Card", mm: "အပြန်အလှန်တုံ့ပြန်မှုရှိသော ဆေးဝါးကတ်" },
    hoverDesc1: { en: "Hover me to see a smooth, hardware-accelerated color transition and elegant border glowing effect.", mm: "အရောင်ပြောင်းလဲမှုနှင့် လှပသော အနားသတ်အလင်းရောင်များ မြင်တွေ့နိုင်ရန် ဤနေရာတွင် မောက်စ်တင်ကြည့်ပါ။" },
    hoverTitle2: { en: "Active Biotech Node", mm: "ဇီဝနည်းပညာ ဆက်သွယ်မှုမှတ်တိုင်" },
    hoverDesc2: { en: "Features clean micro-interactions, scaling physics, and subtle glassmorphic reflections.", mm: "သေးငယ်ပြီး သပ်ရပ်သော အန်နီမေးရှင်းများ၊ စကေးချုံ့ချဲ့မှုနှင့် ဖန်သားပြင်ရောင်ပြန်ဟပ်မှုစနစ်များ။" },
    cta: { en: "Explore Products", mm: "ထုတ်ကုန်များလေ့လာရန်" }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[680px] sm:h-[720px] lg:h-[760px] w-full overflow-hidden bg-gradient-to-b from-white via-[#f3faf7] to-slate-50 border-y border-[#0c3c32]/5 flex items-center"
    >
      {/* ==========================================
          LAYER 1: BACKGROUND (Slowest - Speed: 0.12x)
          ========================================== */}
      <motion.div
        style={{ y: bgGlowY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Soft, beautiful clinical emerald backdrop portal */}
        <div className="absolute right-[5%] top-[15%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-[#10b981]/6 blur-[110px] opacity-75" />
        {/* Secondary soft sapphire backdrop portal */}
        <div className="absolute left-[8%] bottom-[10%] w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-[#0284c7]/5 blur-[95px] opacity-70" />
      </motion.div>

      {/* GPU-Accelerated Scrolling Grid Overlay */}
      <motion.div
        style={{ y: bgGridY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(12,60,50,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(12,60,50,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </motion.div>


      {/* ==========================================
          LAYER 2: MIDGROUND (Medium - Speed: 0.35x)
          ========================================== */}
      
      {/* Midground Element Left: Interactive Molecular Spec Card */}
      <motion.div
        style={{ y: midCardLeftY }}
        className="absolute left-[3%] lg:left-[8%] top-[15%] z-10 pointer-events-auto max-w-[240px] hidden md:block"
      >
        <div className="p-5 rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-emerald-500/25 group transition-all duration-500 cursor-pointer">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-500 group-hover:text-emerald-700 transition-colors duration-500">
              <FlaskConical className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-emerald-800 transition-colors duration-500">
              {t.layer2[lang]}
            </span>
          </div>
          <h4 className="text-xs font-black text-slate-800 group-hover:text-[#0c3c32] transition-colors duration-500 mb-1.5">
            {t.hoverTitle1[lang]}
          </h4>
          <p className="text-[11px] font-semibold text-slate-500 group-hover:text-[#2e5950] leading-relaxed transition-colors duration-500">
            {t.hoverDesc1[lang]}
          </p>
          <div className="mt-3 flex items-center gap-1.5 text-[9px] font-mono font-black text-slate-400 group-hover:text-amber-600 transition-colors duration-500">
            <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" />
            <span>Interactive State</span>
          </div>
        </div>
      </motion.div>

      {/* Midground Element Right: Active Biotech Node */}
      <motion.div
        style={{ y: midCardRightY }}
        className="absolute right-[4%] lg:right-[10%] bottom-[12%] z-10 pointer-events-auto max-w-[230px] hidden lg:block"
      >
        <div className="p-5 rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-blue-500/25 group transition-all duration-500 cursor-pointer">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-600 transition-colors duration-500">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-blue-800 transition-colors duration-500">
              {t.layer2[lang]}
            </span>
          </div>
          <h4 className="text-xs font-black text-slate-800 group-hover:text-blue-900 transition-colors duration-500 mb-1.5">
            {t.hoverTitle2[lang]}
          </h4>
          <p className="text-[11px] font-semibold text-slate-500 group-hover:text-blue-950/80 leading-relaxed transition-colors duration-500">
            {t.hoverDesc2[lang]}
          </p>
          <div className="mt-3 flex items-center gap-1 text-[9px] font-mono font-black text-slate-400 group-hover:text-blue-600 transition-colors duration-500">
            <span>TRANSFORM: SCALE-102</span>
          </div>
        </div>
      </motion.div>


      {/* ==========================================
          LAYER 3: FOREGROUND (Fastest - Speed: 0.65x)
          ========================================== */}
      
      {/* Foreground Medical Formula Showcase Backdrop */}
      <motion.div
        style={{ y: fgProductY }}
        className="absolute right-[8%] lg:right-[15%] top-[10%] lg:top-[12%] z-20 pointer-events-none hidden sm:flex items-center justify-center"
      >
        <div className="relative group select-none">
          {/* Studio shadow underneath */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/5 rounded-[50%] blur-md" />
          
          {/* Glass-morphic scientific container */}
          <div className="relative w-[290px] h-[210px] md:w-[330px] md:h-[240px] rounded-3xl overflow-hidden shadow-2xl border border-white bg-white/20 p-2 backdrop-blur-xs">
            <img
              src="/src/assets/images/regenerated_image_1782288644734.png"
              alt="NanoColl Laboratory Presentation Model"
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Elegant lighting overlay swipe */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_5.5s_infinite] pointer-events-none" />
          </div>

          {/* Core foreground indicator pill */}
          <div className="absolute -bottom-3 -right-4 bg-[#0c3c32] text-white py-2 px-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0" />
            <span className="text-[9px] font-black uppercase tracking-widest leading-none">
              {t.layer3[lang]}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Foreground Floating Clean Herb Leaves */}
      <motion.div
        style={{ y: fgLeavesY }}
        className="absolute right-[4%] top-[40%] z-20 pointer-events-none hidden xl:block"
      >
        <div className="w-16 h-16 transform rotate-45 opacity-90 filter drop-shadow-md">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10 90C40 90 90 40 90 10C90 10 50 20 20 50C10 60 10 90 10 90Z" fill="url(#leaf-parallax-grad)" />
            <defs>
              <linearGradient id="leaf-parallax-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>


      {/* ==========================================
          LAYER 4: MAIN READABLE TEXT CONTENT (Static 1.0x)
          ========================================== */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 max-w-2xl bg-white/65 lg:bg-none p-6 sm:p-8 lg:p-0 rounded-3xl border border-[#0c3c32]/5 lg:border-none backdrop-blur-md lg:backdrop-blur-none shadow-xl lg:shadow-none pointer-events-auto">
            
            {/* Section Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0c3c32]/10 bg-[#0c3c32]/5 text-[#0c3c32]">
              <Layers className="w-3.5 h-3.5 shrink-0 text-emerald-700" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest leading-none">
                {t.badge[lang]}
              </span>
            </div>

            {/* Main Section Header */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c3c32] tracking-tight leading-none">
              {t.title[lang]}
            </h2>

            {/* Accent divider line */}
            <div className="w-16 h-1.5 bg-[#D4B11A] rounded-full" />

            {/* Clear, legible descriptive text */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
              {t.desc[lang]}
            </p>

            {/* Key benefits metrics with smooth active hover transitions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/60 bg-white hover:border-emerald-500/35 hover:shadow-md transition-all duration-300 group cursor-pointer">
                <Shield className="w-4.5 h-4.5 text-emerald-700 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-black text-slate-800 leading-none group-hover:text-emerald-950 transition-colors duration-300">
                  {t.spec1[lang]}
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/60 bg-white hover:border-amber-500/35 hover:shadow-md transition-all duration-300 group cursor-pointer">
                <Sparkles className="w-4.5 h-4.5 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xs font-black text-slate-800 leading-none group-hover:text-amber-950 transition-colors duration-300">
                  {t.spec2[lang]}
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/60 bg-white hover:border-blue-500/35 hover:shadow-md transition-all duration-300 group cursor-pointer">
                <Globe className="w-4.5 h-4.5 text-blue-600 group-hover:spin transition-transform duration-500" />
                <span className="text-xs font-black text-slate-800 leading-none group-hover:text-blue-950 transition-colors duration-300">
                  {t.spec3[lang]}
                </span>
              </div>
            </div>

            {/* Call To Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-[11px] sm:text-xs tracking-wider uppercase text-white bg-[#0c3c32] hover:bg-[#12584a] shadow-lg shadow-[#0c3c32]/10 hover:shadow-xl transition-all hover:scale-[1.02] active:scale-100 group"
              >
                <span>{t.cta[lang]}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-1.5 text-xs font-black text-[#0c3c32]/75">
                <HelpCircle className="w-4 h-4 text-emerald-600 animate-pulse" />
                <span>Responsive Hardware-Accelerated Design</span>
              </div>
            </div>

          </div>

          {/* Right Spacing Column on Large Desktops to reveal the fast moving mockup */}
          <div className="lg:col-span-5 h-20 sm:h-auto pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
