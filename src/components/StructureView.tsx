import React from "react";
import { CONTENT } from "../constants";
import { PageHeader } from "./PageHeader";
import { View } from "../types";

interface StructureViewProps {
  setView: (view: View) => void;
}

export const StructureView = ({ setView }: StructureViewProps) => {
  const t = CONTENT;
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title={t.structureTitle} 
        subtitle={t.structureSub} 
        setView={setView}
      />
      <section className="py-32 px-8 md:px-16 text-left">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.tierLabel} 01</span>
              <h3 className="text-3xl font-black uppercase italic">{t.tier1Title}</h3>
              <p className="text-black/60 leading-relaxed">{t.tier1Desc}</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.tierLabel} 02</span>
              <h3 className="text-3xl font-black uppercase italic">{t.tier2Title}</h3>
              <p className="text-black/60 leading-relaxed">{t.tier2Desc}</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.tierLabel} 03</span>
              <h3 className="text-3xl font-black uppercase italic">{t.tier3Title}</h3>
              <p className="text-black/60 leading-relaxed">{t.tier3Desc}</p>
            </div>
          </div>
          <div className="bg-black text-white p-12 md:p-16 flex flex-col justify-between aspect-square md:aspect-auto">
            <h4 className="text-4xl font-black uppercase tracking-tighter leading-none">
              {t.govProtocol.split(' ').map((word, i) => <span key={i}>{word} <br /></span>)}
            </h4>
            <div className="space-y-8">
              <div className="border-t border-white/20 pt-8">
                <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">{t.centralSystems}</p>
                <p className="text-lg">{t.unifiedControls}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
