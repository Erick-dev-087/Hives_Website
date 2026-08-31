'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import ScrollReveal from '@/components/motion/ScrollReveal';
import BeeIcon from '@/components/icons/BeeIcon';
import { MapPin, Truck } from 'lucide-react';

export default function DeliverySection() {
  const pathRef = useRef<HTMLDivElement>(null);
  const pathInView = useInView(pathRef, { once: true, amount: 0.5 });

  return (
    <section className="py-24 bg-vanilla/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              Delivery
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-hive leading-tight">
              Can&apos;t make it to Hives?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-honey to-gold">
                We&apos;ll come to you.
              </span>
            </h2>
            <p className="mt-4 text-warmgray text-lg">
              Enjoy your favourite Hives treats delivered fresh to your door within Thika Town.
            </p>
          </ScrollReveal>

          {/* Delivery path animation */}
          <div ref={pathRef} className="mt-16 relative flex items-center justify-center gap-4">
            {/* Origin — From Hives */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={pathInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-honey rounded-2xl flex items-center justify-center shadow-md">
                <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                  <path d="M32 4 L52 16 L52 40 L32 52 L12 40 L12 16 Z" fill="#111111" opacity="0.9"/>
                  <path d="M32 12 L44 20 L44 36 L32 44 L20 36 L20 20 Z" fill="#FFDF18"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-cocoa">From Hives</span>
            </motion.div>

            {/* Animated path */}
            <div className="flex-1 max-w-xs relative h-16">
              <svg
                className="w-full h-full"
                viewBox="0 0 300 60"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M 0 30 C 60 10, 100 50, 150 30 C 200 10, 240 50, 300 30"
                  stroke="#FFDF18"
                  strokeWidth="3"
                  strokeDasharray="8 6"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={pathInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                />
              </svg>

              {/* Bee following the path */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                initial={{ left: '0%', opacity: 0 }}
                animate={pathInView ? { left: '85%', opacity: 1 } : {}}
                transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
              >
                <BeeIcon size={28} />
              </motion.div>
            </div>

            {/* Destination */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={pathInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center shadow-md border-2 border-honey/20">
                <MapPin size={28} className="text-honey" />
              </div>
              <span className="text-sm font-semibold text-cocoa">You</span>
            </motion.div>
          </div>

          {/* Info cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: <Truck size={28} />, title: 'Fast and Free', desc: 'Within Thika Town' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: 'Fair Prices', desc: 'Quality at great value' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Fresh Always', desc: 'Made to order' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={0.1 * i}>
                <div className="bg-cream p-8 rounded-3xl shadow-sm border border-honey/10 hover:border-honey/30 transition-colors">
                  <div className="w-14 h-14 bg-honey/10 rounded-2xl flex items-center justify-center text-honey mb-5 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-hive text-xl">{item.title}</h3>
                  <p className="text-base text-warmgray mt-2">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
