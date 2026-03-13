import { ArrowRight, Check, Star, Users, TrendingUp, Building2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function BookDemo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+44',
    phone: '',
    engagement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data if needed
    console.log('Form submitted:', formData);
    // Navigate to thank you page
    navigate('/thank-you');
  };

  const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+33', country: 'FR' },
    { code: '+49', country: 'DE' },
    { code: '+34', country: 'ES' },
    { code: '+39', country: 'IT' },
    { code: '+61', country: 'AU' },
    { code: '+81', country: 'JP' },
    { code: '+86', country: 'CN' },
  ];

  const stats = [
    { value: '500K+', label: 'Active Users' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '2.5M+', label: 'Cards Created' },
    { value: '50+', label: 'Partner Clubs' }
  ];

  const testimonials = [
    {
      quote: "FanCard transformed how we engage with our supporters. The platform is intuitive and our fans love it.",
      author: "Sarah Mitchell",
      role: "Head of Digital",
      company: "Premier League Club"
    },
    {
      quote: "Within 3 months, we saw a 300% increase in fan engagement. The ROI has been phenomenal.",
      author: "James Cooper",
      role: "Marketing Director",
      company: "Championship Club"
    },
    {
      quote: "The analytics alone are worth it. We finally understand our fanbase and can create targeted campaigns.",
      author: "Emma Thompson",
      role: "Fan Engagement Manager",
      company: "League One Club"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <AnimatedBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-blue-300 text-sm">Transform Your Fan Engagement Today</span>
          </motion.div>

          <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            See FanCard in Action
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Book a personalized demo and discover how FanCard can revolutionize 
            your fan engagement strategy.
          </p>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
                <h2 className="text-white mb-2 text-3xl">Request Your Demo</h2>
                <p className="text-slate-400 mb-8">Fill out the form below and we'll be in touch within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-300">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                        placeholder="John"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-300">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      placeholder="john.smith@club.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-300">Phone Number *</Label>
                    <div className="flex gap-2">
                      <Select
                        value={formData.countryCode}
                        onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                      >
                        <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((item) => (
                            <SelectItem key={item.code} value={item.code}>
                              {item.code} ({item.country})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 flex-1"
                        placeholder="1234 567890"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="engagement" className="text-slate-300">How would you like to engage your fans more? *</Label>
                    <Textarea
                      id="engagement"
                      value={formData.engagement}
                      onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 min-h-[120px]"
                      placeholder="Tell us about your goals and challenges with fan engagement..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-6 text-lg group"
                  >
                    Book Your Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-slate-500 text-sm text-center">
                    By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div>
                <h3 className="text-white mb-6 text-2xl">What You'll Learn</h3>
                <div className="space-y-4">
                  {[
                    'How FanCard integrates with your existing systems',
                    'Custom collectibles tailored to your brand',
                    'Advanced analytics and fan insights',
                    'Revenue opportunities and ROI potential',
                    'Implementation timeline and support',
                    'Success stories from similar organizations'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <h4 className="text-white">Quick Setup</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  Most clubs are up and running within 2-4 weeks, including full integration, 
                  customization, and team training.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <h4 className="text-white">Dedicated Support</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  You'll have a dedicated account manager and technical support team 
                  available 24/7 to ensure your success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4 text-3xl md:text-4xl">Trusted by Industry Leaders</h2>
            <p className="text-slate-300 text-lg">
              See what our partners are saying about FanCard
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white">{testimonial.author}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-400 mb-8">Trusted by organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="w-32 h-20 rounded-lg bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 flex items-center justify-center"
                >
                  <Users className="w-8 h-8 text-slate-600" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}