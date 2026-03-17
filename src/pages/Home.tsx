import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import {
  ArrowRight,
  Play,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { useState, useRef, useEffect } from 'react';
import goncaloImage from 'figma:asset/b2d04521a989759d87eb9a5ccedc99d7a5e8da65.png';
import lucasImage from 'figma:asset/ebec16c47ac04cd1e1853b109d5159b1b3455ca0.png';
import { PartnerSlider } from '../components/PartnerSlider';
import fancardLogoBlack from '../assets/Fancard-logo-black.svg';
import { HowItWorksAlt } from '../components/HowItWorksAlt';

import { allCardImages, cardRotations } from '../components/FancardBackground';

// Depth values for parallax (0 = no movement, 1 = max movement)
const cardDepths = [
  0.3, 0.6, 0.2, 0.5, 0.4, 0.7, 0.3, 0.5, 0.2, 0.6,
  0.4, 0.3, 0.7, 0.2, 0.5, 0.6, 0.3, 0.4, 0.7, 0.2,
  0.5, 0.3, 0.6, 0.4, 0.2, 0.7, 0.5, 0.3, 0.6, 0.4,
];

const hiwSteps = [
  {
    number: '01',
    eyebrow: 'STEP 01',
    title: 'Create Your Campaign',
    description: 'Design branded templates with your logos, sponsors, and custom themes using our intuitive dashboard.',
    accent: '#6FE866',
  },
  {
    number: '02',
    eyebrow: 'STEP 02',
    title: 'Deploy at Events',
    description: 'Share QR codes at your venue — on screens, tickets, or signage. Fans scan to instantly join.',
    accent: '#22D3EE',
  },
  {
    number: '03',
    eyebrow: 'STEP 03',
    title: 'Capture Unique Data',
    description: "Access engagement metrics, sentiment insights, and fan data that's impossible to get anywhere else.",
    accent: '#E879F9',
  },
  {
    number: '04',
    eyebrow: 'STEP 04',
    title: 'Build Your Fan Database',
    description: 'Collect verified fan contact information and build a direct relationship with your most engaged supporters.',
    accent: '#FB923C',
  },
];

// SVG geometry components per step
function GeometryCreate({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" style={{ maxWidth: 400, maxHeight: 400 }}>
      {/* Concentric dashed circles */}
      {[80, 130, 180].map((r, i) => (
        <motion.circle
          key={r}
          cx={200} cy={200} r={r}
          fill="none" stroke={accent} strokeWidth={1} strokeDasharray="8 6"
          opacity={0.4}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      {/* Crosshair lines */}
      <motion.line x1={200} y1={10} x2={200} y2={390} stroke={accent} strokeWidth={0.5} opacity={0.2}
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.line x1={10} y1={200} x2={390} y2={200} stroke={accent} strokeWidth={0.5} opacity={0.2}
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      {/* Centre dot with pulse */}
      <circle cx={200} cy={200} r={6} fill={accent} />
      <motion.circle cx={200} cy={200} r={6} fill="none" stroke={accent} strokeWidth={1.5}
        animate={{ r: [6, 20, 6], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
      {/* Cardinal dots */}
      {[[200, 120], [200, 280], [120, 200], [280, 200]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={3} fill={accent}
          initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.5 + i * 0.1 }} />
      ))}
    </svg>
  );
}

function GeometryDeploy({ accent }: { accent: string }) {
  const dots: [number, number, boolean][] = [];
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 6; col++) {
      dots.push([60 + col * 48, 60 + row * 42, Math.random() > 0.4]);
    }
  }
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" style={{ maxWidth: 400, maxHeight: 400 }}>
      {dots.map(([cx, cy, filled], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={4}
          fill={filled ? accent : 'none'} stroke={accent} strokeWidth={filled ? 0 : 1}
          opacity={0.6}
          initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
          transition={{ delay: i * 0.01, duration: 0.3 }}
        />
      ))}
      {/* Scan line */}
      <motion.line x1={40} y1={0} x2={360} y2={0} stroke={accent} strokeWidth={2} opacity={0.3}
        animate={{ y1: [40, 360, 40], y2: [40, 360, 40] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />
      <motion.rect x={40} width={320} height={30} fill={`url(#scanGlow)`} opacity={0.15}
        animate={{ y: [30, 350, 30] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />
      <defs>
        <linearGradient id="scanGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.4" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GeometryCapture({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" style={{ maxWidth: 400, maxHeight: 400 }}>
      {/* Orbital rings */}
      {[{ r: 70, dur: 7, dir: 1 }, { r: 110, dur: 10.5, dir: -1 }, { r: 150, dur: 14, dir: 1 }].map((ring, i) => (
        <motion.circle key={i} cx={200} cy={200} r={ring.r}
          fill="none" stroke={accent} strokeWidth={1} strokeDasharray="6 4"
          opacity={0.35}
          initial={{ opacity: 0 }} animate={{ opacity: 0.35, rotate: ring.dir * 360 }}
          transition={{ opacity: { duration: 0.5 }, rotate: { duration: ring.dur, repeat: Infinity, ease: 'linear' } }}
          style={{ transformOrigin: '200px 200px' }}
        />
      ))}
      {/* Central node */}
      <circle cx={200} cy={200} r={8} fill={accent} opacity={0.9} />
      <motion.circle cx={200} cy={200} r={8} fill="none" stroke={accent} strokeWidth={1}
        animate={{ r: [8, 18, 8], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }} />
      {/* Orbital dots */}
      <motion.circle cx={200} cy={130} r={4} fill={accent}
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 200px' }} />
      <motion.circle cx={200} cy={90} r={3} fill={accent} opacity={0.7}
        animate={{ rotate: -360 }}
        transition={{ duration: 10.5, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 200px' }} />
    </svg>
  );
}

function GeometryBuild({ accent }: { accent: string }) {
  const nodes: [number, number, number][] = [
    [200, 200, 10], [130, 140, 6], [270, 150, 6], [150, 270, 6],
    [260, 260, 6], [100, 210, 5], [300, 200, 5],
  ];
  const lines: [number, number, number, number][] = [
    [200, 200, 130, 140], [200, 200, 270, 150], [200, 200, 150, 270],
    [200, 200, 260, 260], [200, 200, 100, 210], [200, 200, 300, 200],
    [130, 140, 100, 210], [270, 150, 300, 200], [150, 270, 260, 260],
    [130, 140, 270, 150],
  ];
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" style={{ maxWidth: 400, maxHeight: 400 }}>
      {lines.map(([x1, y1, x2, y2], i) => (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={accent} strokeWidth={0.8} opacity={0.25}
          initial={{ opacity: 0 }} animate={{ opacity: 0.25 }}
          transition={{ delay: 0.3 + i * 0.05 }}
        />
      ))}
      {nodes.map(([cx, cy, r], i) => (
        <g key={i}>
          <motion.circle cx={cx} cy={cy} r={r} fill={accent} opacity={0.8}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 200 }}
          />
          <motion.circle cx={cx} cy={cy} r={r} fill="none" stroke={accent} strokeWidth={1}
            animate={{ r: [r, r + 10, r], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        </g>
      ))}
    </svg>
  );
}

const stepGeometries = [GeometryCreate, GeometryDeploy, GeometryCapture, GeometryBuild];

// Animated character-by-character text
function AnimatedTitle({ text }: { text: string }) {
  return (
    <h2 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            duration: 0.6,
            delay: i * 0.018,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </h2>
  );
}

function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Derive active step from scroll progress (4 steps = 4 zones)
  const [activeStep, setActiveStep] = useState(0);
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (v) => {
      const step = Math.min(Math.floor(v * hiwSteps.length), hiwSteps.length - 1);
      setActiveStep(Math.max(0, step));
    });
    return unsubscribe;
  }, [scrollProgress]);

  // Overall scroll progress (0-1) for the progress bar
  const [overallProgress, setOverallProgress] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', setOverallProgress);
    return unsubscribe;
  }, [scrollYProgress]);

  const step = hiwSteps[activeStep];
  const Geometry = stepGeometries[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: '500vh' }}
      role="region"
      aria-label="How it works"
    >
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: '100dvh' }}>
        {/* Ghost number - fancard cutout: fancards visible only through the number text */}
        <div className="absolute inset-0 z-[2] pointer-events-none select-none overflow-hidden" style={{ isolation: 'isolate' }}>
          {/* Fancard grid layer — shifted per step so each number shows different cards */}
          <div className="absolute inset-0">
            <div
              className="grid gap-3 sm:gap-4 p-2"
              style={{
                gridTemplateColumns: 'repeat(6, 1fr)',
                width: '110%',
                marginLeft: '-5%',
              }}
            >
              {(() => {
                // Rotate the card array by a different offset for each step
                const offset = activeStep * 7;
                const shifted = [...allCardImages.slice(offset % allCardImages.length), ...allCardImages.slice(0, offset % allCardImages.length)];
                return shifted.map((src, i) => (
                  <div
                    key={`${activeStep}-${i}`}
                    className="rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{ rotate: `${cardRotations[i]}deg` }}
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-auto block rounded-xl sm:rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                ));
              })()}
            </div>
          </div>
          {/* 90% white overlay so fancards are only ~10% visible */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />
          {/* White mask with text knockout — black text on white, blended with screen so black becomes transparent */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ mixBlendMode: 'screen' }}>
            <div className="absolute inset-0 bg-white" />
            <motion.span
              key={activeStep}
              className="relative font-bold leading-none"
              style={{
                fontSize: 'min(50vw, 50vh)',
                color: 'black',
              }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
              {step.number}
            </motion.span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="relative z-10 h-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Section header - top left */}
          <div className="mb-auto" style={{ paddingTop: 'calc(2.5rem + 80px)' }}>
            <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              How It Works
            </h1>
          </div>

          <div className="flex items-center gap-8 lg:gap-16 max-w-7xl mx-auto w-full mb-auto">
            {/* Left: Text content */}
            <div className="flex-1 min-w-0">
              {/* Eyebrow */}
              <motion.div
                key={`eyebrow-${activeStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.14 }}
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ color: '#6FE866' }}
              >
                {step.eyebrow}
              </motion.div>

              {/* Title with character animation */}
              <motion.div
                key={`title-${activeStep}`}
                className="mb-6"
              >
                <AnimatedTitle text={step.title} />
              </motion.div>

              {/* Description */}
              <motion.p
                key={`desc-${activeStep}`}
                className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {step.description}
              </motion.p>
            </div>

            {/* Right: SVG Geometry */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <motion.div
                key={`geo-${activeStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-[400px]"
              >
                <Geometry accent={step.accent} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar: progress + dots + arrows */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 md:px-12 lg:px-20 pb-8">
          {/* Progress bar */}
          <div className="h-[2px] bg-gray-200 rounded-full mb-6 max-w-7xl mx-auto overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-150"
              style={{ backgroundColor: '#6FE866', width: `${overallProgress * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Navigation dots */}
            <div className="flex gap-3">
              {hiwSteps.map((s, i) => (
                <div
                  key={i}
                  className="relative w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === activeStep ? '#6FE866' : 'rgba(0,0,0,0.12)',
                    transform: i === activeStep ? 'scale(1.5)' : 'scale(1)',
                  }}
                />
              ))}
            </div>

            {/* Step counter */}
            <div className="text-gray-400 text-sm font-medium">
              <span style={{ color: '#6FE866' }}>{String(activeStep + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(hiwSteps.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseXRaw = useMotionValue(0);
  const mouseYRaw = useMotionValue(0);
  const mouseX = useSpring(mouseXRaw, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(mouseYRaw, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseXRaw.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseYRaw.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseXRaw, mouseYRaw]);

  // Enable scroll-snap on html so the last viewport snaps into place
  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y proximity';
    return () => {
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section - Full screen with card grid mosaic */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{ height: '100dvh', backgroundColor: '#2A2A2A' }}
      >
        {/* Card grid mosaic background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 p-2"
            style={{
              width: '110%',
              x: useTransform(mouseX, [-0.5, 0.5], [10, -10]),
              y: useTransform(mouseY, [-0.5, 0.5], [10, -10]),
            }}
          >
            {allCardImages.map((src, i) => (
              <motion.div
                key={i}
                className="rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  rotate: cardRotations[i],
                  x: useTransform(mouseX, [-0.5, 0.5], [-20 * cardDepths[i], 20 * cardDepths[i]]),
                  y: useTransform(mouseY, [-0.5, 0.5], [-15 * cardDepths[i], 15 * cardDepths[i]]),
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: cardRotations[i] + ((i * 7 + 3) % 11 - 5) * 2, zIndex: 10, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ duration: 0.6, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={src}
                  alt="Fancard"
                  className="w-full h-auto block rounded-xl sm:rounded-2xl"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlay over images - black at top fading to transparent at bottom */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)' }}
        />

        {/* Copy text overlay */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#6FE866] to-transparent" />
              <span className="text-[#6FE866] text-xs sm:text-sm font-bold uppercase tracking-wider">THE FAN ENGAGEMENT PLATFORM</span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-[#6FE866] to-transparent" />
            </motion.div>

            <h1 className="text-white mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-bold">
              Turn Fan Moments Into{' '}
              <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">
                Brand Loyalty.
              </span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Capture unforgettable fan moments at your event and transform them into lasting digital memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pointer-events-auto">
              <Button
                size="lg"
                className="bg-[#6FE866] hover:bg-[#5CD85C] text-black border-0 px-8 py-6 text-base font-semibold group transition-all duration-300"
                onClick={() => setDemoDialogOpen(true)}
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-6 text-base font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" strokeWidth={1.5} fill="currentColor" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works — Full-viewport animated section */}
      <HowItWorksSection />

      {/* How It Works — Alternative Layout (Tab + Preview) */}
      {false && <HowItWorksAlt onBookDemo={() => setDemoDialogOpen(true)} />}

      {/* Combined Testimonials + CTA — Full viewport */}
      <section className="relative w-full overflow-hidden flex flex-col justify-center px-4 sm:px-6 lg:px-8 snap-start" style={{ minHeight: '100dvh' }}>
        {/* Fancard background with white overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 p-2"
            style={{
              width: '110%',
              marginLeft: '-5%',
            }}
          >
            {allCardImages.map((src, i) => (
              <div
                key={i}
                className="rounded-xl sm:rounded-2xl overflow-hidden"
                style={{ rotate: `${cardRotations[i]}deg` }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-auto block rounded-xl sm:rounded-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />

        <div className="relative z-[2] max-w-7xl mx-auto w-full py-16 sm:py-20">
          {/* Trusted by Leaders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              Trusted by Leaders
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              See what sports organizations are saying about Fancard
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
                Fancard transforms passive viewing into an interactive game that travels with you long after the final whistle.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img src={lucasImage} alt="Lucas Bugter" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-gray-900 text-lg">Lucas Bugter</div>
                  <div className="text-gray-600">CMO, Sportworx</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
                Fancard is a great platform for connecting the club's activities with its fans - both local and international.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img src={goncaloImage} alt="Gonçalo de Moura" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-gray-900 text-lg">Gonçalo de Moura</div>
                  <div className="text-gray-600">CEO, CS Cascais</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <img src={fancardLogoBlack} alt="Fancard" className="h-10 sm:h-12 mx-auto mb-8" />
            <h2 className="text-gray-900 mb-8 sm:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight px-4">
              Start Turning Moments Into
              <br />
              <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Measurable Value.</span>
            </h2>

            <p className="text-gray-600 text-xl sm:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading sports organizations creating unforgettable experiences that drive loyalty and revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
              <Button
                size="lg"
                className="bg-[#6FE866] hover:bg-[#5CD85C] text-black border-0 px-10 py-7 text-lg sm:text-xl font-semibold group transition-all duration-300"
                onClick={() => setDemoDialogOpen(true)}
              >
                Book a Demo
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}
