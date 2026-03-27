import { useRef } from 'react';

interface TiltWrapperProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  maxTilt?: number;
}

export function TiltWrapper({ children, style, className, maxTilt = 20 }: TiltWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // -0.5 to 0.5, where 0 is center
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // rotateX(positive) = bottom comes toward viewer
    // rotateX(negative) = top comes toward viewer
    // So cursor at top (y negative) → top tilts toward viewer → rotateX negative → rotateX = y * maxTilt
    // cursor at right (x positive) → right tilts toward viewer → rotateY positive → rotateY = x * maxTilt
    el.style.transition = 'transform 0.05s linear';
    el.style.transform = `perspective(300px) rotateX(${y * maxTilt}deg) rotateY(${x * maxTilt}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.4s ease-out';
    el.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        display: 'inline-block',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
