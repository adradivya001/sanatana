import React from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {
  currentImage: string;
  nextImage: string;
  currentPos?: string;
  nextPos?: string;
  duration?: number;
}

export const DiagonalTransition: React.FC<TransitionProps> = ({
  currentImage,
  nextImage,
  currentPos = 'center center',
  nextPos = 'center center',
  duration = 1.4,
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Background: Current image zooming in with subtle rotation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1, rotate: 0, opacity: 1 }}
        animate={{ scale: 1.15, rotate: 2, opacity: 0.4 }}
        transition={{ duration, ease: [0.25, 1, 0.5, 1] }}
      >
        <img
          src={currentImage}
          alt="Current slide zoom"
          className="w-full h-full object-cover"
          style={{ objectPosition: currentPos }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Foreground: Next Image revealing via dynamic diagonal wipe mask */}
      <motion.div
        className="absolute inset-0 w-full h-full shadow-2xl"
        initial={{
          clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          scale: 1.1,
        }}
        animate={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          scale: 1,
        }}
        transition={{
          duration,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        <img
          src={nextImage}
          alt="Next slide diagonal reveal"
          className="w-full h-full object-cover"
          style={{ objectPosition: nextPos }}
        />
      </motion.div>
    </div>
  );
};
