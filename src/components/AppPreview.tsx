import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/map shot.jpeg", alt: "Map View" },
  { src: "/Topics.jpeg", alt: "Topics" },
  { src: "/topics2.jpeg", alt: "Topics Feed" },
  { src: "/user profiile.jpeg", alt: "User Profile" },
];

const swipeVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    x: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
  }),
};

const AppPreview = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 1]);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = useCallback((newDirection: number) => {
    setCurrentIndex(([prevIndex]) => {
      const nextIndex = (prevIndex + newDirection + images.length) % images.length;
      return [nextIndex, newDirection];
    });
  }, []);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, []);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipeThreshold = 50; // pixels
    const velocityThreshold = 500; // pixels per second

    if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
      paginate(1);
      pauseAutoPlay();
    } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
      paginate(-1);
      pauseAutoPlay();
    }
  };

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 3500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, paginate]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="w-full h-full bg-black overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          custom={direction}
          variants={swipeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.3, ease: "easeOut" },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 w-full h-full object-cover object-top cursor-grab active:cursor-grabbing select-none"
          draggable={false}
        />
      </AnimatePresence>

      {/* Desktop navigation arrows - only show on hover */}
      <div 
        className={`absolute inset-y-0 left-0 w-12 flex items-center justify-center z-10 transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => { paginate(-1); pauseAutoPlay(); }}
          className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
      </div>
      <div 
        className={`absolute inset-y-0 right-0 w-12 flex items-center justify-center z-10 transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => { paginate(1); pauseAutoPlay(); }}
          className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default AppPreview;
