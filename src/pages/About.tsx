import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { ArrowRight, Target, Heart, Zap } from 'lucide-react';
import { useState } from 'react';
import fancardImage from 'figma:asset/92e58216a167562899bb4ca35ed1cc17f9e4a063.png';
import stadiumFancardImage from 'figma:asset/212caf2802dfb5fdae71afb7d271b2c2cf37401e.png';

export function About() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-white">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="text-[#BEF264] text-sm uppercase tracking-wider mb-4 font-semibold">
            ABOUT FANCARD
          </div>
          <h1 className="text-gray-900 mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4">
            Leading the Fan Engagement <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Revolution</span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4">
            Fancard transforms how sports venues connect with fans by turning memorable moments into collectible digital keepsakes that drive loyalty and revenue.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">Our Mission</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                We're on a mission to transform how stadiums, arenas, and sports tournaments 
                connect with their fans. By converting game day moments into collectible 
                digital keepsakes, we help venues forge deeper connections that extend 
                far beyond the final whistle.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Fancard bridges the gap between the electric atmosphere of live sports and 
                lasting digital engagement, creating experiences that fans treasure and venues 
                rely on to drive loyalty and revenue.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#BEF264]/20 to-[#86EFAC]/20 rounded-3xl blur-2xl" />
              <ImageWithFallback
                src={fancardImage}
                alt="FanCard collectible example"
                className="relative rounded-2xl w-full h-auto shadow-2xl border border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-white">
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold px-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              These principles guide everything we do for sports venues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: 'Fan-First',
                description: 'Every feature we build starts with the fan experience. We create moments that turn casual attendees into passionate, lifelong supporters.',
              },
              {
                icon: Zap,
                title: 'Built for Scale',
                description: 'From 5,000-seat arenas to 100,000-capacity stadiums, our platform handles the biggest game days with ease and reliability.',
              },
              {
                icon: Target,
                title: 'Revenue-Driven',
                description: 'We deliver measurable ROI through increased merchandise sales, ticket renewals, and sponsorship opportunities powered by fan data.',
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-4 text-2xl font-bold">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#BEF264]/20 to-[#86EFAC]/20 rounded-3xl blur-2xl" />
              <ImageWithFallback
                src={stadiumFancardImage}
                alt="FanCard on stadium jumbotron"
                className="relative rounded-2xl w-full h-auto shadow-2xl border border-gray-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">Our Story</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Fancard emerged from years of watching sports venues struggle to maintain 
                meaningful connections with fans after they leave the stadium. Traditional 
                engagement methods—email blasts, basic social media—felt impersonal and 
                easily forgotten.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                We knew there had to a better way—a way to capture the euphoria of a 
                game-winning goal, preserve it digitally, and create ongoing value for both 
                venues and their most passionate supporters.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Today, Fancard powers engagement for premier stadiums, arenas, and tournaments 
                across America, turning millions of game day moments into lasting memories and 
                building communities that span generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-white">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
            Bring Fancard to Your <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Venue</span>
          </h2>
          <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto">
            Whether you operate a stadium, arena, or tournament, we'd love to help you 
            transform how you connect with your fans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-6 text-lg group rounded-full shadow-lg transition-all"
              onClick={() => setDemoDialogOpen(true)}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}