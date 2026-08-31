'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = '',
  light = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <motion.h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight ${
          light ? 'text-cream' : 'text-hive'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {title}
      </motion.h2>

      {/* Decorative honey line */}
      <motion.div
        className={`h-1 bg-honey rounded-full mt-4 ${centered ? 'mx-auto' : ''}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: 64 } : { width: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      />

      {subtitle && (
        <motion.p
          className={`mt-4 text-lg md:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-cream/80' : 'text-warmgray'
          }`}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
