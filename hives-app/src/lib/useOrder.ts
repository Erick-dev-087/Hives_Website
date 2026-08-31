'use client';

import { useState, useCallback } from 'react';
import type { Product, OrderItem } from '@/types';

export function useOrder() {
  const [items, setItems] = useState<OrderItem[]>([]);

  const addItem = useCallback(
    (product: Product, selectedOptions: Record<string, string>, cakeMessage?: string) => {
      // Calculate price based on options
      let totalPrice = product.price;

      // Check if any option has a price modifier
      if (product.options) {
        for (const option of product.options) {
          const selectedValue = selectedOptions[option.label];
          if (selectedValue && option.priceModifiers && option.priceModifiers[selectedValue] !== undefined) {
            // If the option is a "Size" type that sets the base price
            if (option.label === 'Size' || option.label === 'Pack Size' || option.label === 'Type') {
              totalPrice = option.priceModifiers[selectedValue];
            } else {
              // Add-on price
              totalPrice += option.priceModifiers[selectedValue];
            }
          }
        }
      }

      const existingIndex = items.findIndex(
        (item) =>
          item.product.id === product.id &&
          JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions) &&
          item.cakeMessage === cakeMessage
      );

      if (existingIndex !== -1) {
        // Increment quantity
        setItems((prev) =>
          prev.map((item, i) =>
            i === existingIndex
              ? { ...item, quantity: item.quantity + 1, totalPrice: totalPrice * (item.quantity + 1) }
              : item
          )
        );
      } else {
        // Add new item
        setItems((prev) => [
          ...prev,
          { product, quantity: 1, selectedOptions, totalPrice, cakeMessage },
        ]);
      }
    },
    [items]
  );

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateQuantity = useCallback((index: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((_, i) => i !== index));
      return;
    }
    setItems((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const unitPrice = item.totalPrice / item.quantity;
        return { ...item, quantity, totalPrice: unitPrice * quantity };
      })
    );
  }, []);

  const clearOrder = useCallback(() => setItems([]), []);

  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const formatWhatsAppMessage = useCallback(() => {
    if (items.length === 0) return '';

    let message = 'Hi! I\'d like to place an order from Hives Pastries:\n\n';

    items.forEach((item, i) => {
      message += `${i + 1}. *${item.product.name}*\n`;
      message += `   Qty: ${item.quantity}\n`;

      Object.entries(item.selectedOptions).forEach(([key, value]) => {
        message += `   ${key}: ${value}\n`;
      });

      if (item.cakeMessage) {
        message += `   Message: "${item.cakeMessage}"\n`;
      }

      message += `   Subtotal: KES ${item.totalPrice.toLocaleString()}\n\n`;
    });

    message += `---\n*Estimated Total: KES ${totalPrice.toLocaleString()}*\n\nThank you!`;

    return message;
  }, [items, totalPrice]);

  const sendToWhatsApp = useCallback(() => {
    const message = formatWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/254759837429?text=${encoded}`, '_blank');
  }, [formatWhatsAppMessage]);

  return {
    items,
    totalPrice,
    totalItems,
    addItem,
    removeItem,
    updateQuantity,
    clearOrder,
    formatWhatsAppMessage,
    sendToWhatsApp,
  };
}
