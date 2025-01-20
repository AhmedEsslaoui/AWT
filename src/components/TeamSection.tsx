import { motion } from 'framer-motion';
import { Users, AlertTriangle } from 'lucide-react';
import { TeamPlan } from '../types';
import { PhaseCard } from './PhaseCard';

interface TeamSectionProps {
  plan: TeamPlan;
  index: number;
}

export function TeamSection({ plan, index }: TeamSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: index * 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {plan.phases.map((phase, idx) => (
          <PhaseCard 
            key={idx} 
            phase={phase} 
            delay={index * 0.3 + idx * 0.2}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: index * 0.3 + 0.6 }
        }}
        className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          <h3 className="text-xl font-semibold text-orange-900">Important Notes</h3>
        </div>
        <ul className="list-disc list-inside space-y-2 text-orange-800">
          {plan.important.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
}