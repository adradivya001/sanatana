import React from 'react';
import { motion, type Variants } from 'framer-motion';

// ==========================================
// 1. GLOBAL EASINGS & DURATIONS (0.4s - 0.8s)
// ==========================================
export const TRANSITIONS = {
  default: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  smooth: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  slow: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  fast: { duration: 0.3, ease: 'easeOut' as const },
  spring: { type: 'spring' as const, stiffness: 380, damping: 28 },
};

// Alias for convenience
export const transitions = TRANSITIONS;

// ==========================================
// 2. CORE MOTION VARIANTS
// ==========================================

// Subtle Fade In
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITIONS.smooth,
  },
};

// Fade Up (Distance 24px - 30px)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.smooth,
  },
};

// Fade Down
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.smooth,
  },
};

// Slide In Left (Distance 25px - 35px)
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITIONS.smooth,
  },
};

// Slide In Right (Distance 25px - 35px)
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITIONS.smooth,
  },
};

// Scale In (Scale 0.96 -> 1)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITIONS.smooth,
  },
};

// Stagger Container
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Stagger Item (used inside StaggerContainer)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.smooth,
  },
};

// Card Lift & Pop variant
export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: TRANSITIONS.smooth,
  },
};
