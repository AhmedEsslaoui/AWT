import { useMemo } from 'react';

export function usePhaseStyles(level: number, delay: number) {
  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  }), [delay]);

  const bgColor = useMemo(() => {
    switch(level) {
      case 1: return 'bg-green-50 border-green-200';
      case 2: return 'bg-yellow-50 border-yellow-200';
      case 3: return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  }, [level]);

  return { cardVariants, bgColor };
}