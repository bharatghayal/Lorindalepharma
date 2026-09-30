import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Mail, 
  Linkedin, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Language } from "../types";
import { TEAM_DATA } from "../data";
import ScrollFadeIn from "./ScrollFadeIn";

interface TeamProps {
  lang: Language;
}

// Extended details for selected executive spotlight to make the layout look highly premium and authentic
const EXECUTIVE_DETAILS: Record<string, {
  experience: { en: string; mm: string };
  achievements: { en: string[]; mm: string[] };
  email: string;
  linkedin: string;
}> = {
  "Dr. Kyaw Myint Tun": {
    experience: { en: "22+ Years in Healthcare & Clinical Strategy", mm: "ကျန်းမာရေးနှင့် ဆေးဝါးဗျူဟာပိုင်း ၂၂ နှစ်ကျော် အတွေ့အကြုံ" },
    achievements: {
      en: [
        "Founded Lorindale Pharma with a vision of accessible healthcare across Myanmar.",
        "Pioneered critical transplant medicine supply lines in regional clinics.",
        "Serves as chief advisor to national healthcare policy committees."
      ],
      mm: [
        "မြန်မာနိုင်ငံတစ်ဝှမ်းတွင် လက်လှမ်းမီသော ကျန်းမာရေးစောင့်ရှောက်မှုဖြစ်စေရန် လော်ရင်ဒေးကို တည်ထောင်ခဲ့သည်။",
        "ဒေသတွင်း ဆေးခန်းများသို့ အရေးကြီး အင်္ဂါအစားထိုးဆေးဝါးများ တင်သွင်းဖြန့်ဖြူးခြင်းကို အောင်မြင်စွာ စတင်ခဲ့သည်။",
        "အမျိုးသားအဆင့် ကျန်းမာရေးမူဝါဒ ကော်မတီများတွင် အဓိက အကြံပေးပုဂ္ဂိုလ်အဖြစ် ဆောင်ရွက်လျက်ရှိသည်။"
      ]
    },
    email: "dr.kyawmyinttun@lorindale.com",
    linkedin: "https://linkedin.com/in/dr-kyaw-myint-tun-lorindale"
  },
  "Daw Hnin Shwe Yi": {
    experience: { en: "15+ Years in FDA Regulatory Compliance", mm: "FDA စည်းမျဉ်းစည်းကမ်းဆိုင်ရာ ၁၅ နှစ်ကျော် အတွေ့အကြုံ" },
    achievements: {
      en: [
        "Approved more than 400 medical, supplement, and device dossiers in Myanmar.",
        "Expert in GSDP (Good Storage & Distribution Practice) guidelines.",
        "Liaisons directly with international quality assurance bodies."
      ],
      mm: [
        "မြန်မာနိုင်ငံတွင် ဆေးဝါး၊ အာဟာရနှင့် ဆေးဘက်ဝင်ပစ္စည်းပေါင်း ၄၀၀ ကျော်ကို အောင်မြင်စွာ မှတ်ပုံတင်ပေးခဲ့သည်။",
        "GSDP (ကောင်းမွန်သော သိုလှောင်ဖြန့်ဖြူးရေးစနစ်) လမ်းညွှန်ချက်များတွင် ကျွမ်းကျင်သူ ဖြစ်သည်။",
        "နိုင်ငံတကာ အရည်အသွေးအာမခံအဖွဲ့အစည်းများနှင့် တိုက်ရိုက် ဆက်သွယ်ဆောင်ရွက်သည်။"
      ]
    },
    email: "hninshweyi@lorindale.com",
    linkedin: "https://linkedin.com/in/hnin-shwe-yi-lorindale"
  },
  "U Aung Kyaw San": {
    experience: { en: "18+ Years in Pharma Supply Chain & Logistics", mm: "ဆေးဝါးသယ်ယူပို့ဆောင်ရေး လုပ်ငန်း ၁၈ နှစ်ကျော် အတွေ့အကြုံ" },
    achievements: {
      en: [
        "Designed Myanmar's premier 100% temperature-controlled pharmaceutical cold chain.",
        "Established state-of-the-art warehouses in Yangon, Mandalay, and Taunggyi.",
        "Reduced regional delivery lead times by 35% through smart routing systems."
      ],
      mm: [
        "မြန်မာနိုင်ငံ၏ ပထမဦးဆုံး ၁၀၀% အပူချိန်ထိန်း ဆေးဝါးသယ်ယူပို့ဆောင်ရေး စနစ်ကို ရေးဆွဲခဲ့သည်။",
        "ရန်ကုန်၊ မန္တလေးနှင့် တောင်ကြီးမြို့တို့တွင် ခေတ်မီ ဂိုဒေါင်များကို တည်ဆောက်ခဲ့သည်။",
        "စနစ်ကျသော လမ်းကြောင်းများကြောင့် ဒေသတွင်း ပို့ဆောင်ချိန်ကို ၃၅% အထိ လျှော့ချနိုင်ခဲ့သည်။"
      ]
    },
    email: "aungkyawsan@lorindale.com",
    linkedin: "https://linkedin.com/in/aung-kyaw-san-lorindale"
  },
  "Dr. Sandar Win": {
    experience: { en: "12+ Years in Medical Marketing & CME", mm: "ဆေးဘက်ဆိုင်ရာ စျေးကွက်ပိုင်း ၁၂ နှစ်ကျော် အတွေ့အကြုံ" },
    achievements: {
      en: [
        "Built lasting networks with over 5,000 Healthcare Professionals (HCPs) nationwide.",
        "Launches and manages continuous Continuing Medical Education (CME) seminars.",
        "Spearheads digital-first clinical detailing campaigns across academic portals."
      ],
      mm: [
        "တစ်နိုင်ငံလုံးရှိ ဆရာဝန်နှင့် ကျန်းမာရေးပညာရှင် ၅,၀၀၀ ကျော်နှင့် ခိုင်မာသော ကွန်ရက်ကို တည်ဆောက်ခဲ့သည်။",
        "စဉ်ဆက်မပြတ် ဆေးပညာသင်ကြားရေး (CME) ဆွေးနွေးပွဲများကို ဦးဆောင် စီစဉ်ကျင်းပသည်။",
        "အွန်လိုင်းနှင့် ဒီဂျစ်တယ်ပလက်ဖောင်းများမှတစ်ဆင့် ဆေးဘက်ဆိုင်ရာ အချက်အလက်ဖြန့်ဝေမှုကို ဦးဆောင်သည်။"
      ]
    },
    email: "dr.sandarwin@lorindale.com",
    linkedin: "https://linkedin.com/in/dr-sandar-win-lorindale"
  }
};

interface TeamCardProps {
  member: any;
  idx: number;
  total: number;
  lang: Language;
  details: any;
  isCopied: boolean;
  handleCopyEmail: (email: string, id: string) => void;
  t: any;
  cardRef: (el: HTMLDivElement | null) => void;
  key?: string;
}

function TeamCard({
  member,
  idx,
  total,
  lang,
  details,
  isCopied,
  handleCopyEmail,
  t,
  cardRef
}: TeamCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardInnerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardInnerRef.current) return;
    const rect = cardInnerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Smooth 3D perspective rotation math
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 25; // max 10 degrees tilt
    const rotateY = (x - centerX) / 35;

    setTilt({ x: rotateY, y: rotateX });
    setGlow({ x, y, opacity: 0.15 });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow(prev => ({ ...prev, opacity: 0 }));
    setIsHovered(false);
  };

  const accentColors = [
    "border-t-4 border-t-[#1E5BB8]",
    "border-t-4 border-t-teal-500",
    "border-t-4 border-t-amber-500",
    "border-t-4 border-t-indigo-500"
  ];

  const activeBorders = [
    "border-[#1E5BB8]/50 shadow-[0_32px_80px_-16px_rgba(30,91,184,0.16)]",
    "border-teal-500/50 shadow-[0_32px_80px_-16px_rgba(20,184,166,0.16)]",
    "border-amber-500/50 shadow-[0_32px_80px_-16px_rgba(245,158,11,0.16)]",
    "border-indigo-500/50 shadow-[0_32px_80px_-16px_rgba(99,102,241,0.16)]"
  ];

  const bgGradients = [
    "from-white/95 via-white/90 to-blue-50/40",
    "from-white/95 via-white/90 to-teal-50/40",
    "from-white/95 via-white/90 to-amber-50/40",
    "from-white/95 via-white/90 to-indigo-50/40"
  ];

  const roleTextColors = [
    "text-[#1E5BB8]",
    "text-teal-600",
    "text-amber-600",
    "text-indigo-600"
  ];

  return (
    <div
      ref={cardRef}
      style={{
        zIndex: 10 + idx,
      }}
      className={`absolute inset-0 w-full h-full origin-top pt-6 ${idx > 0 ? "pointer-events-none" : ""}`}
    >
      <div
        ref={cardInnerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, shadow 0.3s ease",
        }}
        className={`relative w-full h-full rounded-[32px] bg-white/90 backdrop-blur-[20px] border overflow-hidden origin-top transition-all duration-300 flex flex-col justify-between ${
          isHovered
            ? `${activeBorders[idx % activeBorders.length]} border-opacity-100`
            : "border-white/50 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.06)]"
        }`}
      >
        {/* Dynamic Glow Spotlight Tracker */}
        <div
          className="absolute pointer-events-none rounded-full blur-3xl transition-opacity duration-300"
          style={{
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(30,91,184,0.12) 0%, rgba(30,91,184,0) 70%)",
            left: `${glow.x - 175}px`,
            top: `${glow.y - 175}px`,
            opacity: glow.opacity,
            mixBlendMode: "screen",
            zIndex: 1
          }}
        />

        <div className={`grid grid-cols-1 md:grid-cols-12 items-stretch h-full ${accentColors[idx % accentColors.length]}`}>
          
          {/* Executive Portrait (4 cols) */}
          <div className="md:col-span-4 relative h-48 md:h-full bg-gray-50 overflow-hidden">
            <img
              src={member.image}
              alt={member.name[lang]}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            
            {/* Role Overlay Badge on Portrait */}
            <div className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-white/50 shadow-lg z-10 transition-all duration-300 ${
              isHovered ? "border-blue-500/25 translate-y-[-2px]" : ""
            }`}>
              <span className={`block text-[9px] font-black uppercase tracking-widest mb-0.5 ${roleTextColors[idx % roleTextColors.length]}`}>
                {member.department.toUpperCase()}
              </span>
              <span className="block text-xs font-bold text-gray-900 line-clamp-1">
                {member.role[lang].split(" & ")[0]}
              </span>
            </div>

            {/* Spotlight Indicator */}
            <div className="absolute top-4 left-4 bg-premium-highlight text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md flex items-center space-x-1.5 z-10">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200 fill-yellow-200" />
              <span>{t.executiveLabel[lang]}</span>
            </div>
          </div>

          {/* Executive Bio & Details (8 cols) */}
          <div className={`md:col-span-8 p-5 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-br ${
            isHovered ? bgGradients[idx % bgGradients.length] : "from-white/90 via-white/85 to-gray-50/40"
          } relative z-10 h-full overflow-y-auto md:overflow-hidden transition-all duration-300`}>
            
            {/* Header */}
            <div className="space-y-1 sm:space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-blue-50/80 rounded-md ${roleTextColors[idx % roleTextColors.length]}`}>
                  Board Member
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
                {member.name[lang]}
              </h3>
              <p className={`${roleTextColors[idx % roleTextColors.length]} text-xs font-black uppercase tracking-wider transition-colors duration-300`}>
                {member.role[lang]}
              </p>
            </div>

            {/* Professional Bio */}
            <div className="space-y-3 sm:space-y-4 border-t border-b border-gray-100/50 py-3 sm:py-4 flex-1 flex flex-col justify-center">
              <div className="space-y-1">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                  {t.focus[lang]}
                </span>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-semibold">
                  {member.bio[lang]}
                </p>
              </div>

              {/* Accomplishments */}
              <div className="space-y-1.5 sm:space-y-2">
                <span className={`text-[9px] font-black uppercase tracking-widest ${roleTextColors[idx % roleTextColors.length]}`}>
                  {t.achievements[lang]}
                </span>
                <ul className="grid grid-cols-1 gap-1.5">
                  {details.achievements[lang].slice(0, 2).map((ach: string, i: number) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-gray-600 font-semibold leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              {/* Email display */}
              <div className="hidden sm:block text-left">
                <span className="block text-[8px] font-black uppercase text-gray-400 tracking-widest">
                  DIRECT CONTACT
                </span>
                <span className="text-xs font-mono text-gray-500">
                  {details.email}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end">
                <button
                  id={`copy-email-btn-${idx}`}
                  onClick={() => handleCopyEmail(details.email, member.name.en)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center space-x-1.5 ${
                    isCopied
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/10"
                      : "bg-white/90 text-gray-700 border border-gray-200/60 hover:bg-gray-50 hover:border-gray-300 hover:scale-[1.03]"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>{isCopied ? t.copied[lang] : t.copyBtn[lang]}</span>
                </button>

                <a
                  id={`linkedin-btn-${idx}`}
                  href={details.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold bg-[#0077B5] hover:bg-[#006297] text-white transition-all duration-300 flex items-center space-x-1.5 shadow-md shadow-blue-500/5 hover:scale-[1.03]"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>{t.linkedinBtn[lang]}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default function Team({ lang }: TeamProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  const t = {
    tag: { en: "CORPORATE LEADERSHIP", mm: "ကျွန်ုပ်တို့၏ ခေါင်းဆောင်မှုအဖွဲ့" },
    title: { en: "Experienced Healthcare Leadership", mm: "ဆေးဝါးပညာရပ်ဆိုင်ရာ ကျွမ်းကျင်သူများ" },
    subtitle: {
      en: "Meet the executive, regulatory, and logistics specialists steering Lorindale Pharma's clinical excellence across Myanmar.",
      mm: "လော်ရင်ဒေး ဆေးဝါးလုပ်ငန်းကို ဦးဆောင်မောင်းနှင်နေသော ကျွမ်းကျင် စီမံခန့်ခွဲသူများနှင့် ဆေးဝါးပညာရှင်များ"
    },
    focus: { en: "Professional Focus", mm: "ကျွမ်းကျင်မှုနယ်ပယ်" },
    experience: { en: "Experience & Track Record", mm: "လုပ်ငန်းအတွေ့အကြုံ" },
    achievements: { en: "Key Contributions & Initiatives", mm: "အဓိက ဆောင်ရွက်ချက်များနှင့် အောင်မြင်မှုများ" },
    copied: { en: "Email Copied!", mm: "အီးမေးလ် ကူးယူပြီးပါပြီ။" },
    copyBtn: { en: "Copy Email", mm: "အီးမေးလ် ကူးယူရန်" },
    linkedinBtn: { en: "LinkedIn Profile", mm: "LinkedIn စာမျက်နှာ" },
    executiveLabel: { en: "EXECUTIVE SPOTLIGHT", mm: "ခေါင်းဆောင်မှုကဏ္ဍ" }
  };

  const handleCopyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Background parallax movement
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          yPercent: -100,
          xPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
      }
      
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          yPercent: 80,
          xPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
      }

      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          yPercent: -50,
          xPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        });
      }

      // Advanced Sticky Scrolling Overlay Timeline
      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      const bgColors = [
        "#0B132B", // Card 0: Deep Space Navy Blue
        "#0F2042", // Card 1: Midnight Royal Blue
        "#071C35", // Card 2: Ocean Twilight Blue
        "#111827"  // Card 3: Slate Dark Blue
      ];

      // Set initial background color
      if (containerRef.current) {
        gsap.set(containerRef.current, { backgroundColor: bgColors[0] });
      }

      // Animate cards overlaying beautifully
      cards.forEach((card, idx) => {
        if (idx === 0) {
          // Card 0 starts active.
          gsap.set(card, { yPercent: 0, scale: 1, opacity: 1, filter: "blur(0px)", pointerEvents: "auto" });
          return;
        }

        // Initially hide or translate subsequent cards off-screen
        gsap.set(card, { yPercent: 120, scale: 1, opacity: 1, filter: "blur(0px)", pointerEvents: "none" });

        const prevCard = cards[idx - 1];
        const stepLabel = `step-${idx}`;

        pinTimeline.addLabel(stepLabel);

        // Animate container background smoothly at this step
        if (containerRef.current) {
          pinTimeline.to(containerRef.current, {
            backgroundColor: bgColors[idx],
            duration: 0.8,
            ease: "power2.out"
          }, stepLabel);
        }

        // Current card slides up from bottom over the previous one
        pinTimeline.to(card, {
          yPercent: 0,
          ease: "power3.out",
          pointerEvents: "auto"
        }, stepLabel);

        // Previous card scales down, blurs, shifts up and reduces opacity
        pinTimeline.to(prevCard, {
          scale: 0.92,
          opacity: 0.65,
          y: -80,
          filter: "blur(6px)",
          ease: "power3.out",
          pointerEvents: "none"
        }, stepLabel);

        // Even earlier cards translate and scale down further
        for (let j = 0; j < idx - 1; j++) {
          const earlierCard = cards[j];
          pinTimeline.to(earlierCard, {
            scale: 0.84,
            opacity: 0.3,
            y: -140,
            filter: "blur(12px)",
            ease: "power3.out",
            pointerEvents: "none"
          }, stepLabel);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={containerRef} className="min-h-screen w-full flex flex-col justify-center py-20 relative overflow-hidden transition-colors duration-1000 bg-gradient-to-tr from-blue-950 via-[#0B1528] to-slate-900">
      {/* Premium Editorial Vector Curves & Ambient Gradients */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none select-none z-0 overflow-hidden">
        <svg
          className="absolute -top-20 -right-20 w-[110%] h-[120%] opacity-[0.4] lg:opacity-[0.6]"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vector-curve-grad-team" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#8b5cf6" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow-filter-team" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Main glowing ambient backdrops underneath */}
          <circle cx="700" cy="200" r="280" fill="url(#vector-curve-grad-team)" opacity="0.06" filter="url(#glow-filter-team)" />
          <circle cx="900" cy="100" r="180" fill="#06b6d4" opacity="0.04" filter="url(#glow-filter-team)" />

          {/* Programmatic elegant parallel flowing waves */}
          {Array.from({ length: 32 }).map((_, i) => {
            const offset = i * 12;
            const strokeOpacity = Math.max(0.1, 0.65 - i * 0.015);
            const strokeWidth = Math.max(0.75, 1.6 - i * 0.03);
            return (
              <path
                key={i}
                d={`M ${450 + offset} -150 C ${550 + offset * 1.1} ${120 + i * 4.5}, ${700 + offset * 0.85} ${280 + i * 8.5}, ${1150 + offset * 0.6} ${420 + i * 13}`}
                fill="none"
                stroke="url(#vector-curve-grad-team)"
                strokeWidth={strokeWidth}
                strokeOpacity={strokeOpacity}
              />
            );
          })}
        </svg>
      </div>

      {/* Elegant faded watermark text in bottom left */}
      <div className="absolute bottom-[-5%] left-[-2%] text-white/[0.02] font-black tracking-tight select-none pointer-events-none z-0 text-[11vw] leading-none uppercase font-sans">
        Leadership
      </div>

      {/* Parallax Background Orbs */}
      <div ref={orb1Ref} className="absolute top-10 -right-24 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl pointer-events-none z-0" />
      <div ref={orb2Ref} className="absolute bottom-1/3 -left-24 w-[450px] h-[450px] bg-[#D4B11A]/6 rounded-full blur-3xl pointer-events-none z-0" />
      <div ref={orb3Ref} className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Decorative fine-line border grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between h-full">
        
        {/* Section Header */}
        <ScrollFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-blue-950/50 border border-blue-500/30 px-4 py-1.5 rounded-full shadow-lg shadow-blue-950/50">
              <span className="text-[11px] sm:text-xs font-black tracking-widest text-blue-300 uppercase">
                {t.tag[lang]}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {t.title[lang]}
            </h2>
            <p className="text-blue-200/70 text-xs sm:text-sm font-medium leading-relaxed">
              {t.subtitle[lang]}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Sticky Cards Stack Container */}
        <div className="relative w-full h-[660px] sm:h-[580px] md:h-[480px] lg:h-[450px]">
          {TEAM_DATA.map((member, idx) => {
            const details = EXECUTIVE_DETAILS[member.name.en] || EXECUTIVE_DETAILS["Dr. Kyaw Myint Tun"];
            const isCopied = copiedId === member.name.en;

            return (
              <TeamCard
                key={member.name.en}
                member={member}
                idx={idx}
                total={TEAM_DATA.length}
                lang={lang}
                details={details}
                isCopied={isCopied}
                handleCopyEmail={handleCopyEmail}
                t={t}
                cardRef={(el) => { cardsRef.current[idx] = el; }}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
