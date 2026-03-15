import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import stadiumFancardImage from 'figma:asset/212caf2802dfb5fdae71afb7d271b2c2cf37401e.png';

import cascaisFancard1 from 'figma:asset/e9796bab216c855789eaba4da1b5e2aae0cdc5ee.png';
import sportworxFancard1 from 'figma:asset/84c64f6033bda7062a46815302b12955b80c4967.png';
import lafFancard1 from 'figma:asset/ca0e056b2fdf8800c98953657932d5621bae45b2.png';
import ballerMarketPromo1 from 'figma:asset/953729f053e165eb4313dee5ba93b31eac681909.png';
import fancardExample from '../assets/fancard-example.jpg';

const stackedCards = [
  { src: cascaisFancard1, rotate: -14, delay: 0, x: -36, y: 24 },
  { src: sportworxFancard1, rotate: 10, delay: 0.08, x: 30, y: -18 },
  { src: lafFancard1, rotate: -6, delay: 0.16, x: -18, y: -30 },
  { src: ballerMarketPromo1, rotate: 12, delay: 0.24, x: 24, y: 12 },
  { src: fancardExample, rotate: -2.5, delay: 0.32, x: -6, y: 6 },
];

function InteractiveCard({ src, sensitivity = 20, delay = 0 }: { src: string; sensitivity?: number; delay?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({ rotateY: x * sensitivity, rotateX: -y * sensitivity });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center"
      style={{ perspective: 600, marginTop: '2vh' }}
      initial={{ opacity: 0, y: -300 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.img
        src={src}
        alt="Fancard"
        className="rounded-2xl shadow-xl"
        style={{
          width: '60%',
          maxWidth: 200,
          maxHeight: '20vh',
          objectFit: 'contain',
        }}
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
    </motion.div>
  );
}

export function About() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = 'y proximity';
    return () => {
      html.style.scrollSnapType = '';
    };
  }, []);

  return (
    <div className="pt-20">
      {/* 1) Our Mission — Full viewport */}
      <section className="relative flex items-center px-4 sm:px-6 lg:px-8 snap-start" style={{ minHeight: '100dvh' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[#6FE866] text-sm uppercase tracking-wider mb-4 font-semibold">
                ABOUT FANCARD
              </div>
              <h1 className="text-gray-900 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                Our Mission
              </h1>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6">
                We're on a mission to transform how stadiums, arenas, and sports tournaments
                connect with their fans. By converting game day moments into collectible
                digital keepsakes, we help venues forge deeper connections that extend
                far beyond the final whistle.
              </p>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                Fancard bridges the gap between the electric atmosphere of live sports and
                lasting digital engagement, creating experiences that fans treasure and venues
                rely on to drive loyalty and revenue.
              </p>
            </motion.div>

            <div className="relative flex items-center justify-center" style={{ height: '60vh', minHeight: 400 }}>
              {stackedCards.map((card, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    width: '60%',
                    maxWidth: 300,
                  }}
                  initial={{ opacity: 0, y: -600, x: 0, rotate: 0, scale: 0.9 }}
                  animate={{ opacity: 1, y: card.y, x: card.x, rotate: card.rotate, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + card.delay,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <img
                    src={card.src}
                    alt="Fancard"
                    className="w-full h-auto block rounded-2xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2) Our Core Values — Full viewport */}
      <section className="relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden snap-start" style={{ height: '100dvh', maxHeight: '100dvh' }}>
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: '4vh' }}
          >
            <h2 className="text-gray-900 mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Our Core Values</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              These principles guide everything we do for sports venues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                number: '01',
                title: 'Fan-First',
                description: 'Every feature we build starts with the fan experience. We create moments that turn casual attendees into passionate, lifelong supporters.',
                card: cascaisFancard1,
              },
              {
                number: '02',
                title: 'Built for Scale',
                description: 'From 5,000-seat arenas to 100,000-capacity stadiums, our platform handles the biggest game days with ease and reliability.',
                card: sportworxFancard1,
              },
              {
                number: '03',
                title: 'Revenue-Driven',
                description: 'We deliver measurable ROI through increased merchandise sales, ticket renewals, and sponsorship opportunities powered by fan data.',
                card: ballerMarketPromo1,
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Large white number */}
                <span
                  className="font-bold leading-[0.85] block text-center"
                  style={{ fontSize: 'min(14vw, 14vh)', marginBottom: '1.5vh', color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
                >
                  {value.number}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent text-center" style={{ marginBottom: '1vh' }}>{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">{value.description}</p>

                <InteractiveCard src={value.card} sensitivity={index === 1 ? 28 : 20} delay={index * 0.15} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Our Story — Full viewport */}
      <section className="relative flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden snap-start" style={{ minHeight: '100dvh' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6FE866]/20 to-[#8FF888]/20 rounded-3xl blur-2xl" />
              <ImageWithFallback
                src={stadiumFancardImage}
                alt="FanCard on stadium jumbotron"
                className="relative rounded-2xl w-full h-auto shadow-2xl border border-gray-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-gray-900 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Our Story</h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6">
                Fancard emerged from years of watching sports venues struggle to maintain
                meaningful connections with fans after they leave the stadium. Traditional
                engagement methods—email blasts, basic social media—felt impersonal and
                easily forgotten.
              </p>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6">
                We knew there had to a better way—a way to capture the euphoria of a
                game-winning goal, preserve it digitally, and create ongoing value for both
                venues and their most passionate supporters.
              </p>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                Today, Fancard powers engagement for premier stadiums, arenas, and tournaments
                across the world, turning millions of game day moments into lasting memories and
                building communities that span generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4) Book a Demo — Full viewport */}
      <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden snap-start" style={{ minHeight: '100dvh' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-gray-900 mb-8 sm:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight">
            Bring Fancard to Your{' '}
            <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Venue</span>
          </h2>
          <p className="text-gray-600 text-xl sm:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you operate a stadium, arena, or tournament, we'd love to help you
            transform how you connect with your fans.
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
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}
