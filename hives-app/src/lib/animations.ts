'use client';

import { type Variants, type Easing } from 'motion/react';

// Easing presets
const smoothEase: Easing = [0.25, 0.46, 0.45, 0.94];

// ── Section Reveal ──
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' as Easing },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

// ── Stagger Container ──
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

// ── Card Interactions ──
export const cardHover = {
  y: -6,
  transition: { duration: 0.3, ease: smoothEase },
} as const;

export const cardTap = {
  y: -2,
  scale: 0.98,
  transition: { duration: 0.15 },
} as const;

export const imageZoom = {
  scale: 1.05,
  transition: { duration: 0.4, ease: smoothEase },
} as const;

// ── Button Interactions ──
export const buttonHover = {
  y: -2,
  boxShadow: '0 0 20px 4px rgba(255, 223, 24, 0.3)',
  transition: { duration: 0.25, ease: 'easeOut' as Easing },
} as const;

export const buttonTap = {
  y: 0,
  scale: 0.97,
  boxShadow: '0 0 8px 2px rgba(255, 223, 24, 0.15)',
  transition: { duration: 0.1 },
} as const;

// ── Bee Movement ──
export const beeFloat: Variants = {
  floating: {
    y: [0, -6, 0, -4, 0],
    x: [0, 2, 0, -2, 0],
    rotate: [0, 3, 0, -2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as Easing,
    },
  },
};

export const beeFlyIn: Variants = {
  hidden: { opacity: 0, x: 60, y: -40, scale: 0.5, rotate: -15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: [0.34, 1.56, 0.64, 1] as Easing,
      delay: 0.8,
    },
  },
};

// ── Plate / Physical ──
export const plateRotate: Variants = {
  initial: { rotate: -3 },
  animate: {
    rotate: 3,
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const settleDown: Variants = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
      mass: 0.8,
    },
  },
};

// ── Honey Trail (SVG path) ──
export const honeyTrailDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: 'easeInOut' as Easing },
      opacity: { duration: 0.3 },
    },
  },
};

// ── Underline Grow ──
export const underlineGrow: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.3, ease: smoothEase },
  },
};

// ── Number / Price Transition ──
export const numberSlide: Variants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' as Easing },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' as Easing },
  },
};

// ── Mask Reveal ──
export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: smoothEase },
  },
};
