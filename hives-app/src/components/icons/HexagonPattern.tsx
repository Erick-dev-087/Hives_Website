import React from 'react';

interface HexagonPatternProps {
  className?: string;
  opacity?: number;
  count?: number;
}

export default function HexagonPattern({
  className = '',
  opacity = 0.06,
  count = 12,
}: HexagonPatternProps) {
  const hexagons = Array.from({ length: count }, (_, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const offsetX = row % 2 === 0 ? 0 : 30;
    const x = col * 60 + offsetX;
    const y = row * 52;
    return { x, y, key: i };
  });

  return (
    <svg
      className={className}
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {hexagons.map(({ x, y, key }) => (
        <path
          key={key}
          d={`M${x + 15} ${y} L${x + 30} ${y + 8.66} L${x + 30} ${y + 25.98} L${x + 15} ${y + 34.64} L${x} ${y + 25.98} L${x} ${y + 8.66} Z`}
          fill="#FFDF18"
          opacity={opacity}
        />
      ))}
    </svg>
  );
}
