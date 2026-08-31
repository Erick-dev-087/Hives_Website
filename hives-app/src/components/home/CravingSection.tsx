'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { cardHover, imageZoom } from '@/lib/animations';
import HiveHoverHexagons from '@/components/ui/HiveHoverHexagons';

const cravingsList = [
  {
    title: 'Something Sweet',
    href: '/menu?craving=sweet',
    image: '/images/pastries/donuts_1.jpg',
  },
  {
    title: 'Something Cold',
    href: '/menu?craving=cold',
    image: '/images/icecrams_sundaes/icrecream.jpg',
  },
  {
    title: 'Something Creamy',
    href: '/menu?craving=creamy',
    image: '/images/youghurts/Youghut_1.jpg',
  },
  {
    title: 'Something to Celebrate',
    href: '/menu?craving=celebrate',
    image: '/images/cakes/Graduation_cake.png', // Or birthday cake
  },
  {
    title: 'Browse to find out what..',
    href: '/menu',
    image: '/images/coffee/sweet_black_coffee.webp',
  },
];

export default function CravingSection() {
  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What are you craving?"
          subtitle="Not sure what you want? Let your cravings lead the way."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cravingsList.map((craving, index) => (
            <ScrollReveal key={craving.title} delay={index * 0.1}>
              <Link href={craving.href} className="block group">
                <motion.div
                  className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-vanilla shadow-sm border border-hive/5"
                  whileHover={cardHover}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={imageZoom}
                  >
                    <Image
                      src={craving.image}
                      alt={craving.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-hive/90 via-hive/20 to-transparent" />

                  {/* Text */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold font-heading text-cream leading-tight group-hover:text-honey transition-colors">
                      {craving.title}
                    </h3>
                    
                    {/* Hover Arrow */}
                    <div className="mt-4 flex items-center text-honey opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <span className="text-sm font-semibold mr-2">Explore</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                  
                  <HiveHoverHexagons />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
