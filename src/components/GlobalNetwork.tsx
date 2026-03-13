import { motion } from 'motion/react';

export function GlobalNetwork() {
  const connections = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Connection lines alternating red and blue */}
      {connections.map((i) => (
        <motion.div
          key={i}
          className={`absolute h-px ${
            i % 2 === 0 
              ? 'bg-gradient-to-r from-[#DC2626] to-[#3B82F6]' 
              : 'bg-gradient-to-r from-[#3B82F6] to-[#DC2626]'
          }`}
          style={{
            width: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transformOrigin: 'left',
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection nodes in red and blue */}
      {connections.map((i) => (
        <motion.div
          key={`node-${i}`}
          className={`absolute w-3 h-3 rounded-full shadow-lg ${
            i % 3 === 0 
              ? 'bg-gradient-to-br from-[#DC2626] to-[#B91C1C] shadow-[#DC2626]/30'
              : i % 3 === 1
              ? 'bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] shadow-[#3B82F6]/30'
              : 'bg-white shadow-white/30'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
