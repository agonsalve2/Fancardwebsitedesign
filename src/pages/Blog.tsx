import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import analyticsImage from 'figma:asset/107bd604611c06f5b321fc11a244a0406aa4394a.png';
import playbookImage from 'figma:asset/55bd722d061e68321a78864f1677409e55ca7b43.png';
import liveMomentsImage from 'figma:asset/d81e01fa5aef440e964e376bb1e2ed4d61a450d6.png';

export function Blog() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = 'y proximity';
    return () => {
      html.style.scrollSnapType = '';
    };
  }, []);

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative flex items-center px-4 sm:px-6 lg:px-8 snap-start" style={{ minHeight: '100dvh' }}>
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="text-[#6FE866] text-sm uppercase tracking-wider mb-4 font-semibold">BLOG</div>
            <h1 className="text-gray-900 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-bold">
              Insights for <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Fan Engagement</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl">
              Strategies, trends, and best practices for sports clubs, event organizers, and
              brands looking to maximize fan engagement and sponsorship ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts — Each its own viewport */}
      {blogPosts.map((post, index) => (
        <section
          key={post.id}
          className="relative flex items-center px-4 sm:px-6 lg:px-8 snap-start"
          style={{ minHeight: '100dvh' }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Image side */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative" style={post.slug === 'data-insights-you-can-unlock-with-fancard' ? { width: '80%' } : undefined}>
                  <span
                    className="absolute -top-8 -left-4 font-bold leading-none pointer-events-none select-none"
                    style={{
                      fontSize: 'min(20vw, 160px)',
                      color: 'white',
                      textShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      zIndex: 0,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Link to={`/blog/${post.slug}`}>
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="relative z-[1] rounded-2xl w-full h-auto shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    />
                  </Link>
                </div>
              </div>

              {/* Text side */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="text-[#6FE866] text-sm uppercase tracking-wider mb-3 font-semibold">
                  {post.category === 'industry' ? 'Industry Insights' : 'Guides'}
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-gray-900 mb-4 text-2xl sm:text-3xl md:text-4xl font-bold hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
                  <span>{post.author}</span>
                  <span>&middot;</span>
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-base font-semibold bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5 text-[#6FE866]" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden snap-start" style={{ minHeight: '100dvh' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-gray-900 mb-8 sm:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Fan Engagement?</span>
          </h2>
          <p className="text-gray-600 text-xl sm:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            See how Fancard can help your venue create unforgettable experiences and
            measurable results.
          </p>
          <Button
            size="lg"
            className="bg-[#6FE866] hover:bg-[#5CD85C] text-black border-0 px-10 py-7 text-lg sm:text-xl font-semibold group transition-all duration-300"
            onClick={() => setDemoDialogOpen(true)}
          >
            Book a Demo
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
          </Button>
        </motion.div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}
