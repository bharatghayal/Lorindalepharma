/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Language } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import CoreValues from "./components/CoreValues";
import Services from "./components/Services";
import Products from "./components/Products";
import Distribution from "./components/Distribution";
import Partners from "./components/Partners";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CustomCursor from "./components/CustomCursor";
import ScrollExperience from "./components/ScrollExperience";

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-blue-600 selection:text-white">
      {/* Premium Scroll Progress and To-Top Experience */}
      <ScrollExperience />

      {/* Premium Custom Mouse Cursor Experience */}
      <CustomCursor />

      {/* Sticky Top Header Navigation */}
      <Navbar lang={lang} setLang={setLang} onSearchSelect={setSelectedCategory} />

      {/* Main Corporate Sections */}
      <main>
        {/* Hero Segment */}
        <Hero lang={lang} />

        {/* Corporate About Us */}
        <About lang={lang} />

        {/* Vision & Mission Core Objectives */}
        <VisionMission lang={lang} />

        {/* 6 Core Pillars of Excellence */}
        <CoreValues lang={lang} />

        {/* Clinical Services Directory */}
        <Services lang={lang} />

        {/* Multi-category Products Catalogue */}
        <Products
          lang={lang}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Interactive Logistics Distribution Map */}
        <Distribution lang={lang} />

        {/* Global Partner Carousel */}
        <Partners lang={lang} />

        {/* Team Training & Scientific Development */}
        <Training lang={lang} />

        {/* Contact form and priority consultations booking */}
        <Contact lang={lang} />
      </main>

      {/* Corporate footer block with directory links */}
      <Footer lang={lang} />

      {/* Floating AI Consultation Advisor powered by Gemini */}
      <Chatbot lang={lang} />
    </div>
  );
}
