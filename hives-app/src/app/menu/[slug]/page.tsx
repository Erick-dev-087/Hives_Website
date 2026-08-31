'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import { getProductBySlug, products } from '@/lib/products';
import { useOrder } from '@/lib/useOrder';
import HiveHoverHexagons from '@/components/ui/HiveHoverHexagons';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const { addItem, sendToWhatsApp, totalItems } = useOrder();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [cakeMessage, setCakeMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  // Initialize default options
  React.useEffect(() => {
    if (product?.options) {
      const defaults: Record<string, string> = {};
      product.options.forEach((opt) => {
        defaults[opt.label] = opt.values[0];
      });
      setTimeout(() => setSelectedOptions(defaults), 0);
    }
  }, [product]);

  // Calculate dynamic price
  const currentPrice = useMemo(() => {
    if (!product) return 0;
    let price = product.price;

    if (product.options) {
      for (const option of product.options) {
        const selectedValue = selectedOptions[option.label];
        if (selectedValue && option.priceModifiers?.[selectedValue] !== undefined) {
          if (option.label === 'Size' || option.label === 'Pack Size' || option.label === 'Type') {
            price = option.priceModifiers[selectedValue];
          } else {
            price += option.priceModifiers[selectedValue];
          }
        }
      }
    }

    return price;
  }, [product, selectedOptions]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center min-h-screen bg-cream">
        <h1 className="text-2xl font-heading font-bold text-hive">Product not found</h1>
        <Link href="/menu" className="text-honey hover:underline mt-4 inline-block">
          Back to Menu
        </Link>
      </div>
    );
  }

  const imageList = product.images || [product.image];

  const handleAddToOrder = () => {
    addItem(product, selectedOptions, cakeMessage || undefined);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const handleOrderNow = () => {
    addItem(product, selectedOptions, cakeMessage || undefined);
    setTimeout(sendToWhatsApp, 100);
  };

  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm text-warmgray hover:text-hive transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div>
            <motion.div
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm"
              key={selectedImage}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={imageList[selectedImage]}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <HiveHoverHexagons />
            </motion.div>

            {/* Thumbnails */}
            {imageList.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {imageList.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer transition-all ${
                      i === selectedImage
                        ? 'ring-2 ring-honey ring-offset-2'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              {product.category.replace('-', ' & ')}
            </span>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold font-heading text-hive">
              {product.name}
            </h1>
            <p className="mt-3 text-warmgray text-lg">{product.description}</p>

            {/* Price */}
            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPrice}
                  className="text-3xl font-bold text-cocoa"
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  KES {(currentPrice * quantity).toLocaleString()}
                </motion.div>
              </AnimatePresence>
              {quantity > 1 && (
                <p className="text-sm text-warmgray mt-1">
                  KES {currentPrice.toLocaleString()} each
                </p>
              )}
            </div>

            {/* Options */}
            {product.options && (
              <div className="mt-8 space-y-6">
                {product.options.map((option) => (
                  <div key={option.label}>
                    <label className="block text-sm font-semibold text-hive mb-2">
                      {option.label}
                      {option.priceModifiers && (
                        <span className="font-normal text-warmgray ml-1">(affects price)</span>
                      )}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => (
                        <button
                          key={value}
                          onClick={() =>
                            setSelectedOptions((prev) => ({ ...prev, [option.label]: value }))
                          }
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                            selectedOptions[option.label] === value
                              ? 'bg-honey text-hive shadow-sm'
                              : 'bg-white text-warmgray border border-hive/10 hover:border-honey'
                          }`}
                        >
                          {value}
                          {option.priceModifiers?.[value] !== undefined && (
                            <span className="ml-1 text-xs opacity-70">
                              (KES {option.priceModifiers[value].toLocaleString()})
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Cake Message */}
            {product.category === 'cakes' && (
              <div className="mt-6">
                <label className="block text-sm font-semibold text-hive mb-2">
                  Cake Message <span className="font-normal text-warmgray">(optional)</span>
                </label>
                <input
                  type="text"
                  value={cakeMessage}
                  onChange={(e) => setCakeMessage(e.target.value)}
                  placeholder="e.g. Happy Birthday Sarah!"
                  maxLength={80}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-hive/10 text-hive placeholder-warmgray/40 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all text-sm"
                />
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-hive mb-2">Quantity</label>
              <div className="inline-flex items-center gap-3 bg-white rounded-xl border border-hive/10 px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-honey/10 transition-colors cursor-pointer"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-semibold text-hive">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-honey/10 transition-colors cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                onClick={handleAddToOrder}
                className={`inline-flex items-center gap-2.5 font-semibold rounded-full px-7 py-3.5 text-[15px] transition-all cursor-pointer ${
                  addedFeedback
                    ? 'bg-green-500 text-white'
                    : 'bg-honey text-hive hover:bg-gold shadow-sm'
                }`}
                whileHover={addedFeedback ? {} : { y: -2, boxShadow: '0 0 20px 4px rgba(255, 223, 24, 0.3)' }}
                whileTap={{ y: 0, scale: 0.97 }}
              >
                <AnimatePresence mode="wait">
                  {addedFeedback ? (
                    <motion.span
                      key="added"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Check size={18} />
                      Added
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <ShoppingBag size={18} />
                      Add to Order
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <Button
                onClick={handleOrderNow}
                variant="whatsapp"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                }
              >
                Order via WhatsApp
              </Button>
            </div>

            {/* Order summary hint */}
            {totalItems > 0 && (
              <motion.div
                className="mt-6 p-4 bg-vanilla rounded-xl border border-honey/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-sm text-cocoa">
                  <span className="font-semibold">{totalItems}</span>{' '}
                  {totalItems === 1 ? 'item' : 'items'} in your order.{' '}
                  <button
                    onClick={sendToWhatsApp}
                    className="text-honey font-medium hover:underline cursor-pointer"
                  >
                    Send entire order via WhatsApp
                  </button>
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold font-heading text-hive mb-8">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} href={`/menu/${p.slug}`}>
                  <ProductCard product={p} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Import here to avoid circular
import ProductCard from '@/components/ui/ProductCard';
