import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Globe, Menu, X, Landmark, Pill, PhoneCall, FileText, ChevronDown, Zap } from "lucide-react";
import { Language } from "../types";
import { PRODUCTS_DATA } from "../data";
import Logo from "./Logo";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onSearchSelect: (category: string) => void;
}

export default function Navbar({ lang, setLang, onSearchSelect }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    brand: { en: "Lorindale Pharma", mm: "လော်ရင်ဒေး ဆေးဝါးလုပ်ငန်း" },
    subtitle: { en: "Healthcare Myanmar", mm: "ကျန်းမာရေးစောင့်ရှောက်မှု" },
    home: { en: "Home", mm: "ပင်မစာမျက်နှာ" },
    about: { en: "About Us", mm: "ကျွန်ုပ်တို့အကြောင်း" },
    services: { en: "Services", mm: "ဝန်ဆောင်မှုများ" },
    products: { en: "Products", mm: "ထုတ်ကုန်များ" },
    distribution: { en: "Network", mm: "ဖြန့်ဖြူးရေး" },
    team: { en: "Team", mm: "ဦးဆောင်သူများ" },
    contact: { en: "Contact", mm: "ဆက်သွယ်ရန်" },
    searchPlaceholder: { en: "Search products, categories...", mm: "ဆေးဝါး၊ အုပ်စု ရှာဖွေရန်..." },
    searchTitle: { en: "Search Lorindale Portfolio", mm: "လော်ရင်ဒေး ထုတ်ကုန်များ ရှာဖွေရန်" },
    noResults: { en: "No products matched your search.", mm: "ရှာဖွေမှုနှင့် ကိုက်ညီသော ထုတ်ကုန်မရှိပါ။" },
  };

  const menuItems = [
    { label: t.home[lang], href: "#home" },
    { label: t.about[lang], href: "#about" },
    { label: t.services[lang], href: "#services" },
    { label: t.products[lang], href: "#products" },
    { label: t.distribution[lang], href: "#distribution" },
    { label: t.contact[lang], href: "#contact" },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const nameStr = (p.name[lang] || "").toLowerCase();
    const descStr = (p.description[lang] || "").toLowerCase();
    const catStr = (p.category || "").toLowerCase();
    const query = searchQuery.toLowerCase();
    return nameStr.includes(query) || descStr.includes(query) || catStr.includes(query);
  });

  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    // Initial check
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-500 ${
          isScrolled ? "top-3" : "top-5"
        }`}
      >
        <div 
          className={`relative overflow-hidden rounded-full px-3 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ease-out group ${
            isScrolled ? "glass-refraction-scrolled" : "glass-refraction"
          }`}
        >
          {/* Liquid Shimmer Light Reflection overlay */}
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none -skew-x-12 animate-glass-shimmer" />

          {/* Dynamic glowing highlights at top/bottom border */}
          <div className="absolute top-0 left-1/6 right-1/6 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none filter blur-[0.5px]" />
          <div className="absolute bottom-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent pointer-events-none" />

          {/* Logo */}
          <a href="#home" className="flex items-center group pl-1 relative z-10">
            <Logo
              className="h-7 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-105"
              isDarkBackground={false}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 relative z-10">
            {menuItems.map((item, index) => {
              const isActive = activeHash === item.href;
              const isProducts = item.label === t.products[lang];
              const isServices = item.label === t.services[lang];
              
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`text-xs md:text-sm font-bold tracking-tight transition-all duration-300 py-1.5 px-3.5 rounded-full flex items-center gap-1 relative ${
                    isActive 
                      ? "text-blue-700 bg-white/60 shadow-[0_4px_12px_-2px_rgba(15,23,42,0.06),_inset_0_1px_1px_rgba(255,255,255,0.8)] border border-white/20 font-black" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/30"
                  }`}
                >
                  <span>{item.label}</span>
                  {isProducts && (
                    <span className="ml-1 px-1.5 py-0.5 text-[8px] font-black bg-blue-600 text-white rounded-full leading-none scale-90">
                      5
                    </span>
                  )}
                  {isServices && (
                    <ChevronDown className="w-3 h-3 ml-0.5 text-slate-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions & Avatar */}
          <div className="flex items-center space-x-2 sm:space-x-3 pr-1 relative z-10">
            {/* Premium CTA Button ("Upgrade" style) */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-[11px] font-black tracking-widest uppercase text-white gap-1.5 btn-premium-pills cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
              <span>{lang === "en" ? "Get in Touch" : "ဆက်သွယ်ရန်"}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 lg:hidden transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer (Floating underneath) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-2xl overflow-hidden p-4 relative"
            >
              {/* Internal glow line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
              <div className="space-y-1 relative z-10">
                {menuItems.map((item, index) => {
                  const isActive = activeHash === item.href;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                        isActive
                          ? "text-blue-700 bg-white/60 shadow-[0_2px_8px_rgba(15,23,42,0.04)] border border-white/20 font-black"
                          : "text-slate-700 hover:bg-white/30 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-white/30 flex items-center justify-between px-4">
                  <span className="text-xs text-slate-400 font-bold">Language</span>
                  <button
                    id="mobile-lang-toggle"
                    onClick={() => setLang(lang === "en" ? "mm" : "en")}
                    className="px-3 py-1 text-xs font-black border border-white/40 rounded-full bg-white/45 hover:bg-white/60 transition-colors text-slate-700"
                  >
                    {lang === "en" ? "မြန်မာ" : "English"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Portfolio Search Overlay Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-950/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center space-x-2.5">
                  <Search className="text-blue-600 w-5 h-5" />
                  <h3 className="font-extrabold text-gray-900 text-lg">{t.searchTitle[lang]}</h3>
                </div>
                <button
                  id="close-search-btn"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Input */}
              <div className="p-4">
                <input
                  id="search-input-field"
                  type="text"
                  placeholder={t.searchPlaceholder[lang]}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                  autoFocus
                />
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto px-4 pb-4">
                {searchQuery.trim() === "" ? (
                  <div className="py-8 text-center text-gray-400 text-sm">
                    {lang === "en" ? "Type to search by drug name, benefits, or treatment category." : "အမျိုးအစား၊ ဆေးဝါးအမည်များ ရိုက်ထည့်၍ ရှာဖွေနိုင်ပါသည်။"}
                  </div>
                ) : filteredProducts.length > 0 ? (
                  <div className="space-y-2">
                    {filteredProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                          onSearchSelect(p.category);
                          // Smooth scroll to portfolio
                          const element = document.getElementById("products");
                          if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-full text-left p-3.5 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Pill className="w-5 h-5" />
                          </span>
                          <div>
                            <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{p.name[lang]}</h4>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mt-1 inline-block">
                              {p.category}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-blue-500 group-hover:translate-x-1 transition-transform">
                          {lang === "en" ? "View category →" : "အုပ်စုကြည့်ရန် →"}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-gray-400 text-sm">
                    {t.noResults[lang]}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
