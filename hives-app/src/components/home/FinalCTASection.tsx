'use client';

import React from 'react';
import { motion } from 'motion/react';
import Button from '@/components/ui/Button';
import BeeIcon from '@/components/icons/BeeIcon';
import HexagonPattern from '@/components/icons/HexagonPattern';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-vanilla relative overflow-hidden">
      {/* Background hexagon pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <HexagonPattern className="w-full max-w-4xl" opacity={0.08} count={12} />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Bee entrance */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, y: -20, scale: 0.7 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 120, damping: 12 }}
        >
          <motion.div
            animate={{
              y: [0, -5, 0, -3, 0],
              rotate: [0, 3, 0, -2, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BeeIcon size={48} />
          </motion.div>
        </motion.div>

        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-hive leading-tight">
            Ready to find your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-honey to-gold">
              favourite?
            </span>
          </h2>

          <p className="mt-5 text-lg text-warmgray max-w-xl mx-auto">
            Browse our full menu, pick your treats, and order straight
            to your door. It&apos;s that simple.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              href="https://wa.me/254759837429"
              variant="primary"
              showArrow
            >
              Order Now
            </Button>
            <Button href="/menu" variant="secondary" showArrow>
              Explore the Menu
            </Button>
            <Button href="/#contact" variant="secondary">
              Visit the Hive
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
