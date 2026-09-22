import React from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {
  currentImage: string;
  nextImage: string;
  currentPos?: string;
  nextPos?: string;
  duration?: number;
}

export const VerticalSliceTransition: React.FC<TransitionProps> = ({
  currentImage,
  nextImage,
  currentPos = 'center center',
  nextPos = 'center center',
  duration = 1.4,
}) => {
  const slices = 8;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Background Layer: Next Image already waiting underneath */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration, ease: [0.25, 1, 0.5, 1] }}
      >
        <img
          src={nextImage}
          alt="Next slide"
          className="w-full h-full object-cover"
          style={{ objectPosition: nextPos }}
        />
      </motion.div>

      {/* Foreground Layer: Current Image broken into 8 staggered vertical blind slices */}
      <div className="absolute inset-0 w-full h-full flex pointer-events-none">
        {Array.from({ length: slices }).map((_, i) => {
          const sliceWidthPercent = 100 / slices;
          const leftPercent = i * sliceWidthPercent;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={i}
              className="relative h-full overflow-hidden shadow-2xl"
              style={{ width: `${sliceWidthPercent}%` }}
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: isEven ? '-105%' : '105%',
                opacity: 0.3,
              }}
              transition={{
                duration: duration * 0.75,
                delay: i * 0.06,
                ease: [0.77, 0, 0.175, 1],
              }}
            >
              <div
                className="absolute inset-0 h-full"
                style={{
                  width: `${slices * 100}%`,
                  left: `-${i * 100}%`,
                }}
              >
                <img
                  src={currentImage}
                  alt="Current slide slice"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: currentPos }}
                />
              </div>
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
