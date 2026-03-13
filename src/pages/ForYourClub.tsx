import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { useState } from 'react';
import { 
  ArrowRight, 
  Trophy, 
  Users, 
  TrendingUp, 
  Gift, 
  Globe2,
  BarChart3,
  Sparkles,
  Shield,
  Target,
  Heart,
  Zap,
  Award,
} from 'lucide-react';
import newStadiumImage from 'figma:asset/4adb78de9d29f858bd47ef2d5fea9ffd9e9159ef.png';

// Import logos and images for Success Stories
import cascaisLogo from 'figma:asset/4bae5343f63d2a18ca9a60eddf4b0b1dc696d0ce.png';
import sportworxLogo from 'figma:asset/2f399471bafeab7ca8bc4e4dd5a8ecdd36b3819d.png';
import cascaisFancard from 'figma:asset/e9796bab216c855789eaba4da1b5e2aae0cdc5ee.png';
import sportworxFancard from 'figma:asset/84c64f6033bda7062a46815302b12955b80c4967.png';
import lafEventImage from 'figma:asset/e2bf4bcbec81433b2dcfb0e5a73b0b330b56dbe6.png';

export function ForYourClub() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  const benefits = [
    {
      icon: Users,
      title: 'Deepen Fan Loyalty',
      description: 'Transform casual attendees into passionate advocates through personalized digital experiences that create lasting emotional connections.',
    },
    {
      icon: TrendingUp,
      title: 'Boost Engagement',
      description: 'Drive repeat interactions and sustained interest with exclusive digital collectibles that make every moment memorable.',
    },
    {
      icon: Gift,
      title: 'New Revenue Streams',
      description: 'Monetize fan moments and milestones with premium digital collectibles, creating year-round revenue opportunities.',
    },
    {
      icon: Globe2,
      title: 'Expand Your Reach',
      description: 'Connect with fans beyond geographical boundaries and build a global community through shareable digital experiences.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Understand fan behavior, preferences, and engagement patterns with comprehensive analytics that inform your strategy.',
    },
    {
      icon: Trophy,
      title: 'Celebrate Every Moment',
      description: 'Turn milestones, achievements, and special moments into shareable digital keepsakes that fans treasure forever.',
    }
  ];

  const successStories = [
    {
      name: 'CS Cascais',
      type: 'Sports Club',
      location: 'Portugal',
      image: cascaisFancard,
      logo: cascaisLogo,
      impact: 'Global fan engagement across multiple countries',
      link: '/case-study/cascais',
    },
    {
      name: 'Sportworx',
      type: 'Event Organizer',
      location: 'Netherlands',
      image: sportworxFancard,
      logo: sportworxLogo,
      impact: 'Transformed basketball tournament experience',
      link: '/case-study/sportworx',
    },
    // Temporarily hidden
    // {
    //   name: 'Life After Football',
    //   type: 'Lifestyle Brand',
    //   location: 'Netherlands',
    //   image: lafEventImage,
    //   impact: 'Red carpet moments into brand visibility',
    //   link: '/case-study/life-after-football',
    // },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section - Premium Bold */}
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
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#BEF264] to-transparent" />
            <span className="text-[#BEF264] text-xs sm:text-sm font-bold uppercase tracking-wider">Use Cases</span>
          </motion.div>
          
          <h1 className="text-gray-900 mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
            Your Event.
            <br />
            <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Your Fans.</span>
            <br />
            Real Results.
          </h1>
          
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12">
            From stadiums to arenas, see how Fancard transforms moments into measurable value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <Button 
              size="lg" 
              className="bg-[#BEF264] hover:bg-[#9EF01A] text-black border-0 px-8 py-6 text-base font-semibold group transition-all duration-300"
              onClick={() => setDemoDialogOpen(true)}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </motion.div>

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
            className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* Success Stories */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Success Stories
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              See how leading organizations are transforming fan engagement with Fancard
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {successStories.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={caseStudy.link} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={caseStudy.image}
                        alt={`${caseStudy.name} case study`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                          {caseStudy.type} • {caseStudy.location}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-gray-900 text-2xl font-bold mb-3 group-hover:text-[#BEF264] transition-colors">
                        {caseStudy.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {caseStudy.impact}
                      </p>
                      <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                        Read Case Study
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              Why Organizations Choose Fancard
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              From sports teams to entertainment brands, organizations trust Fancard 
              to elevate their fan experience and drive business results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-4 text-2xl font-bold">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-gray-50">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold px-4">
              How Fancard Works
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
              Simple, seamless, and built for any event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Fans Enter the Event',
                description: 'Fans scan a QR code at entry or throughout the venue to access their personalized Fancard experience.',
                icon: Sparkles,
              },
              {
                step: '02',
                title: 'Capture the Moment',
                description: 'During the event, fans collect digital cards for highlights, special moments, and photo opportunities.',
                icon: Trophy,
              },
              {
                step: '03',
                title: 'Share & Engage',
                description: 'Fans share their collectibles on social media, driving organic promotion and bringing more people to your events.',
                icon: Users,
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute top-0 left-0 text-8xl font-bold text-gray-100 opacity-50">
                  {step.step}
                </div>
                <div className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-4 text-2xl font-bold">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#BEF264]/20 to-[#86EFAC]/20 rounded-3xl blur-2xl" />
              <ImageWithFallback
                src={newStadiumImage}
                alt="Stadium crowd"
                className="relative rounded-2xl w-full h-auto shadow-2xl border border-gray-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
                Built for the Biggest Games
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Whether you're hosting 5,000 fans or 100,000, Fancard scales effortlessly 
                to deliver a premium experience every single time.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Our platform is trusted by championship venues, playoff tournaments, and 
                season-long campaigns to keep fans engaged and coming back.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                  <Shield className="w-8 h-8 text-[#BEF264] mb-3" />
                  <div className="text-gray-900 text-sm font-semibold">Enterprise Security</div>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                  <Zap className="w-8 h-8 text-[#BEF264] mb-3" />
                  <div className="text-gray-900 text-sm font-semibold">Real-Time Processing</div>
                </div>
              </div>
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
          <h2 className="text-gray-900 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
            Ready to Transform Your <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Fan Experience?</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Join leading organizations in creating unforgettable fan experiences 
            that drive loyalty, revenue, and growth.
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