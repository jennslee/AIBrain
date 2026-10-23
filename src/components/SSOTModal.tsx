import React, { useState } from 'react';
import { X, Trophy, Activity, Users, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface SSOTModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SSOTModal: React.FC<SSOTModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'pilot'>('overview');
  const [pilotSubmitted, setPilotSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#141517] text-white p-6 sm:p-8 flex items-start justify-between relative overflow-hidden shrink-0">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-red-600/30 border border-red-500/40 text-red-300 text-[11px] font-semibold tracking-wider uppercase mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>Flagship Sports AI Application</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Superstars of Tomorrow (SSOT)
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-xl">
              Personalized football development connecting structured training, 
              progress evidence and the complementary strengths of AI and human coaches.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors relative z-10 shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-200 px-6 sm:px-8 bg-neutral-50/70 shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Core Architecture
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'features'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Tactical & Biometric Modules
          </button>
          <button
            onClick={() => setActiveTab('pilot')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'pilot'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Academy Pilot Inquiry
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-red-600 mb-2">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">1. Structured Evidence</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Continuous tracking of drill execution, spatial positioning, and touch consistency.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-red-600 mb-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">2. Coach Empowerment</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    AI synthesizes video and sensor telemetry, freeing coaches to focus on mentor intuition.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-red-600 mb-2">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">3. Player Longevity</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Fatigue index modeling and asymmetric load detection to prevent youth strain injuries.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-neutral-900 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-neutral-400">PRACTICE → PROGRESS ENGINE</span>
                  <span className="text-xs font-semibold text-emerald-400">Active Pipeline</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  By pairing cognitive AI models with professional football methodology, SSOT builds an unbroken developmental log from grassroots academy play up to elite professional scouting.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-neutral-200 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Tactical Vision & Decision IQ</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Evaluates player field awareness, scanning frequency before reception, and expected pass completion under defensive press.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Adaptive Drill Generation</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Dynamically crafts personalized training sessions based on individual weak-foot proficiency, agility response times, and game week stamina.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Coach & Scout Dossiers</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Instant shareable telemetry reports highlighting developmental velocity, work rate index, and peer benchmark curves.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pilot' && (
            <div>
              {pilotSubmitted ? (
                <div className="p-6 text-center bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold">Pilot Request Received</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Our sports intelligence team will reach out to schedule an interactive evaluation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setPilotSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Club / Academy Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bay Area Youth FC"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Contact Name & Title
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Coach Sarah Jenkins"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@bayyouthfc.org"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Player Count & Age Group
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 120 players across U12–U18 academy"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Academy Pilot Application
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-neutral-50 px-6 sm:px-8 py-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 shrink-0">
          <span>Superstars of Tomorrow · AIBrain Sports AI</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
