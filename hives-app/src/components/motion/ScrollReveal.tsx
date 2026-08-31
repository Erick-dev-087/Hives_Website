'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  threshold = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const directionMap = {
    up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  };

  const variants = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
