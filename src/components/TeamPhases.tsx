import { teams } from '../data/phases';
import { PhaseCard } from './phase/PhaseCard';
import { motion } from 'framer-motion';
import { TeamNotes } from './team/TeamNotes';
import { containerVariants } from '../utils/animations';

export function TeamPhases() {
  return (
    <div className="container mx-auto p-6">
      {teams.map((team, index) => (
        <motion.div
          key={team.name}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">{team.name} Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {team.phases.map((phase, idx) => (
              <PhaseCard
                key={`${team.name}-phase-${phase.level}`}
                phase={phase}
                delay={index * 0.3 + idx * 0.2}
              />
            ))}
          </div>
          <TeamNotes 
            notes={team.important} 
            delay={index * 0.3 + team.phases.length * 0.2} 
          />
        </motion.div>
      ))}
    </div>
  );
}
