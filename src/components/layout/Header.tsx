import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { fadeInDown } from '../../utils/animations';

export function Header() {
  return (
    <motion.header 
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      className="bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/InDrive_Logo.svg" 
              alt="InDrive Logo" 
              className="h-8 w-auto"
            />
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                AWT Action Plan
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}