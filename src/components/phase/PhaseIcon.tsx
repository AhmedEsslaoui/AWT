import { Clock } from 'lucide-react';
import { clsx } from 'clsx';

interface PhaseIconProps {
  level: number;
}

export function PhaseIcon({ level }: PhaseIconProps) {
  const getIconColor = (level: number) => {
    switch(level) {
      case 1: return 'text-green-600';
      case 2: return 'text-yellow-600';
      case 3: return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Clock className={clsx('w-5 h-5', getIconColor(level))} />
  );
}