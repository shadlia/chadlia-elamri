import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Create subtle trailing dots
  const trailDots = Array.from({ length: 3 }, (_, i) => i);

  return (
    <>
      {/* Main cursor - small dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        style={{
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: 'hsl(var(--primary))',
          boxShadow: '0 0 8px hsl(var(--primary)), 0 0 12px hsl(var(--primary))',
        }}
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30,
        }}
      />
      
      {/* Subtle trailing dots */}
      {trailDots.map((dot, index) => {
        const delay = index * 0.03;
        const size = 2 - (index * 0.4);
        const opacity = 0.6 - (index * 0.2);
        
        return (
          <motion.div
            key={dot}
            className="fixed pointer-events-none z-[9998]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background: 'hsl(var(--primary))',
              opacity: opacity,
            }}
            animate={{
              x: mousePosition.x - size / 2,
              y: mousePosition.y - size / 2,
            }}
            transition={{
              x: { 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                delay: delay
              },
              y: { 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                delay: delay
              }
            }}
          />
        );
      })}
      
      {/* Subtle outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        style={{
          width: isPointer ? '16px' : '8px',
          height: isPointer ? '16px' : '8px',
          borderRadius: '50%',
          border: `1px solid hsl(var(--primary))`,
          opacity: isPointer ? 0.6 : 0.3,
        }}
        animate={{
          x: mousePosition.x - (isPointer ? 8 : 4),
          y: mousePosition.y - (isPointer ? 8 : 4),
          scale: [1, 1.2, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
    </>
  );
};
