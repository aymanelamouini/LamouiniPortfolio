import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [bubbles, setBubbles] = useState([]);

  const handleMouseMove = useCallback((e) => {
    // Spawn a new bubble at the current cursor coordinates
    const newBubble = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      // Randomize size slightly for a more organic feel
      size: Math.random() * 15 + 10,
    };

    setBubbles((prev) => [...prev, newBubble]);

    // Automatically remove the bubble after a short delay (e.g., 800ms)
    // Matches the duration of the fade-out animation
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 800);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ 
              opacity: 0.8, 
              scale: 0.5,
              x: bubble.x - bubble.size / 2, 
              y: bubble.y - bubble.size / 2 
            }}
            animate={{ 
              opacity: 0, 
              scale: 2, // Expand slightly
              // Scatter slightly by moving in a random direction
              x: bubble.x - bubble.size / 2 + (Math.random() * 40 - 20),
              y: bubble.y - bubble.size / 2 + (Math.random() * 40 - 20),
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: 'absolute',
              width: bubble.size,
              height: bubble.size,
              borderRadius: '50%',
              backgroundColor: '#DC143C', // Strictly Crimson Red
              boxShadow: '0 0 10px rgba(220, 20, 60, 0.5)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
