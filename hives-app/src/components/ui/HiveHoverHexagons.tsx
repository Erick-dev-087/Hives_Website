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

export default function HiveHoverHexagons() {
  return (
    <>
      {/* Top Right - Solid */}
      <Hexagon 
        className="absolute -top-4 -right-4 w-20 h-20 text-honey opacity-0 scale-75 group-hover:opacity-40 group-hover:scale-100 transition-all duration-500 ease-out z-30 pointer-events-none" 
      />
      
      {/* Top Left - Outline */}
      <Hexagon 
        outline
        className="absolute top-2 -left-6 w-16 h-16 text-honey opacity-0 translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-500 delay-75 ease-out z-30 pointer-events-none" 
      />
      
      {/* Bottom Right - Solid */}
      <Hexagon 
        className="absolute -bottom-6 right-4 w-24 h-24 text-honey opacity-0 translate-y-4 group-hover:opacity-30 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out z-30 pointer-events-none" 
      />
      
      {/* Bottom Left - Outline */}
      <Hexagon 
        outline
        className="absolute -bottom-4 -left-4 w-16 h-16 text-honey opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-100 transition-all duration-500 delay-150 ease-out z-30 pointer-events-none" 
      />
    </>
  );
}
