import React from "react";
import { CONTENT } from "../constants";
import { PageHeader } from "./PageHeader";
import { View } from "../types";

interface RegulatoryViewProps {
  setView: (view: View) => void;
}

export const RegulatoryView = ({ setView }: RegulatoryViewProps) => {
  const t = CONTENT;
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title={t.regAuditTitle} 
        subtitle={t.regAuditSub} 
        setView={setView}
      />
      <section className="py-32 px-8 md:px-16 text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-8 p-12 border border-black/5">
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.complianceTitle}</h3>
              <p className="text-black/60 leading-relaxed italic">{t.complianceDesc}</p>
            </div>
            <div className="space-y-8 p-12 border border-black/5">
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.legalFrameworkTitle}</h3>
              <p className="text-black/60 leading-relaxed italic">{t.legalFrameworkDesc}</p>
            </div>
            <div className="space-y-8 p-12 border border-black/5">
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.reportingTitle}</h3>
              <p className="text-black/60 leading-relaxed italic">{t.reportingDesc}</p>
            </div>
          </div>
          <div className="mt-32 p-16 bg-[#F8F9FA]">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30 mb-8 block">{t.globalStandard}</p>
            <p className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-4xl">
              {t.transparencyQuote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
