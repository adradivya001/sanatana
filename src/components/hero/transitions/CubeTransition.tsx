import React from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {
  currentImage: string;
  nextImage: string;
  currentPos?: string;
  nextPos?: string;
  duration?: number;
}

export const CubeTransition: React.FC<TransitionProps> = ({
  currentImage,
  nextImage,
  currentPos = 'center center',
  nextPos = 'center center',
  duration = 1.4,
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden [perspective:1400px] bg-black">
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: -90 }}
        transition={{ duration, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: '50% 50% -50vw' }}
      >
        {/* Face 1: Current Image (Front) */}
        <div
          className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
          style={{
            transform: 'translateZ(0px)',
          }}
        >
          <img
            src={currentImage}
            alt="Current slide"
            className="w-full h-full object-cover"
            style={{ objectPosition: currentPos }}
          />
          {/* Subtle dynamic shading as it rotates away */}
          <motion.div
            className="absolute inset-0 bg-black pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ duration, ease: 'easeInOut' }}
          />
        </div>

        {/* Face 2: Next Image (Right Face) */}
        <div
          className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
          style={{
            transform: 'rotateY(90deg) translateZ(0px)',
            transformOrigin: 'right center',
          }}
        >
          <img
            src={nextImage}
            alt="Next slide"
            className="w-full h-full object-cover"
            style={{ objectPosition: nextPos }}
          />
          {/* Subtle dynamic illumination as it rotates in */}
          <motion.div
            className="absolute inset-0 bg-black pointer-events-none"
            initial={{ opacity: 0.65 }}
            animate={{ opacity: 0 }}
            transition={{ duration, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  );
};
