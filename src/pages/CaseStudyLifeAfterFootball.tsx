import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Users, Share2, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { useState } from 'react';
import fancardExample1 from 'figma:asset/ca0e056b2fdf8800c98953657932d5621bae45b2.png';
import fancardExample2 from 'figma:asset/8d65b1cc55257b5972296c8edbf1947171afbd46.png';
import fancardExample3 from 'figma:asset/b080cb6a7a16438266b0abd5a6ac810b4e27fa7e.png';

export function CaseStudyLifeAfterFootball() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  const keyMetrics = [
    { icon: Share2, label: 'Brand Visibility', description: 'Extended reach beyond the venue' },
    { icon: Users, label: 'Attendee Amplification', description: 'Guests became distribution channel' },
    { icon: TrendingUp, label: 'Organic Reach', description: 'Authentic social sharing' },
    { icon: Sparkles, label: 'Premium Execution', description: 'Clean brand activation' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link 
            to="/for-your-club" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Use Cases
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-block bg-[#6FE866]/10 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Lifestyle Brand • Netherlands
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Life After Football
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-6">
              Turning red carpet moments into shareable brand visibility at the Fashion Player Awards 2025
            </p>
            <a 
              href="https://lifeafterfootball.eu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              lifeafterfootball.eu
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <metric.icon className="w-8 h-8 text-[#6FE866] mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-gray-600 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At premium lifestyle and sports events like the Fashion Player Awards, brand presence is everywhere — sponsor walls, backdrops, partner logos, photo moments… all competing for attention.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For organizers like Life After Football, the challenge isn't getting people to take photos — it's making sure those photos generate more visibility for the brand online, not just on-site.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">LAF wanted to:</p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Increase online reach during the event</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Get more branded content shared by attendees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Add visibility without adding more physical sponsor clutter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Create a premium activation that matched the event's red carpet atmosphere</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Solution: A Shareable Fancard Experience for LAF
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For the Fashion Player Awards 2025, Fancard created a branded activation tailored to the event vibe.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Attendees could:</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="pt-2">
                  <p className="text-lg text-gray-700">Take a photo in the "red carpet moment" setting</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="pt-2">
                  <p className="text-lg text-gray-700">Instantly generate a Life After Football branded Fancard</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="pt-2">
                  <p className="text-lg text-gray-700">Share it on social platforms, increasing visibility organically</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Instead of competing with sponsor overload in the venue, LAF extended their branding into the place where attention lasts longer:
            </p>
            <p className="text-2xl text-gray-900 font-bold">Social media</p>
          </motion.div>
        </div>
      </section>

      {/* Fancards in Action */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fancards in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fashion Player Awards 2025 attendees created shareable branded moments on the red carpet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[fancardExample1, fancardExample2, fancardExample3].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
              >
                <img 
                  src={image} 
                  alt={`Fashion Player Awards Fancard ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Results: More Brand Visibility Without More On-Site Noise
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The activation helped LAF achieve exactly what modern events need:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Visibility That Travels</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every shared Fancard became a branded post that extended beyond the venue — reaching followers, friends, and wider football culture audiences online.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Attendees Became the Distribution Channel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Instead of relying only on official event coverage, LAF gained amplification through attendee sharing — authentic, personal, and high trust.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sponsor-Crowded Events, But Clean Brand Execution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fancard added a premium layer of branding without needing extra physical placements or competing for wall space.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Worked */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why It Worked</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This activation was successful because it fit naturally into attendee behavior:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Behavior</h3>
                <p className="text-gray-600">People already want to take photos at these events</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Setting</h3>
                <p className="text-gray-600">The setting already feels exclusive and "worth sharing"</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Branding</h3>
                <p className="text-gray-600">Fancard added instant branding + a reason to post</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guest-Powered Reach</h3>
                <p className="text-gray-600">Effortless visibility powered by guests</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#6FE866]/10 to-[#8FF888]/10 rounded-2xl p-8 sm:p-12 border border-gray-200"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Key Takeaway</h2>
            <p className="text-xl sm:text-2xl text-gray-900 leading-relaxed mb-6 font-medium">
              The Fashion Player Awards 2025 proved a simple truth:
            </p>
            <p className="text-2xl sm:text-3xl text-gray-900 leading-relaxed font-semibold">
              The best brand activations don't interrupt the event — they elevate moments people already love.
            </p>
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                With Fancard, Life After Football turned red carpet energy into digital brand reach — one share at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Want to Create a Branded Moment at <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Your Next Event?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Fancard helps sports and lifestyle brands activate fans and attendees through shareable digital experiences that generate real reach and measurable engagement.
            </p>
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white border-0 px-10 py-7 text-xl rounded-full shadow-lg transition-all"
              onClick={() => setDemoDialogOpen(true)}
            >
              Book a Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}
