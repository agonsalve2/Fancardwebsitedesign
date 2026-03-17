import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from 'motion/react';
import {
  Database,
  TrendingUp,
  Users,
  BarChart3,
  Activity,
  Eye,
  Palette,
  Trophy,
  Layers,
  Shield,
  Link2,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '../components/ui/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import carouselImage1 from 'figma:asset/5eb52359f49aa2ff08ef5fe2e06b5b93417ebef1.png';
import carouselImage2 from 'figma:asset/0e2122cc3a35c155aadd3cf3b5b6e1f7e113c996.png';
import carouselImage3 from 'figma:asset/352fa5689bb0b423eaa703e2fd12cb1f2e7c1404.png';
import giantsPrideImage2 from 'figma:asset/00c0ec52d7b8a604f8416da599ea19c9a9ca833e.png';
import giantsPrideImage3 from 'figma:asset/6150253de0eaf641f0ab21cf0f017e977cbfa480.png';
import giantsPrideImage4 from 'figma:asset/ba3d9c8c65dd598dac3cb3c5bf93a7e09c4b712a.png';
import legionSDImage from 'figma:asset/0e505a7c39f5a20abd4c32a806f8bd91c1f037fc.png';
import tritonsImage from 'figma:asset/906cc92887cec61e1102255f8817ce3d0b3164f1.png';
import kungFuPandaImage from 'figma:asset/e69976e109d3a3296f48b8a14a2357844465665c.png';
import type { LucideIcon } from 'lucide-react';

import { allCardImages as heroCardImages, cardRotations as heroCardRotations } from '../components/FancardBackground';

// Individual card imports still needed for feature card backgrounds
import cascaisFancard1 from 'figma:asset/e9796bab216c855789eaba4da1b5e2aae0cdc5ee.png';
import cascaisFancard2 from 'figma:asset/6a560fc3086fe4114b4ea82503ed3a06ef7e3d6f.png';
import sportworxFancard1 from 'figma:asset/84c64f6033bda7062a46815302b12955b80c4967.png';
import sportworxFancard2 from 'figma:asset/bd1d33cc6e557592044c709b15d115806d48b6f1.png';
import lafFancard1 from 'figma:asset/ca0e056b2fdf8800c98953657932d5621bae45b2.png';
import lafFancard2 from 'figma:asset/8d65b1cc55257b5972296c8edbf1947171afbd46.png';
import ballerMarketPromo1 from 'figma:asset/953729f053e165eb4313dee5ba93b31eac681909.png';
import ballerMarketPromo2 from 'figma:asset/948086022b07218b5b69aa0554c5b0dfabce40f2.png';

const bounceEase = [0.34, 1.56, 0.64, 1] as const;

// Slight landing rotations per card group for organic feel
const mainRotationsA = [-1.5, 2, -2, 1];
const mainRotationsB = [1.5, -1, 2, -1.5];

function FeatureCard({ icon: Icon, title, description, bgImage }: { icon: LucideIcon; title: string; description: string; bgImage: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateY: x * 24, rotateX: -y * 24 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ perspective: 600 }} className="w-full h-full">
      <motion.div
        className="relative rounded-2xl shadow-xl overflow-hidden cursor-default border border-gray-200 w-full h-full"
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Fancard image background */}
        <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* 90% white overlay — card image barely visible */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6">
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-gray-900 text-base sm:text-lg font-bold mb-1">{title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AddonCard({ label }: { label: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateY: x * 24, rotateX: -y * 24 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      style={{ perspective: 600 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 cursor-default"
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#6FE866] flex-shrink-0" />
          <span className="text-gray-900 font-semibold">{label}</span>
        </div>
      </motion.div>
    </div>
  );
}

const CARD_WIDTH = 200;
const CARD_HEIGHT = 267; // 3:4 ratio
const CARD_GAP = 46;
const VISIBLE_CARDS = 5;
const TOTAL_CARDS = 8;
const EXTRA_CARDS = TOTAL_CARDS - VISIBLE_CARDS; // 3 cards to scroll in

function FeatureCardStrip({ features }: { features: { icon: LucideIcon; title: string; description: string; bg: string }[] }) {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to horizontal offset (pixels to shift left)
  const totalStripWidth = TOTAL_CARDS * CARD_WIDTH + (TOTAL_CARDS - 1) * CARD_GAP;
  const visibleWidth = VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * CARD_GAP;
  const maxShift = totalStripWidth - visibleWidth;
  const x = useTransform(scrollYProgress, [0.1, 0.9], [0, -maxShift]);

  const headerContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8 sm:mb-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-[#6FE866] text-sm uppercase tracking-wider mb-4 font-semibold">
        COMPLETE FEATURE SET
      </div>
      <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Everything You Need
      </h2>
      <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
        From real-time analytics to white-label solutions — every tool to create,
        deploy, and measure successful fan engagement campaigns.
      </p>
    </motion.div>
  );

  if (isMobile) {
    return (
      <section className="bg-white py-16 sm:py-20 snap-start">
        {headerContent}
        <div className="grid grid-cols-2 gap-3 px-4">
          {features.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: bounceEase }}
              style={{ height: CARD_HEIGHT }}
            >
              <FeatureCard icon={card.icon} title={card.title} description={card.description} bgImage={card.bg} />
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${100 + EXTRA_CARDS * 50}vh` }}>
      <div className="sticky top-0 flex flex-col justify-center overflow-hidden bg-white snap-start" style={{ height: '100dvh' }}>
        {headerContent}

        {/* Centered card strip that shifts left on scroll */}
        <div
          className="mx-auto overflow-x-clip overflow-y-visible py-6"
          style={{ maxWidth: VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * CARD_GAP }}
        >
          <motion.div
            className="flex"
            style={{ gap: CARD_GAP, x }}
          >
            {features.map((card, i) => {
              const offsets = [-18, 12, -8, 20, -14, 10, -20, 16];
              const rotations = [-3, 2.5, -1.5, 3, -2, 1.5, -3.5, 2];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80, scale: 0.85, rotate: 0 }}
                  whileInView={{ opacity: 1, y: offsets[i], scale: 1, rotate: rotations[i] }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.08,
                    ease: bounceEase,
                  }}
                  style={{ width: CARD_WIDTH, height: CARD_HEIGHT, flexShrink: 0 }}
                >
                  <FeatureCard icon={card.icon} title={card.title} description={card.description} bgImage={card.bg} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({ card, index }: { card: { src: string; alt: string; rotate: number; scale: number; offsetY: number }; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateY: x * 24, rotateX: -y * 24 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotate: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, y: card.offsetY, rotate: card.rotate, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.15, ease: bounceEase }}
      className="cursor-pointer flex-1"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
        style={{ perspective: 600 }}
      >
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-gray-200 bg-black shadow-xl aspect-[4/5]"
          animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <ImageWithFallback src={card.src} alt={card.alt} className="w-full h-full object-cover" style={{ transform: `scale(${card.scale})` }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Features() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
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

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = 'y proximity';
    return () => {
      html.style.scrollSnapType = '';
    };
  }, []);

  const features = [
    { icon: Activity, title: 'Real-Time Analytics', description: 'Track engagement KPIs, fan sentiment, and campaign performance as it happens.', bg: cascaisFancard1 },
    { icon: Eye, title: 'Computer Vision', description: 'Our AI tracks instant visibility in every FanCard, giving you precise sponsorship exposure data.', bg: sportworxFancard1 },
    { icon: Palette, title: 'Branded Templates', description: 'Create stunning campaign designs with your team\'s sponsor logos and custom themes in minutes.', bg: lafFancard1 },
    { icon: Trophy, title: 'Golden Fancard', description: 'Select winners for VIP experiences and sweepstakes. Drive participation with gamification.', bg: ballerMarketPromo1 },
    { icon: Layers, title: 'Sponsor Co-Branding', description: 'Seamlessly integrate sponsor placements and track their brand visibility ROI with hard data.', bg: cascaisFancard2 },
    { icon: Shield, title: 'Content Moderation', description: 'AI-powered and human-moderated tools keep your campaigns safe, on-brand, and worry-free.', bg: sportworxFancard2 },
    { icon: Link2, title: 'Partner Enablement', description: 'Ready-to-use kits, rails, and materials make it easy for partners to promote campaigns.', bg: lafFancard2 },
    { icon: Settings, title: 'White-Label Options', description: 'Full branding and white-label solutions for enterprise clients who want their own experience.', bg: ballerMarketPromo2 },
  ];

  const addons = [
    'Game-day digital collectible cards',
    'Player highlight moment captures',
    'Fan photo booth integration',
    'Season pass holder exclusives',
    'Tournament championship editions',
    'Social media sharing tools',
    'Multi-venue network support',
    'Branded merchandise integration',
    'Geo-fenced experiences',
  ];

  return (
    <div>
      {/* 1) Hero Section — Fancard mosaic + white overlay */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden snap-start"
        style={{ height: '100dvh' }}
      >
        {/* Fancard background */}
        <div className="absolute inset-0 z-0">
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 p-2"
            style={{
              width: '110%',
              marginLeft: '-5%',
            }}
          >
            {heroCardImages.map((src, i) => (
              <div
                key={i}
                className="rounded-xl sm:rounded-2xl overflow-hidden"
                style={{ rotate: `${heroCardRotations[i]}deg` }}
              >
                <img src={src} alt="" className="w-full h-auto block rounded-xl sm:rounded-2xl" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        {/* White overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
        />

        {/* Text overlay */}
        <div className="relative z-[3] h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
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
              <span className="text-[#6FE866] text-xs sm:text-sm font-bold uppercase tracking-wider">Platform Features</span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-[#6FE866] to-transparent" />
            </motion.div>

            <h1 className="text-black mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-bold">
              Tools That <span className="text-[#6FE866]" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.3)' }}>Prove Value.</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Everything you need to capture data, engage fans, and demonstrate real ROI.
            </p>
          </motion.div>

          {/* Key metrics pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {[
              { icon: Database, title: 'Unique Data' },
              { icon: TrendingUp, title: '+340% Engagement' },
              { icon: Users, title: 'First-Party Data' },
              { icon: BarChart3, title: 'Sponsorship ROI' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1, ease: bounceEase }}
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-black text-white font-semibold text-sm sm:text-base shadow-lg border border-gray-800"
              >
                <item.icon className="w-4 h-4 text-[#6FE866]" />
                {item.title}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* 2) Complete Feature Set — Scroll-linked horizontal cards */}
      <FeatureCardStrip features={features} />

      {/* 5) Add-ons — Fancard background with white overlay */}
      <section
        className="relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden snap-start"
        style={{ minHeight: '100dvh' }}
      >
        {/* Fancard background with white overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 p-2"
            style={{
              width: '110%',
              marginLeft: '-5%',
            }}
          >
            {heroCardImages.map((src, i) => (
              <div
                key={i}
                className="rounded-xl sm:rounded-2xl overflow-hidden"
                style={{ rotate: `${heroCardRotations[i]}deg` }}
              >
                <img src={src} alt="" className="w-full h-auto block rounded-xl sm:rounded-2xl" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />

        <div className="relative z-[2] max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Add-ons
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
              Extend your Fancard experience with specialized features designed to maximize
              engagement and unlock new revenue opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {addons.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: bounceEase }}
              >
                <AddonCard label={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) FanCards Showcase + CTA — merged into one viewport */}
      <section
        className="relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden snap-start bg-white"
        style={{ minHeight: '100dvh' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Showcase cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-gray-900 mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              See Fancard in Action
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Real campaigns, real fans, real results
            </p>
          </motion.div>

          <div className="flex justify-center gap-5 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-14 items-center">
            {[
              { src: tritonsImage, alt: 'San Clemente Tritons - Boys Varsity Soccer FanCard', rotate: -5, scale: 1.15, offsetY: -20 },
              { src: carouselImage1, alt: 'Queen & King of the Court - Excited fan at basketball arena', rotate: 3, scale: 1, offsetY: 15 },
              { src: kungFuPandaImage, alt: 'Kung Fu Panda Adventure - I Was There FanCard', rotate: -2, scale: 1.15, offsetY: -10 },
            ].map((card, i) => (
              <ShowcaseCard key={i} card={card} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-bold tracking-tight">
              Ready to See What{' '}
              <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">FanCard Can Do?</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join leading organizations in creating data-driven fan experiences that prove real value to sponsors.
            </p>
            <Button
              size="lg"
              className="bg-[#6FE866] hover:bg-[#5CD85C] text-black border-0 px-10 py-7 text-lg sm:text-xl font-semibold group transition-all duration-300"
              onClick={() => setDemoDialogOpen(true)}
            >
              Book a Demo
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
            </Button>
          </motion.div>
        </div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}
