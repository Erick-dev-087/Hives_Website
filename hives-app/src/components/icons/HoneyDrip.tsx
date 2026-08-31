import React from 'react';

interface HoneyDripProps {
  className?: string;
  width?: number;
}

export default function HoneyDrip({ className = '', width = 120 }: HoneyDripProps) {
  return (
    <svg
      width={width}
      height={width * 0.5}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main drip shape */}
      <path
        d="M0 0 C10 0, 15 2, 20 8 C25 14, 22 24, 25 30 C28 36, 28 42, 25 48 C22 54, 18 58, 20 60
           C30 56, 35 40, 38 30 C41 20, 45 10, 55 4 C60 1, 65 0, 70 0
           C75 0, 80 2, 85 8 C88 12, 86 20, 88 28 C90 36, 85 48, 88 55
           C92 48, 95 35, 98 25 C101 15, 105 8, 112 4 C116 2, 118 0, 120 0"
        fill="none"
        stroke="#FFDF18"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Drip drops */}
      <ellipse cx="25" cy="55" rx="4" ry="5" fill="#FFDF18" opacity="0.3" />
      <ellipse cx="88" cy="52" rx="3" ry="4" fill="#FFDF18" opacity="0.25" />
    </svg>
  );
}
