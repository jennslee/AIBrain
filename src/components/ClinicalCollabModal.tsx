import React, { useState } from 'react';
import { X, HeartPulse, ShieldAlert, CheckCircle2, ArrowUpRight, Send } from 'lucide-react';

interface ClinicalCollabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClinicalCollabModal: React.FC<ClinicalCollabModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    role: '',
    institution: '',
    email: '',
    researchArea: '',
    notes: '',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#111827] text-white p-6 sm:p-8 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold tracking-wider uppercase mb-2">
              <span className="text-base leading-none">✳</span>
              <span>Clinical AI Initiative · In Development</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Clinical Trials AI Copilot
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Research collaboration on human-supervised trial workflow automation.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer Banner (as stated in PDF) */}
        <div className="bg-amber-50 border-b border-amber-200/80 px-6 sm:px-8 py-3.5 flex items-start gap-3 shrink-0">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-snug">
            <strong>Important Regulatory Notice:</strong> This initiative is at a development stage and is not presented as a clinical decision-making product. All copilot actions require human-in-the-loop validation by authorized principal investigators.
          </p>
        </div>

        {/* Body Form */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-lg font-bold">Research Collaboration Inquiry Submitted</h4>
              <p className="text-xs sm:text-sm text-emerald-700 mt-1 max-w-md mx-auto">
                Thank you for your interest. Our Clinical AI Research group will review your trial protocol requirements and follow up.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-md transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Principal Investigator / Researcher Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Dr. Jordan Mitchell"
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Institution / University / CRO
                  </label>
                  <input
                    type="text"
                    required
                    value={form.institution}
                    onChange={(e) => setForm({ ...form, institution: e.target.value })}
                    placeholder="e.g. Stanford University School of Medicine"
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Institutional Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jordan.mitchell@stanford.edu"
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Clinical Phase or Study Focus
                  </label>
                  <input
                    type="text"
                    value={form.researchArea}
                    onChange={(e) => setForm({ ...form, researchArea: e.target.value })}
                    placeholder="Phase II Oncology / Rare Diseases / IRB Prep"
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Workflow Objectives & Collaboration Scope
                </label>
                <textarea
                  rows={3}
                  required
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Outline trial workflow challenges (e.g., patient eligibility synthesis, multi-center compliance auditing)..."
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Collaboration Proposal</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="bg-neutral-50 px-6 sm:px-8 py-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 shrink-0">
          <span>AIBrain Clinical AI Research Unit</span>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-800 font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
