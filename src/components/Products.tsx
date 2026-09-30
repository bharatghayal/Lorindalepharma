import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Eye, 
  Info, 
  FlaskConical, 
  Pill, 
  LayoutGrid, 
  Layers, 
  Droplets, 
  ArrowUpRight, 
  Check, 
  Sparkles,
  Heart
} from "lucide-react";
import { Language, ProductItem } from "../types";
import { PRODUCTS_DATA } from "../data";
import ScrollFadeIn from "./ScrollFadeIn";

interface ProductsProps {
  lang: Language;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
}

export default function Products({ lang, selectedCategory, setSelectedCategory }: ProductsProps) {
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const categories = [
    "All",
    "Advanced Wound Care",
    "Nephrology Products",
    "Antibiotics"
  ];

  const t = {
    tag: { en: "LORINDALE PORTFOLIO", mm: "ထုတ်ကုန်ကဏ္ဍများ" },
    title: { en: "Innovative Medicine & Medical Devices", mm: "အရည်အသွေးမြင့် ဆေးဝါးနှင့် ဆေးဘက်ဝင်ပစ္စည်းများ" },
    subtitle: {
      en: "We market and distribute our curated portfolio of certified medical formulations and advanced healthcare products.",
      mm: "ပိုမိုကောင်းမွန်သော လူနေမှုဘဝကို ဖော်ဆောင်နိုင်ရန် နိုင်ငံတကာအဆင့်မီ၊ အသိအမှတ်ပြု အထူးကုဆေးဝါးနှင့် ထုတ်ကုန်များကို တင်သွင်းဖြန့်ဖြူးပေးလျက်ရှိပါသည်။"
    },
    viewSpecs: { en: "View Specifications", mm: "ဆေးဝါးအချက်အလက်ကြည့်ရန်" },
    specTitle: { en: "Formulation Specification Sheet", mm: "ဆေးဝါးဆိုင်ရာ အသေးစိတ်အချက်အလက်များ" },
    ingredients: { en: "Formulation / Ingredients", mm: "ပါဝင်ဖွဲ့စည်းပုံ / ပါဝင်ပစ္စည်းများ" },
    clinicalData: { en: "Clinical Attributes", mm: "ဆေးဘက်ဆိုင်ရာ အညွှန်းနှင့် သတ်မှတ်ချက်များ" },
    packaging: { en: "Commercial Packaging", mm: "ထုပ်ပိုးမှုနှင့် သိုလှောင်မှုစနစ်" },
    inquireCTA: { en: "Submit Product Inquiry", mm: "ဆေးဝါးမေးမြန်းစုံစမ်းရန်" },
    categoryMap: {
      "All": { en: "All Products", mm: "အားလုံး" },
      "Advanced Wound Care": { en: "Wound Care", mm: "အနာစောင့်ရှောက်မှု" },
      "Nephrology Products": { en: "Nephrology", mm: "ကျောက်ကပ်ဆေး" },
      "Antibiotics": { en: "Antibiotics", mm: "ပိုးသတ်ဆေး" }
    } as Record<string, Record<Language, string>>
  };

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory =
      !selectedCategory || selectedCategory === "All" || p.category === selectedCategory;
    return matchesCategory;
  });

  const getCountForCategory = (cat: string) => {
    if (cat === "All") return PRODUCTS_DATA.length;
    return PRODUCTS_DATA.filter((p) => p.category === cat).length;
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "All": return <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "Advanced Wound Care": return <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "Nephrology Products": return <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "Antibiotics": return <Pill className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      default: return <FlaskConical className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    }
  };

  const getProductQuickSpecs = (prod: ProductItem, lang: Language) => {
    const specList = prod.specifications[lang] || [];
    let active = "";
    let format = "";

    if (specList[0]) {
      active = specList[0].replace(/^(Active Ingredient|Composition|ပါဝင်ပစ္စည်း)\s*:\s*/i, "");
    }

    const packagingSpec = specList.find(s => 
      s.toLowerCase().includes("packaging:") || 
      s.toLowerCase().includes("form:") || 
      s.toLowerCase().includes("ထုပ်ပိုးပုံ")
    );

    if (packagingSpec) {
      format = packagingSpec.replace(/^(Packaging|Form|ထုပ်ပိုးပုံ)\s*:\s*/i, "");
    } else if (specList[3]) {
      format = specList[3].replace(/^(Packaging|Form|ထုပ်ပိုးပုံ)\s*:\s*/i, "");
    } else if (specList[2]) {
      format = specList[2].replace(/^(Packaging|Form|ထုပ်ပိုးပုံ)\s*:\s*/i, "");
    }

    return { active, format };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollFadeIn>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
              <span>{t.tag[lang]}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 tracking-tight leading-tight">
              {t.title[lang]}
            </h2>
            <div className="w-20 h-1.5 bg-premium-highlight mx-auto mt-4 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.3)]" />
            <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed font-semibold">
              {t.subtitle[lang]}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Highly Creative & Intuitive Category Selector Tabs */}
        <div className="flex flex-col items-center mb-16 relative z-20">
          <div className="bg-slate-50/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/60 inline-flex flex-wrap justify-center gap-1.5 max-w-full shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            {categories.map((cat) => {
              const isActive = (selectedCategory === cat) || (cat === "All" && !selectedCategory);
              const label = t.categoryMap[cat] ? t.categoryMap[cat][lang] : cat;
              const count = getCountForCategory(cat);
              
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 flex items-center gap-2 whitespace-nowrap outline-none ${
                    isActive 
                      ? "text-blue-900" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {/* Sliding active capsule background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-white rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.01)] border border-slate-200/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Tab Label & Dynamic Counter */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={isActive ? "text-blue-600 scale-110 transition-transform duration-300" : "text-slate-400 group-hover:text-slate-600"}>
                      {getCategoryIcon(cat)}
                    </span>
                    <span>{label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                      isActive ? "bg-blue-50 text-blue-600" : "bg-slate-200/60 text-slate-500"
                    }`}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highly Creative & Simple Product Cards Grid with Proper Image Display */}
        {filteredProducts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((prod) => {
                const { active, format } = getProductQuickSpecs(prod, lang);
                return (
                  <motion.div
                    key={prod.id}
                    layout
                    variants={cardVariants}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                    onClick={() => setActiveProduct(prod)}
                    className="group flex flex-col justify-between bg-white rounded-[24px] border border-slate-100/80 shadow-[0_4px_25px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.08)] hover:border-blue-100/80 transition-all duration-500 cursor-pointer overflow-hidden relative h-full p-4"
                  >
                    {/* Proper Image Container - nested and rounded for perfect alignment and box containment */}
                    <div className="relative aspect-[4/3] w-full bg-slate-50/50 rounded-2xl border border-slate-100/60 flex items-center justify-center overflow-hidden group/pod">
                      
                      {/* Floating top-left category badge */}
                      {prod.badge ? (
                        <div className="absolute top-3 left-3 z-10 backdrop-blur-md bg-white/90 text-blue-900 border border-slate-200/40 shadow-sm text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {prod.badge[lang]}
                        </div>
                      ) : (
                        <div className="absolute top-3 left-3 z-10 backdrop-blur-md bg-white/90 text-slate-800 border border-slate-200/40 shadow-sm text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {lang === "en" ? "Medical Grade" : "ဆေးဘက်ဆိုင်ရာအဆင့်"}
                        </div>
                      )}

                      {/* Floating WHO-GMP active status tag */}
                      <div className="absolute top-3 right-3 z-10 backdrop-blur-md bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-sm text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{lang === "en" ? "WHO-GMP" : "GMP"}</span>
                      </div>

                      {/* Subtle backplate glow for the product package */}
                      <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover/pod:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {/* The Product Packaging Image: configured to fill the container perfectly without cropping or stretching */}
                      <img
                        src={prod.image}
                        alt={prod.name[lang]}
                        title={prod.name[lang]}
                        aria-label={prod.name[lang]}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Bottom Floating Product Name Overlay Banner directly on image */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 backdrop-blur-md bg-slate-900/80 border border-white/20 shadow-md text-white px-3 py-1.5 rounded-xl flex items-center justify-between pointer-events-none transition-all duration-300 group-hover:bg-blue-950/90">
                        <div className="flex items-center gap-1.5 overflow-hidden">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          <span className="text-[11px] font-bold truncate text-white tracking-wide">
                            {prod.name[lang].split("(")[0].trim()}
                          </span>
                        </div>
                        <span className="text-[9px] font-semibold text-blue-200 shrink-0 uppercase tracking-wider ml-1">
                          {lang === "en" ? "Portfolio" : "ထုတ်ကုန်"}
                        </span>
                      </div>

                      {/* Premium Sweep Light Effect on hover */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    </div>

                    {/* Elegant Content Info Section */}
                    <div className="mt-5 px-1 flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-blue-600 bg-blue-50/70 px-2.5 py-1 rounded-md uppercase tracking-wider">
                            {t.categoryMap[prod.category] ? t.categoryMap[prod.category][lang] : prod.category}
                          </span>
                          <span className="text-[9px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wide">
                            <ShieldCheck className="w-3 h-3 text-teal-500" />
                            <span>{lang === "en" ? "Registered" : "ခွင့်ပြုချက်ရ"}</span>
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug duration-300">
                          {prod.name[lang]}
                        </h3>

                        {/* Creative Minimalist Specs Info Sheet */}
                        <div className="pt-3 border-t border-slate-50 space-y-2 text-xs">
                          {active && (
                            <div className="flex justify-between items-start gap-4">
                              <span className="text-slate-400 font-bold shrink-0">{lang === "en" ? "Active" : "အစွမ်းထက်ဓာတ်"}</span>
                              <span className="text-slate-700 font-semibold text-right line-clamp-1">{active}</span>
                            </div>
                          )}
                          {format && (
                            <div className="flex justify-between items-start gap-4">
                              <span className="text-slate-400 font-bold shrink-0">{lang === "en" ? "Packaging" : "ထုပ်ပိုးမှု"}</span>
                              <span className="text-slate-700 font-semibold text-right line-clamp-1">{format}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* View specs interaction trigger */}
                      <div className="pt-5 mt-4 border-t border-slate-100/60 flex items-center justify-between text-xs font-black text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span className="uppercase tracking-widest text-[9px]">{t.viewSpecs[lang]}</span>
                        <div className="w-7 h-7 rounded-full bg-blue-50/70 text-blue-600 flex items-center justify-center group-hover:bg-[#1E5BB8] group-hover:text-white transition-all duration-300 shadow-sm">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center text-gray-400 font-medium">
            {lang === "en" ? "No products found matching your search criteria." : "ရှာဖွေမှုနှင့် ကိုက်ညီသော ထုတ်ကုန်မရှိပါ။"}
          </div>
        )}

      </div>

      {/* Product Spec Detail Sheet Modal */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100 relative"
            >
              {/* Cover top */}
              <div className="h-4 bg-gradient-to-r from-blue-600 to-teal-500" />
              
              {/* Close button */}
              <button
                id="close-spec-modal"
                onClick={() => setActiveProduct(null)}
                className="absolute top-8 right-6 p-1.5 rounded-lg bg-gray-50 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
              >
                <span className="sr-only">Close</span>
                <span className="block font-bold text-lg">✕</span>
              </button>

              <div className="p-8 space-y-6">
                
                {/* Product Title */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {activeProduct.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2.5 tracking-tight">
                      {activeProduct.name[lang]}
                    </h3>
                  </div>
                </div>

                <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/80 flex items-center justify-center p-6 sm:p-8">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name[lang]}
                    title={activeProduct.name[lang]}
                    aria-label={activeProduct.name[lang]}
                    className="max-h-full max-w-full object-contain drop-shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating product identifier overlay in modal */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 backdrop-blur-md bg-slate-900/85 border border-white/20 text-white px-4 py-2 rounded-xl flex items-center justify-between shadow-lg">
                    <span className="text-xs sm:text-sm font-bold text-white truncate">
                      {activeProduct.name[lang]}
                    </span>
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest shrink-0 ml-2">
                      Lorindale Portfolio
                    </span>
                  </div>
                </div>

                {/* Spec Sheets Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Left Column specs */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <h4 className="font-extrabold text-gray-900 text-xs sm:text-sm flex items-center mb-2.5">
                        <Pill className="w-4 h-4 mr-1.5 text-blue-500" />
                        <span>{t.ingredients[lang]}</span>
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-semibold">
                        {activeProduct.specifications[lang][0] || "Standard medical formulation"}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <h4 className="font-extrabold text-gray-900 text-xs sm:text-sm flex items-center mb-2.5">
                        <ShieldCheck className="w-4 h-4 mr-1.5 text-teal-500" />
                        <span>{t.clinicalData[lang]}</span>
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-semibold">
                        {activeProduct.specifications[lang][1] || "Prescribed by certified health professionals"}
                      </p>
                    </div>
                  </div>

                  {/* Right Column specs */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 h-full flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-gray-900 text-xs sm:text-sm flex items-center mb-2.5">
                          <Info className="w-4 h-4 mr-1.5 text-indigo-500" />
                          <span>{t.packaging[lang]}</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-500 font-semibold leading-normal">
                          {activeProduct.specifications[lang].slice(2).map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-1.5">
                              <span className="w-1 h-1 rounded-full bg-blue-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-[10px] font-bold text-teal-600 mt-4 bg-teal-50 px-2 py-1 rounded-md text-center">
                        ✓ Myanmar FDA Certified & Approved
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer buttons */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                  <button
                    id="spec-close-btn"
                    onClick={() => setActiveProduct(null)}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-extrabold tracking-wider uppercase text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    {lang === "en" ? "Close Specifications" : "ပိတ်ရန်"}
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveProduct(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-[#1E5BB8] to-[#184A9E] shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.01] transition-all text-center"
                  >
                    {t.inquireCTA[lang]}
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
