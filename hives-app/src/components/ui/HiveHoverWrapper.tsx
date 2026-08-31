import React from 'react';

const Hexagon = ({ className, outline }: { className?: string, outline?: boolean }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill={outline ? 'none' : 'currentColor'} 
    stroke={outline ? 'currentColor' : 'none'}
    strokeWidth={outline ? '1.5' : '0'}
    className={className}
    aria-hidden="true"
  >
    <polygon points="12,2 22,7.8 22,16.2 12,22 2,16.2 2,7.8" />
  </svg>
);

interface HiveHoverWrapperProps {
  children: React.ReactNode;
  className?: string;
  roundedClass?: string; // e.g., 'rounded-2xl' to match the child image
}

export default function HiveHoverWrapper({ 
  children, 
  className = '', 
  roundedClass = 'rounded-2xl' 
}: HiveHoverWrapperProps) {
  return (
    <div className={`group relative overflow-hidden ${roundedClass} ${className}`}>
      {children}
      
      {/* Decorative Hexagons - Appear on Hover / Active */}
      
      {/* Top Right - Solid */}
      <Hexagon 
        className="absolute -top-3 -right-3 w-14 h-14 text-honey opacity-0 scale-75 group-hover:opacity-20 group-hover:scale-100 group-active:opacity-20 group-active:scale-100 transition-all duration-500 ease-out z-10 pointer-events-none" 
      />
      
      {/* Top Left - Outline */}
      <Hexagon 
        outline
        className="absolute top-4 -left-4 w-10 h-10 text-honey opacity-0 translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 group-active:opacity-40 group-active:translate-x-0 transition-all duration-500 delay-75 ease-out z-10 pointer-events-none" 
      />
      
      {/* Bottom Right - Solid */}
      <Hexagon 
        className="absolute -bottom-4 right-6 w-16 h-16 text-honey opacity-0 translate-y-4 group-hover:opacity-15 group-hover:translate-y-0 group-active:opacity-15 group-active:translate-y-0 transition-all duration-500 delay-100 ease-out z-10 pointer-events-none" 
      />
      
      {/* Bottom Left - Outline */}
      <Hexagon 
        outline
        className="absolute -bottom-2 -left-2 w-12 h-12 text-honey opacity-0 scale-50 group-hover:opacity-30 group-hover:scale-100 group-active:opacity-30 group-active:scale-100 transition-all duration-500 delay-150 ease-out z-10 pointer-events-none" 
      />
    </div>
  );
}
