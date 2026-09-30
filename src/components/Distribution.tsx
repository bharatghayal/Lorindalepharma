import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Building2, Truck, ShieldCheck, Activity, PackageCheck, Layers, ChevronRight, Thermometer, Check } from "lucide-react";
import { Language } from "../types";
import ScrollFadeIn from "./ScrollFadeIn";

interface DistributionProps {
  lang: Language;
}

interface LocationDetail {
  id: string;
  name: { en: string; mm: string };
  type: { en: string; mm: string };
  facilities: { en: string[]; mm: string[] };
  stats: { en: string; mm: string };
  color: string;
}

export default function Distribution({ lang }: DistributionProps) {
  const [selectedHub, setSelectedHub] = useState<string>("yangon");

  const t = {
    tag: { en: "NATIONWIDE INFRASTRUCTURE", mm: "ဖြန့်ဖြူးရေး ကွန်ရက်စနစ်" },
    titleBlue: { en: "Warehouse ", mm: "သိုလှောင်ရုံနှင့် " },
    titleGold: { en: "& Distribution", mm: "ဖြန့်ဖြူးရေး" },
    subtitle: {
      en: "We Have DIAC Approved Warehouse As Per Rules And Regulation Of FDA. To Maintain Require Storage Condition And Ensure Quality Of Products. Nationwide Distribution Networks Across Major Cities In Myanmar. Logistic Team To Handle On Time Delivery.",
      mm: "ကျွန်ုပ်တို့တွင် FDA ၏ စည်းမျဉ်းစည်းကမ်းများနှင့်အညီ DIAC ခွင့်ပြုချက်ရရှိထားသော ဆေးဝါးသိုလှောင်ရုံရှိပါသည်။ ဆေးဝါးများ၏ အရည်အသွေးကို အာမခံနိုင်ရန် လိုအပ်သော သိုလှောင်မှု အပူချိန်နှင့် အခြေအနေများကို စနစ်တကျ ထိန်းသိမ်းထားပါသည်။ မြန်မာနိုင်ငံရှိ အဓိက မြို့ကြီးများအားလုံးသို့ ဖြန့်ဖြူးရေးကွန်ရက်ဖြင့် ချိတ်ဆက်ထားပြီး အချိန်မီ ပို့ဆောင်နိုင်ရန် ကျွမ်းကျင် ထောက်ပံ့ပို့ဆောင်ရေးအဖွဲ့မှ ကိုင်တွယ်ဆောင်ရွက်လျက်ရှိပါသည်။"
    },
    clickPrompt: { en: "Interactive Regional Logistics Hubs", mm: "အသေးစိတ်အချက်အလက်များ သိရှိရန် တိုင်းဒေသကြီးရုံးများကို နှိပ်ပါ -" },
    facilitiesTitle: { en: "FDA-Compliant Storage & Operations", mm: "FDA အသိအမှတ်ပြု သိုလှောင်မှုနှင့် လုပ်ငန်းစဉ်များ" },
    logisticsLead: { en: "Logistics Lead Time", mm: "ဖြန့်ဖြူးမှု ကြာမြင့်ချိန်" },
    warehouseText: { en: "FDA Temperature-Controlled Warehouse", mm: "FDA အသိအမှတ်ပြု အပူချိန်ထိန်း ဂိုဒေါင်" },
    deliveryText: { en: "24-48 Hours Express Clinical Delivery", mm: "၂၄-၄၈ နာရီအတွင်း ဆေးရုံ/ဆေးခန်းအရောက် ပို့ဆောင်မှု" },
    coldChainText: { en: "Validated Cold Chain Monitoring (2°C - 8°C)", mm: "စနစ်တကျ အအေးပေးလမ်းကြောင်း ထိန်းရှိမ်းမှု (၂ - ၈ ဒီဂရီ)" }
  };

  const distributionRegions = [
    { id: "kachin", name: { en: "Kachin", mm: "ကချင်" } },
    { id: "sagaing", name: { en: "Sagaing", mm: "စစ်ကိုင်း" } },
    { id: "shan", name: { en: "Shan", mm: "ရှမ်း" } },
    { id: "mandalay", name: { en: "Mandalay", mm: "မန္တလေး" } },
    { id: "magway", name: { en: "Magway", mm: "မကွေး" } },
    { id: "kayah", name: { en: "Kayah", mm: "ကယား" } },
    { id: "rakhine", name: { en: "Rakhine", mm: "ရခိုင်" } },
    { id: "bago", name: { en: "Bago", mm: "ပဲခူး" } },
    { id: "ayeyarwady", name: { en: "Ayeyarwady", mm: "ဧရာဝတီ" } },
  ];

  const regionalHubs: Record<string, LocationDetail> = {
    yangon: {
      id: "yangon",
      name: { en: "Yangon Central Headquarters", mm: "ရန်ကုန် ရုံးချုပ်နှင့် ဗဟိုသိုလှောင်ရုံ" },
      type: { en: "Central Logistics Command & FDA Warehousing", mm: "ဗဟို ထောက်ပံ့ရေးနှင့် FDA အသိအမှတ်ပြု သိုလှောင်ရုံ" },
      facilities: {
        en: [
          "Good Distribution Practices (GDP)",
          "Nationwide Distribution & Logistics",
          "Batch-Wise FEFO Inventory Management",
          "Real-Time Stock Monitoring & Traceability",
          "FDA & Regulatory Compliance",
          "Secure Pharmaceutical Storage",
          "Compliant Import & Batch Release",
          "Quality Assurance & Recall Readiness"
        ],
        mm: [
          "Good Distribution Practices (GDP) - နိုင်ငံတကာစံချိန်မီ ဆေးဝါးဖြန့်ဖြူးရေးစနစ်",
          "Nationwide Distribution & Logistics - တစ်နိုင်ငံလုံးလွှမ်းခြုံ ဖြန့်ဖြူးထောက်ပံ့ရေးကွန်ရက်",
          "Batch-Wise FEFO Inventory Management - အသုတ်အလိုက် သက်တမ်းကုန်ဆုံးရက် ဦးစားပေး စနစ်",
          "Real-Time Stock Monitoring & Traceability - အချိန်နှင့်တစ်ပြေးညီ ကုန်လက်ကျန် စောင့်ကြည့်စစ်ဆေးနိုင်မှု",
          "FDA & Regulatory Compliance - FDA နှင့် စည်းမျဉ်းစံနှုန်း အပြည့်အဝလိုက်နာမှု",
          "Secure Pharmaceutical Storage - လုံခြုံစိတ်ချရသော အဆင့်မြင့် ဆေးဝါးသိုလှောင်ရုံ",
          "Compliant Import & Batch Release - တရားဝင် တင်သွင်းမှုနှင့် ဆေးဝါးထုတ်ဝေမှုစနစ်",
          "Quality Assurance & Recall Readiness - အရည်အသွေး အာမခံချက်နှင့် အရေးပေါ် အသင့်ရှိမှု"
        ]
      },
      stats: { en: "Yangon Core, covering Delta, Lower Myanmar & Mon State", mm: "ရန်ကုန်တိုင်း၊ ဧရာဝတီ၊ ပဲခူးနှင့် မွန်ပြည်နယ် ဖြန့်ဖြူးမှု ဗဟိုချက်" },
      color: "bg-blue-600 ring-blue-100"
    },
    mandalay: {
      id: "mandalay",
      name: { en: "Mandalay Upper Myanmar Hub", mm: "မန္တလေး အထက်မြန်မာပြည်ရုံးခွဲ" },
      type: { en: "Regional Distribution & Cross-docking Facility", mm: "ဒေသတွင်း ဖြန့်ဖြူးရေးနှင့် ဂိုဒေါင်ခွဲ" },
      facilities: {
        en: [
          "Primary distribution center for Upper Myanmar divisions",
          "Direct logistics connectivity to Shan, Sagaing, and Kachin",
          "Local sales force & scientific detailing center",
          "Express clinical supply delivery teams"
        ],
        mm: [
          "အထက်မြန်မာပြည်အတွက် အဓိက ဖြန့်ဖြူးရေးစင်တာ",
          "ရှမ်းပြည်နယ်၊ စစ်ကိုင်းတိုင်းနှင့် ကချင်ပြည်နယ်သို့ တိုက်ရိုက်ပို့ဆောင်မှုစနစ်",
          "ဒေသတွင်း အရောင်းအဖွဲ့နှင့် ဆေးဘက်ဆိုင်ရာ ရှင်းလင်းရေးစင်တာ",
          "ဆေးရုံ ဆေးခန်းများသို့ အမြန်ပို့ဆောင်ရေးအဖွဲ့များ"
        ]
      },
      stats: { en: "Upper Myanmar Hub, delivery within 24 hours regional wide", mm: "မန္တလေးတိုင်းနှင့် အထက်မြန်မာပြည်တစ်ဝှမ်း ၂၄ နာရီအတွင်း ပို့ဆောင်မှု" },
      color: "bg-emerald-600 ring-emerald-100"
    },
    naypyitaw: {
      id: "naypyitaw",
      name: { en: "Naypyitaw Operations Center", mm: "နေပြည်တော် လုပ်ငန်းညှိနှိုင်းရေးရုံး" },
      type: { en: "Institutional & Government Liaison Operations", mm: "အစိုးရဌာနများနှင့် ညှိနှိုင်းရေးရုံး" },
      facilities: {
        en: [
          "Strategic coordinating office for Ministry of Health liaisons",
          "Direct institutional tender supply coordination",
          "Rapid delivery routes for public hospital formulations",
          "Compliance oversight registry"
        ],
        mm: [
          "ကျန်းမာရေးဝန်ကြီးဌာနနှင့် တိုက်ရိုက် ဆက်သွယ်ဆောင်ရွက်ရေးရုံး",
          "ဆေးရုံကြီးများသို့ အစိုးရတင်ဒါဆေးဝါးများ ထောက်ပံ့ရေးအဖွဲ့",
          "ပြည်သူ့ဆေးရုံကြီးများသို့ ဆေးဝါးအမြန်ပို့ဆောင်ရေးလမ်းကြောင်း",
          "စည်းမျဉ်းစံနှုန်း လိုက်နာမှု စောင့်ကြည့်ရေးအဖွဲ့"
        ]
      },
      stats: { en: "Central Capital coordinating institutional supply and tenders", mm: "နေပြည်တော်နှင့် ဗဟိုချက် ဌာနဆိုင်ရာ တင်ဒါဆေးဝါးများ ဖြန့်ဖြူးမှု" },
      color: "bg-indigo-600 ring-indigo-100"
    },
    taunggyi: {
      id: "taunggyi",
      name: { en: "Shan State Distribution Node", mm: "တောင်ကြီး ရှမ်းပြည်နယ်ရုံးခွဲ" },
      type: { en: "Hilly Region Specialized Cold-Chain Logistics", mm: "တောင်တန်းဒေသ အအေးလမ်းကြောင်း ထောက်ပံ့ပို့ဆောင်ရေး" },
      facilities: {
        en: [
          "Specialized thermal-insulated transport fleets for mountainous routes",
          "Local clinical partnership support coordinators",
          "Sub-zero storage units for life-saving biologics",
          "Taunggyi, Lashio, and Kengtung express logistics paths"
        ],
        mm: [
          "တောင်တန်းဒေသ သယ်ယူပို့ဆောင်ရန် သီးသန့် အပူချိန်ထိန်း ယာဉ်အုပ်စု",
          "ရှမ်းပြည်နယ် ဆေးရုံ ဆေးခန်းများနှင့် ပေါင်းစပ်ရေးအဖွဲ့",
          "အသက်ကယ်ဆေးဝါးများအတွက် သီးသန့် အအေးခန်းယူနစ်များ",
          "တောင်ကြီး၊ လားရှိုးနှင့် ကျိုင်းတုံသို့ အမြန်ပို့ဆောင်ရေးလမ်းကြောင်း"
        ]
      },
      stats: { en: "Shan State network, ensuring high-altitude cold chain validity", mm: "ရှမ်းပြည်နယ် တောင်တန်းဒေသများရှိ ဆေးရုံများသို့ စနစ်တကျ ပို့ဆောင်မှု" },
      color: "bg-amber-600 ring-amber-100"
    }
  };

  const activeHub = regionalHubs[selectedHub] || regionalHubs.yangon;

  return (
    <section id="distribution" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/3 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Decorative top-right waves matching user image */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none select-none z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 700 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,-100 C300,50 500,-50 700,100" stroke="#1E5BB8" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
          <path d="M150,-100 C350,100 550,0 750,150" stroke="#1E5BB8" strokeWidth="1" strokeOpacity="0.2" fill="none" />
          <path d="M200,-100 C400,150 600,50 800,200" stroke="#1E5BB8" strokeWidth="1" strokeOpacity="0.1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Tag */}
        <ScrollFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full">
              {t.tag[lang]}
            </span>
          </div>
        </ScrollFadeIn>

        {/* Split Layout: Left side matches the uploaded Warehouse & Distribution screenshot layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Warehouse & Distribution info + Gold Map Pins Grid */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <ScrollFadeIn direction="left" className="space-y-8 flex-1 flex flex-col justify-center">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-[#1E5BB8]">
                  {t.titleBlue[lang]}
                  <span className="bg-gradient-to-r from-[#1E5BB8] to-[#B0A159] bg-clip-text text-transparent">
                    {t.titleGold[lang]}
                  </span>
                </h2>
                <div className="w-20 h-1.5 bg-[#B0A159] mt-6 rounded-full shadow-[0_2px_8px_rgba(176,161,89,0.3)]" />
              </div>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-semibold tracking-wide">
                {t.subtitle[lang]}
              </p>

              {/* Gold Pins Location Grid - Exactly matching the uploaded layout */}
              <div className="bg-slate-50/50 border border-slate-100/80 rounded-[28px] p-8 mt-4 shadow-sm">
                <div className="grid grid-cols-3 gap-y-6 gap-x-4">
                  {distributionRegions.map((region) => (
                    <div key={region.id} className="flex items-center space-x-2.5 group/pin cursor-pointer">
                      <div className="relative flex items-center justify-center shrink-0">
                        {/* Interactive glow effect */}
                        <span className="absolute w-6 h-6 rounded-full bg-[#F1A40E]/15 scale-0 group-hover/pin:scale-125 transition-all duration-300" />
                        <MapPin className="w-5.5 h-5.5 text-[#F1A40E] fill-[#F1A40E] stroke-[2px] transition-transform duration-300 group-hover/pin:scale-110 drop-shadow-[0_2px_4px_rgba(241,164,14,0.2)]" />
                      </div>
                      <span className="text-sm sm:text-base font-black text-[#1E5BB8] tracking-tight group-hover/pin:text-[#B0A159] transition-colors">
                        {region.name[lang]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Right Column: Interactive map/details panel */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <ScrollFadeIn direction="right" className="space-y-8 h-full flex flex-col justify-between">
              
              {/* Regional Hub details selector */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100/80 shadow-sm space-y-4">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">
                  {t.clickPrompt[lang]}
                </span>

                {/* Horizontal Quick Select Tabs */}
                <div className="flex flex-wrap gap-2">
                  {Object.values(regionalHubs).map((hub) => (
                    <button
                      key={hub.id}
                      onClick={() => setSelectedHub(hub.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-300 border ${
                        selectedHub === hub.id
                          ? "bg-[#1E5BB8] text-white border-[#1E5BB8] shadow-md shadow-[#1E5BB8]/15"
                          : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100"
                      }`}
                    >
                      {hub.name[lang].split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Facilities Detail Module */}
              <motion.div
                key={activeHub.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between min-h-[360px]"
              >
                {/* Fine design stamp detail */}
                <span className="absolute top-6 right-8 text-[9px] font-mono font-bold text-slate-400 select-none">NODE // LRN_LOG_00{activeHub.id.toUpperCase()}</span>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <span className={`inline-block text-[9px] font-black uppercase tracking-widest text-white px-3 py-1 rounded-full ${activeHub.color}`}>
                      {activeHub.type[lang]}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      {activeHub.name[lang]}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
                      {activeHub.stats[lang]}
                    </p>
                  </div>

                  {/* Facilities List */}
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                      {t.facilitiesTitle[lang]}
                    </h4>
                    <ul className="space-y-2.5">
                      {activeHub.facilities[lang].map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                          <span className="w-5 h-5 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E5BB8] mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                          </span>
                          <span className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            </ScrollFadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}


