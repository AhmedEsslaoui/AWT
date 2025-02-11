import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Phase } from '../../types';
import { clsx } from 'clsx';
import { PhaseIcon } from './PhaseIcon';
import { PhaseList } from './PhaseList';
import { usePhaseStyles } from '../../hooks/usePhaseStyles';

interface PhaseCardProps {
  phase: Phase;
  delay: number;
}

export function PhaseCard({ phase, delay }: PhaseCardProps) {
  const { cardVariants, bgColor } = usePhaseStyles(phase.level, delay);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={clsx(
        'rounded-lg p-6 border-2 shadow-lg hover:shadow-xl transition-shadow',
        bgColor
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <PhaseIcon level={phase.level} />
        <h3 className="text-xl font-semibold">
          {phase.titles?.phase || `Phase ${phase.level}`} (AWT {phase.awt})
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {phase.titles?.conditions || 'Conditions:'}
          </h4>
          <PhaseList items={phase.conditions} />
        </div>

        {phase.actions && (
          <div>
            <h4 className="font-medium mb-2">{phase.titles?.actions || 'Actions:'}</h4>
            <PhaseList items={phase.actions} />
          </div>
        )}

        {phase.actionsRequired && (
          <div>
            <h4 className="font-medium mb-2">{phase.titles?.actionsRequired || 'Actions Required:'}</h4>
            <PhaseList items={phase.actionsRequired} />
          </div>
        )}
      </div>
    </motion.div>
  );
}