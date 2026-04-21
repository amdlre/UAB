import React from "react";
import { ChevronRight } from "lucide-react";
import { CONTENT } from "../constants";
import { View } from "../types";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  setView: (view: View) => void;
}

export const PageHeader = ({ title, subtitle, setView }: PageHeaderProps) => (
  <div className="pt-48 pb-24 px-8 md:px-16 border-b border-black/5 bg-white">
    <div className="max-w-[1440px] mx-auto">
      <button 
        onClick={() => setView("home")}
        className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] mb-16 opacity-40 hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-3 h-3 rotate-180" />
        {CONTENT.backHome}
      </button>
      <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">{title}</h1>
      <p className="text-xl md:text-2xl font-light text-black/60 max-w-3xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
);
