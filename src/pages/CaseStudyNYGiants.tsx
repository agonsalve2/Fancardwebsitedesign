import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Users, TrendingUp, DollarSign, Trophy } from 'lucide-react';
import { Link } from 'react-router';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CaseStudyNYGiants() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  const stats = [
    { label: 'Season Ticket Renewals', value: '94%', icon: Trophy },
    { label: 'Fan App Downloads', value: '127K+', icon: Users },
    { label: 'Sponsor Value Increase', value: '$2.1M', icon: DollarSign },
    { label: 'Social Engagement', value: '385%', icon: TrendingUp },
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
              NFL Team • United States
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              NY Giants
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              How an iconic NFL franchise revolutionized stadium experiences and drove unprecedented fan engagement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 text-center"
              >
                <stat.icon className="w-8 h-8 text-[#6FE866] mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              As one of the NFL's most storied franchises, the NY Giants needed to modernize their fan experience while honoring their rich legacy. They were facing several key challenges:
            </p>
            <ul className="space-y-3 text-lg text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Engaging a multi-generational fanbase spanning from longtime season ticket holders to Gen Z fans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Competing for attention in the saturated New York sports and entertainment market</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Maximizing the 82,500-seat MetLife Stadium experience beyond the traditional game</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#6FE866] rounded-full mt-2 flex-shrink-0" />
                <span>Providing measurable ROI to corporate sponsors in an increasingly digital landscape</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The Giants partnered with FanCard to launch the most comprehensive digital collectibles platform in the NFL, featuring:
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Game Day Collectible Cards</h3>
                <p className="text-gray-600">
                  Every home game featured exclusive digital cards celebrating touchdowns, defensive plays, and special moments. Over 400 QR code stations throughout MetLife Stadium enabled instant collection and sharing.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Player Highlight Series</h3>
                <p className="text-gray-600">
                  Premium collectibles featuring Giants stars, legendary moments, and franchise history. Limited edition cards for milestone achievements created scarcity and excitement among collectors.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Season Ticket Holder Exclusives</h3>
                <p className="text-gray-600">
                  VIP digital cards with special benefits including early access to playoff tickets, exclusive player content, and invitations to team events, enhancing the value of season ticket packages.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sponsor Integration Platform</h3>
                <p className="text-gray-600">
                  Branded collectible series for major sponsors with detailed engagement analytics, creating new revenue streams and demonstrating concrete sponsor value beyond traditional advertising.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile App Integration</h3>
                <p className="text-gray-600">
                  Seamless integration with the Giants' official app, making it easy for fans to collect, view, and share their cards while accessing other team content and features.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Results</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              After implementing FanCard for the entire NFL season, the NY Giants achieved record-breaking engagement and business metrics:
            </p>
            <div className="bg-gradient-to-br from-[#6FE866]/10 to-[#8FF888]/10 rounded-2xl p-8 border border-gray-200">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏈</span>
                  <div>
                    <strong>127,000+ Giants app downloads</strong> driven by FanCard integration, creating the team's largest-ever digital community
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <strong>94% season ticket renewal rate</strong>, the highest in franchise history and 11 points above the previous year
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <strong>385% increase in social media engagement</strong> from fans sharing collectibles and game moments
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <strong>$2.1 million in additional sponsor value</strong> from branded collectible campaigns and measurable digital engagement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <strong>890,000+ cards collected</strong> across the season with an average of 73% of attendees participating per game
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <strong>Featured in Sports Business Journal</strong> as an innovation case study in fan engagement and digital transformation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <strong>38% increase in merchandise sales</strong> attributed to enhanced stadium experience and fan loyalty
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200"
          >
            <div className="text-4xl sm:text-5xl text-[#6FE866] mb-6">"</div>
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
              FanCard transformed how we engage with our fanbase. We're not just providing entertainment on game day—we're creating lasting memories that fans cherish and share. The business impact has been remarkable, but what really matters is seeing the joy on fans' faces when they collect a card from a game-winning touchdown.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6FE866] to-[#8FF888] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                G
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">Chris Mara</div>
                <div className="text-gray-600">Senior Vice President, NY Giants</div>
              </div>
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
              Ready to Elevate Your <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Stadium Experience?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the NY Giants and leading sports franchises in creating unforgettable digital fan experiences.
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
