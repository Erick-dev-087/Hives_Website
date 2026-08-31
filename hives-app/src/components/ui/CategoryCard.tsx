'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cardHover, imageZoom } from '@/lib/animations';
import type { CategoryInfo } from '@/types';

interface CategoryCardProps {
  category: CategoryInfo;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={`/menu?category=${category.slug}`}>
        <motion.div
          className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-sm"
          whileHover={cardHover}
        >
          {/* Background image */}
          <motion.div className="absolute inset-0" whileHover={imageZoom}>
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-hive/80 via-hive/30 to-transparent" />

          {/* Yellow accent bar */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-honey scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            <h3 className="text-cream text-xl font-bold font-heading tracking-tight">
              {category.name}
            </h3>
            <p className="text-cream/70 text-sm mt-1 line-clamp-1">
              {category.description}
            </p>

            {/* Arrow on hover */}
            <motion.div
              className="absolute bottom-5 right-5 w-8 h-8 bg-honey rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              initial={{ x: -8, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              <ArrowRight size={16} className="text-hive" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
