import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const MouseEffects: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Motion values for cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Springs for smooth movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);



  useEffect(() => {
    // Check if device is touch capable
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true);
      return;
    }

    // Add class to body to hide default cursor
    document.body.classList.add('custom-cursor-active');

    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.pill') || 
        target.closest('[role="button"]') ||
        target.closest('[role="menuitem"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Custom Cursor Core */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: 16,
          height: 16,
          backgroundColor: '#C8FF2E',
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
    </>
  );
};
