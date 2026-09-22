import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { staggerContainer } from './motion';

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerChildren?: number;
  staggerDelay?: number; // Support alias
  delayChildren?: number;
  className?: string;
  viewportAmount?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildren = 0.08,
  staggerDelay,
  delayChildren = 0.05,
  className = '',
  viewportAmount = 0.1,
  ...props
}) => {
  const actualStagger = staggerDelay !== undefined ? staggerDelay : staggerChildren;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={staggerContainer(actualStagger, delayChildren)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
