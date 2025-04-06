'use client';

import { useEffect, useRef, useState } from 'react';

const COLORS = ['#FF5F6D', '#FFC371', '#7FDBFF', '#2ECC71', '#E91E63', '#FFEB3B', '#9C27B0'];

export default function MouseAura() {
  const auraRef = useRef<HTMLDivElement>(null);
  const sparkleContainerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      createSparkle(e.clientX, e.clientY);
    };

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div');
      const size = Math.random() * 6 + 4;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      sparkle.style.position = 'fixed';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.borderRadius = '50%';
      sparkle.style.background = color;
      sparkle.style.pointerEvents = 'none';
      sparkle.style.opacity = '1';
      sparkle.style.zIndex = '9999';
      sparkle.style.transition = 'transform 0.7s ease-out, opacity 0.7s ease-out';
      sparkle.style.transform = `translate(-50%, -50%) scale(${Math.random() + 0.5})`;

      sparkleContainerRef.current?.appendChild(sparkle);

      requestAnimationFrame(() => {
        sparkle.style.opacity = '0';
        sparkle.style.transform += ' translateY(-30px)';
      });

      setTimeout(() => {
        sparkle.remove();
      }, 700);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={auraRef}
        className="pointer-events-none fixed top-0 left-0 w-20 h-20 rounded-full z-[9998] mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
        }}
      />
      <div ref={sparkleContainerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]" />
    </>
  );
}
