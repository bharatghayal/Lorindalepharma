import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Language } from "../types";
import { STATS_DATA } from "../data";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  // Page and swipe direction tracking: [pageIndex, direction (-1 or 1)]
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: "moclate",
      image: "https://lh3.googleusercontent.com/d/1G0T42ZOIG6imjBkHs2MzpeBXYbjqcuKE",
      link: "#products",
      productName: { en: "Moclate 500mg", mm: "Moclate ၅၀၀မီလီဂရမ်" }
    },
    {
      id: "nanocoll",
      image: "https://lh3.googleusercontent.com/d/1VM_10tZiAzg7Ss_yvwWOCDYdfre-K5lE",
      link: "#products",
      productName: { en: "NanoColl Gel", mm: "NanoColl ဂျဲလ်" }
    },
    {
      id: "collofiber",
      image: "https://lh3.googleusercontent.com/d/1bH_7O4y-IfwVy5qVPUavWtL5HptODOm8",
      link: "#products",
      productName: { en: "Collofiber Particles", mm: "Collofiber အနာကျက်မှုန့်" }
    },
    {
      id: "tacmedi_05",
      image: "https://lh3.googleusercontent.com/d/1lWgK79R78DDD5tSI395RiEbFctJSTX5D",
      link: "#products",
      productName: { en: "Tacmedi 0.5mg", mm: "Tacmedi ၀.၅မီလီဂရမ်" }
    },
    {
      id: "tacmedi_1",
      image: "https://lh3.googleusercontent.com/d/1hnaZRxhioBRYG29PZwyHPw5XGcs0fVmz",
      link: "#products",
      productName: { en: "Tacmedi 1mg", mm: "Tacmedi ၁မီလီဂရမ်" }
    }
  ];

  // Mathematical wrap function to ensure correct index bound resolution
  const currentSlide = (page % slides.length + slides.length) % slides.length;

  const handleNext = () => {
    setPage([page + 1, 1]);
    setProgress(0);
  };

  const handlePrev = () => {
    setPage([page - 1, -1]);
    setProgress(0);
  };

  const selectSlide = (index: number) => {
    const dir = index > currentSlide ? 1 : -1;
    setPage([index, dir]);
    setProgress(0);
  };

  // Autoplay progression effect
  useEffect(() => {
    if (!isPlaying) {
      if (progressInterval.current) clearInterval(progressInterval.current);
      return;
    }

    const intervalTime = 100; // Tick every 100ms
    const totalDuration = 7000; // 7 seconds per slide
    const increment = (intervalTime / totalDuration) * 100;

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [isPlaying, page]);

  // Framer Motion Custom Animation Variants for absolute spatial transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : "0%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 220, damping: 26 },
        opacity: { duration: 0.45 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : dir > 0 ? "-100%" : "0%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 220, damping: 26 },
        opacity: { duration: 0.45 }
      }
    })
  };

  const nextSlideIdx = (currentSlide + 1) % slides.length;
  const prevSlideIdx = (currentSlide - 1 + slides.length) % slides.length;

  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-tr from-sky-50 via-white to-blue-50/60 pt-24 pb-12 select-none">
      
      {/* Dynamic 3D diagonal split shadow overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute right-0 top-0 w-[60%] h-full bg-gradient-to-b from-blue-500/5 via-transparent to-transparent transform skew-x-12 translate-x-12"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)" }}
        />
      </div>

      {/* 3D-like Wavy Wave Ribbon Lines (Top-Right) */}
      <div className="absolute top-0 right-0 w-full sm:w-[60%] h-[350px] sm:h-[450px] pointer-events-none z-0 opacity-80 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyber-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.4" /> {/* Soft Pink */}
              <stop offset="35%" stopColor="#a78bfa" stopOpacity="0.6" /> {/* Soft Purple */}
              <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.75" /> {/* Soft Blue */}
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" /> {/* Bright Cyan */}
            </linearGradient>
          </defs>
          {Array.from({ length: 24 }).map((_, i) => {
            const shift = i * 4.5;
            const strokeOpacity = 0.15 + (i * 0.025);
            return (
              <path
                key={i}
                d={`M ${300 + shift} -50 
                    C ${320 + shift} 80, ${420 - shift * 0.5} 120, ${480 + shift} 200 
                    C ${540 + shift} 280, ${580 - shift * 0.5} 350, ${680 + shift} 400`}
                stroke="url(#cyber-wave-grad)"
                strokeWidth="1.25"
                strokeOpacity={strokeOpacity}
              />
            );
          })}
        </svg>
      </div>

      {/* Soft Bottom-Left Watermark "Establishment" Text */}
      <div className="absolute bottom-4 left-6 pointer-events-none z-0 select-none opacity-[0.06] sm:opacity-[0.09]">
        <span className="font-sans text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-blue-900 uppercase">
          Establishment
        </span>
      </div>

      {/* Gentle blue ambient back-glow behind elements */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-blue-200/20 rounded-full filter blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-indigo-200/15 rounded-full filter blur-3xl pointer-events-none z-0" />
      
      {/* Centered Box Slider Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] xl:aspect-[21/9] rounded-3xl overflow-hidden border border-slate-200/50 shadow-xl bg-slate-100 group/slider"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          
          {/* Slides Carousel Wrapper */}
          <div className="absolute inset-0 w-full h-full">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full cursor-pointer select-none"
              >
                <a href={slides[currentSlide].link} className="block w-full h-full relative overflow-hidden bg-white">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].productName[lang]}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Elegant Floating Navigation Chevrons */}
          <button
            onClick={(e) => { e.preventDefault(); handlePrev(); }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-black/10 hover:bg-black/35 text-white flex items-center justify-center transition-all active:scale-95 shadow-lg backdrop-blur-[2px] opacity-0 group-hover/slider:opacity-100 focus/slider:opacity-100"
            aria-label="Previous Slide"
            title={`${lang === "en" ? "Back to" : "နောက်သို့"} ${slides[prevSlideIdx].productName[lang]}`}
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <button
            onClick={(e) => { e.preventDefault(); handleNext(); }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-black/10 hover:bg-black/35 text-white flex items-center justify-center transition-all active:scale-95 shadow-lg backdrop-blur-[2px] opacity-0 group-hover/slider:opacity-100 focus/slider:opacity-100"
            aria-label="Next Slide"
            title={`${lang === "en" ? "Next to" : "ရှေ့သို့"} ${slides[nextSlideIdx].productName[lang]}`}
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>



        </div>
      </div>


    </section>
  );
}
