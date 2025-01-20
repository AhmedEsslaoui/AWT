import { motion } from 'framer-motion';
import { Clock, AlertCircle } from 'lucide-react';
import { Phase } from '../types';
import { clsx } from 'clsx';

interface PhaseCardProps {
  phase: Phase;
  delay: number;
}

export function PhaseCard({ phase, delay }: PhaseCardProps) {
  const cardVariants = {
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
  };

  const getBgColor = (level: number) => {
    switch(level) {
      case 1: return 'bg-green-50 border-green-200';
      case 2: return 'bg-yellow-50 border-yellow-200';
      case 3: return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={clsx(
        'rounded-lg p-6 border-2 shadow-lg',
        getBgColor(phase.level)
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5" />
        <h3 className="text-xl font-semibold">Phase {phase.level} (AWT {phase.awt})</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Conditions:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {phase.conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Actions:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {phase.actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}