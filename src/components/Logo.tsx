import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  withMark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  withMark = true 
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {withMark && (
        <div 
          className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-lg tracking-tighter transition-transform hover:scale-105 ${
            isDark 
              ? 'bg-[#121214] text-white border border-[#27272a]' 
              : 'bg-white text-[#121214] border border-[#e4e4e7] shadow-sm'
          }`}
          aria-label="AIBrain logo symbol"
        >
          <span className="italic font-bold text-sm tracking-tight">ab</span>
        </div>
      )}
      <div className="flex flex-col">
        <span className={`text-lg font-bold tracking-tight leading-none ${isDark ? 'text-[#121214]' : 'text-white'}`}>
          AIBrain
        </span>
      </div>
    </div>
  );
};

export const FooterLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-2 select-none">
      <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white font-serif text-2xl italic font-semibold">
        ab
      </div>
      <span className="text-[11px] tracking-[0.25em] text-white/70 font-semibold uppercase">
        AIBrain Inc
      </span>
    </div>
  );
};
