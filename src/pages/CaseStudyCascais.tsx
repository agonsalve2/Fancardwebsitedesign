import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Users, Globe2, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { useState } from 'react';
import fancardExample1 from 'figma:asset/e9796bab216c855789eaba4da1b5e2aae0cdc5ee.png';
import fancardExample2 from 'figma:asset/6a560fc3086fe4114b4ea82503ed3a06ef7e3d6f.png';
import fancardExample3 from 'figma:asset/ee57e1d947aacfbcbe92a9ee9d8e52963ddfe862.png';
import globalHeatmap from 'figma:asset/00a72413037ef11b2b6729102fb6657f4ad487d3.png';
import timelineChart from 'figma:asset/5176ea6b8345f9e4986f5b0c5d4ef7750a15db85.png';
import goncaloImage from 'figma:asset/b2d04521a989759d87eb9a5ccedc99d7a5e8da65.png';

export function CaseStudyCascais() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  const keyMetrics = [
    { icon: Zap, label: 'Real-Time Engagement Spike', description: 'During stadium QR activation' },
    { icon: Globe2, label: 'Global Reach', description: 'Fans engaged across multiple countries' },
    { icon: Users, label: 'International Activation', description: 'South American audience engaged' },
    { icon: TrendingUp, label: 'Matchday Amplification', description: 'Fans became brand ambassadors' },
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
              Portuguese 6th Division • Football Club
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Clube Sportivo de Cascais
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-6">
              Turning matchday energy into measurable fan engagement — and activating a new global fanbase
            </p>
            <a 
              href="https://csc.pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              csc.pt
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
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              How does a football club playing in the 6th division league in Portugal engage with thousands of fans in Argentina? This is the story of Clube Sportivo de Cascais, a local football club with global aspirations, and their collaboration with Fancard.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cascais sought to create a modern fan experience that would drive engagement during live matchdays, while capturing meaningful fan data and expanding their reach beyond the stadium. With <strong>Fancard</strong>, CSC launched an interactive QR-code activation that turned fans into content creators and helped the club generate measurable engagement both locally and internationally.
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
              Like many semi-professional clubs, Cascais faced a common problem:
            </p>
            <p className="text-xl text-gray-900 font-semibold mb-6 italic">
              Fans show up, support the team — and the moment ends when the match ends.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Cascais wanted to:</p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Engage fans <strong>during the live event</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Encourage social sharing and brand visibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Capture data like <strong>fan location</strong> and engagement behavior</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Build loyalty and modernize the matchday experience</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#6FE866]/10 to-[#8FF888]/10 rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Opportunity: A New International Audience</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before launching the Fancard campaign, Cascais experienced strong growth on Instagram thanks to visibility from an influencer in Argentina. This growth happened <strong>before the campaign</strong>, but it unlocked a new advantage:
            </p>
            <div className="space-y-3 text-lg text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span>Cascais could now engage fans beyond Portugal</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span>The club had meaningful attention in <strong>South America</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span>The moment was perfect to activate this new audience with something interactive</span>
              </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Solution: Fancard Matchday Activation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              CSC deployed Fancard as a live engagement experience during the match.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Fans could:</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="pt-2">
                  <p className="text-lg text-gray-700">Scan a <strong>QR code</strong> promoted in the stadium</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="pt-2">
                  <p className="text-lg text-gray-700">Take a photo of the event or themselves</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="pt-2">
                  <p className="text-lg text-gray-700">Instantly generate a <strong>branded digital Fancard</strong></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="pt-2">
                  <p className="text-lg text-gray-700">Share it online — boosting reach and visibility</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Fancard turned live fans into brand amplifiers, creating a shareable experience that moved beyond the stadium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fancard Examples */}
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
              Fans created personalized digital cards during the match, celebrating their support for CS Cascais
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
                  alt={`Fancard example ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happened Next - Timeline */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What Happened Next</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-time engagement spike when the QR code hit the stadium screen</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Fancard's analytics showed a clear trend: The biggest engagement peak happened <strong>exactly when the QR code was displayed on the stadium screen</strong>, proving how powerful live "in-the-moment" activations can be.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xl"
          >
            <img 
              src={timelineChart} 
              alt="Timeline of Fancards created showing engagement spike"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-4 text-center">
              Timeline showing dramatic engagement spike during stadium QR activation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Global Reach, Not Just Local Fans</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The campaign didn't only engage match attendees.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fancard activity showed fan participation across multiple regions — including strong engagement beyond Portugal, aligned with CSC's expanded international online audience. Cascais successfully engaged fans from abroad, including South America.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xl mb-8"
          >
            <img 
              src={globalHeatmap} 
              alt="Global heatmap showing international fan engagement"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-4 text-center">
              Global engagement map showing fan participation across continents
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Results (Highlights)</h2>
            <div className="bg-gradient-to-br from-[#6FE866]/10 to-[#8FF888]/10 rounded-2xl p-8 border border-gray-200">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>High engagement spike</strong> triggered by the matchday stadium QR activation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Increased fan participation</strong> beyond local audiences
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Successful use</strong> of a newly expanded international following
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    Captured <strong>actionable fan engagement and location insights</strong>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Worked */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why It Worked</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fancard succeeded for CSC because it combined three powerful ingredients:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live Matchday Excitement</h3>
                <p className="text-gray-600">Fans are most emotionally engaged in real time</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Simple QR Flow</h3>
                <p className="text-gray-600">Instant and frictionless participation</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#6FE866] flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shareable Branded Content</h3>
                <p className="text-gray-600">Fans naturally spread it online</p>
              </div>
            </div>
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
            className="bg-white rounded-2xl p-8 sm:p-12 border-2 border-gray-200 shadow-lg"
          >
            <div className="text-6xl text-[#6FE866] mb-6 leading-none">"</div>
            <p className="text-2xl sm:text-3xl text-gray-900 leading-relaxed mb-8 font-medium">
              Fancard is a great tool for connecting the club's activities with its fans - both local and international.
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
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Want to Activate Your Fans <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Like Cascais?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Fancard helps clubs and sports teams engage fans during live events while capturing valuable insights that power future campaigns, sponsorship activations, and fan growth.
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