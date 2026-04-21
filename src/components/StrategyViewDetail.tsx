import React from "react";
import { CONTENT } from "../constants";
import { PageHeader } from "./PageHeader";
import { View } from "../types";

interface StrategyViewDetailProps {
  setView: (view: View) => void;
}

export const StrategyViewDetail = ({ setView }: StrategyViewDetailProps) => {
  const t = CONTENT;
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader 
        title={t.assetStrategyTitle} 
        subtitle={t.assetStrategySub} 
        setView={setView}
      />
      <section className="py-32 px-8 md:px-16 text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div className="space-y-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">{t.investPhilosophy}</h2>
              <div className="space-y-8">
                <p className="text-xl font-medium leading-relaxed">{t.philosophy1}</p>
                <p className="text-xl font-medium leading-relaxed">{t.philosophy2}</p>
                <p className="text-xl font-medium leading-relaxed">{t.philosophy3}</p>
                <p className="text-xl font-medium leading-relaxed">{t.philosophy4}</p>
              </div>
            </div>
            <div className="space-y-12 py-16">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-40">{t.capDeploymentTitle}</p>
                <p className="text-lg leading-relaxed font-light">{t.capDeploymentDesc}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-40">{t.riskMgmtTitle}</p>
                <p className="text-lg leading-relaxed font-light">{t.riskMgmtDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
