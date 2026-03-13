import { motion } from 'motion/react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { CheckCircle2, Calendar, ArrowRight, Mail, Clock } from 'lucide-react';

export function ThankYou() {
  return (
    <div className="bg-slate-950 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <AnimatedBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-8"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Thank You for Your Interest!
          </h1>
          
          <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            We've received your demo request and our team will be in touch within 24 hours 
            to schedule your personalized demonstration.
          </p>

          {/* Next Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">Check Your Email</h3>
              <p className="text-slate-400 text-sm">
                We've sent a confirmation to your inbox with next steps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">24 Hour Response</h3>
              <p className="text-slate-400 text-sm">
                Our team will reach out to schedule your demo session.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">Schedule a Time</h3>
              <p className="text-slate-400 text-sm">
                Pick a time that works best for your team's schedule.
              </p>
            </motion.div>
          </div>

          {/* Calendly Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 backdrop-blur-sm">
              <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h2 className="text-white mb-4 text-2xl">Or Schedule Your Demo Now</h2>
              <p className="text-slate-300 mb-6">
                Prefer to book immediately? Use our calendar to find a time that works for you.
              </p>
              
              {/* Calendly Placeholder */}
              <div className="rounded-xl bg-slate-900/50 border border-slate-700 p-8 mb-6">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400 mb-4">Calendly integration placeholder</p>
                  <p className="text-slate-500 text-sm">
                    Insert your Calendly widget or booking link here
                  </p>
                  <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <code className="text-blue-400 text-sm">
                      https://calendly.com/your-fancard-demo
                    </code>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-6 text-lg"
                asChild
              >
                <a href="https://calendly.com/your-fancard-demo" target="_blank" rel="noopener noreferrer">
                  Open Calendly Booking
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-slate-800 pt-12"
          >
            <h3 className="text-white mb-6 text-xl">While You Wait</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link to="/for-your-club">
                  Explore Features
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link to="/">
                  Back to Home
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />
        
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4 text-2xl md:text-3xl">What Happens Next?</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'When will I hear from you?',
                answer: 'Our team will contact you within 24 hours (usually much sooner!) to schedule your personalized demo at a time that works for you.'
              },
              {
                question: 'How long is the demo?',
                answer: 'Demos typically last 30-45 minutes, including time for your questions. We can adjust based on your needs and schedule.'
              },
              {
                question: 'What should I prepare?',
                answer: 'Nothing! Just come ready with any questions you have about fan engagement. We\'ll tailor the demo to your specific use case.'
              },
              {
                question: 'Can I invite team members?',
                answer: 'Absolutely! We encourage you to invite anyone from your team who\'s involved in fan engagement, marketing, or digital strategy.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
              >
                <h3 className="text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
