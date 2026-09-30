import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  Compass, 
  ArrowUpRight, 
  Target, 
  Landmark, 
  Activity, 
  MapPin, 
  TrendingUp, 
  Calendar, 
  Layers, 
  Sparkles,
  Award
} from "lucide-react";
import { Language } from "../types";
import ScrollFadeIn from "./ScrollFadeIn";

interface ExpansionProps {
  lang: Language;
}

export default function Expansion({ lang }: ExpansionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const t = {
    tag: { en: "INTERNATIONAL EXPANSION", mm: "နိုင်ငံတကာသို့ တိုးချဲ့ဆောင်ရွက်ခြင်း" },
    title: { en: "Expanding Healthcare Beyond Borders", mm: "နယ်စပ်များကျော်လွန်၍ ဆေးဝါးကဏ္ဍ တိုးချဲ့ခြင်း" },
    subtitle: {
      en: "While keeping Myanmar as our core market, Lorindale Pharma is establishing robust strategic representations across emerging Southeast Asian medical markets.",
      mm: "မြန်မာနိုင်ငံကို အဓိကစျေးကွက်အဖြစ် ထိန်းရှိမ်းထားရှိပြီး ဒေသတွင်းကျန်းမာရေးကဏ္ဍ မြင့်မားလာစေရန် အာဆီယံနိုင်ငံများဖြစ်သည့် ဗီယက်နမ်၊ ဖိလစ်ပိုင်နှင့် ကမ္ဘောဒီးယားနိုင်ငံများသို့ တိုးချဲ့လျက်ရှိပါသည်။"
    },
    mapTitle: { en: "ASEAN Regional Corridor Map", mm: "အာဆီယံ ဒေသတွင်း ဆေးဝါးစင်တာစနစ်" },
    coreMarket: { en: "Core Headquarters", mm: "အဓိက ရုံးချုပ်" },
    expansionMarket: { en: "Strategic Growth Target", mm: "မဟာဗျူဟာမြောက် တိုးချဲ့မည့် စျေးကွက်" },
    myanmarDesc: { en: "Yangon Core, 120+ products, nationwide logistics, clinical team.", mm: "ရန်ကုန်ရုံးချုပ်၊ ထုတ်ကုန်ပေါင်း ၁၂၀ ကျော်၊ တစ်နိုင်ငံလုံး ဖြန့်ဖြူးရေးစနစ်။" },
    vietnamDesc: { en: "Emerging hospital care, oncology & critical care partnerships.", mm: "ဆေးရုံသုံး ဆေးဝါးများနှင့် အရေးပေါ်ကုသမှုဆိုင်ရာ မိတ်ဖက်များ တိုးချဲ့ခြင်း။" },
    cambodiaDesc: { en: "Regulatory filing for advanced wound care and dental care portfolios.", mm: "အဆင့်မြင့်အနာဂရုစိုက်မှုနှင့် သွားဘက်ဆိုင်ရာဆေးဝါးများ မှတ်ပုံတင်ရေးဆွဲခြင်း။" },
    philippinesDesc: { en: "Pharma-cosmetics and renal supplemental market positioning.", mm: "ဆေးဘက်ဝင်အလှကုန်နှင့် ကျောက်ကပ်အားဖြည့်စပ်ဆေးများ စျေးကွက်နေရာယူခြင်း။" }
  };

  const countries = [
    { 
      name: { en: "Myanmar", mm: "မြန်မာ" }, 
      status: "headquarters", 
      x: "22%", 
      y: "40%", 
      desc: t.myanmarDesc,
      glowColor: "shadow-blue-500/10",
      activeColor: "border-blue-500 bg-blue-50/10 shadow-blue-500/5",
      borderColor: "border-slate-100 hover:border-blue-300 bg-white/60",
      stats: [
        { label: { en: "Est. Year", mm: "စတင်တည်ထောင်" }, value: "2018", icon: Calendar },
        { label: { en: "Coverage", mm: "ဖြန့်ဖြူးမှု" }, value: "100%", icon: TrendingUp },
        { label: { en: "Active Lines", mm: "ဆေးဝါးလိုင်း" }, value: "120+", icon: Layers },
        { label: { en: "Clinical Staff", mm: "ကျွမ်းကျင်ပညာရှင်" }, value: "45+", icon: Award }
      ]
    },
    { 
      name: { en: "Vietnam", mm: "ဗီယက်နမ်" }, 
      status: "expansion", 
      x: "64%", 
      y: "32%", 
      desc: t.vietnamDesc,
      glowColor: "shadow-emerald-500/10",
      activeColor: "border-emerald-500 bg-emerald-50/10 shadow-emerald-500/5",
      borderColor: "border-slate-100 hover:border-emerald-300 bg-white/60",
      stats: [
        { label: { en: "Est. Year", mm: "စတင်တည်ထောင်" }, value: "2023", icon: Calendar },
        { label: { en: "Partners", mm: "ဆေးရုံမိတ်ဖက်" }, value: "14 Hubs", icon: TrendingUp },
        { label: { en: "Pipeline", mm: "ကင်ဆာကုသရေး" }, value: "Oncology", icon: Layers },
        { label: { en: "Growth Target", mm: "တိုးတက်မှုပန်းတိုင်" }, value: "+35% YoY", icon: Award }
      ]
    },
    { 
      name: { en: "Cambodia", mm: "ကမ္ဘောဒီးယား" }, 
      status: "expansion", 
      x: "54%", 
      y: "64%", 
      desc: t.cambodiaDesc,
      glowColor: "shadow-teal-500/10",
      activeColor: "border-teal-500 bg-teal-50/10 shadow-teal-500/5",
      borderColor: "border-slate-100 hover:border-teal-300 bg-white/60",
      stats: [
        { label: { en: "Est. Year", mm: "စတင်တည်ထောင်" }, value: "2024", icon: Calendar },
        { label: { en: "Filings", mm: "ဆေးဝါးမှတ်ပုံတင်" }, value: "18 Active", icon: TrendingUp },
        { label: { en: "Core Focus", mm: "အဓိကကဏ္ဍ" }, value: "Wound Care", icon: Layers },
        { label: { en: "Clinics", mm: "မိတ်ဖက်ဆေးခန်း" }, value: "22 Centers", icon: Award }
      ]
    },
    { 
      name: { en: "Philippines", mm: "ဖိလစ်ပိုင်" }, 
      status: "expansion", 
      x: "84%", 
      y: "52%", 
      desc: t.philippinesDesc,
      glowColor: "shadow-sky-500/10",
      activeColor: "border-sky-500 bg-sky-50/10 shadow-sky-500/5",
      borderColor: "border-slate-100 hover:border-sky-300 bg-white/60",
      stats: [
        { label: { en: "Est. Year", mm: "စတင်တည်ထောင်" }, value: "2025", icon: Calendar },
        { label: { en: "Specialty", mm: "အထူးပြုကဏ္ဍ" }, value: "Renal Care", icon: TrendingUp },
        { label: { en: "Pharma-Cosm.", mm: "ဆေးဘက်ဝင်အလှကုန်" }, value: "Registered", icon: Layers },
        { label: { en: "Market Index", mm: "စျေးကွက်အခြေအနေ" }, value: "High Demand", icon: Award }
      ]
    }
  ];

  const activeCountry = countries[activeIndex];

  return (
    <section 
      id="expansion" 
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white border-t border-slate-100"
    >
      {/* Premium Ambient Light Portals */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-500/3 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Decorative Blueprint Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center space-x-2 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-blue-700">
                {t.tag[lang]}
              </span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-5 tracking-tight leading-tight">
              {t.title[lang]}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-6 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.25)]" />
            <p className="text-slate-500 text-sm sm:text-base mt-6 leading-relaxed font-semibold max-w-2xl mx-auto">
              {t.subtitle[lang]}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Global/Regional corridor graphic with interactive detailed cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: Interactive Country Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <div className="text-xs font-black tracking-widest text-slate-400 uppercase mb-2 px-1">
              {lang === "en" ? "Select Regional Presence" : "ဒေသတွင်း ဆေးဝါးစျေးကွက်များ"}
            </div>
            
            {countries.map((country, idx) => {
              const isHQ = country.status === "headquarters";
              const isActive = activeIndex === idx;
              
              const borderStyle = isActive 
                ? country.activeColor 
                : `${country.borderColor} hover:shadow-md`;

              const badgeStyle = isHQ 
                ? "bg-blue-600/10 text-blue-700 border-blue-200/40" 
                : "bg-emerald-600/10 text-emerald-700 border-emerald-200/40";
              
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`p-5 rounded-[24px] border ${borderStyle} shadow-xs backdrop-blur-md transition-all duration-300 relative overflow-hidden group cursor-pointer`}
                  whileHover={{ x: 4 }}
                  layoutId={`country-card-${idx}`}
                >
                  {/* Highlight active left-accent line */}
                  <div className={`absolute left-0 inset-y-0 w-1.5 transition-all duration-300 ${
                    isActive 
                      ? (isHQ ? 'bg-blue-600' : 'bg-emerald-500') 
                      : 'bg-transparent group-hover:bg-slate-200'
                  }`} />
                  
                  <div className="flex items-start justify-between pl-2">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center text-[8px] font-black uppercase tracking-widest px-2.5 py-1 border rounded-md ${badgeStyle}`}>
                          {isHQ ? (
                            <>
                              <Landmark className="w-2.5 h-2.5 mr-1 text-blue-600" />
                              {t.coreMarket[lang]}
                            </>
                          ) : (
                            <>
                              <Target className="w-2.5 h-2.5 mr-1 text-emerald-600" />
                              {t.expansionMarket[lang]}
                            </>
                          )}
                        </span>
                      </div>
                      
                      <h3 className={`text-lg font-black tracking-tight flex items-center transition-colors ${
                        isActive ? (isHQ ? 'text-blue-600' : 'text-emerald-600') : 'text-slate-900 group-hover:text-blue-600'
                      }`}>
                        <span>{country.name[lang]}</span>
                        <ArrowUpRight className={`w-4 h-4 ml-1.5 transition-all ${
                          isActive ? 'opacity-100 translate-x-0.5 -translate-y-0.5' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`} />
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                        {country.desc[lang]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: High-End Interactive ASEAN Corridor Canvas & Real-time Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Map title indicator bar */}
            <div className="w-full flex items-center justify-between px-2">
              <span className="block text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600 animate-spin-slow" />
                {t.mapTitle[lang]}
              </span>
              <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-xs shadow-blue-500/40" /> HQ
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs shadow-emerald-500/40" /> Target
                </span>
              </div>
            </div>

            {/* Custom Interactive Regional Canvas Representing SE Asia */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-tr from-slate-50 via-white to-blue-50/20 rounded-[32px] p-6 border border-slate-200/50 shadow-xl flex items-center justify-center overflow-hidden group/map">
              
              {/* Dynamic Abstract Tech Grid Backing */}
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Geographical Coordinates */}
              <span className="absolute top-4 left-5 text-[9px] font-mono font-bold text-slate-400 select-none tracking-widest">LAT: 16.8409° N</span>
              <span className="absolute top-4 right-5 text-[9px] font-mono font-bold text-slate-400 select-none tracking-widest">LNG: 96.1735° E</span>
              
              {/* Regional Outline Vector */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full text-slate-200/80 fill-none stroke-slate-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Detailed Glow Landmass Map Outlines */}
                <g className="fill-slate-100/40 stroke-slate-200/80 stroke-[1.5]">
                  {/* Myanmar shape */}
                  <path 
                    d="M 60 40 Q 80 30 100 45 Q 115 55 110 80 Q 115 110 98 135 Q 105 160 115 190 Q 100 220 92 250 Q 86 250 88 200 Q 94 170 82 140 Q 75 120 62 100 Q 55 70 60 40 Z" 
                    className={`transition-colors duration-500 ${activeIndex === 0 ? "fill-blue-500/5 stroke-blue-500/30 stroke-[2]" : ""}`}
                  />
                  
                  {/* Indochina peninsula / Thailand / Vietnam / Laos / Cambodia */}
                  <path 
                    d="M 112 80 Q 140 70 170 75 Q 210 60 250 80 Q 270 90 260 120 Q 235 150 255 180 Q 240 210 220 205 Q 185 190 180 160 Q 150 150 135 130 Q 115 110 112 80 Z" 
                    className={`transition-colors duration-500 ${activeIndex === 1 || activeIndex === 2 ? "fill-emerald-500/5 stroke-emerald-500/30 stroke-[2]" : ""}`}
                  />
                  
                  {/* Philippines */}
                  <path 
                    d="M 320 90 Q 340 85 345 115 Q 330 135 320 125 Z M 330 145 Q 355 140 350 185 Q 325 190 330 145 Z" 
                    className={`transition-colors duration-500 ${activeIndex === 3 ? "fill-sky-500/5 stroke-sky-500/30 stroke-[2]" : ""}`}
                  />
                </g>

                {/* Headquarters pulse waves */}
                <circle cx="88" cy="120" r="16" className="stroke-blue-500/20 fill-none" strokeWidth="0.75">
                  <animate attributeName="r" values="8;24" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="88" cy="120" r="32" className="stroke-blue-500/10 fill-none" strokeWidth="0.5" strokeDasharray="3 3" />

                {/* Corridors lines from HQ to target markets with dynamic active states */}
                <g className="transition-all duration-500">
                  {/* Myanmar -> Vietnam (Index 1) */}
                  <path 
                    d="M 88 120 Q 172 90 256 96" 
                    className={`fill-none transition-all duration-500 ${
                      activeIndex === 1 ? "stroke-emerald-500 stroke-[2.5]" : "stroke-blue-500/20 stroke-[1.25]"
                    }`}
                    strokeDasharray={activeIndex === 1 ? "none" : "4 4"}
                  />
                  
                  {/* Myanmar -> Cambodia (Index 2) */}
                  <path 
                    d="M 88 120 Q 152 156 216 192" 
                    className={`fill-none transition-all duration-500 ${
                      activeIndex === 2 ? "stroke-teal-500 stroke-[2.5]" : "stroke-blue-500/20 stroke-[1.25]"
                    }`}
                    strokeDasharray={activeIndex === 2 ? "none" : "4 4"}
                  />
                  
                  {/* Myanmar -> Philippines (Index 3) */}
                  <path 
                    d="M 88 120 Q 212 110 336 156" 
                    className={`fill-none transition-all duration-500 ${
                      activeIndex === 3 ? "stroke-sky-500 stroke-[2.5]" : "stroke-blue-500/20 stroke-[1.25]"
                    }`}
                    strokeDasharray={activeIndex === 3 ? "none" : "4 4"}
                  />
                </g>

                {/* Live pulsing clinical data light beam travelling across the corridor */}
                {activeIndex === 1 && (
                  <circle r="4.5" fill="#10b981" className="shadow-lg shadow-emerald-500/50">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 88 120 Q 172 90 256 96" />
                  </circle>
                )}
                {activeIndex === 2 && (
                  <circle r="4.5" fill="#14b8a6" className="shadow-lg shadow-teal-500/50">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 88 120 Q 152 156 216 192" />
                  </circle>
                )}
                {activeIndex === 3 && (
                  <circle r="4.5" fill="#0ea5e9" className="shadow-lg shadow-sky-500/50">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 88 120 Q 212 110 336 156" />
                  </circle>
                )}
              </svg>

              {/* Bouncing MapPin Location Targets */}
              {countries.map((c, idx) => {
                const isHQ = c.status === "headquarters";
                const isActive = activeIndex === idx;
                
                return (
                  <div
                    key={idx}
                    className="absolute z-20"
                    style={{ left: c.x, top: c.y, transform: "translate(-50%, -100%)" }}
                  >
                    <div className="relative flex flex-col items-center">
                      
                      {/* Interactive circular hover area */}
                      <button
                        onClick={() => setActiveIndex(idx)}
                        className="relative flex flex-col items-center focus:outline-none group/pin-btn"
                      >
                        {/* Outer active highlight ring */}
                        {isActive && (
                          <span className={`absolute -inset-2 rounded-full animate-ping opacity-35 ${
                            isHQ ? "bg-blue-400" : "bg-emerald-400"
                          }`} />
                        )}

                        {/* MapPin Core Badge */}
                        <motion.div
                          animate={{ 
                            y: isActive ? [0, -6, 0] : 0,
                            scale: isActive ? 1.15 : 1
                          }}
                          transition={{ 
                            repeat: isActive ? Infinity : 0, 
                            duration: 2, 
                            ease: "easeInOut" 
                          }}
                          className={`p-1.5 rounded-full border border-white/60 shadow-lg transition-all duration-300 ${
                            isActive
                              ? (isHQ ? "bg-blue-600 text-white scale-110" : "bg-emerald-500 text-white scale-110")
                              : (isHQ ? "bg-blue-50/90 border-blue-200/60 text-blue-600 hover:scale-105" : "bg-emerald-50/90 border-emerald-200/60 text-emerald-600 hover:scale-105")
                          }`}
                        >
                          <MapPin className="w-5 h-5 fill-current" />
                        </motion.div>

                        {/* Floating Glass-morphic Tooltip on Map */}
                        <span className={`absolute top-full mt-2 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md border backdrop-blur-md transition-all duration-300 ${
                          isActive 
                            ? "bg-white text-slate-900 border-slate-200/60 scale-100" 
                            : "bg-white/80 text-slate-500 border-slate-100 scale-90 opacity-70 group-hover/pin-btn:opacity-100 group-hover/pin-btn:scale-100"
                        }`}>
                          {c.name[lang]}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* active indicator info badge top right */}
              <div className="absolute top-4 right-4 bg-white/95 border border-slate-200/60 backdrop-blur-md text-slate-700 px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-600">
                  {lang === "en" ? "System Active" : "စနစ် စတင်နေသည်"}
                </span>
              </div>

              {/* Dynamic bottom floating stats banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-slate-200/50 backdrop-blur-md p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2.5 mb-1">
                  <Compass className={`w-4 h-4 ${activeCountry.status === "headquarters" ? "text-blue-600" : "text-emerald-600"}`} />
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-800">
                    {lang === "en" ? `Target: ${activeCountry.name.en}` : `စျေးကွက်: ${activeCountry.name.mm}`}
                  </p>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">
                  {lang === "en" 
                    ? `Consolidating healthcare connectivity to drive professional medical partnerships, compliance support, and supply chains.` 
                    : `ဆေးဝါးလုပ်ငန်းများ ပိုမိုချောမွေ့မြန်ဆန်လာစေရန် ကျွမ်းကျင်ပညာရှင်များအဖွဲ့ဖြင့် မဟာဗျူဟာမြောက် ချိတ်ဆက်လုပ်ဆောင်လျက်ရှိပါသည်။`}
                </p>
              </div>

            </div>

            {/* Real-time Country Specific Performance Metrics Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-100 p-6 rounded-[28px] shadow-lg relative overflow-hidden"
              >
                {/* Visual Accent bar depending on selected country type */}
                <div className={`absolute top-0 inset-x-0 h-1.5 ${
                  activeCountry.status === "headquarters" ? "bg-blue-600" : "bg-emerald-500"
                }`} />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                  <div>
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-blue-600" />
                      <span>{lang === "en" ? "Target Performance Metrics" : "စျေးကွက်စွမ်းဆောင်ရည် ညွှန်းကိန်းများ"}</span>
                    </h4>
                    <p className="text-slate-900 text-lg font-black tracking-tight mt-1">
                      {activeCountry.name[lang]} {activeCountry.status === "headquarters" ? `(${lang === "en" ? "HQ" : "ပင်မရုံးချုပ်"})` : `(${lang === "en" ? "Expansion Hub" : "တိုးချဲ့စျေးကွက်"})`}
                    </p>
                  </div>
                  
                  {/* Performance percentage indicators */}
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full self-start sm:self-center">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                      {activeCountry.status === "headquarters" ? "Core Anchor" : "High Growth"}
                    </span>
                  </div>
                </div>

                {/* Grid of beautifully presented numeric metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activeCountry.stats.map((stat, sIdx) => {
                    const StatIcon = stat.icon;
                    return (
                      <div 
                        key={sIdx}
                        className="p-4 bg-slate-50/50 hover:bg-slate-50 border border-slate-100/80 rounded-2xl transition-colors duration-200"
                      >
                        <div className="flex items-center gap-2 text-slate-400 mb-1.5">
                          <StatIcon className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                          <span className="text-[9px] font-black uppercase tracking-wider leading-none">
                            {stat.label[lang]}
                          </span>
                        </div>
                        <p className={`text-lg font-black tracking-tight ${
                          activeCountry.status === "headquarters" ? "text-blue-900" : "text-slate-950"
                        }`}>
                          {stat.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
