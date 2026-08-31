'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/lib/products';

export default function SocialProofSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Hive is Buzzing"
          subtitle="Don't just take our word for it — hear what our customers have to say."
        />

        <div className="max-w-3xl mx-auto mt-12">
          {/* Testimonial carousel */}
          <div className="relative min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="w-full"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-honey/10 text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < testimonials[current].rating
                            ? 'fill-honey text-honey'
                            : 'fill-none text-warmgray/30'
                        }
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-hive text-lg leading-relaxed italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6">
                    <p className="font-heading font-semibold text-hive">
                      {testimonials[current].name}
                    </p>
                    {testimonials[current].product && (
                      <p className="text-sm text-warmgray mt-0.5">
                        Ordered: {testimonials[current].product}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-hive/10 flex items-center justify-center hover:border-honey hover:bg-honey/5 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="text-hive" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? 'bg-honey w-6' : 'bg-warmgray/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-hive/10 flex items-center justify-center hover:border-honey hover:bg-honey/5 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="text-hive" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
