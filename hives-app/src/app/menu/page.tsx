'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import {
  products,
  categories,
  getProductsByCategory,
  getProductsByCraving,
  searchProducts,
} from '@/lib/products';
import type { ProductCategory, CravingType } from '@/types';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const cravings: { key: CravingType; label: string; description: string }[] = [
  { key: 'sweet', label: 'Something Sweet', description: 'Cakes, cupcakes, pastries' },
  { key: 'cold', label: 'Something Cold', description: 'Ice cream, smoothies' },
  { key: 'creamy', label: 'Something Creamy', description: 'Yoghurt, milkshakes' },
  { key: 'celebrate', label: 'Something to Celebrate', description: 'Birthday, graduation cakes' },
];

function MenuContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeCraving, setActiveCraving] = useState<CravingType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Read craving from URL on initial load
  useEffect(() => {
    const cravingParam = searchParams.get('craving') as CravingType;
    if (cravingParam && cravings.some(c => c.key === cravingParam)) {
      setTimeout(() => {
        setActiveCraving(cravingParam);
        setActiveCategory('all');
      }, 0);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery) {
      result = searchProducts(searchQuery);
    } else if (activeCraving) {
      result = getProductsByCraving(activeCraving);
    } else if (activeCategory !== 'all') {
      result = getProductsByCategory(activeCategory);
    }

    return result;
  }, [activeCategory, activeCraving, searchQuery]);

  const handleCravingClick = (craving: CravingType) => {
    if (activeCraving === craving) {
      setActiveCraving(null);
    } else {
      setActiveCraving(craving);
      setActiveCategory('all');
      setSearchQuery('');
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setActiveCraving(null);
    setSearchQuery('');
  };

  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          title="Our Menu"
          subtitle="From celebration cakes to refreshing smoothies — find your next favourite."
        />

        {/* Craving Filters */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-warmgray uppercase tracking-wider mb-4 text-center">
            What are you craving?
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cravings.map((craving) => (
              <button
                key={craving.key}
                onClick={() => handleCravingClick(craving.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCraving === craving.key
                    ? 'bg-honey text-hive shadow-md'
                    : 'bg-white text-warmgray border border-hive/10 hover:border-honey'
                }`}
              >
                {craving.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveCraving(null);
                setActiveCategory('all');
              }}
              className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-hive/10 text-hive placeholder-warmgray/50 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-warmgray hover:text-hive cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex gap-2 min-w-max justify-center">
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'all' && !activeCraving
                  ? 'bg-hive text-cream'
                  : 'bg-white text-warmgray border border-hive/10 hover:border-honey'
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.slug && !activeCraving
                    ? 'bg-hive text-cream'
                    : 'bg-white text-warmgray border border-hive/10 hover:border-honey'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-warmgray mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          {activeCraving && ` for "${cravings.find((c) => c.key === activeCraving)?.label}"`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeCraving}-${searchQuery}`}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.4 }}
              >
                <Link href={`/menu/${product.slug}`}>
                  <ProductCard product={product} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-warmgray text-lg">No products found.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveCraving(null);
                setSearchQuery('');
              }}
              className="mt-4 text-honey font-medium hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="pt-24 pb-16 bg-cream min-h-screen text-center"><p>Loading menu...</p></div>}>
      <MenuContent />
    </Suspense>
  );
}
