import React, { useState } from "react";
import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { CONTENT } from "../constants";
import { PageHeader } from "./PageHeader";
import { View } from "../types";

interface PartnershipsViewProps {
  setView: (view: View) => void;
}

export const PartnershipsView = ({ setView }: PartnershipsViewProps) => {
  const t = CONTENT;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader title={t.partnerPageTitle} subtitle={t.partnerPageSub} setView={setView} />
      <section className="py-32 px-8 md:px-16 bg-[#F8F9FA] text-left">
        <div className="max-w-[800px] mx-auto">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black text-white p-12 md:p-20 text-center space-y-8"
            >
              <Shield className="w-16 h-16 mx-auto mb-8" />
              <h3 className="text-3xl font-black uppercase italic">{t.formSuccess}</h3>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formEntity}</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formContact}</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formEmail}</label>
                  <input required type="email" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formSector}</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formMessage}</label>
                <textarea required rows={5} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
              </div>
              <button type="submit" className="btn-institutional w-full py-6 text-xl">
                {t.formSubmit}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
