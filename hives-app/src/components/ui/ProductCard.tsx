'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cardHover, cardTap, imageZoom } from '@/lib/animations';
import type { Product } from '@/types';
import HiveHoverHexagons from '@/components/ui/HiveHoverHexagons';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const displayPrice = product.priceRange
    ? `KES ${product.priceRange.min.toLocaleString()} – ${product.priceRange.max.toLocaleString()}`
    : `KES ${product.price.toLocaleString()}`;

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-hive/5 cursor-pointer"
      whileHover={cardHover}
      whileTap={cardTap}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-vanilla/30">
        <motion.div
          className="w-full h-full"
          whileHover={imageZoom}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </motion.div>

        {/* Yellow accent on hover */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-honey scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
        
        <HiveHoverHexagons />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-hive text-[15px] leading-tight line-clamp-2 group-hover:text-cocoa transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-warmgray line-clamp-1">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-cocoa text-[15px]">
            {displayPrice}
          </span>
          <span className="text-xs font-medium text-honey bg-honey/10 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View
          </span>
        </div>
      </div>
    </motion.div>
  );
}
