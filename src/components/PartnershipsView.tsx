import React from "react";
import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { CONTENT } from "../constants";
import { PageHeader } from "./PageHeader";
import { View } from "../types";
import { FORMSPREE_IDS } from "../lib/formspree";

interface PartnershipsViewProps {
  setView: (view: View) => void;
}

export const PartnershipsView = ({ setView }: PartnershipsViewProps) => {
  const t = CONTENT;
  const [state, handleSubmit] = useFormspree(FORMSPREE_IDS.partnerships);

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader title={t.partnerPageTitle} subtitle={t.partnerPageSub} setView={setView} />
      <section className="py-32 px-8 md:px-16 bg-[#F8F9FA] text-left">
        <div className="max-w-[800px] mx-auto">
          {state.succeeded ? (
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
                  <label htmlFor="entity" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formEntity}</label>
                  <input id="entity" name="entity" required type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                  <ValidationError prefix="Entity" field="entity" errors={state.errors} className="text-sm text-red-600" />
                </div>
                <div className="space-y-4">
                  <label htmlFor="contact" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formContact}</label>
                  <input id="contact" name="contact" required type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                  <ValidationError prefix="Contact" field="contact" errors={state.errors} className="text-sm text-red-600" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formEmail}</label>
                  <input id="email" name="email" required type="email" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-600" />
                </div>
                <div className="space-y-4">
                  <label htmlFor="sector" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formSector}</label>
                  <input id="sector" name="sector" required type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                  <ValidationError prefix="Sector" field="sector" errors={state.errors} className="text-sm text-red-600" />
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formMessage}</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-600" />
              </div>
              <button type="submit" disabled={state.submitting} className="btn-institutional w-full py-6 text-xl disabled:opacity-50">
                {state.submitting ? "…" : t.formSubmit}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
