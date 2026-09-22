import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { fadeInUp, fadeIn, fadeInDown, slideInLeft, slideInRight, scaleIn } from './motion';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration,
  className = '',
  viewportAmount = 0.15,
  ...props
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'down':
        return fadeInDown;
      case 'left':
        return slideInLeft;
      case 'right':
        return slideInRight;
      case 'none':
        return fadeIn;
      case 'up':
      default:
        return fadeInUp;
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={variants}
      transition={{
        duration: duration || 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
