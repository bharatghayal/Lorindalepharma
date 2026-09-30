import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { BookOpen, Users, Award, CheckCircle2, ChevronRight, GraduationCap, Upload, Link as LinkIcon, Camera, Eye, X, RotateCcw } from "lucide-react";
import { Language } from "../types";
import ScrollFadeIn from "./ScrollFadeIn";
// @ts-ignore
import conclaveOriginalImage from "../assets/images/conclave_original_web.jpg";

interface TrainingProps {
  lang: Language;
}

export default function Training({ lang }: TrainingProps) {
  const t = {
    sectionTag: {
      en: "KNOWLEDGE & CAPABILITY",
      mm: "အသိပညာနှင့် စွမ်းဆောင်ရည်"
    },
    sectionTitle: {
      en: "Continuous Scientific Development",
      mm: "စဉ်ဆက်မပြတ် သိပ္ပံနည်းကျ ဖွံ့ဖြိုးတိုးတက်မှု"
    },
    cmeTitleBlue: {
      en: "CME Progr",
      mm: "CME ဆေးပညာ"
    },
    cmeTitleGold: {
      en: "ams",
      mm: "အစီအစဉ်များ"
    },
    cmeDesc: {
      en: "Facilitating structured Continuing Medical Education sessions for healthcare providers across major hospitals and academic societies.",
      mm: "ဆေးရုံကြီးများနှင့် ပညာရပ်ဆိုင်ရာအသင်းအဖွဲ့များရှိ ကျန်းမာရေးစောင့်ရှောက်မှုပေးသူများအတွက် စနစ်ကျသော ဆေးပညာသင်ကြားရေးဆွေးနွေးပွဲများကို ပံ့ပိုးပေးခြင်း။"
    },
    espTitleBlue: {
      en: "Experience Sharing",
      mm: "အတွေ့အကြုံမျှဝေခြင်း"
    },
    espTitleGold: {
      en: " Program",
      mm: " အစီအစဉ်"
    },
    espDesc: {
      en: "Bringing leading specialists together to exchange clinical insights, treatment methodologies, and advanced patient outcomes.",
      mm: "ကျန်းမာရေးစောင့်ရှောက်မှု ပိုမိုကောင်းမွန်စေရန်အတွက် အဓိကအထူးကုဆရာဝန်ကြီးများကို စုစည်းပြီး ဆေးဘက်ဆိုင်ရာ ဗဟုသုတများနှင့် ကုသမှုအတွေ့အကြုံများကို ဖလှယ်ပေးခြင်း။"
    },
    conclaveTitleBlue: {
      en: "Lorindale Pharma ",
      mm: "လော်ရင်ဒေး "
    },
    conclaveTitleGold: {
      en: "International Conclave",
      mm: "နိုင်ငံတကာ ညီလာခံကြီး"
    },
    conclaveDesc: {
      en: "Convening leading medical specialists, surgeons, and international healthcare partners to exchange clinical breakthroughs and advanced patient treatment solutions.",
      mm: "ဆေးဘက်ဆိုင်ရာ ထူးချွန်သော တီထွင်ဆန်းသစ်မှုများနှင့် ကုသမှုနည်းလမ်းများကို ဖလှယ်ဆွေးနွေးရန် နိုင်ငံတကာ အထူးကုဆရာဝန်ကြီးများနှင့် မိတ်ဖက်များကို စုစည်းကျင်းပခြင်း။"
    },
    badgeText: {
      en: "Team Training & Development",
      mm: "အဖွဲ့လိုက် သင်တန်းပေးခြင်းနှင့် စွမ်းရည်မြှင့်တင်ခြင်း"
    },
    mainDescription: {
      en: "As Our Core Value We Believe On Team Work And Team Development. We Arrange Timely Products Training And Skill Development To Our Sales Team From Our In-House Marketing And Scientific Team. Also Arrange Training From Medical Professionals To Update Team Scientific Knowledge And To Make Them More Competent.",
      mm: "ကျွန်ုပ်တို့၏ အဓိကတန်ဖိုးထားမှုအဖြစ် အဖွဲ့လိုက်ပူးပေါင်းလုပ်ဆောင်ခြင်းနှင့် စွမ်းရည်ဖွံ့ဖြိုးတိုးတက်မှုကို ယုံကြည်ပါသည်။ ကျွန်ုပ်တို့၏ ပြည်တွင်းအရောင်းအဖွဲ့အား အိမ်တွင်းစျေးကွက်မြှင့်တင်ရေးနှင့် သိပ္ပံနည်းကျအဖွဲ့တို့မှတစ်ဆင့် အချိန်မီထုတ်ကုန်သင်တန်းများနှင့် အရည်အချင်းမြှင့်တင်ရေးသင်တန်းများကို ပုံမှန်စီစဉ်ပေးပါသည်။ ထို့အပြင် ဝန်ထမ်းများ၏ သိပ္ပံနည်းကျဗဟုသုတများကို မြှင့်တင်ရန်နှင့် ပိုမိုထူးချွန်ထက်မြက်စေရန်အတွက် ဆေးဘက်ဆိုင်ရာပညာရှင်များမှတစ်ဆင့်လည်း သင်တန်းများကို စီစဉ်ကျင်းပပေးလျက်ရှိပါသည်။"
    },
    learnMore: {
      en: "Explore Programs",
      mm: "အစီအစဉ်များ လေ့လာရန်"
    },
    keyMetrics: [
      {
        title: { en: "Structured CME Seminars", mm: "စနစ်တကျ CME ဆွေးနွေးပွဲများ" },
        metric: "50+ / Year"
      },
      {
        title: { en: "Medical Professionals Engaged", mm: "ပူးပေါင်းပါဝင်သော ဆေးဘက်ပညာရှင်များ" },
        metric: "3,500+"
      },
      {
        title: { en: "In-house Scientific Training Modules", mm: "ပြည်တွင်း သိပ္ပံနည်းကျသင်တန်းများ" },
        metric: "100% Certified"
      }
    ]
  };

  // Image paths (supporting direct Google Drive links or imported assets)
  const cmeImage = "https://lh3.googleusercontent.com/d/1NWlGiha1re_AleZTc4RopGPLpfaKC9xW";
  const experienceImage = "https://lh3.googleusercontent.com/d/1C7Hvd62OxE5EXCvmf8RAXrv_63pleU8H";
  
  // Dynamic state for Conclave image with persistent local and server sync (using original DSC04387.jpg)
  const [activeConclaveImage, setActiveConclaveImage] = useState<string>(() => {
    const saved = localStorage.getItem("conclave_original_image");
    // Ignore legacy AI generated images if stored previously
    if (saved && !saved.includes("1790752643689") && !saved.includes("1790752134321") && !saved.includes("1790753684914")) {
      return saved;
    }
    return conclaveOriginalImage;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showUrlPrompt, setShowUrlPrompt] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState("");
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    // Clean up any legacy AI generated cache in user's browser
    const saved = localStorage.getItem("conclave_original_image");
    if (saved && (saved.includes("1790752643689") || saved.includes("1790752134321") || saved.includes("1790753684914"))) {
      localStorage.removeItem("conclave_original_image");
      setActiveConclaveImage(conclaveOriginalImage);
    }

    // Fetch any persisted original image from server
    fetch("/api/conclave-image")
      .then(res => res.json())
      .then(data => {
        if (data.url && !data.url.includes("1790752643689") && !data.url.includes("1790752134321") && !data.url.includes("1790753684914")) {
          setActiveConclaveImage(data.url);
          localStorage.setItem("conclave_original_image", data.url);
        }
      })
      .catch(() => {});
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setActiveConclaveImage(dataUrl);
        localStorage.setItem("conclave_original_image", dataUrl);
        fetch("/api/upload-conclave-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: dataUrl })
        })
          .then(res => res.json())
          .then(data => {
            if (data.url) {
              setActiveConclaveImage(data.url);
              localStorage.setItem("conclave_original_image", data.url);
            }
          })
          .catch(console.error)
          .finally(() => setIsUploading(false));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSetCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;
    const cleanUrl = customUrlInput.trim();
    setActiveConclaveImage(cleanUrl);
    localStorage.setItem("conclave_original_image", cleanUrl);
    setShowUrlPrompt(false);
    fetch("/api/upload-conclave-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl: cleanUrl })
    }).catch(console.error);
  };

  return (
    <section id="training-development" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Decorative ambient background curves */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 Q200,400 600,150 T1500,300" stroke="#1E5BB8" strokeWidth="2" strokeOpacity="0.3" fill="none" />
          <path d="M-50,300 Q300,500 700,250 T1600,400" stroke="#B0A159" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <ScrollFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#1E5BB8]" />
              <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#1E5BB8] uppercase">
                {t.sectionTag[lang]}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-none">
              {t.sectionTitle[lang]}
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#1E5BB8] to-[#B0A159] mx-auto rounded-full" />
          </div>
        </ScrollFadeIn>

        {/* Cards Segment (CME, Experience Sharing, International Conclave) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* CME Programs Card */}
          <ScrollFadeIn direction="left" delay={0.1}>
            <div className="group/card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(30,91,184,0.08)] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={cmeImage}
                  alt="CME Program"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#1E5BB8] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md shadow-md">
                  CME SEMINARS
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    <span className="text-[#1E5BB8]">{t.cmeTitleBlue[lang]}</span>
                    <span className="text-[#B0A159]">{t.cmeTitleGold[lang]}</span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                    {t.cmeDesc[lang]}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Continuing Education</span>
                  <button className="flex items-center space-x-1.5 text-xs font-bold text-[#1E5BB8] group-hover/card:translate-x-1 transition-transform">
                    <span>{t.learnMore[lang]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Experience Sharing Program Card */}
          <ScrollFadeIn direction="up" delay={0.2}>
            <div className="group/card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(30,91,184,0.08)] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={experienceImage}
                  alt="Experience Sharing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#B0A159] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md shadow-md">
                  PEER DISCUSSION
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    <span className="text-[#1E5BB8]">{t.espTitleBlue[lang]}</span>
                    <span className="text-[#B0A159]">{t.espTitleGold[lang]}</span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                    {t.espDesc[lang]}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Knowledge Exchange</span>
                  <button className="flex items-center space-x-1.5 text-xs font-bold text-[#1E5BB8] group-hover/card:translate-x-1 transition-transform">
                    <span>{t.learnMore[lang]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Lorindale Pharma International Conclave Card */}
          <ScrollFadeIn direction="right" delay={0.3}>
            <div className="group/card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(30,91,184,0.08)] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 group/img">
                <img
                  src={activeConclaveImage}
                  alt="Lorindale Pharma International Conclave - Original Photo"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== conclaveOriginalImage) {
                      target.src = conclaveOriginalImage;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#1E5BB8] to-[#B0A159] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md shadow-md pointer-events-none">
                  GLOBAL CONCLAVE
                </div>

                {/* Upload & view original photo actions */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    onClick={() => setShowLightbox(true)}
                    title="View original DSC04387.jpg stage photo in full resolution"
                    className="bg-white/95 hover:bg-white text-slate-800 hover:text-[#1E5BB8] backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md text-xs font-bold flex items-center space-x-1.5 transition-all border border-slate-200/80 cursor-pointer active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#1E5BB8]" />
                    <span>{isUploading ? "Uploading..." : "Original Photo (DSC04387.jpg)"}</span>
                  </button>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload different photo"
                    className="bg-white/95 hover:bg-white text-slate-800 hover:text-[#1E5BB8] backdrop-blur-md p-1.5 rounded-lg shadow-md transition-all border border-slate-200/80 cursor-pointer active:scale-95"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#1E5BB8]" />
                  </button>
                  <button
                    onClick={() => setShowUrlPrompt(!showUrlPrompt)}
                    title="Paste Google Drive or image link"
                    className="bg-white/95 hover:bg-white text-slate-800 hover:text-[#1E5BB8] backdrop-blur-md p-1.5 rounded-lg shadow-md transition-all border border-slate-200/80 cursor-pointer active:scale-95"
                  >
                    <LinkIcon className="w-3.5 h-3.5 text-[#1E5BB8]" />
                  </button>
                  {activeConclaveImage !== conclaveOriginalImage && (
                    <button
                      onClick={() => {
                        setActiveConclaveImage(conclaveOriginalImage);
                        localStorage.removeItem("conclave_original_image");
                      }}
                      title="Reset to authentic DSC04387 original photo"
                      className="bg-white/95 hover:bg-white text-amber-700 hover:text-amber-800 backdrop-blur-md p-1.5 rounded-lg shadow-md transition-all border border-amber-200 cursor-pointer active:scale-95"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* URL prompt dropdown */}
                {showUrlPrompt && (
                  <form
                    onSubmit={handleSetCustomUrl}
                    className="absolute inset-x-3 top-14 bg-white/98 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-200 z-30 space-y-2 animate-in fade-in zoom-in-95 duration-200"
                  >
                    <span className="block text-[11px] font-bold text-slate-700">Paste Image or Google Drive Link:</span>
                    <div className="flex gap-1.5">
                      <input
                        type="url"
                        placeholder="https://lh3.googleusercontent.com/d/..."
                        value={customUrlInput}
                        onChange={(e) => setCustomUrlInput(e.target.value)}
                        className="flex-1 text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#1E5BB8]"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="bg-[#1E5BB8] text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Set
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    <span className="text-[#1E5BB8]">{t.conclaveTitleBlue[lang]}</span>
                    <span className="text-[#B0A159]">{t.conclaveTitleGold[lang]}</span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                    {t.conclaveDesc[lang]}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Clinical Summit</span>
                  <button className="flex items-center space-x-1.5 text-xs font-bold text-[#1E5BB8] group-hover/card:translate-x-1 transition-transform">
                    <span>{t.learnMore[lang]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Highlighted Team Training Segment with Pill and Description */}
        <ScrollFadeIn>
          <div className="bg-gradient-to-br from-[#1E5BB8]/5 via-[#1E5BB8]/2 to-[#B0A159]/5 rounded-[36px] border border-[#1E5BB8]/10 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-8 shadow-[inset_0_4px_24px_rgba(30,91,184,0.02)]">
            {/* Pill Badge matching original image gradient style exactly */}
            <div className="inline-block">
              <div className="bg-gradient-to-r from-[#1E5BB8] to-[#B0A159] text-white font-black uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(30,91,184,0.25)] text-sm sm:text-base cursor-pointer hover:brightness-105 transition-all">
                {t.badgeText[lang]}
              </div>
            </div>

            {/* Core Value Description Text with supreme typography */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-semibold tracking-wide text-center">
              {t.mainDescription[lang]}
            </p>

            {/* Live capability sub-items inside training portal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/50">
              {t.keyMetrics.map((m, idx) => (
                <div key={idx} className="space-y-1.5 text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-[#1E5BB8] to-[#B0A159] bg-clip-text text-transparent">
                    {m.metric}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {m.title[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* Full Image Modal for Original Conclave Photograph */}
        {showLightbox && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
            <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
              <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-black/40">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      Lorindale Pharma Official Conclave Photograph
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      Original Camera Capture (DSC04387.jpg • Sony ILCE-7M4)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLightbox(false)}
                  className="text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative flex-1 overflow-auto p-2 sm:p-4 flex items-center justify-center bg-black/60">
                <img
                  src={activeConclaveImage}
                  alt="Original Conclave Stage Photo DSC04387"
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-4 px-6 bg-slate-950/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="bg-[#1E5BB8]/30 text-[#60a5fa] px-2.5 py-1 rounded-md font-semibold">
                    ColoPlug / ColoCast Stage Presentation
                  </span>
                  <span className="text-slate-400">Symposium Delegation & Executive Panel</span>
                </div>
                <button
                  onClick={() => setShowLightbox(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-1.5 rounded-lg transition-colors ml-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
