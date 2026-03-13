import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router';
import analyticsImage from 'figma:asset/107bd604611c06f5b321fc11a244a0406aa4394a.png';
import playbookImage from 'figma:asset/55bd722d061e68321a78864f1677409e55ca7b43.png';
import liveMomentsImage from 'figma:asset/d81e01fa5aef440e964e376bb1e2ed4d61a450d6.png';

export function Blog() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      slug: '2026-fan-engagement-playbook',
      title: 'The 2026 Fan Engagement Playbook: Interactive engagement',
      excerpt: '2026 is an exciting year for sports fans with the Winter Olympics and FIFA World Cup. Discover the four defining trends transforming spectators into active participants in a global, digital ecosystem.',
      category: 'industry',
      author: 'Laura Du Ry, Head of Strategy & Communication',
      date: 'January 30, 2025',
      readTime: '6 min read',
      image: playbookImage
    },
    {
      id: 2,
      slug: 'data-insights-you-can-unlock-with-fancard',
      title: 'The Data Insights You Can Unlock with Fancard (and Why They Matter)',
      excerpt: 'Fan engagement has always been easy to feel at a live event—but historically difficult to measure. Discover how Fancard transforms fan participation into structured, actionable data you can quantify, understand, and monetize.',
      category: 'guides',
      author: 'Laura Du Ry, Head of Strategy & Communication',
      date: 'January 30, 2025',
      readTime: '8 min read',
      image: analyticsImage
    },
    {
      id: 3,
      slug: 'live-moments-with-fancard',
      title: 'Fancard: Turn Live Fan Moments into Engagement (and Sponsor Value)',
      excerpt: 'Live events deliver emotion at scale. Fancard bridges the gap between powerful moments and measurable outcomes—transforming participation into data that strengthens commercial performance and sponsorship value.',
      category: 'guides',
      author: 'Laura Du Ry, Head of Strategy & Communication',
      date: 'January 30, 2025',
      readTime: '10 min read',
      image: liveMomentsImage
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="text-[#BEF264] text-sm uppercase tracking-wider mb-4 font-semibold">BLOG</div>
            <h1 className="text-gray-900 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
              Insights for <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Fan Engagement</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-3xl">
              Strategies, trends, and best practices for sports clubs, event organizers, and 
              brands looking to maximize fan engagement and sponsorship ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Blog posts will appear here when added */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full capitalize">
                      {post.category === 'industry' ? 'Industry Insights' : post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-[#BEF264] transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
            Ready to Transform Your <span className="bg-gradient-to-r from-[#BEF264] to-[#86EFAC] bg-clip-text text-transparent">Fan Engagement?</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            See how Fancard can help your venue create unforgettable experiences and 
            measurable results.
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