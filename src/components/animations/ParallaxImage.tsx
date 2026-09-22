import React from 'react';
import { motion } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  zoomHover?: boolean;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  zoomHover = true,
}) => {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.04, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={zoomHover ? { scale: 1.04 } : undefined}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${imageClassName}`}
      />
    </div>
  );
};
