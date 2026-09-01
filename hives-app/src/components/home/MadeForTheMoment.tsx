'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'motion/react';
import { momentScenes } from '@/lib/products';

// SVG Path points for a perfect 6-item S-curve
// We use a viewBox of 0 0 100 100, which will stretch over the container.
// Nodes are at Y = 2, 18, 38, 58, 78, 98. X is always 50 at the nodes.
// The curve bows to X=75 and X=25 between the nodes.
const pathData = "M 50 2 C 75 2, 75 18, 50 18 C 25 18, 25 38, 50 38 C 75 38, 75 58, 50 58 C 25 58, 25 78, 50 78 C 75 78, 75 98, 50 98";

export default function MadeForTheMoment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  
  // Continuous scroll progress for the glowing line (Desktop)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Continuous scroll progress for the glowing line (Mobile)
  const { scrollYProgress: mobileScrollY } = useScroll({
    target: mobileContainerRef,
    offset: ['start center', 'end center'],
  });

  const mobileSmoothProgress = useSpring(mobileScrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // SVG Path points for a perfect 6-item S-curve weaving left and right
  // Nodes at X=30% and X=70%, Y spacing is 16%.
  // The curve bends dramatically outwards (to X=10 and X=90) to create huge sweeping loops that avoid the text.
  const pathData = "M 30 10 C 10 18 50 18 70 26 C 90 34 50 34 30 42 C 10 50 50 50 70 58 C 90 66 50 66 30 74 C 10 82 50 82 70 90";

  return (
    <section className="relative bg-[#151515] overflow-hidden py-24">
      
      {/* Section intro */}
      <div className="text-center px-4 mb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-cream">
          Made for the Moment
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="hidden md:block relative max-w-5xl mx-auto px-4 pb-16">
        
        <div ref={containerRef} className="relative w-full h-[850px] lg:h-[1000px]">
          
          {/* SVG Winding Path Background */}
          <div className="absolute inset-0 z-0">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Glowing lit-up path that draws as you scroll */}
              <motion.path 
                d={pathData}
                fill="none" 
                stroke="#FFDF18" 
                strokeWidth="3" 
                vectorEffect="non-scaling-stroke" 
                style={{ 
                  pathLength: smoothProgress,
                  filter: 'drop-shadow(0 0 8px rgba(255, 223, 24, 0.8))'
                }}
              />
            </svg>
          </div>

          {/* Product Items */}
          {momentScenes.map((scene, index) => {
            const isEven = index % 2 === 0;
            // 6 items at Y = 10, 26, 42, 58, 74, 90
            const yPositions = [10, 26, 42, 58, 74, 90];
            const yPos = yPositions[index];
            const dotX = isEven ? 30 : 70;
            
            return (
              <div 
                key={scene.id} 
                className="absolute w-full flex items-center -translate-y-1/2 z-10"
                style={{ top: `${yPos}%` }}
              >
                
                {/* Center Dot exactly on the SVG path */}
                <div 
                  className="absolute w-3 h-3 rounded-full bg-honey shadow-[0_0_12px_rgba(255,223,24,0.9)] z-20"
                  style={{ left: `calc(${dotX}% - 6px)` }}
                />

                {/* Left/Right Plate */}
                <div 
                  className={`absolute flex ${isEven ? 'justify-end right-[75%]' : 'justify-start left-[75%]'} items-center`}
                >
                  <PlateImage scene={scene} />
                </div>

                {/* Right/Left Text */}
                <div 
                  className={`absolute flex ${isEven ? 'justify-start left-[35%]' : 'justify-end right-[35%]'} items-center`}
                >
                  <ItemText scene={scene} isEven={isEven} />
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout (Hidden on Desktop) */}
      <div ref={mobileContainerRef} className="md:hidden relative px-4 pb-24 max-w-md mx-auto">
        
        {/* Mobile SVG Timeline Line */}
        <div className="absolute left-8 top-0 bottom-24 w-1 z-0">
          {/* Base faint line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/5" />
          
          {/* Glowing illuminated line */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-honey shadow-[0_0_8px_rgba(255,223,24,0.8)] origin-top"
            style={{ scaleY: mobileSmoothProgress }}
          />
        </div>

        <div className="space-y-12 relative z-10">
          {momentScenes.map((scene) => (
            <div key={scene.id} className="relative flex items-center gap-6">
              
              {/* Timeline Dot */}
              <div className="relative shrink-0 flex items-center justify-center w-8">
                <div className="w-3 h-3 rounded-full bg-honey shadow-[0_0_12px_rgba(255,223,24,0.9)] z-20" />
              </div>
              
              {/* Card */}
              <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 p-4 flex gap-4 items-center flex-1 shadow-lg">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 shadow-inner">
                  <Image src={scene.image} alt={scene.title} fill className="object-cover" sizes="96px" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-cream leading-tight">{scene.title}</h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-white/60 line-clamp-2 leading-relaxed">{scene.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Exact Design Plate Component ──
function PlateImage({ scene }: { scene: typeof momentScenes[0] }) {
  return (
    <div className="relative w-[130px] h-[130px] lg:w-[150px] lg:h-[150px]">
      {/* Outer concentric thin circle */}
      <div className="absolute -inset-5 rounded-full border border-white/10 pointer-events-none" />
      
      {/* The Plate Image */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-black/50">
        <Image
          src={scene.image}
          alt={scene.title}
          fill
          className="object-cover"
          sizes="150px"
        />
        {/* Subtle inner shadow for plate depth */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] pointer-events-none" />
      </div>
    </div>
  );
}

// ── Exact Design Text Component ──
function ItemText({ scene, isEven }: { scene: typeof momentScenes[0], isEven: boolean }) {
  return (
    <div className={`flex flex-col justify-center ${isEven ? 'items-start text-left' : 'items-end text-right'} w-[280px]`}>
      
      {/* Text Box with solid background to block the line and keep text readable */}
      <div className="bg-[#151515] p-6 rounded-xl w-full relative z-30 shadow-xl border border-white/[0.03]">
        <h3 className="text-xl lg:text-2xl font-heading text-cream tracking-wide">
          {scene.title}
        </h3>
        
        {scene.occasion && (
          <p className="text-xs text-honey mt-1 mb-3 font-semibold">
            {scene.occasion}
          </p>
        )}
        
        <p className="text-[11.5px] text-white/50 leading-relaxed line-clamp-3">
          {scene.subtitle}
        </p>
        
        <div className={`mt-5 flex items-center gap-3 text-[10.5px] text-white/70 uppercase tracking-widest ${isEven ? 'justify-start' : 'justify-end'} cursor-pointer hover:text-honey transition-colors group`}>
          {isEven ? (
            <>
              <span>explore</span>
              <div className="w-1.5 h-1.5 rounded-full bg-honey group-hover:scale-150 transition-transform" />
            </>
          ) : (
            <>
              <div className="w-1.5 h-1.5 rounded-full bg-honey group-hover:scale-150 transition-transform" />
              <span>explore</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
