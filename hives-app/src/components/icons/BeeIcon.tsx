import React from 'react';

interface BeeIconProps {
  className?: string;
  size?: number;
}

export default function BeeIcon({ className = '', size = 40 }: BeeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Wings */}
      <ellipse cx="22" cy="20" rx="10" ry="7" fill="#FFDF18" opacity="0.5" />
      <ellipse cx="42" cy="20" rx="10" ry="7" fill="#FFDF18" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="34" rx="12" ry="16" fill="#FFDF18" />

      {/* Stripes */}
      <rect x="20" y="28" width="24" height="3.5" rx="1.75" fill="#111111" />
      <rect x="20" y="35" width="24" height="3.5" rx="1.75" fill="#111111" />
      <rect x="22" y="42" width="20" height="3.5" rx="1.75" fill="#111111" />

      {/* Head */}
      <circle cx="32" cy="18" r="7" fill="#111111" />

      {/* Eyes */}
      <circle cx="29" cy="17" r="1.8" fill="#FFFDF7" />
      <circle cx="35" cy="17" r="1.8" fill="#FFFDF7" />

      {/* Antennae */}
      <line x1="28" y1="12" x2="24" y2="6" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="12" x2="40" y2="6" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="5" r="1.5" fill="#FFDF18" />
      <circle cx="40" cy="5" r="1.5" fill="#FFDF18" />

      {/* Stinger */}
      <path d="M32 50 L30 54 L32 52 L34 54 Z" fill="#111111" />
    </svg>
  );
}
