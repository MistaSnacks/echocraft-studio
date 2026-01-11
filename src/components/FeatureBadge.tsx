import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureBadgeProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

const FeatureBadge = ({ icon: Icon, label, delay = 0 }: FeatureBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="glass px-4 py-2.5 rounded-full flex items-center gap-2 cursor-default"
    >
      <Icon className="w-4 h-4 text-echo-yellow" />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </motion.div>
  );
};

export default FeatureBadge;
