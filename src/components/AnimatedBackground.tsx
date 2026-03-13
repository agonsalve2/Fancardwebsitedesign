import { motion } from 'motion/react';

export function AnimatedBackground() {
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay with red and blue glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/5 via-transparent to-[#3B82F6]/5" />
      
      {/* Floating red, white, and blue particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 3,
            height: Math.random() * 6 + 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: [
              'rgba(220, 38, 38, 0.4)',  // Red
              'rgba(59, 130, 246, 0.4)', // Blue
              'rgba(255, 255, 255, 0.3)', // White
              'rgba(239, 68, 68, 0.3)',  // Light Red
              'rgba(96, 165, 250, 0.3)'  // Light Blue
            ][Math.floor(Math.random() * 5)],
            boxShadow: i % 3 === 0 
              ? '0 0 20px rgba(220, 38, 38, 0.3)' 
              : '0 0 20px rgba(59, 130, 246, 0.3)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Red and Blue energy rings */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#DC2626]/10 to-transparent blur-3xl animate-pulse" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#3B82F6]/10 to-transparent blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#EF4444]/5 via-transparent to-[#60A5FA]/5 blur-3xl animate-pulse" 
           style={{ animationDuration: '10s', animationDelay: '2s' }} />
    </div>
  );
}
