import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CONTENT, STRATEGY, VERTICALS } from "../constants";
import { View } from "../types";

interface HomeViewProps {
  setView: (view: View) => void;
}

export const HomeView = ({ setView }: HomeViewProps) => {
  const t = CONTENT;
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-64 pb-32 md:pt-80 md:pb-48 px-8 md:px-16 overflow-hidden text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10vw] md:text-[8vw] leading-[0.85] font-black tracking-[-0.06em] text-black uppercase mb-16"
            >
              Unified <br /> Asset Bureau
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="md:col-span-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                   <div className="md:col-span-7">
                    <p className="text-2xl md:text-3xl font-medium text-black/80 leading-snug mb-8 tracking-tight">
                      {t.heroSubtitle}
                    </p>
                    <p className="text-lg font-bold uppercase tracking-[0.2em] text-black/40 mb-12">
                      {t.heroSupport}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <a href="#portfolio" className="btn-institutional inline-flex items-center justify-center">
                        {t.exploreBtn}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                      <button onClick={() => setView("partnerships")} className="btn-institutional-outline inline-flex items-center justify-center">
                        {t.partnerBtn}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-56 bg-black text-white px-8 md:px-16 font-sans">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] opacity-40">{t.aboutTag}</span>
            </div>
            <div className="md:col-span-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="space-y-12"
              >
                <p className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight">
                  {t.aboutPara1}
                </p>
                <p className="text-xl md:text-2xl font-light opacity-60 leading-relaxed max-w-3xl">
                  {t.aboutPara2}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-32 md:py-56 px-8 md:px-16 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] mb-6 block text-black/30">{t.methodTag}</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{t.strategyTitle}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5">
            {STRATEGY.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 md:p-16 space-y-12"
              >
                <div className="w-14 h-14 bg-black flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="space-y-6 text-left">
                  <h3 className="text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                  <p className="text-black/60 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 md:py-56 px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 text-left">
            <div className="lg:col-span-12 xl:col-span-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block text-black/30">{t.portfolioTag}</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">{t.portfolioTitle}</h2>
            </div>
            <div className="lg:col-span-12 xl:col-span-7 xl:pt-24">
              <p className="text-xl md:text-2xl font-medium text-black/60 leading-relaxed max-w-2xl">
                {t.portfolioDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
            {VERTICALS.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white group p-10 md:p-14 border border-transparent hover:border-black/5 institutional-grid cursor-pointer flex flex-col justify-between min-h-[400px] text-left"
              >
                <div className="flex justify-between items-start mb-24">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-30 group-hover:opacity-100 transition-all duration-300">
                    <span className="hidden sm:inline">{t.explorePlatformBtn}</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{item.name}</h3>
                  <p className="text-black/50 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="partnerships" className="py-32 md:py-64 bg-[#F8F9FA] px-8 md:px-16 text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] mb-8 block text-black/30">{t.inquiriesTag}</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-[-0.05em] mb-16 leading-none"> {t.partnershipsTitle} </h2>
            <p className="text-2xl md:text-3xl font-light text-black/70 mb-20 leading-snug">
              {t.partnershipsDesc}
            </p>
            <button onClick={() => setView("partnerships")} className="btn-institutional text-xl">
              {t.contactBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="pt-32 pb-12 md:pt-64 md:pb-16 bg-white border-t border-black/5 px-8 md:px-16 text-left">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 block text-black">{t.joinTag}</span>
          
          <div className="mb-24 space-y-6">
            <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none italic text-black">
              {t.joinIntro}
            </p>
            <p className="text-2xl md:text-4xl font-medium leading-[1.1] text-black">
              {t.joinIntroSupport}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
            {/* Path 1: Operator */}
            <div className="bg-white p-12 md:p-16 space-y-12 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{t.joinEmploymentSubtitle}</span>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{t.joinEmploymentTitle}</h3>
                <p className="text-lg font-medium text-black/50 leading-relaxed whitespace-pre-line">
                  {t.joinEmploymentText}
                </p>
              </div>
              <div className="pt-8">
                <button 
                  onClick={() => setView("join-operator")}
                  className="nav-link-institutional font-black text-sm uppercase tracking-widest inline-flex items-center gap-2 group border-b border-black pb-1"
                >
                  {t.joinEmploymentCTA}
                </button>
              </div>
            </div>

            {/* Path 2: Training */}
            <div className="bg-white p-12 md:p-16 space-y-12 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{t.joinTrainingSubtitle}</span>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{t.joinTrainingTitle}</h3>
                <p className="text-lg font-medium text-black/50 leading-relaxed whitespace-pre-line">
                  {t.joinTrainingText}
                </p>
              </div>
              <div className="pt-8">
                <button 
                  onClick={() => setView("join-training")}
                  className="nav-link-institutional font-black text-sm uppercase tracking-widest inline-flex items-center gap-2 group border-b border-black pb-1"
                >
                  {t.joinTrainingCTA}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
