import React from 'react';
import { X, Bot, MessageSquare, Gamepad2, Sparkles, Award } from 'lucide-react';

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchiveModal: React.FC<ArchiveModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const earlierInnovations = [
    {
      icon: Bot,
      title: 'Tyche Smart Robot',
      tag: 'Robotics & CES Award Winner',
      period: '2014 – 2018',
      description: 'An AI-powered smart robot for children and education powered by a smartphone brain. Won the prestigious CES Innovation Award, demonstrating real-time visual tracking, autonomous navigation, and emotional IQ.',
    },
    {
      icon: MessageSquare,
      title: 'Daisy Conversational Agent',
      tag: 'Conversational AI',
      period: '2016 – 2020',
      description: 'A multi-turn conversational AI companion engineered with persistent episodic memory, allowing long-term dialogue continuity and empathetic interaction.',
    },
    {
      icon: Gamepad2,
      title: 'Futurable & Cognitive Gaming',
      tag: 'Interactive Simulation',
      period: '2015 – 2021',
      description: 'Simulated worlds and intelligent chess engines powered by autonomous non-player characters with intrinsic motivation and memory graphs.',
    },
    {
      icon: Award,
      title: 'AI Education & STEM Kits',
      tag: 'Global Education',
      period: '2017 – 2022',
      description: 'Hands-on curriculum and programmable hardware kits teaching high school and university students the principles of cognitive artificial intelligence.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#18191c] text-white p-6 sm:p-8 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-600/30 border border-red-500/30 text-red-300 text-[11px] font-semibold tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Earlier Innovations Archive</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Pioneering Human-Centered AI
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-xl">
              From early smartphone robotics to natural dialogue agents, exploring AIBrain&apos;s technological heritage.
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

        {/* Content List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {earlierInnovations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-neutral-200/90 bg-neutral-50/50 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-red-100/70 text-red-700 rounded-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500">
                        {item.period}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                      {item.tag}
                    </span>
                    <h4 className="text-base font-bold text-neutral-900 mt-0.5 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-neutral-100 text-xs text-neutral-600 leading-relaxed">
            <strong>Historical Foundation:</strong> Under the leadership of Dr. Richard H. Shinn, these early experiments established the core tenets of AIBrain&apos;s current focus: grounded cognitive reasoning, verifiable episodic memory, and human-in-the-loop decision making now applied to Sports Intelligence and Clinical Research.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-neutral-50 px-6 sm:px-8 py-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 shrink-0">
          <span>AIBrain Inc. Innovation Archive</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
