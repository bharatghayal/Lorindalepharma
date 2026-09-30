import React from "react";
import { Language } from "../types";
import Logo from "./Logo";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = {
    brand: { en: "Lorindale Pharma", mm: "လော်ရင်ဒေး ဆေးဝါးလုပ်ငန်း" },
    tagline: {
      en: "Delivering clinical excellence and certified formulations with trusted supply chains and regulatory authority.",
      mm: "ယုံကြည်စိတ်ချရသော ထောက်ပံ့ပို့ဆောင်ရေးနှင့် စည်းမျဉ်းပိုင်းဆိုင်ရာ အာဏာပိုင်များနှင့်အတူ ဆေးဘက်ဆိုင်ရာ ထူးချွန်မှုနှင့် ထုတ်ကုန်များကို ပံ့ပိုးပေးအပ်နေပါသည်။"
    },
    copyright: {
      en: "© Lorindale Pharma 2026 - All Rights Reserved",
      mm: "© လော်ရင်ဒေးဆေးဝါးလုပ်ငန်း ၂၀၂၆ - မူပိုင်ခွင့်အားလုံးရရှိပြီးဖြစ်သည်"
    }
  };

  const columns = [
    {
      title: { en: "Product", mm: "လုပ်ငန်းကဏ္ဍ" },
      links: [
        { label: { en: "Overview", mm: "ခြုံငုံသုံးသပ်ချက်" }, href: "#services" },
        { label: { en: "Formulation Lab", mm: "ဆေးဝါးစမ်းသပ်ခန်း" }, href: "#services" },
        { label: { en: "Quality Control", mm: "အရည်အသွေးစစ်ဆေးခြင်း" }, href: "#services" },
        { label: { en: "Regulatory Support", mm: "စည်းမျဉ်းပိုင်းကူညီမှု" }, href: "#services" },
        { label: { en: "Distribution Network", mm: "ဖြန့်ဖြူးရေးကွန်ရက်" }, href: "#distribution" },
        { label: { en: "Pharmacovigilance", mm: "ဆေးဝါးဘေးကင်းလုံခြုံရေး" }, href: "#contact" },
        { label: { en: "Consultation", mm: "အထူးကုဆွေးနွေးခြင်း" }, href: "#contact" },
      ]
    },
    {
      title: { en: "Developers", mm: "မိတ်ဖက်များ" },
      links: [
        { label: { en: "Docs", mm: "လမ်းညွှန်ချက်များ" }, href: "#about" },
        { label: { en: "SDKs & Templates", mm: "ပုံစံငယ်များနှင့်စနစ်များ" }, href: "#services" },
        { label: { en: "Quickstart", mm: "အမြန်စတင်ရန်" }, href: "#about" },
        { label: { en: "RPC Endpoints", mm: "ချိတ်ဆက်မှုလိပ်စာများ" }, href: "#distribution" },
        { label: { en: "Run a Validator", mm: "အတည်ပြုစစ်ဆေးခြင်း" }, href: "#services" },
      ]
    },
    {
      title: { en: "Solutions", mm: "ကုသမှုစနစ်များ" },
      links: [
        { label: { en: "Payments & Remittance", mm: "ငွေပေးချေမှုစနစ်" }, href: "#contact" },
        { label: { en: "DeFi & Exchanges", mm: "ဆေးဝါးလဲလှယ်မှုများ" }, href: "#products" },
        { label: { en: "Gaming & Loyalty", mm: "အဖွဲ့ဝင်အစီအစဉ်" }, href: "#services" },
        { label: { en: "Supply Chain", mm: "ထောက်ပံ့ပို့ဆောင်ရေး" }, href: "#distribution" },
        { label: { en: "Identity & Access", mm: "လုံခြုံစိတ်ချရမှု" }, href: "#services" },
        { label: { en: "Public Sector", mm: "ပြည်သူ့ကျန်းမာရေး" }, href: "#about" },
      ]
    }
  ];

  return (
    <footer className="bg-[#030712] text-slate-300 relative overflow-hidden pt-24 pb-16 border-t border-slate-900">
      
      {/* Radiant sky-blue to dark-navy linear gradient at the top matching screenshot */}
      <div className="absolute top-0 left-0 right-0 h-[350px] bg-gradient-to-b from-[#1E5BB8]/35 via-[#0A1121]/5 to-transparent pointer-events-none select-none z-0" />

      {/* Decorative ambient lights */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#1E5BB8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#B0A159]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - Brand Information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Elegant Brand Logo */}
            <div className="flex items-center space-x-3">
              <Logo className="h-6 sm:h-7 w-auto" isDarkBackground={true} />
            </div>

            {/* Brand tagline matching screenshot placement */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-semibold max-w-md">
              {t.tagline[lang]}
            </p>

            {/* Social Icons matching the round custom bordered buttons from screenshot */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#1E5BB8]/80 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 group"
              >
                <Twitter className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#1E5BB8]/80 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 group"
              >
                <Instagram className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                aria-label="Youtube"
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#1E5BB8]/80 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 group"
              >
                <Youtube className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                aria-label="Linkedin"
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#1E5BB8]/80 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 group"
              >
                <Linkedin className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Left Copyright Section */}
            <div className="pt-4">
              <p className="text-xs sm:text-sm font-bold text-slate-500">
                {t.copyright[lang]}
              </p>
            </div>
          </div>

          {/* Right Block - Nav Columns exactly matching screenshot structure */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 text-left">
            {columns.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-slate-400 font-extrabold text-xs sm:text-sm tracking-wider">
                  {col.title[lang]}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a 
                        href={link.href}
                        className="text-slate-500 hover:text-slate-100 text-xs sm:text-sm font-semibold transition-colors duration-200 block"
                      >
                        {link.label[lang]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Giant watermark at the very bottom, perfectly faded like 'vibezero' in the screenshot */}
      <div className="absolute bottom-[-6%] left-1/2 -translate-x-1/2 text-[9rem] sm:text-[14rem] lg:text-[19rem] font-black text-[#0c1626]/60 select-none pointer-events-none tracking-tight leading-none text-center font-sans uppercase">
        lorindale
      </div>

    </footer>
  );
}
