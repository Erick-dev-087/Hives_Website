'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { buttonHover, buttonTap } from '@/lib/animations';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon,
  showArrow = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2.5 font-semibold rounded-full transition-colors duration-200 cursor-pointer select-none';

  const variantStyles = {
    primary:
      'bg-honey text-hive px-7 py-3.5 text-[15px] hover:bg-gold shadow-sm',
    secondary:
      'bg-transparent text-hive border-2 border-hive/15 px-7 py-3.5 text-[15px] hover:border-honey hover:text-cocoa',
    whatsapp:
      'bg-[#25D366] text-white px-7 py-3.5 text-[15px] hover:bg-[#1fb855]',
  };

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <motion.span
          className="flex-shrink-0"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={18} />
        </motion.span>
      )}
    </>
  );

  const motionProps = {
    whileHover: variant === 'whatsapp'
      ? { y: -2, boxShadow: '0 0 20px 4px rgba(37, 211, 102, 0.3)' }
      : buttonHover,
    whileTap: buttonTap,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') || href.startsWith('https://wa.me') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
