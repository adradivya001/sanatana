import React from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {
  currentImage: string;
  nextImage: string;
  currentPos?: string;
  nextPos?: string;
  duration?: number;
}

export const GridTransition: React.FC<TransitionProps> = ({
  currentImage,
  nextImage,
  currentPos = 'center center',
  nextPos = 'center center',
  duration = 1.4,
}) => {
  const cols = 4;
  const rows = 3;
  const totalTiles = cols * rows;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Background Layer: Next Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration, ease: 'easeOut' }}
      >
        <img
          src={nextImage}
          alt="Next slide"
          className="w-full h-full object-cover"
          style={{ objectPosition: nextPos }}
        />
      </motion.div>

      {/* Foreground Grid Mosaic */}
      <div
        className="absolute inset-0 w-full h-full grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalTiles }).map((_, i) => {
          const colIndex = i % cols;
          const rowIndex = Math.floor(i / cols);
          // Controlled ripple / diagonal delay
          const delay = (colIndex + rowIndex) * 0.08 + (i % 2 === 0 ? 0.03 : 0);

          return (
            <motion.div
              key={i}
              className="relative w-full h-full overflow-hidden"
              initial={{ scale: 1, opacity: 1, rotate: 0 }}
              animate={{
                scale: 0,
                opacity: 0,
                rotate: (i % 2 === 0 ? 8 : -8),
              }}
              transition={{
                duration: duration * 0.65,
                delay,
                ease: [0.36, 0, 0.66, -0.56],
              }}
            >
              <div
                className="absolute"
                style={{
                  width: `${cols * 100}%`,
                  height: `${rows * 100}%`,
                  left: `-${colIndex * 100}%`,
                  top: `-${rowIndex * 100}%`,
                }}
              >
                <img
                  src={currentImage}
                  alt="Mosaic tile"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: currentPos }}
                />
              </div>
              <div className="absolute inset-0 bg-black/10 shadow-inner" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
