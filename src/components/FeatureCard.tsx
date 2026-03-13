import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const colors = [
    'from-red-600 to-red-700',      // Red
    'from-blue-600 to-blue-700',    // Blue
    'from-red-500 to-blue-600',     // Red to Blue
    'from-blue-500 to-red-600'      // Blue to Red
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="p-8 rounded-2xl bg-[#141B3D]/50 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#DC2626]/10 backdrop-blur-sm transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center mb-6 shadow-lg`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-white mb-4 text-2xl">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
