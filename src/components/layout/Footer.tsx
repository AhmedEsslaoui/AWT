import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

export function Footer() {
  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={1}
      className="bg-white border-t border-gray-200 py-6 mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Code2 className="w-4 h-4" />
          <p className="text-sm">
            Crafted with precision by
            {' '}| Team{' '}
            <span className="font-semibold text-blue-600">MENA</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}