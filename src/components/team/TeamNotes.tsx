import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

interface TeamNotesProps {
  notes: string[];
  delay: number;
}

export function TeamNotes({ notes, delay }: TeamNotesProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-orange-600" />
        <h3 className="text-xl font-semibold text-orange-900">Important Notes</h3>
      </div>
      <ul className="list-disc list-inside space-y-2 text-orange-800">
        {notes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </motion.div>
  );
}