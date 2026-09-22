import React from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {
  currentImage: string;
  nextImage: string;
  currentPos?: string;
  nextPos?: string;
  duration?: number;
}

export const SplitTransition: React.FC<TransitionProps> = ({
  currentImage,
  nextImage,
  currentPos = 'center center',
  nextPos = 'center center',
  duration = 1.4,
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Background Layer: Next Image scaling smoothly */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={nextImage}
          alt="Next slide"
          className="w-full h-full object-cover"
          style={{ objectPosition: nextPos }}
        />
      </motion.div>

      {/* Foreground Layer: 3 Multi-Panel Sections (Left, Center, Right) Moving in divergent directions */}
      <div className="absolute inset-0 w-full h-full flex pointer-events-none">
        
        {/* Left Panel -> Slides Left */}
        <motion.div
          className="relative w-1/3 h-full overflow-hidden shadow-2xl"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: '-102%', opacity: 0.4 }}
          transition={{ duration: duration * 0.85, ease: [0.77, 0, 0.175, 1] }}
        >
          <div className="absolute inset-0 h-full" style={{ width: '300%', left: '0%' }}>
            <img
              src={currentImage}
              alt="Split left panel"
              className="w-full h-full object-cover"
              style={{ objectPosition: currentPos }}
            />
          </div>
          <div className="absolute inset-0 bg-black/15 shadow-2xl" />
        </motion.div>

        {/* Center Panel -> Slides Up with depth */}
        <motion.div
          className="relative w-1/3 h-full overflow-hidden shadow-2xl z-10"
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={{ y: '-105%', opacity: 0.3, scale: 0.95 }}
          transition={{ duration: duration * 0.9, delay: 0.08, ease: [0.77, 0, 0.175, 1] }}
        >
          <div className="absolute inset-0 h-full" style={{ width: '300%', left: '-100%' }}>
            <img
              src={currentImage}
              alt="Split center panel"
              className="w-full h-full object-cover"
              style={{ objectPosition: currentPos }}
            />
          </div>
          <div className="absolute inset-0 bg-black/15 shadow-2xl" />
        </motion.div>

        {/* Right Panel -> Slides Right */}
        <motion.div
          className="relative w-1/3 h-full overflow-hidden shadow-2xl"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: '102%', opacity: 0.4 }}
          transition={{ duration: duration * 0.85, delay: 0.04, ease: [0.77, 0, 0.175, 1] }}
        >
          <div className="absolute inset-0 h-full" style={{ width: '300%', left: '-200%' }}>
            <img
              src={currentImage}
              alt="Split right panel"
              className="w-full h-full object-cover"
              style={{ objectPosition: currentPos }}
            />
          </div>
          <div className="absolute inset-0 bg-black/15 shadow-2xl" />
        </motion.div>

      </div>
    </div>
  );
};
