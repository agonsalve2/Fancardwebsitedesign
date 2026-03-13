import { motion } from 'motion/react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function Contact() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#0A0E27] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        <AnimatedBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-white mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-blue-200 to-red-200 bg-clip-text text-transparent px-4">
            Let's Transform Your Stadium Experience
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4">
            Ready to elevate your venue's fan engagement? Get in touch and let's 
            build something extraordinary together.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-[#141B3D]/50 border border-white/10 backdrop-blur-sm"
            >
              <h2 className="text-white mb-4 sm:mb-6 text-2xl sm:text-3xl">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0A0E27]/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6]"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0A0E27]/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6]"
                    placeholder="john@stadium.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-gray-300">Stadium / Venue</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="bg-[#0A0E27]/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6]"
                    placeholder="Your Stadium or Arena"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type" className="text-gray-300">I'm interested in...</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger className="bg-[#0A0E27]/50 border-white/10 text-white focus:border-[#3B82F6]">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#141B3D] border-white/10">
                      <SelectItem value="demo">Booking a Demo</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="integration">Venue Integration</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="other">Other Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#0A0E27]/50 border-white/10 text-white placeholder:text-gray-500 min-h-[150px] focus:border-[#3B82F6]"
                    placeholder="Tell us about your venue and how we can help transform your fan engagement..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#991B1B] text-white border-0 py-6 text-lg group shadow-lg shadow-[#DC2626]/30"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-white mb-4 sm:mb-6 text-2xl sm:text-3xl">Get in Touch</h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Whether you operate a major league stadium, arena, or tournament venue—we're 
                  here to help you revolutionize how you engage with fans and drive revenue.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-[#141B3D]/50 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Email Us</h3>
                    <p className="text-gray-400">info@fancard.me</p>
          
                  </div>
                </motion.div>
              </div>

              <div className="pt-6 sm:pt-8">
                <h3 className="text-white mb-3 sm:mb-4 text-lg sm:text-xl">Response Time</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent venue matters, please call us directly or mention "Urgent" in your message.
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#991B1B] text-white border-0 group shadow-lg shadow-[#DC2626]/30"
                    onClick={() => setDemoDialogOpen(true)}
                  >
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141B3D]/30 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-4">Quick Answers</h2>
            <p className="text-gray-300 text-base sm:text-lg px-4">
              Common questions from venue operators
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'How quickly can we implement FanCard at our venue?',
                answer: 'Most stadiums and arenas are up and running within 2-4 weeks, including full integration, staff training, and game-day testing.'
              },
              {
                question: 'Do you offer custom pricing for larger venues?',
                answer: 'Yes, we offer flexible pricing tailored to your venue size, capacity, and number of events. Contact us for a custom quote.'
              },
              {
                question: 'Do we get access to all FanCards taken?',
                answer: 'Absolutely! We\'ll build a personalized dashboard where you can see & collect all FanCards.'
              },
              {
                question: 'What kind of support do you provide on game days?',
                answer: 'We provide dedicated game-day support including real-time monitoring, technical assistance, and a direct line to our venue success team.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#141B3D]/50 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
              >
                <h3 className="text-white mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}