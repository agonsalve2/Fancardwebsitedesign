import { motion } from 'motion/react';
import { Heart, Star, Sparkles, Smile } from 'lucide-react';

export function FloatingCards() {
  const cards = [
    { icon: Heart, color: 'from-red-600 to-red-700', delay: 0 },
    { icon: Star, color: 'from-blue-600 to-blue-700', delay: 1 },
    { icon: Sparkles, color: 'from-red-500 to-blue-600', delay: 2 },
    { icon: Smile, color: 'from-blue-500 to-blue-600', delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cards.map((card, index) => {
        const CardIcon = card.icon;
        return (
          <motion.div
            key={index}
            className={`absolute rounded-2xl bg-gradient-to-br ${card.color} shadow-2xl p-6 backdrop-blur-sm`}
            style={{
              width: 120,
              height: 140,
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 30}%`,
            }}
            initial={{ opacity: 0, y: 100, rotate: -10 }}
            animate={{
              opacity: [0.15, 0.3, 0.15],
              y: [0, -30, 0],
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: card.delay,
              ease: "easeInOut",
            }}
          >
            <CardIcon className="w-12 h-12 text-white opacity-90" />
          </motion.div>
        );
      })}
    </div>
  );
}
