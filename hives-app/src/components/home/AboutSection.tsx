'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/motion/ScrollReveal';
import Button from '@/components/ui/Button';
import { motion, useInView } from 'motion/react';

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div ref={imageRef} className="relative">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={imageInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/images/cakes/themed_cakes/cake_5_themed.jpg"
                alt="Beautifully decorated Hives cake"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Overlapping accent image */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 sm:w-40 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-cream z-10"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={imageInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Image
                src="/images/icecrams_sundaes/icecream_2.jpg"
                alt="Hives ice cream"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>

            {/* Honey accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-honey/10 rounded-full -z-10" />
          </div>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-hive leading-tight">
                We&apos;re more than just a bakery.
              </h2>

              {/* Decorative honey line */}
              <div className="w-16 h-1 bg-honey rounded-full mt-5" />

              <p className="mt-6 text-warmgray leading-relaxed text-lg">
                Step into Hives Pastries, where every visit is a delightful experience
                filled with rich flavours and warm moments. Located in the heart of Thika,
                our shop is a paradise for dessert lovers.
              </p>
              <p className="mt-4 text-warmgray leading-relaxed">
                From our signature cakes and creamy yoghurts to refreshing smoothies and
                indulgent ice cream, we craft every treat with passion. Whether you&apos;re
                celebrating a milestone or simply treating yourself, there&apos;s always
                something sweet waiting for you at the Hive.
              </p>

              <div className="mt-8">
                <Button href="/#contact" variant="secondary" showArrow>
                  Visit the Hive
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
