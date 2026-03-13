import { motion } from 'motion/react';
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
  Zap,
  ClipboardList
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import carouselImage1 from 'figma:asset/5eb52359f49aa2ff08ef5fe2e06b5b93417ebef1.png';
import giantsPrideImage from 'figma:asset/4d7e6dd911f4d9b96edce19fbbd6e709d8335644.png';
import carouselImage2 from 'figma:asset/0e2122cc3a35c155aadd3cf3b5b6e1f7e113c996.png';
import carouselImage3 from 'figma:asset/352fa5689bb0b423eaa703e2fd12cb1f2e7c1404.png';
import giantsPrideImage2 from 'figma:asset/00c0ec52d7b8a604f8416da599ea19c9a9ca833e.png';
import giantsPrideImage3 from 'figma:asset/6150253de0eaf641f0ab21cf0f017e977cbfa480.png';
import giantsPrideImage4 from 'figma:asset/ba3d9c8c65dd598dac3cb3c5bf93a7e09c4b712a.png';
import legionSDImage from 'figma:asset/0e505a7c39f5a20abd4c32a806f8bd91c1f037fc.png';
import tritonsImage from 'figma:asset/906cc92887cec61e1102255f8817ce3d0b3164f1.png';
import kungFuPandaImage from 'figma:asset/e69976e109d3a3296f48b8a14a2357844465665c.png';

export function Features() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  // Top featured items (dark background)
  const topFeatures = [
    {
      icon: Database,
      title: 'Unique Data',
      description: 'Access fan metrics that are impossible to get anywhere else.'
    },
    {
      icon: TrendingUp,
      title: '+340% Engagement',
      description: 'See engagement soar as fans engage with your brand on a deeper level.'
    },
    {
      icon: Users,
      title: 'First-Party Data',
      description: 'Build your own database with verified fan profiles and behaviors.'
    },
    {
      icon: BarChart3,
      title: 'Sponsorship ROI',
      description: 'Prove your value with metrics that finally show true impact.'
    }
  ];

  // Regular features grid
  const features = [
    {
      icon: Activity,
      title: 'Real-Time Analytics',
      description: 'Track engagement KPIs, fan sentiment, and campaign performance as it happens. See exactly what\'s working.'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Our AI tracks instant visibility in every FanCard, giving you precise sponsorship exposure data.'
    },
    {
      icon: Palette,
      title: 'Branded Templates',
      description: 'Create stunning campaign designs with your team\'s sponsor logos, and custom themes in minutes.'
    },
    {
      icon: Trophy,
      title: 'Golden Fancard',
      description: 'Select winners for VIP experiences and sweepstakes. Drive participation with gamification that fans love.'
    },
    {
      icon: Layers,
      title: 'Sponsor Co-Branding',
      description: 'Seamlessly integrate sponsor placements and track their brand visibility ROI with hard data.'
    },
    {
      icon: Shield,
      title: 'Content Moderation',
      description: 'AI-powered and human-moderated tools keep your campaigns safe, on-brand, and worry-free.'
    },
    {
      icon: Link2,
      title: 'Partner Enablement',
      description: 'Ready-to-use white kits, rails, and materials make it easy for partners to promote your campaigns.'
    },
    {
      icon: Settings,
      title: 'White-Label Options',
      description: 'Full branding and white-label solutions for enterprise clients who want their own branded experience.'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section - Premium Bold Design */}
      <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
        {/* Clean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center mb-16 sm:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 sm:mb-8"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#BEF264] to-transparent" />
              <span className="text-[#BEF264] text-xs sm:text-sm font-bold uppercase tracking-wider">Platform Features</span>
            </motion.div>
            
            <h1 className="text-gray-900 mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
              Tools That <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Prove Value.</span>
            </h1>
            
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to capture data, engage fans, and demonstrate real ROI.
            </p>
          </motion.div>

          {/* Top Featured Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 text-2xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* Main Features Grid Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Complete Feature Set
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              Everything you need to create, deploy, and measure successful fan engagement campaigns.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-gray-900 text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Features List */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-gray-50">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Add-ons
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              Extend your Fancard experience with specialized features designed to maximize engagement, streamline operations, and unlock new revenue opportunities across every touchpoint of your fan journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'Game-day digital collectible cards',
              'Player highlight moment captures',
              'Fan photo booth integration',
              'Season pass holder exclusives',
              'Tournament championship editions',
              'Social media sharing tools',
              'Multi-venue network support',
              'Branded merchandise integration',
              'Geo-fenced experiences'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-[#BEF264] flex-shrink-0" />
                <span className="text-gray-900 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FanCards Showcase */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              See Fancard in Action
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              Real campaigns, real fans, real results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
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
                        src={tritonsImage}
                        alt="San Clemente Tritons - Boys Varsity Soccer FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={carouselImage1}
                        alt="Queen & King of the Court - Excited fan at basketball arena"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={kungFuPandaImage}
                        alt="Kung Fu Panda Adventure - I Was There FanCard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={giantsPrideImage3}
                        alt="Giants Pride - Fan celebrating at stadium"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={carouselImage2}
                        alt="Queen & King of the Court - Fans watching basketball"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={legionSDImage}
                        alt="Legion SD FanCard - I Was There at JP du Plesis game"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={giantsPrideImage2}
                        alt="Giants Pride - Father and son at stadium"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={carouselImage3}
                        alt="WSU Fan with FanCard - Watched it Live"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/5]">
                      <ImageWithFallback
                        src={giantsPrideImage4}
                        alt="Giants Pride - Couple at Giants vs Browns game"
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

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
            Ready to See What <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">FanCard Can Do?</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Join leading organizations in creating data-driven fan experiences that prove real value to sponsors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white border-0 px-10 py-7 text-xl group rounded-full shadow-lg transition-all"
              onClick={() => setDemoDialogOpen(true)}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}