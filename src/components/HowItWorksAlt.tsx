import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Palette,
  QrCode,
  BarChart3,
  Database,
  Trophy,
  ArrowRight,
  ImageIcon,
} from 'lucide-react';
import { Button } from './ui/button';
import step2Image from 'figma:asset/29421137ec642edce3cd7c06db4a565797227eaf.png';

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  preview: React.ReactNode;
}

// Placeholder component for images coming soon
const Placeholder = ({ label }: { label: string }) => (
  <div className="w-full h-full rounded-2xl bg-gray-200/60 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-3">
    <ImageIcon className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
    <span className="text-xs font-medium text-gray-400">{label}</span>
  </div>
);

const steps: Step[] = [
  {
    id: 1,
    icon: <Palette className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Create Your Campaign',
    description:
      'Design branded templates with your logos, sponsors, and custom themes using our intuitive dashboard.',
    preview: <Placeholder label="Step 1 — Image coming soon" />,
  },
  {
    id: 2,
    icon: <QrCode className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Deploy at Events',
    description:
      'Share QR codes at your venue—on screens, tickets, or signage. Fans scan to instantly join.',
    preview: <img src={step2Image} alt="Deploy at Events" className="w-full h-full object-cover rounded-2xl" />,
  },
  {
    id: 3,
    icon: <BarChart3 className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Capture Unique Data',
    description:
      "Access engagement metrics, sentiment insights, and fan data that's impossible to get anywhere else.",
    preview: <Placeholder label="Step 3 — Image coming soon" />,
  },
  {
    id: 4,
    icon: <Database className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Build your Fan Database',
    description:
      'Collect verified fan contact information and build a direct relationship with your most engaged supporters.',
    preview: <Placeholder label="Step 4 — Image coming soon" />,
  },
  {
    id: 5,
    icon: <Trophy className="w-5 h-5" strokeWidth={1.5} />,
    title: 'Automated Insights',
    description:
      'Get instant insights into how your campaign performed with detailed analytics and engagement reports.',
    preview: <Placeholder label="Step 5 — Image coming soon" />,
  },
];

interface HowItWorksAltProps {
  onBookDemo: () => void;
}

export function HowItWorksAlt({ onBookDemo }: HowItWorksAltProps) {
  const [active, setActive] = useState(0);
  const [progressWidth, setProgressWidth] = useState('0%');
  const [paused, setPaused] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState(4);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(0);
  const remainingRef = useRef<number>(4000);
  const progressRef = useRef<HTMLDivElement | null>(null);

  // Whenever active changes, reset progress to 0 then animate to 100%
  useEffect(() => {
    // Immediately set to 0
    setProgressWidth('0%');
    setTransitionDuration(4);
    remainingRef.current = 4000;
    startTimeRef.current = Date.now();

    // Use double rAF to ensure the browser paints 0% first
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        setProgressWidth('100%');
      });
    });

    // Auto-advance after 4 seconds
    timerRef.current = setTimeout(() => {
      setActive(prev => (prev + 1) % steps.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  // Handle pause/resume
  useEffect(() => {
    if (paused) {
      // Calculate how much time has elapsed
      const elapsed = Date.now() - startTimeRef.current;
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
      // Clear the running timer
      if (timerRef.current) clearTimeout(timerRef.current);
      // Freeze the progress bar at its current visual width
      if (progressRef.current) {
        const computed = progressRef.current.getBoundingClientRect().width;
        const parent = progressRef.current.parentElement?.getBoundingClientRect().width || 1;
        const pct = (computed / parent) * 100;
        setProgressWidth(`${pct}%`);
        setTransitionDuration(0);
      }
    } else if (remainingRef.current < 4000) {
      // Resume: animate from current position to 100% over remaining time
      startTimeRef.current = Date.now();
      rafRef.current = requestAnimationFrame(() => {
        setTransitionDuration(remainingRef.current / 1000);
        rafRef.current = requestAnimationFrame(() => {
          setProgressWidth('100%');
        });
      });
      timerRef.current = setTimeout(() => {
        setActive(prev => (prev + 1) % steps.length);
      }, remainingRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused]);

  const current = steps[active];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
      {/* HIDDEN CONTENT — to restore, remove the `false &&` wrapper below */}
      {false && (
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 grid md:grid-cols-2 gap-6 md:gap-12 items-end"
        >
          <div>
            <div className="text-[#BEF264] text-sm uppercase tracking-wider mb-4 font-semibold">HOW IT WORKS</div>
            <h2 className="text-gray-900 font-bold leading-tight text-[48px]">
              Branded Campaigns{' '}
              <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">
                Your Fans Love
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed md:pb-1">
            Launch engaging campaigns in minutes and start capturing the fan data that proves your value.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Left: Step list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-1"
          >
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActive(i)}
                onMouseEnter={() => active === i && setPaused(true)}
                onMouseLeave={() => active === i && setPaused(false)}
                className={`group relative flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 overflow-hidden ${
                  active === i
                    ? 'bg-gray-100'
                    : 'hover:bg-gray-50'
                }`}
              >
                {/* Progress bar — bottom strip, only on active step */}
                {active === i && (
                  <div
                    ref={progressRef}
                    className="absolute bottom-0 left-0 h-[3px] bg-[#BEF264] rounded-full"
                    style={{
                      width: progressWidth,
                      transition: transitionDuration === 0 ? 'none' : `width ${transitionDuration}s linear`,
                    }}
                  />
                )}

                {/* Icon */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    active === i ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-400 group-hover:text-gray-600'
                  }`}
                >
                  {step.icon}
                </div>
                {/* Title */}
                <span
                  className={`font-semibold text-base transition-colors duration-200 ${
                    active === i ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                  }`}
                >
                  {step.title}
                </span>
                {/* Active indicator */}
                {active === i && (
                  <motion.div
                    key={`dot-${active}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-auto w-2 h-2 rounded-full bg-[#BEF264]"
                  />
                )}
              </button>
            ))}

            {/* CTA below list */}
            <div className="mt-6 px-2">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white border-0 px-7 py-5 text-sm group rounded-full shadow-md transition-all"
                onClick={onBookDemo}
              >
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Button>
            </div>
          </motion.div>

          {/* Right: Preview panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="sticky top-24 bg-gray-100 rounded-3xl p-6 flex flex-col overflow-hidden" style={{ height: 'calc(100vh - 8rem)', maxHeight: '700px', minHeight: '480px' }}>
              {/* Arrow icon top-right */}
              

              {/* Animated preview content */}
              <div className="flex-1 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute inset-0 overflow-auto"
                  >
                    {current.preview}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom label */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`label-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <h3 className="text-gray-900 font-semibold text-base">{current.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{current.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      )}
    </section>
  );
}