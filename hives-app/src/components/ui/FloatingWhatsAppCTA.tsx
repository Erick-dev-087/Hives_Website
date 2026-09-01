'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react'; 

export default function FloatingWhatsAppCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href="https://wa.me/254759837429"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#151515] text-honey rounded-full shadow-2xl border border-honey/20 overflow-hidden cursor-pointer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, borderColor: 'rgba(255, 223, 24, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center px-4 py-4 h-[60px]">
          <MessageCircle size={28} className="shrink-0" />
          
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                animate={{ width: 'auto', opacity: 1, marginLeft: 12 }}
                exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                className="font-heading font-bold text-[15px] whitespace-nowrap overflow-hidden text-cream"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                Order Now
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.a>
    </div>
  );
}
