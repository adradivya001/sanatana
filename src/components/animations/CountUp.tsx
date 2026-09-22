import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: string; // e.g. "1500+", "98%", "100+", "15+"
  duration?: number; // duration in seconds
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  duration = 1.8,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Extract number and affix
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = value.substring(0, value.indexOf(numericMatch ? numericMatch[0] : ''));
  const suffix = value.substring((value.indexOf(numericMatch ? numericMatch[0] : '') || 0) + (numericMatch ? numericMatch[0].length : 0));

  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let startTimestamp: number | null = null;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      
      // Smooth ease-out cubic curve
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(easeOutProgress * targetNumber);
      
      setCurrentCount(val);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentCount(targetNumber);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? currentCount : 0}
      {suffix}
    </span>
  );
};
