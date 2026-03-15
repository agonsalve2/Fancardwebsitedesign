import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Users, Share2, TrendingUp, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { useState } from 'react';
import fancardExample1 from 'figma:asset/84c64f6033bda7062a46815302b12955b80c4967.png';
import fancardExample2 from 'figma:asset/bd1d33cc6e557592044c709b15d115806d48b6f1.png';
import fancardExample3 from 'figma:asset/738bc0483b8952cca79650579430057449dff8df.png';
import sportworxLogo from 'figma:asset/2f399471bafeab7ca8bc4e4dd5a8ecdd36b3819d.png';

export function CaseStudySportworx() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  const keyMetrics = [
    { icon: Sparkles, label: 'Interactive Experience', description: 'Real-time moment minting' },
    { icon: Share2, label: 'Social Amplification', description: 'Sponsor visibility beyond venue' },
    { icon: Users, label: 'Fan Participation', description: 'Passive viewing to active engagement' },
    { icon: TrendingUp, label: 'Extended Reach', description: 'Digital layer scales infinitely' },
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
              Event Organizer • Netherlands
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src={sportworxLogo} alt="Sportworx" className="h-12 sm:h-16" />
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">×</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Fancard</h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Turning live beach volleyball into interactive fan moments — and unlocking sponsor reach beyond the arena
            </p>
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

      {/* Overview */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sportworx is known for creating immersive pop-up arenas and signature sports events that bring fans closer to the action. At <strong>Queen & King of the Court (QKOTC) 2025</strong>, they partnered with <strong>Fancard</strong> to launch a new kind of matchday engagement: turning every rally into a shareable digital moment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With Fancard, spectators didn't just watch the highlights — they captured them, owned them, and shared them in real time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The result: <strong>a more interactive event experience for fans</strong> and <strong>a bigger value proposition for sponsors</strong>, powered by social distribution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Modern sports fans crave more than entertainment — they want participation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">For Sportworx, the goal at QKOTC was to:</p>
            <ul className="space-y-3 text-lg text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Make live attendance feel <strong>more interactive and memorable</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Increase fan engagement without disrupting the game</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Extend event visibility <strong>beyond the venue</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Deliver sponsors more than on-site branding — <strong>digital reach with attention</strong></span>
              </li>
            </ul>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-2xl text-gray-900 font-bold">
                The venue is finite. Social reach is not.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Solution: Live "Moment Minting" With Fancard
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fancard launched publicly at QKOTC with an MVP built for real-time fan interaction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">Fans could:</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#6FE866] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gray-900" />
                </div>
                <p className="text-lg text-gray-700 pt-0.5">Scan a courtside QR code</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#6FE866] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gray-900" />
                </div>
                <p className="text-lg text-gray-700 pt-0.5">Mint time-stamped personalized digital collectibles ("moments")</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#6FE866] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gray-900" />
                </div>
                <p className="text-lg text-gray-700 pt-0.5">Share them instantly online</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#6FE866] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gray-900" />
                </div>
                <p className="text-lg text-gray-700 pt-0.5">Compete on a live leaderboard and unlock surprise perks</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This transformed the spectator journey from passive viewing into a real-time participation loop:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-lg text-gray-900 font-semibold text-center">
                Live highlight → fan action → collectible created → shared online → amplified event reach
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fancards in Action */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
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
              Queen & King of the Court 2025 fans captured and shared their favorite moments
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
                  alt={`Queen & King of the Court Fancard ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Value */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sponsor Value: Visibility That Travels With the Fan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At QKOTC, sponsor placements weren't limited to banners or screens.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fancard introduced <strong>Sponsor Moments</strong>:
            </p>
            <div className="bg-gradient-to-br from-[#6FE866]/10 to-[#8FF888]/10 rounded-2xl p-8 border border-gray-200 mb-8">
              <p className="text-2xl text-gray-900 font-bold mb-4">
                Branded collectible frames integrated directly into fan-created content
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That means sponsors weren't just <em>seen</em> at the event — they became part of the content fans posted on their own socials.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">Why this matters for sponsor ROI:</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span className="text-lg text-gray-700">Fans generate organic impressions (earned media)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span className="text-lg text-gray-700">Branded frames appear in high-attention content (a personal moment)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span className="text-lg text-gray-700">Sponsor visibility travels to audiences who aren't inside the arena</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span className="text-lg text-gray-700">Reach continues after the event ends (posts stay live, reshares continue)</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              This is sponsor visibility designed for how people actually consume sports today through the stories and feeds of friends, creators, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Real-Time Engagement */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Real-Time Engagement: Making Fans Part of the Show
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sportworx didn't just add a digital layer — they enhanced the live atmosphere.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Fancard made fans feel like active participants by:</p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Rewarding sharing through a <strong>live leaderboard</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Creating a feeling of "capture it now" urgency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Making every big rally a moment fans could own forever</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 sm:p-12 border border-gray-200"
          >
            <div className="text-4xl sm:text-5xl text-[#6FE866] mb-6">"</div>
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
              Fancard transforms passive viewing into an interactive game that travels with you long after the final whistle.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6FE866] to-[#8FF888] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                L
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">Lucas Bugter</div>
                <div className="text-gray-600">CMO, Sportworx</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Results & Impact (What This Unlocks)
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stronger live engagement</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fans interacted with the event <em>during play</em>, not just after.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">More sponsor value per attendee</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every fan became a distribution channel for sponsor-branded content.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Extended reach beyond the arena</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fancards created an online layer of visibility that scaled beyond physical capacity.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">A modern engagement and data foundation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rights holders gained opt-in fan insights (like geo and contact info), enabling smarter marketing and long-term retention.
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
              Fancard fit perfectly into the QKOTC experience because it was:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant</h3>
                <p className="text-gray-600">QR → moment created in seconds</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emotional</h3>
                <p className="text-gray-600">Fans capture the exact highlight they loved</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shareable</h3>
                <p className="text-gray-600">Designed for social-native reach</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sponsor-Friendly</h3>
                <p className="text-gray-600">Brand integration inside content, not beside it</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <p className="text-xl sm:text-2xl text-gray-900 leading-relaxed mb-6 font-medium">
              Sportworx and Fancard proved that the future of live events is not just about filling seats — it's about <strong>activating every seat</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At QKOTC 2025, spectators became collectors, creators, and amplifiers — increasing energy in the arena and unlocking sponsor visibility far beyond it.
            </p>
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-2xl text-gray-900 leading-relaxed font-semibold">
                Live sport became digital reach. And sponsors gained exposure that traveled with every fan-made moment.
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
              Ready to Transform <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Your Event Experience?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join Sportworx and leading event organizers in creating interactive digital moments that amplify sponsor reach and fan engagement.
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