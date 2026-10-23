import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';

interface ContactSectionProps {
  onOpenSSOT: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenSSOT }) => {
  const [copied, setCopied] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('help@aibrain.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#fbfbfa] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#dc2626] uppercase mb-4">
              0 4 / G E T  I N  T O U C H
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] mb-6">
              Build the next chapter<br />
              with us.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-lg mb-8">
              We welcome conversations with football organizations, researchers and 
              strategic partners interested in responsible, evidence-based 
              applications of AI.
            </p>

            <button
              onClick={() => setShowInquiryForm(!showInquiryForm)}
              className="px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider border border-neutral-300 hover:border-neutral-900 text-neutral-800 transition-colors cursor-pointer"
            >
              {showInquiryForm ? 'Hide Message Form' : 'Send Direct Message'}
            </button>
          </div>

          {/* Right Column: Contact Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200/80 shadow-xs flex flex-col divide-y divide-neutral-100">
              
              {/* Item 1: GENERAL & STRATEGIC INQUIRIES */}
              <div className="pb-8">
                <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                  GENERAL & STRATEGIC INQUIRIES
                </span>
                <div className="flex items-center justify-between group">
                  <a
                    href="mailto:help@aibrain.com"
                    className="text-xl sm:text-2xl font-bold text-neutral-900 hover:text-red-600 transition-colors inline-flex items-center gap-2"
                  >
                    <span>help@aibrain.com</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-red-600 transition-colors" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50 rounded-md transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Item 2: FOOTBALL APPLICATION */}
              <div className="py-8">
                <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                  FOOTBALL APPLICATION
                </span>
                <button
                  onClick={onOpenSSOT}
                  className="text-xl sm:text-2xl font-bold text-[#b91c1c] hover:text-[#991b1b] transition-colors inline-flex items-center gap-2 cursor-pointer group text-left"
                >
                  <span>Superstars of Tomorrow</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Item 3: Location */}
              <div className="pt-8">
                <p className="text-sm font-medium text-neutral-600">
                  Menlo Park, California, USA
                </p>
              </div>

            </div>

            {/* Optional Embedded Direct Message Form */}
            {showInquiryForm && (
              <div className="mt-6 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-md animate-in fade-in slide-in-from-top-4 duration-200">
                <h4 className="text-lg font-bold text-neutral-900 mb-1">
                  Start a Conversation
                </h4>
                <p className="text-xs text-neutral-500 mb-5">
                  Send a brief overview of your organization and collaboration interests.
                </p>

                {submitted ? (
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800 text-sm">
                    Thank you for your message. An AIBrain representative will contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Alex Rivera"
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@institution.edu"
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Organization / Club / Lab
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. European Football Academy / Stanford Medicine"
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Inquiry Details
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your research collaboration or pilot deployment..."
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
