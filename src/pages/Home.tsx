import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Database, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Palette,
  QrCode,
  BarChart3,
  Trophy,
  Play
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { useState, useRef } from 'react';
import heroVideoImage from 'figma:asset/4bb15d85dd98a76e4ec0d4c026ff64bcfb9ed7c3.png';
import goncaloImage from 'figma:asset/b2d04521a989759d87eb9a5ccedc99d7a5e8da65.png';
import lucasImage from 'figma:asset/ebec16c47ac04cd1e1853b109d5159b1b3455ca0.png';
import { HeroFanCardDisplay } from '../components/HeroFanCardDisplay';
import { PartnerSlider } from '../components/PartnerSlider';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { HowItWorksAlt } from '../components/HowItWorksAlt';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

// Actual Fancard graphics - verified working
import cascaisFancard1 from 'figma:asset/e9796bab216c855789eaba4da1b5e2aae0cdc5ee.png';
import cascaisFancard2 from 'figma:asset/6a560fc3086fe4114b4ea82503ed3a06ef7e3d6f.png';
import cascaisFancard3 from 'figma:asset/ee57e1d947aacfbcbe92a9ee9d8e52963ddfe862.png';
import sportworxFancard1 from 'figma:asset/84c64f6033bda7062a46815302b12955b80c4967.png';
import sportworxFancard2 from 'figma:asset/bd1d33cc6e557592044c709b15d115806d48b6f1.png';
import sportworxFancard3 from 'figma:asset/738bc0483b8952cca79650579430057449dff8df.png';
import lafFancard1 from 'figma:asset/ca0e056b2fdf8800c98953657932d5621bae45b2.png';
import lafFancard2 from 'figma:asset/8d65b1cc55257b5972296c8edbf1947171afbd46.png';
import lafFancard3 from 'figma:asset/b080cb6a7a16438266b0abd5a6ac810b4e27fa7e.png';
import ballerMarketPromo1 from 'figma:asset/953729f053e165eb4313dee5ba93b31eac681909.png';
import ballerMarketPromo2 from 'figma:asset/948086022b07218b5b69aa0554c5b0dfabce40f2.png';

export function Home() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="bg-white">
      {/* Hero Section - Bold & Powerful */}
      <section ref={containerRef} className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-32 sm:py-36 md:py-40 overflow-hidden bg-gray-50">
        {/* Clean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        <motion.div 
          className="relative z-10 max-w-[1600px] mx-auto w-full px-4"
          style={{ opacity, scale }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content - Bold, expressive copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl lg:max-w-none"
            >
              {/* Eyebrow - energy marker */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 sm:mb-8"
              >
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#BEF264] to-transparent" />
                <span className="text-[#BEF264] text-xs sm:text-sm font-bold uppercase tracking-wider">THE FAN ENGAGEMENT PLATFORM</span>
              </motion.div>

              {/* Hero Headline - BOLD & IMPACTFUL */}
              <h1 className="text-gray-900 mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-bold">
                Turn Fan Moments Into <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Brand Loyalty.</span>
              </h1>
              
              {/* Subheadline - Clear value prop */}
              <p className="text-gray-600 text-lg sm:text-xl mb-10 sm:mb-12 max-w-2xl leading-relaxed">
                Capture unforgettable fan moments at your event and transform them into lasting digital memories that deepen the connection to your brand.
              </p>

              {/* Value Props - Numbered List */}
              <div className="space-y-3 mb-10 sm:mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Build your first-party fan database
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Grow engagement during your event
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Strengthen fan relations and loyalty
                  </p>
                </div>
              </div>

              {/* CTAs - Powerful & Decisive */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Button 
                  size="lg" 
                  className="bg-[#BEF264] hover:bg-[#9EF01A] text-black border-0 px-8 py-6 text-base font-semibold group transition-all duration-300"
                  onClick={() => setDemoDialogOpen(true)}
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400 px-8 py-6 text-base font-semibold transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" strokeWidth={1.5} fill="currentColor" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Visual Impact */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:ml-auto"
            >
              <HeroFanCardDisplay />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator - subtle momentum cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* Partner Logos Slider */}
      <PartnerSlider />

      {/* How It Works */}
      <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 overflow-hidden bg-gray-50">
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="text-[#BEF264] text-sm uppercase tracking-wider mb-4 font-semibold">HOW IT WORKS</div>
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Branded Campaigns <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Your Fans Love</span>
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              Launch engaging campaigns in minutes and start capturing the fan data that proves your value.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="grid grid-cols-1 gap-4 sm:gap-5">

              {/* Row 1: Two tall feature cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0 }}
                  className="relative p-8 rounded-2xl bg-gray-100 hover:bg-gray-200/60 transition-all duration-300 flex flex-col min-h-[260px]"
                >
                  <div className="absolute top-6 right-7 text-gray-300 font-semibold tracking-wide text-[32px] font-bold">01</div>
                  <div className="w-10 h-10 rounded-xl bg-gray-900/10 flex items-center justify-center mb-auto">
                    <Palette className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div className="mt-12">
                    <h3 className="text-gray-900 mb-2 text-lg font-semibold">Create Your Campaign</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Design branded templates with your logos, sponsors, and custom themes using our intuitive dashboard.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative p-8 rounded-2xl bg-gray-100 hover:bg-gray-200/60 transition-all duration-300 flex flex-col min-h-[260px]"
                >
                  <div className="absolute top-6 right-7 text-gray-300 font-semibold tracking-wide text-[32px] font-bold">02</div>
                  <div className="w-10 h-10 rounded-xl bg-gray-900/10 flex items-center justify-center mb-auto">
                    <QrCode className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div className="mt-12">
                    <h3 className="text-gray-900 mb-2 text-lg font-semibold">Deploy at Events</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Share QR codes at your venue—on screens, tickets, or signage. Fans scan to instantly join.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Three smaller equal cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative p-7 rounded-2xl bg-gray-100 hover:bg-gray-200/60 transition-all duration-300 flex flex-col min-h-[200px]"
                >
                  <div className="absolute top-6 right-7 text-gray-300 font-semibold tracking-wide text-[32px] font-bold">03</div>
                  <div className="w-10 h-10 rounded-xl bg-gray-900/10 flex items-center justify-center mb-auto">
                    <BarChart3 className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div className="mt-10">
                    <h3 className="text-gray-900 mb-2 text-base font-semibold">Capture Unique Data</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Access engagement metrics, sentiment insights, and fan data that's impossible to get anywhere else.
                    </p>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative p-7 rounded-2xl bg-gray-100 hover:bg-gray-200/60 transition-all duration-300 flex flex-col min-h-[200px]"
                >
                  <div className="absolute top-6 right-7 text-gray-300 font-semibold tracking-wide text-[32px] font-bold">04</div>
                  <div className="w-10 h-10 rounded-xl bg-gray-900/10 flex items-center justify-center mb-auto">
                    <Database className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div className="mt-10">
                    <h3 className="text-gray-900 mb-2 text-base font-semibold">Build your Fan Database</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Collect verified fan contact information and build a direct relationship with your most engaged supporters.
                    </p>
                  </div>
                </motion.div>

                {/* Step 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative p-7 rounded-2xl bg-gray-100 hover:bg-gray-200/60 transition-all duration-300 flex flex-col min-h-[200px]"
                >
                  <div className="absolute top-6 right-7 text-gray-300 font-semibold tracking-wide text-[32px] font-bold">05</div>
                  <div className="w-10 h-10 rounded-xl bg-gray-900/10 flex items-center justify-center mb-auto">
                    <Trophy className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div className="mt-10">
                    <h3 className="text-gray-900 mb-2 text-base font-semibold">Automated Insights</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Get instant insights into how your campaign performed with detailed analytics and engagement reports.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-6 text-lg group rounded-full shadow-lg transition-all"
              onClick={() => setDemoDialogOpen(true)}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Button>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 md:mt-20 max-w-7xl mx-auto"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={cascaisFancard1}
                        alt="CS Cascais - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={cascaisFancard2}
                        alt="CS Cascais - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={cascaisFancard3}
                        alt="CS Cascais - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={sportworxFancard1}
                        alt="Sportworx - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={sportworxFancard2}
                        alt="Sportworx - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={sportworxFancard3}
                        alt="Sportworx - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={lafFancard1}
                        alt="Life After Football - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={lafFancard2}
                        alt="Life After Football - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={lafFancard3}
                        alt="Life After Football - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={ballerMarketPromo1}
                        alt="Baller Market - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={ballerMarketPromo2}
                        alt="Baller Market - FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white border-gray-300 text-gray-900 hover:bg-gray-50 hover:text-gray-900" />
              <CarouselNext className="right-4 bg-white border-gray-300 text-gray-900 hover:bg-gray-50 hover:text-gray-900" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* How It Works — Alternative Layout (Tab + Preview) */}
      {/* HIDDEN — to restore, remove the `false &&` wrapper: false && <HowItWorksAlt ... /> */}
      {false && <HowItWorksAlt onBookDemo={() => setDemoDialogOpen(true)} />}

      {/* Testimonials Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              Trusted by Leaders
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              See what sports organizations are saying about Fancard
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Lucas Bugter - Sportworx */}
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
                <img 
                  src={lucasImage} 
                  alt="Lucas Bugter" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">Lucas Bugter</div>
                  <div className="text-gray-600">CMO, Sportworx</div>
                </div>
              </div>
            </motion.div>

            {/* Gonçalo de Moura - CS Cascais */}
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
                <img 
                  src={goncaloImage} 
                  alt="Gonçalo de Moura" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">Gonçalo de Moura</div>
                  <div className="text-gray-600">CEO, CS Cascais</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Premium Black Section */}
      <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
        {/* Clean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-gray-900 mb-8 sm:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight px-4">
            Start Turning Moments Into
            <br />
            <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Measurable Value.</span>
          </h2>
      
          <p className="text-gray-600 text-xl sm:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join leading sports organizations creating unforgettable experiences that drive loyalty and revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <Button 
              size="lg" 
              className="bg-[#BEF264] hover:bg-[#9EF01A] text-black border-0 px-10 py-7 text-lg sm:text-xl font-semibold group transition-all duration-300"
              onClick={() => setDemoDialogOpen(true)}
            >
              Book a Demo
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
            </Button>
          </div>
        </motion.div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}