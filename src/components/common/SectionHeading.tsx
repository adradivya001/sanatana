import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
  dark = false
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[align];

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 flex flex-col ${alignmentClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 transition-all ${
            dark
              ? 'bg-white/10 text-amber-300 border border-white/15'
              : 'bg-school-surface text-school-primary border border-school-primary/15'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-school-secondary"></span>
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-school-main'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="text-school-secondary relative inline-block">
            {highlightText}
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-school-secondary/30 rounded-full"></span>
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-school-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
