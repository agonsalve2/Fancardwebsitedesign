import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { ArrowRight, Smartphone, Users, Camera, Sparkles, CheckCircle2, Settings, BarChart, Share2, Award, Megaphone } from 'lucide-react';
import { useState } from 'react';

export function HowItWorks() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section - Bold & Premium */}
      <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
        {/* Clean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8"
          >
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#6FE866] to-transparent" />
            <span className="text-[#6FE866] text-xs sm:text-sm font-bold uppercase tracking-wider">The Complete Journey</span>
          </motion.div>
          
          <h1 className="text-gray-900 mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
            Every Moment.
            <br />
            <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Every Fan.</span>
            <br />
            Captured.
          </h1>
          
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            From setup to shareability, here's how Fancard turns fan moments into brand loyalty.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
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

      {/* Timeline Section - Before the Event */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#6FE866]/10 rounded-full mb-4">
              <span className="text-[#6FE866] text-sm font-semibold uppercase tracking-wider">Phase 1</span>
            </div>
            <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              Before the Event: <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Setup & Strategy</span>
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
              Get your campaign ready in minutes, not days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Configure Your Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4 text-2xl font-bold">Configure Your Brand</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upload your venue logo, team colors, and brand assets to our platform. Set up sponsor placements and choose from pre-designed templates or create custom layouts.
              </p>
            </motion.div>

            {/* Design Your Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4 text-2xl font-bold">Design Your Cards</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Create multiple card templates for different moments—game day cards, player spotlights, special events, milestone celebrations. Add dynamic fields that auto-populate with fan data.
              </p>
            </motion.div>

            {/* Prepare Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4 text-2xl font-bold">Prepare Distribution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Generate unique QR codes for different touchpoints—jumbotrons, concourse displays, tickets, social media. Schedule automated campaigns or set triggers for live moments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* During the Event */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#6FE866]/10 rounded-full mb-4">
              <span className="text-[#6FE866] text-sm font-semibold uppercase tracking-wider">Phase 2</span>
            </div>
            <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              During the Event: <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Live Engagement</span>
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
              Watch as fans transform moments into memories in real-time
            </p>
          </motion.div>

          {/* The Fan Journey */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Fan Discovery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6FE866] to-[#8FF888] flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-gray-900 text-3xl font-bold mb-3">Fan Discovery</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Fans see your QR code displayed on the jumbotron during a game break, printed on their ticket stub, or promoted on social media before arriving. The call-to-action is clear: "Capture this moment forever."
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Jumbotron displays during timeouts and breaks</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Concourse signage near high-traffic areas</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">In-app notifications and email campaigns</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Instant Access */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6FE866] to-[#8FF888] flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-gray-900 text-3xl font-bold mb-3">Instant Access</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Fans pull out their phone, scan the QR code with their camera—no app download required. They're instantly taken to a mobile-optimized experience that loads in under 2 seconds.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">No app download or login required</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Works on any smartphone camera</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Lightning-fast load times</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personalization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6FE866] to-[#8FF888] flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-gray-900 text-3xl font-bold mb-3">Create & Personalize</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Fans add their photo (or use the selfie camera), enter their name, and select their favorite player or moment. The card is instantly generated with your branding, sponsor logos, and their personalized details.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Upload photo or take live selfie</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Choose from player rosters or moments</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Instant card generation with branding</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Share & Amplify */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6FE866] to-[#8FF888] flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                  4
                </div>
                <div>
                  <h3 className="text-gray-900 text-3xl font-bold mb-3">Share & Amplify</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    With one tap, fans share their Fancard to Instagram, Twitter, Facebook, or save it to their camera roll. Each share spreads your venue's brand and sponsor logos to hundreds of new viewers.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">One-tap social media sharing</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Download to phone for later</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#6FE866] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">Organic brand amplification</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* After the Event */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#6FE866]/10 rounded-full mb-4">
              <span className="text-[#6FE866] text-sm font-semibold uppercase tracking-wider">Phase 3</span>
            </div>
            <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              After the Event: <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Insights & ROI</span>
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
              Turn fan engagement into actionable data and sponsor value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Real-Time Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                <BarChart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4 text-2xl font-bold">Real-Time Analytics Dashboard</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Watch engagement unfold live during the event. Track total cards created, peak creation times, most popular moments, social shares, and geographic distribution of your fans.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Live engagement counter
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Fan demographics breakdown
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Social media reach tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Peak engagement moment identification
                </li>
              </ul>
            </motion.div>

            {/* Sponsor Reports */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4 text-2xl font-bold">Automated Sponsor Reports</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Generate beautiful, branded reports for each sponsor showing their logo impressions, social media reach, engagement rates, and estimated media value—proof that helps you renew and expand deals.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Per-sponsor impression counts
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Social media amplification metrics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Estimated media value calculation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Export to PDF or PowerPoint
                </li>
              </ul>
            </motion.div>

            {/* Fan Database */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4 text-2xl font-bold">Growing Fan Database</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Build a rich, permissioned database of your most engaged fans. Segment by preferences, demographics, or engagement level for targeted campaigns, season ticket sales, and merchandise promotions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Opt-in contact information
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Fan preference tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Audience segmentation tools
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  CRM integration ready
                </li>
              </ul>
            </motion.div>

            {/* Continuous Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4 text-2xl font-bold">Ongoing Fan Touchpoints</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Use collected data to re-engage fans between events. Send personalized emails with exclusive content, early ticket access, merchandise offers, or invitations to create new Fancards for upcoming games.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Automated follow-up campaigns
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Personalized content delivery
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Season ticket conversion
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6FE866]" />
                  Loyalty program integration
                </li>
              </ul>
            </motion.div>
          </div>
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
          <h2 className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
            Ready to Transform Your <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Fan Experience</span>?
          </h2>
          <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto">
            See how easy it is to launch Fancard at your venue. Book a personalized walkthrough with our team.
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
