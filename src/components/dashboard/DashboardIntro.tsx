import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export function DashboardIntro() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8"
    >
      <p className="text-blue-800 text-lg">
        This dashboard outlines the escalation plans for managing Average Waiting Time (AWT) 
        across different teams. Each phase is triggered by specific AWT thresholds and 
        requires different actions to maintain service quality.
      </p>
    </motion.div>
  );
}