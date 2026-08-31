'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import CategoryCard from '@/components/ui/CategoryCard';
import Button from '@/components/ui/Button';
import { categories } from '@/lib/products';

export default function ProductRangeSection() {
  // Show 6 main categories on the homepage
  const displayCategories = categories.slice(0, 6);

  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="There's a Lot in the Hive"
          subtitle="From celebration cakes to refreshing smoothies — discover everything we have to offer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {displayCategories.map((category, index) => (
            <CategoryCard
              key={category.slug}
              category={category}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/menu" variant="primary" showArrow>
            See the Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
