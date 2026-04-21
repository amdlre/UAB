/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { View } from "./types";
import { CONTENT, NAV_LINKS } from "./constants";
import { HomeView } from "./components/HomeView";
import { StructureView } from "./components/StructureView";
import { RegulatoryView } from "./components/RegulatoryView";
import { StrategyViewDetail } from "./components/StrategyViewDetail";
import { PartnershipsView } from "./components/PartnershipsView";
import { JoinInquiryView } from "./components/JoinInquiryView";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-white font-sans text-left" dir="ltr">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || view !== "home" ? "bg-white/90 backdrop-blur-md py-6 border-b border-black/5" : "bg-transparent py-10"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex justify-between items-center">
          <button onClick={() => setView("home")} className="font-black tracking-[-0.05em] text-2xl uppercase mr-auto text-black">
            {t.brand}
          </button>
          
          <div className="hidden md:flex items-center gap-12">
            {view === "home" && NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => {
                  if (link.href === "#partnerships") {
                    e.preventDefault();
                    setView("partnerships");
                  }
                }}
                className="nav-link-institutional"
              >
                {link.name}
              </a>
            ))}
            {view !== "home" && (
               <button onClick={() => setView("home")} className="nav-link-institutional">
                 {t.main}
               </button>
            )}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-black">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-32 px-8 md:hidden overflow-y-auto">
          <div className="flex flex-col space-y-8">
            {view === "home" && NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href === "#partnerships") {
                    e.preventDefault();
                    setView("partnerships");
                  }
                  setIsMenuOpen(false);
                }}
                className="text-4xl font-black uppercase tracking-tighter text-black"
              >
                {link.name}
              </a>
            ))}
            {view !== "home" && (
                <button onClick={() => { setView("home"); setIsMenuOpen(false); }} className="text-4xl font-black uppercase tracking-tighter text-left text-black">
                  {t.home}
                </button>
            )}
          </div>
        </div>
      )}

      {/* Main Content Areas */}
      <main>
        {view === "home" && <HomeView setView={setView} />}
        {view === "structure" && <StructureView setView={setView} />}
        {view === "regulatory" && <RegulatoryView setView={setView} />}
        {view === "strategy" && <StrategyViewDetail setView={setView} />}
        {view === "partnerships" && <PartnershipsView setView={setView} />}
        {view === "join-operator" && <JoinInquiryView mode="operator" setView={setView} />}
        {view === "join-training" && <JoinInquiryView mode="training" setView={setView} />}
      </main>

      {/* Footer */}
      <footer className="pt-8 pb-24 bg-white border-t border-black/5 px-8 md:px-16 text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
            <div className="md:col-span-6">
              <button 
                onClick={() => setView("home")}
                className="font-black text-3xl uppercase tracking-tighter mb-8 text-left text-black"
              >
                {t.brand}
              </button>
              <p className="text-black/40 font-bold text-[11px] uppercase tracking-widest max-w-sm">
                {t.footerCaption}
              </p>
            </div>
            <div className="md:col-span-3">
              <h5 className="font-bold text-[11px] uppercase tracking-[0.3em] mb-8 text-black/30 text-left">{t.jurisdictionTag}</h5>
              <div className="space-y-3 text-sm font-bold uppercase text-left text-black">
                <p>{t.locNY}</p>
                <p>{t.locRIY}</p>
                <p>{t.locDUB}</p>
              </div>
            </div>
            <div className="md:col-span-3">
              <h5 className="font-bold text-[11px] uppercase tracking-[0.3em] mb-8 text-black/30 text-left text-black">{t.intelligenceTag}</h5>
              <div className="space-y-3 text-sm font-bold uppercase text-left text-black">
                <button onClick={() => setView("structure")} className="block hover:opacity-50 transition-opacity text-left">
                  {t.intel1}
                </button>
                <button onClick={() => setView("regulatory")} className="block hover:opacity-50 transition-opacity text-left">
                  {t.intel2}
                </button>
                <button onClick={() => setView("strategy")} className="block hover:opacity-50 transition-opacity text-left">
                  {t.intel3}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-black/5 gap-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">
              {t.copyright}
            </p>
            <div className="flex space-x-12 text-black">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">LinkedIn</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">X</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
