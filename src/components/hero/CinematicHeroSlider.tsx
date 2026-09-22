import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CubeTransition } from './transitions/CubeTransition';
import { VerticalSliceTransition } from './transitions/VerticalSliceTransition';
import { GridTransition } from './transitions/GridTransition';
import { SplitTransition } from './transitions/SplitTransition';
import { DiagonalTransition } from './transitions/DiagonalTransition';

export interface HeroSlideItem {
  id: number;
  image: string;
  alt: string;
  transition: 'cube' | 'vertical-slice' | 'grid' | 'split' | 'diagonal';
  objectPosition?: string;
}

export const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: 1,
    image: '/hero_real_school_1.jpg',
    alt: 'Sanatana students practical culinary fruit activity with teacher',
    transition: 'cube',
    objectPosition: 'center 35%',
  },
  {
    id: 2,
    image: '/hero_real_school_2.jpg',
    alt: 'Sanatana student dressed in Bharat Mata costume for Independence Day',
    transition: 'vertical-slice',
    objectPosition: 'center 30%',
  },
  {
    id: 3,
    image: '/hero_real_school_3.jpg',
    alt: 'Sanatana children waving Indian National Flags for Republic Day',
    transition: 'grid',
    objectPosition: 'center 40%',
  },
  {
    id: 4,
    image: '/hero_real_school_4.jpg',
    alt: 'Sanatana teacher facilitating medical play learning with young learners',
    transition: 'split',
    objectPosition: 'center 40%',
  },
  {
    id: 5,
    image: '/hero_real_school_5.jpg',
    alt: 'Sanatana kids playing outdoors on colorful play train',
    transition: 'diagonal',
    objectPosition: 'center center',
  },
];

const DISPLAY_DURATION = 4800; // Time static before transition starts (ms)
const TRANSITION_DURATION = 1.4; // Duration of animation (seconds)

export const CinematicHeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Preload all 5 images on mount
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const triggerNext = useCallback(
    (targetNextIndex?: number) => {
      if (isTransitioning) return;
      const computedNext =
        targetNextIndex !== undefined
          ? targetNextIndex
          : (currentIndex + 1) % HERO_SLIDES.length;

      if (computedNext === currentIndex) return;

      setNextIndex(computedNext);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex(computedNext);
        setIsTransitioning(false);
      }, TRANSITION_DURATION * 1000);
    },
    [currentIndex, isTransitioning]
  );

  // Auto-play timer
  useEffect(() => {
    if (isTransitioning) return;
    const timer = setTimeout(() => {
      triggerNext();
    }, DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, triggerNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped Left -> Next
        triggerNext((currentIndex + 1) % HERO_SLIDES.length);
      } else {
        // Swiped Right -> Prev
        triggerNext((currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      }
    }
    touchStartX.current = null;
  };

  const currentSlide = HERO_SLIDES[currentIndex];
  const nextSlide = HERO_SLIDES[nextIndex];

  // Render specific transition based on current slide's transition config
  const renderTransition = () => {
    if (prefersReducedMotion) {
      // Fallback crossfade
      return (
        <motion.div
          key={`fade-${currentIndex}-${nextIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={nextSlide.image}
            alt={nextSlide.alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: nextSlide.objectPosition || 'center center' }}
          />
        </motion.div>
      );
    }

    switch (currentSlide.transition) {
      case 'cube':
        return (
          <CubeTransition
            currentImage={currentSlide.image}
            nextImage={nextSlide.image}
            currentPos={currentSlide.objectPosition}
            nextPos={nextSlide.objectPosition}
            duration={TRANSITION_DURATION}
          />
        );
      case 'vertical-slice':
        return (
          <VerticalSliceTransition
            currentImage={currentSlide.image}
            nextImage={nextSlide.image}
            currentPos={currentSlide.objectPosition}
            nextPos={nextSlide.objectPosition}
            duration={TRANSITION_DURATION}
          />
        );
      case 'grid':
        return (
          <GridTransition
            currentImage={currentSlide.image}
            nextImage={nextSlide.image}
            currentPos={currentSlide.objectPosition}
            nextPos={nextSlide.objectPosition}
            duration={TRANSITION_DURATION}
          />
        );
      case 'split':
        return (
          <SplitTransition
            currentImage={currentSlide.image}
            nextImage={nextSlide.image}
            currentPos={currentSlide.objectPosition}
            nextPos={nextSlide.objectPosition}
            duration={TRANSITION_DURATION}
          />
        );
      case 'diagonal':
        return (
          <DiagonalTransition
            currentImage={currentSlide.image}
            nextImage={nextSlide.image}
            currentPos={currentSlide.objectPosition}
            nextPos={nextSlide.objectPosition}
            duration={TRANSITION_DURATION}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="relative w-full h-[calc(100vh-112px)] min-h-[480px] max-h-[920px] overflow-hidden bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Static Base View when not transitioning */}
      {!isTransitioning && (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={currentSlide.image}
            alt={currentSlide.alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: currentSlide.objectPosition || 'center center' }}
            loading="eager"
          />
        </div>
      )}

      {/* 2. Dynamic Unique Transition View while transitioning */}
      {isTransitioning && renderTransition()}

      {/* 3. Ultra-minimal Clean Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => triggerNext(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="group p-1 cursor-pointer focus:outline-none"
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  isActive
                    ? 'w-7 bg-amber-400 shadow-sm shadow-amber-400/50'
                    : 'w-1.5 bg-white/50 group-hover:bg-white/90'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
