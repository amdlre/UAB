import React from "react";
import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { CONTENT } from "../constants";
import { PageHeader } from "./PageHeader";
import { View } from "../types";
import { FORMSPREE_IDS } from "../lib/formspree";

interface JoinInquiryViewProps {
  mode: 'operator' | 'training';
  setView: (view: View) => void;
}

export const JoinInquiryView = ({ mode, setView }: JoinInquiryViewProps) => {
  const t = CONTENT;
  const isOperator = mode === 'operator';
  const formId = isOperator ? FORMSPREE_IDS.operator : FORMSPREE_IDS.training;
  const [state, handleSubmit] = useFormspree(formId);

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title={isOperator ? t.operatorFormTitle : t.trainingFormTitle}
        subtitle={t.joinFormSub}
        setView={setView}
      />
      <section className="py-32 px-8 md:px-16 bg-white text-left">
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
                <input type="hidden" name="application_type" value={isOperator ? "operator" : "training"} />

                <div className="space-y-4">
                  <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formName}</label>
                  <input id="name" name="name" required type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-600" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formEmail}</label>
                    <input id="email" name="email" required type="email" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-600" />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formPhone}</label>
                    <input id="phone" name="phone" required type="tel" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-sm text-red-600" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label htmlFor="resume" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formResume}</label>
                  <input id="resume" name="resume" required type="url" placeholder="https://linkedin.com/in/..." className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium" />
                  <ValidationError prefix="Resume" field="resume" errors={state.errors} className="text-sm text-red-600" />
                </div>

                {isOperator ? (
                  <>
                    <div className="space-y-4">
                      <label htmlFor="what_can_you_build" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formWhatCanYouBuild}</label>
                      <textarea id="what_can_you_build" name="what_can_you_build" required rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                      <ValidationError prefix="What can you build" field="what_can_you_build" errors={state.errors} className="text-sm text-red-600" />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="execution_example" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formExecutionExample}</label>
                      <textarea id="execution_example" name="execution_example" required rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                      <ValidationError prefix="Execution example" field="execution_example" errors={state.errors} className="text-sm text-red-600" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      <label htmlFor="why_join" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formWhyJoin}</label>
                      <textarea id="why_join" name="why_join" required rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                      <ValidationError prefix="Why join" field="why_join" errors={state.errors} className="text-sm text-red-600" />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="what_to_learn" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.formWhatToLearn}</label>
                      <textarea id="what_to_learn" name="what_to_learn" required rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-black transition-colors outline-none text-lg font-medium resize-none" />
                      <ValidationError prefix="What to learn" field="what_to_learn" errors={state.errors} className="text-sm text-red-600" />
                    </div>
                  </>
                )}

                <button type="submit" disabled={state.submitting} className="btn-institutional w-full py-6 text-xl disabled:opacity-50">
                  {state.submitting ? "…" : t.formSubmit}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
