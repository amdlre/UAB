import React, { useState } from "react";
import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { CONTENT } from "../constants";
import { PageHeader } from "./PageHeader";
import { View } from "../types";

interface JoinInquiryViewProps {
  mode: 'operator' | 'training';
  setView: (view: View) => void;
}

export const JoinInquiryView = ({ mode, setView }: JoinInquiryViewProps) => {
  const t = CONTENT;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isOperator = mode === 'operator';

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title={isOperator ? t.operatorFormTitle : t.trainingFormTitle} 
        subtitle={t.joinFormSub} 
        setView={setView}
      />
      <section className="py-32 px-8 md:px-16 bg-white text-left">
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
            <div className="space-y-32">
              <div className="space-y-16">
                <div className="space-y-4">
                  <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none text-black">
                    {isOperator ? t.operatorFormStatement : t.trainingFormStatement}
                  </p>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] pt-4 border-t border-black w-fit text-black">
                    {isOperator ? "Expectations" : "Focus Areas"}
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-6 text-left">
                  {(isOperator ? t.operatorFormExpectations : t.trainingFormExpectations).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-12 h-px bg-black group-hover:w-16 transition-all duration-500" />
                      <span className="text-xl md:text-2xl font-black tracking-tight text-black">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formName}</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formEmail}</label>
                    <input required type="email" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formPhone}</label>
                    <input required type="tel" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formResume}</label>
                  <input required type="url" placeholder="https://linkedin.com/in/..." className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                </div>

                {isOperator ? (
                  <>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formWhatCanYouBuild}</label>
                      <textarea required rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formExecutionExample}</label>
                      <textarea required rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formWhyJoin}</label>
                      <textarea required rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formWhatToLearn}</label>
                      <textarea required rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                    </div>
                  </>
                )}

                <button type="submit" className="btn-institutional w-full py-6 text-xl">
                  {t.formSubmit}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
