'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Button from '@/components/ui/Button';
import BeeIcon from '@/components/icons/BeeIcon';
import { settleDown, beeFlyIn, beeFloat } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Subtle hexagon background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 800 600" aria-hidden="true">
          {[...Array(20)].map((_, i) => {
            const row = Math.floor(i / 5);
            const col = i % 5;
            const offsetX = row % 2 === 0 ? 0 : 80;
            const x = col * 160 + offsetX;
            const y = row * 140;
            return (
              <path
                key={i}
                d={`M${x + 40} ${y} L${x + 80} ${y + 23} L${x + 80} ${y + 69} L${x + 40} ${y + 92} L${x} ${y + 69} L${x} ${y + 23} Z`}
                fill="#FFDF18"
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-vanilla px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <BeeIcon size={18} />
              <span className="text-sm font-medium text-cocoa">Fresh from the Hive</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-hive leading-[1.1] tracking-tight">
              Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-honey to-gold">
                sweet
              </span>{' '}
              is waiting for you.
            </h1>

            <motion.p
              className="mt-6 text-lg text-warmgray max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Cakes, cupcakes, smoothies, yoghurt, ice cream and so much more.
              Freshly made daily at Hives Pastries, Thika.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <Button href="/menu" variant="primary" showArrow>
                Explore the Hive
              </Button>
              <Button href="https://wa.me/254759837429" variant="secondary">
                Order Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Food Composition */}
          <div className="relative h-[400px] sm:h-[480px] lg:h-[560px]">
            {/* Main hero cake */}
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] lg:w-[420px] aspect-square z-10 cursor-pointer"
              variants={settleDown}
              initial="hidden"
              animate="visible"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <Image
                src="/images/cakes/birthday_cakes/Birthday_cake.png"
                alt="Hives Birthday Cake — a stunning two-tier drip cake"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 420px"
                priority
              />
            </motion.div>

            {/* Secondary — Smoothie */}
            <motion.div
              className="absolute left-0 bottom-8 w-[160px] sm:w-[200px] aspect-[3/4] z-20 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ rotate: -5, scale: 1.05 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
            >
              <Image
                src="/images/smoothies/smoothie_1.jpg"
                alt="Fresh fruit smoothie"
                fill
                className="object-cover"
                sizes="200px"
              />
            </motion.div>

            {/* Tertiary — Cupcakes */}
            <motion.div
              className="absolute left-16 sm:left-20 top-4 w-[130px] sm:w-[160px] aspect-square z-20 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src="/images/cupcakes/cupcakes_2.jpg"
                alt="Decorated cupcakes"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>

            {/* Bee */}
            <motion.div
              className="absolute right-8 top-8 z-30"
              variants={beeFlyIn}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={beeFloat} animate="floating">
                <BeeIcon size={44} />
              </motion.div>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] lg:w-[480px] aspect-square rounded-full border-2 border-honey/15 -z-0" />
            <div className="absolute right-16 top-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] lg:w-[400px] aspect-square rounded-full border border-honey/10 -z-0" />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BeeIcon size={20} />
          </motion.div>
          <div className="w-px h-8 bg-gradient-to-b from-honey to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
