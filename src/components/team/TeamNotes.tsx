import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface TeamNotesProps {
  notes: string[];
  delay: number;
  title?: string;
}

export function TeamNotes({ notes, delay, title = 'Important Notes' }: TeamNotesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-yellow-600" />
        {title}
      </h3>
      <ul className="list-disc list-inside space-y-2">
        {notes.map((note, index) => (
          <li key={index} className="text-gray-700">{note}</li>
        ))}
      </ul>
    </motion.div>
  );
}