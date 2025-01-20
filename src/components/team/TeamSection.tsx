import { motion } from 'framer-motion';
import { TeamPlan } from '../../types';
import { PhaseCard } from '../phase/PhaseCard';
import { TeamHeader } from './TeamHeader';
import { TeamNotes } from './TeamNotes';
import { containerVariants } from '../../utils/animations';

interface TeamSectionProps {
  plan: TeamPlan;
  index: number;
}

export function TeamSection({ plan, index }: TeamSectionProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-12"
    >
      <TeamHeader name={plan.name} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {plan.phases.map((phase, idx) => (
          <PhaseCard 
            key={idx} 
            phase={phase} 
            delay={index * 0.3 + idx * 0.2}
          />
        ))}
      </div>

      <TeamNotes 
        notes={plan.important} 
        delay={index * 0.3 + 0.6} 
      />
    </motion.section>
  );
}