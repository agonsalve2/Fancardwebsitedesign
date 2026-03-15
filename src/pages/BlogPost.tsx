import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookDemoDialog } from '../components/BookDemoDialog';
import { Button } from '../components/ui/button';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import analyticsImage from 'figma:asset/107bd604611c06f5b321fc11a244a0406aa4394a.png';
import playbookImage from 'figma:asset/55bd722d061e68321a78864f1677409e55ca7b43.png';
import liveMomentsImage from 'figma:asset/d81e01fa5aef440e964e376bb1e2ed4d61a450d6.png';

export function BlogPost() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { slug } = useParams();

  // Table of contents configurations for each blog post
  const tableOfContentsConfig: { [key: string]: { id: string; label: string; }[] } = {
    'data-insights-you-can-unlock-with-fancard': [
      { id: 'why-data-insights-matter', label: 'Why Data Insights Matter in Live Events' },
      { id: 'what-data-insights', label: 'What Data Insights You Get' },
      { id: 'fan-demographic-insights', label: '1) Fan Demographic Insights' },
      { id: 'participation-engagement-metrics', label: '2) Participation & Engagement Metrics' },
      { id: 'engagement-over-time', label: '3) Engagement Over Time' },
      { id: 'geo-insights-heatmaps', label: '4) Geo Insights & Heatmaps' },
      { id: 'sponsor-ready-reporting', label: '5) Sponsor-Ready Reporting' },
      { id: 'what-makes-insights-valuable', label: 'What Makes These Insights So Valuable?' },
      { id: 'how-teams-use-insights', label: 'How Teams Use Fancard Insights' },
      { id: 'bottom-line', label: 'The Bottom Line' },
    ],
    '2026-fan-engagement-playbook': [
      { id: 'death-of-passive-viewer', label: '1. The Death of the "Passive Viewer"' },
      { id: 'ai-powered-personalization', label: '2. AI-Powered Hyper-Personalization' },
      { id: 'experience-economy', label: '3. The "Experience Economy" and Sports Tourism' },
      { id: 'gamification-loyalty', label: '4. Gamification as the New Loyalty' },
      { id: 'bottom-line', label: 'The Bottom Line' },
    ],
    'live-moments-with-fancard': [
      { id: 'what-fancard-is', label: 'What Fancard Is' },
      { id: 'why-engagement-has-changed', label: 'Why Engagement Has Changed' },
      { id: 'how-fancard-increases-engagement', label: 'How Fancard Increases Engagement' },
      { id: 'how-fancard-increases-sponsor-value', label: 'How Fancard Increases Sponsor Value' },
      { id: 'how-it-works', label: 'How It Works' },
      { id: 'why-fancard-wins', label: 'Why Fancard Wins' },
      { id: 'the-takeaway', label: 'The Takeaway' },
    ]
  };

  const tableOfContents = tableOfContentsConfig[slug || ''] || [];

  useEffect(() => {
    if (tableOfContents.length === 0) return;
    
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Blog post data - in a real app, this would come from an API
  const blogPosts: { [key: string]: any } = {
    '2026-fan-engagement-playbook': {
      title: 'The 2026 Fan Engagement Playbook: Interactive engagement',
      category: 'industry',
      author: 'Laura Du Ry, Head of Strategy & Communication',
      date: 'January 30, 2025',
      readTime: '6 min read',
      image: playbookImage,
      content: `
        <p>2026 is an exciting year for sports fans with the Winter Olympics coming up, as well as the FIFA World Cup. So, no better time than now to dive into the fan engagement trends for this year.</p>

        <p>As the world's attention shifts from the snowy slopes of Milano Cortina to the sprawling pitches across North America, the way we "watch" sports is being fundamentally rewritten. It's no longer about just sitting on a couch; it's about participating in a global, digital ecosystem.</p>

        <p>Here are the four defining trends of 2026 that are transforming spectators into active participants.</p>

        <h2 id="death-of-passive-viewer">1. The Death of the "Passive Viewer"</h2>

        <p>The "second screen" is no longer an accessory—it's the main event. Research shows that <strong>93% of Gen Z fans</strong> now use a device while watching live sports. In 2026, the industry has responded by moving the interaction <em>into</em> the stream itself:</p>

        <ul>
          <li><strong>Watch-Together Rooms:</strong> Streaming platforms now feature integrated video chat and co-viewing "lounges" where fans can react in real-time with friends globally.</li>
          <li><strong>Interactive Data Overlays:</strong> Fans can toggle advanced analytics, like player speed or win probability, directly over the live broadcast.</li>
          <li><strong>Micro-Moments:</strong> The 2026 World Cup is expected to generate over <strong>6 billion interactions</strong>, driven by "highlight culture"—fans stitching, reacting to, and sharing clips seconds after they happen.</li>
        </ul>

        <h2 id="ai-powered-personalization">2. AI-Powered Hyper-Personalization</h2>

        <p>Artificial Intelligence has moved from the back office to the front row. This year, your fan experience is as unique as your thumbprint:</p>

        <ul>
          <li><strong>Custom Highlights:</strong> AI now generates personalized "snackable" reels based on your favorite players or fantasy team roster.</li>
          <li><strong>Emotional AI Dubbing:</strong> For the first time, global events like the Winter Olympics are using AI systems that can dub commentary into dozens of languages while preserving the original announcer's emotional tone and excitement.</li>
          <li><strong>Branded AI Agents:</strong> Fans can now interact with "soccer experts" or "Olympic historians"—AI personas that provide real-time stats and trivia via WhatsApp or dedicated apps.</li>
        </ul>

        <h2 id="experience-economy">3. The "Experience Economy" and Sports Tourism</h2>

        <p>With the World Cup spanning three nations (USA, Canada, and Mexico), fans aren't just buying tickets; they're embarking on pilgrimages.</p>

        <ul>
          <li><strong>Hybrid Travel:</strong> Fans are weaving matches into broader "sports-cations," prioritizing cultural side-trips and adventure travel.</li>
          <li><strong>Smart Stadiums:</strong> Venue connectivity has reached a new peak. With upgraded 5G and private networks, stadiums like MetLife and Levi's are using AI to manage crowd flow, reduce concession wait times, and offer AR-guided navigation for fans with mobility issues.</li>
        </ul>

        <h2 id="gamification-loyalty">4. Gamification as the New Loyalty</h2>

        <p>In 2026, loyalty isn't just about how many games you watch; it's about how much you <em>play</em>.</p>

        <ul>
          <li><strong>Real-Time Prediction Engines:</strong> Instead of season-long brackets, fans are engaging in "prop-style" free-to-play games—predicting the next corner kick or the outcome of a penalty shot to earn loyalty points.</li>
          <li><strong>Digital Twins and AR:</strong> In-stadium fans are using AR glasses and smartphones to see digital overlays on the field, while at-home fans use VR headsets to "sit" in the front row of the opening ceremonies.</li>
        </ul>

        <h2 id="bottom-line">The Bottom Line</h2>

        <p>The sports world in 2026 is faster, more social, and deeply personal. Whether you're cheering for a skier in the Alps or a striker in Mexico City, the technology of today ensures you aren't just a face in the crowd—you're part of the game.</p>
      `
    },
    'data-insights-you-can-unlock-with-fancard': {
      title: 'The Data Insights You Can Unlock with Fancard (and Why They Matter)',
      category: 'guides',
      author: 'Laura Du Ry, Head of Strategy & Communication',
      date: 'January 30, 2025',
      readTime: '8 min read',
      image: analyticsImage,
      content: `
        <p>Fan engagement has always been easy to <em>feel</em> at a live event—but historically difficult to <strong>measure</strong>.</p>

        <p>You can see the crowd react. You can hear the chants. You can sense when the energy peaks.</p>

        <p>But when it comes to reporting outcomes, improving future campaigns, or proving sponsor value, most event teams are left with assumptions and surface-level metrics.</p>

        <p><strong>Fancard changes that.</strong></p>

        <p>By turning fan participation into structured, event-specific data, Fancard unlocks a new category of insights: <strong>fan engagement you can actually quantify, understand, and monetize.</strong></p>

        <h2 id="why-data-insights-matter">Why Data Insights Matter in Live Events</h2>

        <p>If you run events, campaigns, or sponsorship activations, you're usually trying to answer questions like:</p>

        <ul>
          <li>Did the activation work?</li>
          <li>Who engaged—and how deeply?</li>
          <li>When did engagement peak?</li>
          <li>Which campaigns perform best over time?</li>
          <li>What can we prove to sponsors?</li>
          <li>What should we change next time?</li>
        </ul>

        <p>Fancard provides real answers to those questions—powered by real fan activity.</p>

        <h2 id="what-data-insights">What Data Insights You Get with Fancard</h2>

        <p>Fancard captures insights across two main categories:</p>

        <ul>
          <li><strong>Demographic insights</strong> (who your fans are)</li>
          <li><strong>Engagement insights</strong> (what your fans do)</li>
        </ul>

        <p>Together, they create an analytics layer that supports commercial growth, better decision-making, and stronger sponsorship reporting.</p>

        <h2 id="fan-demographic-insights">1) Fan Demographic Insights: Understand Who Shows Up</h2>

        <p>Most events know attendance numbers. Fancard helps you understand the <em>people behind the numbers.</em></p>

        <h3>Key demographic insights include:</h3>

        <ul>
          <li><strong>Gender distribution</strong></li>
          <li><strong>Age distribution</strong></li>
          <li><strong>Ethnicity distribution</strong></li>
          <li><strong>Location</strong></li>
          <li><strong>Date of birth</strong></li>
          <li><strong>Country</strong></li>
          <li><strong>Postal code and city</strong></li>
          <li><strong>Full name</strong></li>
          <li><strong>Email address</strong></li>
        </ul>

        <h3>Why this matters</h3>

        <p>Demographic insights help you:</p>

        <ul>
          <li>Design campaigns that match your audience</li>
          <li>Improve segmentation and personalization</li>
          <li>Build stronger CRM and fan profiles</li>
          <li>Show sponsors they reached the audience they paid for</li>
        </ul>

        <p>Instead of guessing whether you attracted a younger crowd or a more international audience, you can <strong>prove it.</strong></p>

        <h2 id="participation-engagement-metrics">2) Participation & Engagement Metrics: Track Real Fan Activity</h2>

        <p>The most valuable live event analytics aren't about views or impressions—they're about <em>action.</em></p>

        <p>Fancard captures fan engagement based on participation in campaigns and Fancard creation.</p>

        <h3>Core activity metrics include:</h3>

        <ul>
          <li><strong>Total Fancards created</strong></li>
          <li><strong>Average Fancards per campaign</strong></li>
          <li><strong>Number of campaigns launched</strong></li>
          <li><strong>Number of unique users who created a Fancard</strong></li>
          <li><strong>Accounts created</strong></li>
          <li><strong>Average number of accounts created per campaign</strong></li>
        </ul>

        <h3>Why this matters</h3>

        <p>These metrics help you understand:</p>

        <ul>
          <li>Campaign performance at a glance</li>
          <li>How "sticky" your fan experience really is</li>
          <li>Whether fans engaged once or came back multiple times</li>
          <li>How participation scales across different events</li>
        </ul>

        <p>This is where engagement stops being a vibe—and becomes a number you can track.</p>

        <h2 id="engagement-over-time">3) Engagement Over Time: See What Happened, When It Happened</h2>

        <p>One of the most valuable insights in live environments is timing.</p>

        <p>Fancard can show you:</p>

        <ul>
          <li><strong>A timeline of Fancards created</strong></li>
          <li><strong>Engagement peaks across an event</strong></li>
          <li><strong>Performance differences between campaigns</strong></li>
        </ul>

        <h3>Why This Matters</h3>

        <p>With time-based insights, you can:</p>

        <ul>
          <li>Identify your strongest moments during the event</li>
          <li>Understand which segments drove the most interaction</li>
          <li>Plan future activations around peak energy windows</li>
          <li>Create sponsor moments at the right time (not randomly)</li>
        </ul>

        <p>It becomes easier to answer:</p>

        <p><strong>"What actually drove engagement?"</strong></p>

        <h2 id="geo-insights-heatmaps">4) Geo Insights & Heatmaps: See Where Fans Engage</h2>

        <p>Live events are physical experiences—and location context matters.</p>

        <p>Fancard includes heatmap insights such as:</p>

        <ul>
          <li><strong>Global heatmap</strong></li>
          <li><strong>Event heatmap (based on address)</strong></li>
        </ul>

        <h3>Why this matters</h3>

        <p>Geo insights help you:</p>

        <ul>
          <li>Understand where engagement comes from (locally and globally)</li>
          <li>Track how different venues or locations perform</li>
          <li>Optimize QR code placement and activation zones</li>
          <li>Improve event layout decisions for future events</li>
        </ul>

        <p>This is especially valuable for:</p>

        <ul>
          <li>Stadium and arena experiences</li>
          <li>Festivals and multi-zone venues</li>
          <li>Touring events across cities</li>
        </ul>

        <h2 id="sponsor-ready-reporting">5) Sponsor-Ready Reporting: Prove ROI, Not Just Exposure</h2>

        <p>Sponsors increasingly expect reporting that answers:</p>

        <ul>
          <li>What did we gain?</li>
          <li>Who did we reach?</li>
          <li>What outcomes were delivered?</li>
        </ul>

        <p>Fancard makes it easier to provide that story with clarity and confidence.</p>

        <h3>Sponsor-Relevant Insights Include:</h3>

        <ul>
          <li>Unique participants</li>
          <li>Campaign engagement volume</li>
          <li>Demographic breakdown of the engaged audience</li>
          <li>Engagement timing (when attention peaked)</li>
          <li>Location-based engagement patterns</li>
          <li>Logo presence and campaign-level performance indicators</li>
        </ul>

        <p>Instead of "we think this went well," you can deliver:</p>

        <p><strong>"Here's what happened—backed by measurable fan participation."</strong></p>

        <h2 id="what-makes-insights-valuable">What Makes These Insights So Valuable?</h2>

        <h3>Because they're tied to emotion and action—not passive metrics</h3>

        <p>Fancard data isn't based on estimated impressions or anonymous reach.</p>

        <p>It's based on:</p>

        <ul>
          <li>Real fans</li>
          <li>Real participation</li>
          <li>Real moments during the event</li>
        </ul>

        <p>That makes the insights:</p>

        <ul>
          <li>More trustworthy</li>
          <li>More commercially useful</li>
          <li>More relevant to decision-making</li>
        </ul>

        <h2 id="how-teams-use-insights">How Teams Use Fancard Insights in Practice</h2>

        <p>Here's what Fancard analytics enables for different teams:</p>

        <h3>Fan Engagement & Audience Experience Teams</h3>

        <ul>
          <li>Identify top-performing campaigns</li>
          <li>Improve participation rates over time</li>
          <li>Build a clearer view of fan loyalty</li>
          <li>Refine future engagement strategies</li>
        </ul>

        <h3>Digital & CRM Teams</h3>

        <ul>
          <li>Capture richer audience data</li>
          <li>Improve segmentation and targeting</li>
          <li>Connect offline event energy to digital retention</li>
        </ul>

        <h3>Commercial & Partnerships Teams</h3>

        <ul>
          <li>Quantify sponsor impact</li>
          <li>Strengthen renewal conversations</li>
          <li>Upgrade sponsorship packages with new inventory + reporting</li>
        </ul>

        <h3>Brand Activation Teams</h3>

        <ul>
          <li>Measure real interaction, not just visibility</li>
          <li>Understand audience composition</li>
          <li>Justify investment with measurable outcomes</li>
        </ul>

        <h2 id="bottom-line">The Bottom Line</h2>

        <p>The best events create unforgettable moments.</p>

        <p>But the best event businesses go one step further:</p>

        <p>They turn those moments into <strong>measurable engagement</strong>, <strong>repeatable loyalty</strong>, and <strong>commercial value</strong>.</p>

        <p><strong>Fancard gives you the insights to do exactly that.</strong></p>

        <p>From demographic breakdowns to engagement timelines and heatmaps, Fancard turns fan participation into a data layer that teams can act on—and sponsors can believe in.</p>
      `
    },
    'maximize-fan-engagement-stadium-events': {
      title: 'How to Maximize Fan Engagement at Stadium Events',
      category: 'guides',
      author: 'Sarah Martinez',
      date: 'January 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80',
      content: `
        <p>In today's competitive sports landscape, creating memorable fan experiences is no longer optional—it's essential. Stadiums and arenas that master fan engagement see higher ticket sales, better sponsorship deals, and stronger community loyalty.</p>

        <h2>Understanding Modern Fan Expectations</h2>
        <p>Today's fans expect more than just a seat at the game. They want personalized experiences, shareable moments, and digital keepsakes that extend beyond the final whistle. According to recent industry research, 78% of fans say they're more likely to return to a venue that offers interactive digital experiences.</p>

        <h2>Strategy 1: Capture Game-Day Moments</h2>
        <p>The most successful venues create opportunities for fans to capture and share their experiences. This includes:</p>
        <ul>
          <li><strong>Photo zones:</strong> Branded selfie stations positioned throughout the venue</li>
          <li><strong>Digital collectibles:</strong> Instant access to personalized game-day cards</li>
          <li><strong>Live moment captures:</strong> Real-time highlights fans can claim as their own</li>
          <li><strong>Social integration:</strong> One-click sharing to all major platforms</li>
        </ul>

        <h2>Strategy 2: Leverage QR Code Technology</h2>
        <p>QR codes have revolutionized stadium engagement. By placing codes on tickets, signage, and jumbotrons, venues can:</p>
        <ul>
          <li>Instantly connect fans to digital experiences</li>
          <li>Track engagement metrics in real-time</li>
          <li>Offer exclusive content to attendees</li>
          <li>Build first-party data databases</li>
        </ul>

        <h2>Strategy 3: Create Exclusive Fan Rewards</h2>
        <p>Reward loyalty with digital experiences that fans can't get anywhere else. Season ticket holders, for example, can receive exclusive collectible series, early access to special moments, or VIP digital badges that showcase their dedication.</p>

        <h2>Strategy 4: Partner with Sponsors Effectively</h2>
        <p>Smart venues integrate sponsors into the fan experience seamlessly. Instead of intrusive advertising, create co-branded digital collectibles that fans actually want. This approach provides measurable value to sponsors while enhancing the fan experience.</p>

        <h2>Measuring Success</h2>
        <p>Track these key metrics to understand your fan engagement performance:</p>
        <ul>
          <li><strong>Scan rates:</strong> How many fans are engaging with QR codes</li>
          <li><strong>Share rates:</strong> Social media amplification of your content</li>
          <li><strong>Return visits:</strong> Whether engaged fans come back for more games</li>
          <li><strong>Sponsor impressions:</strong> Real data to show partnership value</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>Maximizing fan engagement requires a combination of technology, creativity, and data-driven decision making. Venues that invest in digital fan experiences see measurable returns in ticket sales, sponsorship revenue, and brand loyalty.</p>

        <p>Ready to transform your stadium's fan engagement? The tools and strategies exist today—it's just a matter of implementing them effectively.</p>
      `
    },
    'future-digital-collectibles-sports': {
      title: 'The Future of Digital Collectibles in Sports',
      category: 'industry',
      author: 'Michael Chen',
      date: 'January 12, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80',
      content: `
        <p>Digital collectibles are reshaping how sports fans connect with their favorite teams, players, and moments. What started as a niche trend has evolved into a mainstream revenue driver for venues worldwide.</p>

        <h2>The Evolution of Fan Memorabilia</h2>
        <p>Traditional sports memorabilia—signed jerseys, ticket stubs, programs—has always held emotional value for fans. Digital collectibles take this concept further by making every moment accessible, shareable, and verifiable.</p>

        <h2>Why Digital Collectibles Matter</h2>
        <p>Unlike physical memorabilia, digital collectibles offer unique advantages:</p>
        <ul>
          <li><strong>Accessibility:</strong> Every fan can own a piece of the moment, not just those who can afford rare items</li>
          <li><strong>Shareability:</strong> Instant distribution across social platforms amplifies your brand</li>
          <li><strong>Data capture:</strong> Each interaction provides valuable fan insights</li>
          <li><strong>Scalability:</strong> No inventory limits or shipping logistics</li>
        </ul>

        <h2>Current Market Trends</h2>
        <p>The digital collectibles market in sports is projected to reach $2.6 billion by 2027. Major leagues and individual teams are investing heavily in platforms that can deliver engaging digital experiences at scale.</p>

        <h2>Use Cases Across Sports</h2>
        <p>From championship moments to regular season games, digital collectibles serve multiple purposes:</p>
        <ul>
          <li><strong>Game attendance verification:</strong> "I was there" proof for historic moments</li>
          <li><strong>Player milestones:</strong> First goal, 100th game, championship wins</li>
          <li><strong>Fan recognition:</strong> Loyalty rewards for season ticket holders</li>
          <strong>Sponsorship activation:</strong> Co-branded collectibles that provide value to all parties
        </ul>

        <h2>The Technology Behind It</h2>
        <p>Modern digital collectible platforms leverage cloud infrastructure, mobile-first design, and advanced analytics to deliver seamless experiences. The best platforms make it easy for fans to collect, share, and treasure their digital keepsakes.</p>

        <h2>What's Next?</h2>
        <p>The future of digital collectibles includes augmented reality integration, interactive experiences, and deeper personalization. As technology advances, fans will expect increasingly immersive ways to connect with their favorite sports moments.</p>

        <h2>Conclusion</h2>
        <p>Digital collectibles aren't replacing traditional fan experiences—they're enhancing them. Venues that embrace this technology early will build stronger fan relationships and create new revenue streams that last well beyond game day.</p>
      `
    },
    'fancard-partners-major-league-stadiums': {
      title: 'FanCard Partners with Major League Stadiums',
      category: 'news',
      author: 'FanCard Team',
      date: 'January 10, 2025',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80',
      content: `
        <p>We're thrilled to announce our largest expansion to date: FanCard is now partnering with 50+ new stadiums and arenas across North America, bringing our innovative fan engagement platform to millions of sports fans.</p>

        <h2>A Milestone Moment</h2>
        <p>This expansion represents a significant milestone in our mission to transform how venues connect with their fans. From major league baseball stadiums to championship basketball arenas, our platform is now powering engagement at some of the most iconic sports venues in the country.</p>

        <h2>What This Means for Fans</h2>
        <p>Sports fans attending games at our partner venues can now:</p>
        <ul>
          <li>Collect personalized digital cards commemorating their attendance</li>
          <li>Capture and share highlight moments from the game</li>
          <li>Access exclusive content and experiences</li>
          <li>Build collections that showcase their fan journey</li>
        </ul>

        <h2>What This Means for Venues</h2>
        <p>Our partner stadiums gain access to:</p>
        <ul>
          <li><strong>Enhanced fan engagement:</strong> Tools to create memorable experiences</li>
          <li><strong>Valuable data insights:</strong> Understanding fan behavior and preferences</li>
          <li><strong>Sponsorship opportunities:</strong> New ways to deliver value to partners</li>
          <li><strong>Revenue growth:</strong> Multiple monetization pathways beyond ticket sales</li>
        </ul>

        <h2>Early Success Stories</h2>
        <p>Venues that have already implemented FanCard are seeing impressive results:</p>
        <ul>
          <li>Average 40% increase in social media engagement</li>
          <li>85% fan participation rate for digital collectible campaigns</li>
          <li>23% improvement in season ticket renewal rates</li>
          <li>Measurable ROI for sponsor partners through engagement data</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>This is just the beginning. We're continuing to innovate our platform with new features including enhanced analytics, augmented reality experiences, and deeper integration with ticketing systems.</p>

        <p>Our goal remains the same: help venues create unforgettable fan experiences while driving measurable business results.</p>

        <h2>Join the Movement</h2>
        <p>Interested in bringing FanCard to your venue? We're actively onboarding new partners and would love to explore how we can help transform your fan engagement strategy.</p>

        <p>Contact our team to schedule a demo and see the platform in action.</p>
      `
    },
    'proving-sponsorship-roi-data-driven': {
      title: 'Proving Sponsorship ROI: A Data-Driven Approach',
      category: 'guides',
      author: 'David Thompson',
      date: 'January 8, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80',
      content: `
        <p>Securing and retaining sponsorships is critical for sports venues, but sponsors increasingly demand proof of value. Generic metrics like "impressions" no longer cut it—brands want detailed, actionable data that demonstrates real ROI.</p>

        <h2>The Sponsorship Challenge</h2>
        <p>Traditional sponsorship measurement relies on broad estimates: crowd size, TV viewership, social media reach. These metrics provide a general sense of exposure but fail to answer the questions sponsors really care about:</p>
        <ul>
          <li>How many people actually engaged with my brand?</li>
          <li>What actions did they take after seeing my logo?</li>
          <li>Can you prove my investment drove measurable results?</li>
        </ul>

        <h2>The Data-Driven Solution</h2>
        <p>Modern fan engagement platforms enable venues to provide concrete answers. By tracking digital interactions, you can measure:</p>
        <ul>
          <li><strong>Direct engagement:</strong> How many fans clicked, scanned, or interacted with sponsor content</li>
          <li><strong>Social amplification:</strong> Shares, tags, and mentions that extend reach</li>
          <li><strong>Attribution data:</strong> Connecting sponsor visibility to specific fan actions</li>
          <li><strong>Demographic insights:</strong> Who engaged and their key characteristics</li>
        </ul>

        <h2>Key Metrics to Track</h2>
        <p>When presenting ROI to sponsors, focus on these critical measurements:</p>
        
        <h3>1. Engagement Rate</h3>
        <p>What percentage of attendees actively engaged with sponsor-branded content? Aim for rates above 50% to demonstrate strong performance.</p>

        <h3>2. Social Reach</h3>
        <p>How many people saw sponsor content through fan sharing? Calculate this by multiplying engaged fans by their average follower count.</p>

        <h3>3. Cost Per Engagement</h3>
        <p>Divide the sponsorship investment by total engagements. This provides a clear cost-efficiency metric sponsors can compare to other marketing channels.</p>

        <h3>4. Conversion Tracking</h3>
        <p>When possible, track how many fans took desired actions: visiting a sponsor's website, using a promo code, downloading an app, etc.</p>

        <h2>Building Compelling Reports</h2>
        <p>Create sponsor reports that tell a complete story:</p>
        <ul>
          <li><strong>Executive summary:</strong> Top-level results in clear, non-technical language</li>
          <li><strong>Detailed metrics:</strong> Comprehensive data for those who want to dive deeper</li>
          <li><strong>Visual presentation:</strong> Charts and graphs that make data accessible</li>
          <li><strong>Comparative analysis:</strong> How performance improved over time or vs. benchmarks</li>
          <li><strong>Fan testimonials:</strong> Qualitative feedback that brings numbers to life</li>
        </ul>

        <h2>Real-World Example</h2>
        <p>A major arena used FanCard to measure their title sponsor's ROI:</p>
        <ul>
          <li>45,000 fans scanned QR codes featuring sponsor branding</li>
          <li>18,000 shared sponsor-branded digital collectibles on social media</li>
          <li>Average social reach: 450 followers per fan</li>
          <li>Total impressions: 8.1 million</li>
          <li>Cost per engagement: $0.67</li>
        </ul>
        <p>The sponsor renewed at a 30% higher rate for the next season.</p>

        <h2>The Competitive Advantage</h2>
        <p>Venues that provide robust sponsorship analytics gain significant advantages:</p>
        <ul>
          <li>Higher sponsorship renewal rates</li>
          <li>Ability to justify premium pricing</li>
          <li>Easier acquisition of new sponsors</li>
          <li>Stronger, more collaborative sponsor relationships</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The sports sponsorship landscape is evolving. Venues that embrace data-driven measurement will thrive, while those relying on outdated metrics will struggle to compete. The good news? The technology to prove ROI exists today—it's just a matter of implementing it.</p>
      `
    },
    'sports-marketing-trends-2025': {
      title: 'Sports Marketing Trends to Watch in 2025',
      category: 'industry',
      author: 'Emily Rodriguez',
      date: 'January 5, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80',
      content: `
        <p>The sports marketing landscape is evolving rapidly. From emerging technologies to shifting fan expectations, 2025 promises to be a transformative year for how teams, venues, and brands connect with audiences.</p>

        <h2>1. First-Party Data Becomes Essential</h2>
        <p>With increasing privacy regulations and the demise of third-party cookies, sports organizations must build direct relationships with fans. Venues are investing heavily in platforms that capture first-party data through engaging experiences rather than intrusive forms.</p>
        <p><strong>Action item:</strong> Implement tools that naturally encourage fans to share information in exchange for value—exclusive content, digital collectibles, or VIP experiences.</p>

        <h2>2. Personalization at Scale</h2>
        <p>Generic fan experiences are no longer acceptable. Today's fans expect personalized interactions based on their preferences, attendance history, and engagement patterns. Advanced analytics platforms now make it possible to deliver customized experiences to thousands of fans simultaneously.</p>

        <h2>3. Social Media as Primary Distribution Channel</h2>
        <p>The most successful campaigns in 2025 will be designed for social sharing from the ground up. Fans have become your primary marketing channel—create content they're excited to share, and your reach multiplies organically.</p>
        <p>Key platforms to prioritize:</p>
        <ul>
          <li><strong>Instagram & TikTok:</strong> Short-form visual content and Stories</li>
          <li><strong>X (Twitter):</strong> Real-time game commentary and engagement</li>
          <li><strong>Facebook:</strong> Community building and longer-form content</li>
        </ul>

        <h2>4. Augmented Reality Integration</h2>
        <p>AR is moving from novelty to necessity. Fans increasingly expect the ability to:</p>
        <ul>
          <li>Point their phones at the field for player stats overlays</li>
          <li>Find their seats using AR navigation</li>
          <li>Take photos with virtual mascots or player cutouts</li>
          <li>Access hidden content by scanning signage</li>
        </ul>

        <h2>5. Sustainability Marketing</h2>
        <p>Fans—especially younger demographics—care deeply about environmental responsibility. Venues highlighting sustainability efforts (including digital-first initiatives that reduce waste) gain favor with socially conscious attendees.</p>

        <h2>6. Micro-Moments Strategy</h2>
        <p>Rather than focusing solely on big games, successful venues create engagement opportunities around smaller moments: player arrivals, warm-ups, halftime shows, post-game celebrations. Every moment becomes a potential touchpoint.</p>

        <h2>7. Creator Partnerships</h2>
        <p>Sports organizations are increasingly partnering with content creators and influencers who have authentic connections to fan communities. These partnerships provide access to engaged audiences that traditional advertising can't reach.</p>

        <h2>8. Dynamic Pricing and Yield Management</h2>
        <p>AI-powered pricing strategies optimize revenue by adjusting ticket prices based on demand, weather, team performance, and competitor events. The key is communicating value to fans so they understand pricing fluctuations.</p>

        <h2>9. Community-Driven Content</h2>
        <p>User-generated content (UGC) outperforms brand-created content in authenticity and engagement. Smart venues create frameworks that encourage fans to create and share content, then amplify the best submissions.</p>

        <h2>10. Measurement Revolution</h2>
        <p>The days of vanity metrics are ending. Modern sports marketing requires proving ROI through:</p>
        <ul>
          <li>Engagement rates, not just impressions</li>
          <li>Conversion tracking from awareness to action</li>
          <li>Lifetime value calculations for fans and sponsors</li>
          <li>Attribution modeling across touchpoints</li>
        </ul>

        <h2>Preparing for the Future</h2>
        <p>These trends aren't isolated—they work together to create a more connected, data-driven, and fan-centric sports marketing ecosystem. Organizations that embrace these changes will thrive; those that cling to outdated approaches will struggle to compete.</p>

        <h2>Getting Started</h2>
        <p>You don't need to implement everything at once. Start with these steps:</p>
        <ol>
          <li>Audit your current fan data capabilities</li>
          <li>Identify your most engaged fan segments</li>
          <li>Test one or two new tactics on a small scale</li>
          <li>Measure results rigorously</li>
          <li>Scale what works, abandon what doesn't</li>
        </ol>

        <p>The future of sports marketing is here. The question is: are you ready to embrace it?</p>
      `
    },
    'case-study-300-percent-engagement-increase': {
      title: 'Case Study: 300% Increase in Social Media Engagement',
      category: 'guides',
      author: 'Alex Johnson',
      date: 'January 3, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?w=1200&q=80',
      content: `
        <p>When a championship basketball tournament wanted to boost attendance and social media presence, they partnered with FanCard to create a digital engagement strategy. The results exceeded all expectations.</p>

        <h2>The Challenge</h2>
        <p>The tournament faced several obstacles:</p>
        <ul>
          <li>Declining youth attendance year over year</li>
          <li>Limited social media reach despite having exciting games</li>
          <li>Difficulty attracting and retaining sponsors</li>
          <li>No way to track attendee engagement or behavior</li>
        </ul>

        <h2>The Strategy</h2>
        <p>We implemented a comprehensive FanCard campaign with three main components:</p>

        <h3>1. Digital Collectible Cards</h3>
        <p>Every attendee received a personalized "I Was There" digital card featuring:</p>
        <ul>
          <li>Tournament branding and sponsor logos</li>
          <li>Game date, location, and final score</li>
          <li>Option to add their own photo from the event</li>
          <li>One-click sharing to all social platforms</li>
        </ul>

        <h3>2. Milestone Moments</h3>
        <p>Throughout each game, we released limited-edition collectibles for key moments:</p>
        <ul>
          <li>Buzzer-beaters and game-winning shots</li>
          <li>Player milestone achievements (1000th point, etc.)</li>
          <li>Championship victories</li>
          <li>Fan of the Game recognition</li>
        </ul>

        <h3>3. Sponsor Integration</h3>
        <p>Rather than traditional signage alone, sponsors were featured on digital collectibles that fans actually wanted to share. Each card included sponsor logos and special offers, creating mutual value.</p>

        <h2>The Implementation</h2>
        <p>The tournament promoted the campaign through:</p>
        <ul>
          <li>QR codes on tickets and at venue entrances</li>
          <li>Jumbotron displays showing live collection stats</li>
          <li>Social media teasers previewing collectible designs</li>
          <li>In-arena announcements encouraging participation</li>
        </ul>

        <h2>The Results</h2>
        <p>After just one tournament season, the metrics were remarkable:</p>

        <h3>Engagement Metrics</h3>
        <ul>
          <li><strong>72% participation rate:</strong> Nearly three-quarters of attendees claimed digital cards</li>
          <li><strong>8,400 total collections:</strong> Across all tournament games</li>
          <li><strong>5,200 social shares:</strong> Fans posting their cards organically</li>
          <li><strong>2.8 million social impressions:</strong> From user-generated content alone</li>
        </ul>

        <h3>Business Impact</h3>
        <ul>
          <li><strong>300% increase in social media engagement:</strong> Measured by interactions across all platforms</li>
          <li><strong>24% increase in attendance:</strong> Compared to previous year's tournament</li>
          <li><strong>40% improvement in sponsor satisfaction:</strong> Based on post-event surveys</li>
          <li><strong>18% higher merchandise sales:</strong> Driven by increased fan enthusiasm</li>
        </ul>

        <h3>Long-Term Benefits</h3>
        <ul>
          <li><strong>First-party database:</strong> 6,000+ verified fan contacts for future marketing</li>
          <li><strong>Demographic insights:</strong> Detailed data on attendee age, location, and preferences</li>
          <li><strong>Sponsor renewal:</strong> 100% of sponsors returned for next season at higher rates</li>
        </ul>

        <h2>Key Success Factors</h2>
        <p>Several elements contributed to the campaign's exceptional performance:</p>

        <h3>1. Ease of Use</h3>
        <p>Fans could claim their cards in under 30 seconds using simple QR codes. No app downloads or complex registration required.</p>

        <h3>2. Immediate Gratification</h3>
        <p>Digital cards were instantly available, allowing fans to share while excitement was at its peak.</p>

        <h3>3. Authentic Value</h3>
        <p>The collectibles served a genuine purpose—commemorating attendance and celebrating moments—rather than feeling like gimmicky marketing.</p>

        <h3>4. Built for Sharing</h3>
        <p>Card designs were optimized for social platforms, with eye-catching graphics and built-in share functionality.</p>

        <h2>Lessons Learned</h2>
        <p>The tournament organizers identified several key takeaways:</p>
        <ul>
          <li>Promote the campaign early and often to maximize participation</li>
          <li>Feature live collection stats on jumbotrons to create FOMO and encourage engagement</li>
          <li>Create special "rare" collectibles for championship games to drive excitement</li>
          <li>Follow up with fans post-event using collected data</li>
        </ul>

        <h2>What's Next</h2>
        <p>Building on this success, the tournament is expanding the program to include:</p>
        <ul>
          <li>Season-long collection series for regular attendees</li>
          <li>Exclusive perks for fans who collect all tournament cards</li>
          <li>Pre-game predictions that unlock special collectibles</li>
          <li>Augmented reality features for enhanced experiences</li>
        </ul>

        <h2>Conclusion</h2>
        <p>This case study demonstrates that when you give fans something they genuinely want—memorable keepsakes, shareable content, and exclusive experiences—they'll enthusiastically participate and become ambassadors for your brand.</p>

        <p>The 300% engagement increase wasn't the result of traditional advertising or promotional giveaways. It came from creating authentic value that aligned with what fans naturally want to do: celebrate their attendance, share their experiences, and connect with their passion for the sport.</p>
      `
    },
    'live-moments-with-fancard': {
      title: 'Live Moments with Fancard: The Future of Fan Engagement',
      category: 'guides',
      author: 'Laura Du Ry, Head of Strategy & Communication',
      date: 'January 1, 2025',
      readTime: '7 min read',
      image: liveMomentsImage,
      content: `
        <p>Live events are about more than just the game—they're about creating unforgettable moments that fans will cherish for a lifetime. In today's digital age, fans expect more than just a seat at the game; they want personalized experiences, shareable moments, and digital keepsakes that extend beyond the final whistle.</p>

        <h2 id="what-fancard-is">What Fancard Is</h2>

        <p>Fancard is a fan engagement platform that turns live moments into digital collectibles. By capturing and sharing fan-generated content, Fancard creates a unique and memorable experience for every attendee.</p>

        <h2 id="why-engagement-has-changed">Why Engagement Has Changed</h2>

        <p>Traditional fan engagement methods—like printed programs and static signage—are no longer enough. Fans today want interactive, personalized, and shareable experiences. They want to be part of the action, not just spectators.</p>

        <h2 id="how-fancard-increases-engagement">How Fancard Increases Engagement</h2>

        <p>Fancard increases engagement by:</p>

        <ul>
          <li><strong>Creating Shareable Moments:</strong> Fans can capture and share highlights, player stats, and other game-day moments with their friends and followers.</li>
          <li><strong>Personalized Experiences:</strong> Each fan receives a personalized digital card that commemorates their attendance and celebrates key moments.</li>
          <li><strong>Interactive Features:</strong> Fans can interact with digital collectibles, add their own photos, and share them on social media.</li>
        </ul>

        <h2 id="how-fancard-increases-sponsor-value">How Fancard Increases Sponsor Value</h2>

        <p>Fancard increases sponsor value by:</p>

        <ul>
          <li><strong>Direct Engagement:</strong> Sponsors can track how many fans interacted with their branded content, providing measurable ROI.</li>
          <li><strong>Brand Amplification:</strong> Fans sharing sponsor-branded collectibles amplify the brand's reach and visibility.</li>
          <li><strong>Exclusive Offers:</strong> Sponsors can offer exclusive content and perks to fans who engage with their brand.</li>
        </ul>

        <h2 id="how-it-works">How It Works</h2>

        <p>Fancard works by:</p>

        <ul>
          <li><strong>QR Codes:</strong> Fans scan QR codes on tickets or signage to access the Fancard platform.</li>
          <li><strong>Interactive Platform:</strong> Fans can create and customize digital collectibles, add their own photos, and share them on social media.</li>
          <strong>Data Collection:</strong> Fancard captures data on fan engagement, providing insights for venues and sponsors.
        </ul>

        <h2 id="why-fancard-wins">Why Fancard Wins</h2>

        <p>Fancard wins because:</p>

        <ul>
          <li><strong>Authenticity:</strong> Fancard creates authentic, fan-generated content that fans want to share.</li>
          <li><strong>Personalization:</strong> Each fan receives a personalized experience, making them feel valued and connected.</li>
          <li><strong>Measurement:</strong> Fancard provides measurable data on fan engagement, helping venues and sponsors prove ROI.</li>
        </ul>

        <h2 id="the-takeaway">The Takeaway</h2>

        <p>The future of fan engagement is digital and interactive. Fancard provides a platform that turns live moments into shareable, personalized experiences, creating a stronger connection between fans and the events they attend.</p>

        <p>By embracing Fancard, venues can enhance fan engagement, increase sponsor value, and create unforgettable moments that fans will cherish for a lifetime.</p>
      `
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="bg-gray-50 min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button className="bg-black hover:bg-gray-800 text-white">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 text-gray-600 hover:text-gray-900 -ml-4">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-[#6FE866] text-gray-900 text-sm font-semibold rounded-full capitalize">
              {post.category === 'industry' ? 'Industry Insights' : post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-12"
          >
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="text-base">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-base">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-base">{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative px-4 sm:px-6 -mt-8 mb-12 sm:mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-16 xl:gap-20">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 max-w-[680px]
                [&_p]:text-gray-700 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6
                [&_h2]:text-gray-900 [&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:font-bold [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:leading-tight [&_h2]:scroll-mt-24
                [&_h3]:text-gray-700 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:leading-tight
                [&_ul]:my-8 [&_ul]:space-y-3
                [&_ol]:my-8 [&_ol]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-6
                [&_li]:text-gray-700 [&_li]:text-lg [&_li]:leading-relaxed [&_li]:pl-2
                [&_ul_li]:pl-2 [&_ul_li]:relative [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-[-1.5rem] [&_ul_li]:before:top-[0.6rem] [&_ul_li]:before:w-2 [&_ul_li]:before:h-2 [&_ul_li]:before:rounded-full [&_ul_li]:before:bg-[#6FE866]
                [&_strong]:text-gray-900 [&_strong]:font-bold
                [&_a]:text-[#6FE866] [&_a]:no-underline [&_a]:font-medium hover:[&_a]:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sticky Table of Contents - Only show for the data insights article */}
            {slug === 'data-insights-you-can-unlock-with-fancard' && (
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden lg:block w-72 xl:w-80 flex-shrink-0"
              >
                <div className="sticky top-32">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-gray-900 text-lg font-bold mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                            activeSection === item.id
                              ? 'bg-[#6FE866] text-gray-900 font-semibold'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </motion.aside>
            )}

            {/* Sticky Table of Contents - Show for all blogs that have a TOC */}
            {tableOfContents.length > 0 && slug !== 'data-insights-you-can-unlock-with-fancard' && (
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden lg:block w-72 xl:w-80 flex-shrink-0"
              >
                <div className="sticky top-32">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-gray-900 text-lg font-bold mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                            activeSection === item.id
                              ? 'bg-[#6FE866] text-gray-900 font-semibold'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </motion.aside>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
            Ready to Transform Your <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">Fan Engagement?</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            See how FanCard can help your venue create unforgettable experiences and measurable results.
          </p>
          <Link to="/blog">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white hover:bg-gray-50 text-gray-900 border-gray-300 px-8 py-6 text-lg rounded-full"
            >
              Read More Articles
            </Button>
          </Link>
        </motion.div>
      </section>

      <BookDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
}