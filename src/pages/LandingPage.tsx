import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { BookDemoDialog } from '../components/BookDemoDialog';

// ── Logo assets ──────────────────────────────────────────────────────────────
import logoGreen from '../assets/Fancard-logo-green.svg';
import logoBlack from '../assets/Fancard-logo-black.svg';
import footerCrowdRaw from '../assets/footer_crowd2.svg?raw';

// ── Hero cloud fancard images ────────────────────────────────────────────────
import fc1  from '../assets/fc-1.png';
import fc2  from '../assets/fc-2.png';
import fc3  from '../assets/fc-3.png';
import fc4  from '../assets/fc-4.png';
import fc5  from '../assets/fc-5.png';
import fc6  from '../assets/fc-6.png';
import fc7  from '../assets/fc-7.png';
import fc8  from '../assets/fc-8.png';
import fc9  from '../assets/fc-9.png';
import fc10 from '../assets/fc-10.png';
import fc11 from '../assets/fc-11.png';
import fc12 from '../assets/fc-12.png';
import fc13 from '../assets/fc-13.png';
import fc14 from '../assets/fc-14.png';
import fc15 from '../assets/fc-15.png';
import fcAz      from '../assets/fc-az-family.jpg';
import fcCsc     from '../assets/fc-csc45.jpg';
import fcSportsS from '../assets/fc-sports-specific.jpg';
import fcSportsG from '../assets/fc-sports-gameday.jpg';
import fcExample from '../assets/fc-example.jpg';

// ── Card row images (extracted / matched from wireframe) ─────────────────────
import cardRow1 from '../assets/hero-1.png';
import cardRow2 from '../assets/hero-9.jpg';
import cardRow3 from '../assets/hero-3.jpg';
import cardRow4 from '../assets/hero-6.png';
import cardRow5 from '../assets/hero-4.png';
import cardRow6 from '../assets/card-row-atletico.png';
import cardRow7 from '../assets/738bc0483b8952cca79650579430057449dff8df.png';

// ── HIW visual slide images ───────────────────────────────────────────────────
import hiwSlide1 from '../assets/works-step-1.webp';
import hiwSlide2 from '../assets/works-step-2.webp';
import hiwSlide3 from '../assets/works-step-3.webp';
import hiwSlide4 from '../assets/works-step-4.webp';

// ── Layer spread images ───────────────────────────────────────────────────────
import layer1 from '../assets/layer-1.webp';
import layer2 from '../assets/layer-2.webp';
import layer3 from '../assets/layer-3.webp';

// ── Block icons ───────────────────────────────────────────────────────────────
import iconProblem  from '../assets/icon-problem.svg';
import iconSolution from '../assets/icon-solution.svg';

// ── Data ─────────────────────────────────────────────────────────────────────
const PROBLEMS = [
  { title: 'Moments disappear after the event',       body: "Fans go home with no digital touchpoint — their energy and intent lost forever." },
  { title: 'No first-party fan data collected',       body: "Live attendance data stays offline. You learn nothing about who showed up or why." },
  { title: "Sponsors can't prove ROI",                body: "Brand exposure at events is impossible to quantify, making renewals a hard sell." },
  { title: 'Online engagement flatlines post-event',  body: "Social buzz peaks inside the stadium and drops to zero within hours." },
];

const SOLUTIONS = [
  { title: 'Instant digital fan moments',          body: "Fans scan and instantly share a branded Fancard — turning every seat into a social post." },
  { title: 'First-party data captured at scale',   body: "Every interaction feeds your CRM with opted-in audience profiles and preferences." },
  { title: 'Measurable sponsorship proof',         body: "Real-time dashboards show reach, impressions, and shares — per sponsor, per event." },
  { title: 'Sustained online community growth',    body: "Fan-created content keeps your brand circulating long after the final whistle." },
];

const STEPS = [
  { num: 'STEP 1', title: 'Create Your Campaign',   body: "Design branded templates with your logos, sponsors, and custom themes using our intuitive dashboard.", img: hiwSlide1 },
  { num: 'STEP 2', title: 'Launch at Events',        body: "Share QR codes at your venue — on screens, tickets, email, social or signage. Fans scan to instantly join. No mobile app needed.", img: hiwSlide2 },
  { num: 'STEP 3', title: 'Capture Unique Data',     body: "Access engagement metrics, sentiment insights, and data that normally is lost and prove ROI.", img: hiwSlide3 },
  { num: 'STEP 4', title: 'Build Your Fan Database', body: "Collect verified fan contact information and build a direct relationship with your most engaged audience.", img: hiwSlide4 },
];


const FAQS = [
  { q: 'What is Fancard and how does it work?',                                        a: "Fancard is a campaign platform that lets sports clubs and event organisers create branded digital cards. Fans scan a QR code at the venue, instantly receive a personalised fancard, and share it online — capturing first-party engagement data at every step." },
  { q: 'Do fans need to download an app?',                                              a: "No. Fans simply scan a QR code — displayed on screens, signage, tickets, or email — and the experience opens directly in their mobile browser. Zero friction, zero downloads." },
  { q: 'How quickly can I launch a campaign?',                                          a: "Most teams are live within a single day. Use the intuitive dashboard to design your branded template, upload sponsor logos, and generate a QR code — then deploy at your next event." },
  { q: 'What data do I collect from fans?',                                             a: "You capture verified first-party data including fan contact details, engagement actions, social shares, and sentiment insights that are otherwise lost after the final whistle." },
  { q: 'Can I prove ROI to sponsors?',                                                  a: "Yes. Fancard provides engagement metrics, reach data, and shareable reports that give sponsors concrete proof of value — making renewals and upsells significantly easier." },
  { q: 'Is Fancard suitable for smaller clubs or only large organisations?',            a: "Fancard is built to scale. Whether you run a grassroots club or a top-flight stadium, the platform adapts to your audience size and budget with flexible campaign options." },
];

const CARD_ROW = [cardRow1, cardRow2, cardRow3, cardRow4, cardRow5, cardRow6, cardRow7];

// ── CSS-in-JS helpers ─────────────────────────────────────────────────────────
const C = {
  green:  '#6FE866',
  dark:   '#2A2A2A',
  mid:    '#444444',
  light:  '#888888',
  border: '#DDDDDD',
  bg:     '#F7F7F5',
  white:  '#FFFFFF',
} as const;

// ── Hero cloud card layout ────────────────────────────────────────────────────
// x/y = top-left corner as % of section. Cards are placed to avoid center text zone (25-75% x, 28-72% y).
const CLOUD = [
  // Top row
  { src: fc1,       x: 3,   y: 4,   w: 155, depth: 0.50 },
  { src: fc2,       x: 17,  y: 11,  w: 145, depth: 0.35 },
  { src: fcAz,      x: 43,  y: 1.5, w: 150, depth: 0.55 },
  { src: fc3,       x: 63,  y: 7,   w: 155, depth: 0.40 },
  { src: fc4,       x: 82,  y: 3,   w: 145, depth: 0.60 },
  // Left column
  { src: fc5,       x: 1,   y: 31,  w: 168, depth: 0.45 },
  { src: fcSportsG, x: 10,  y: 58,  w: 148, depth: 0.30 },
  // Right column
  { src: fc6,       x: 78,  y: 25,  w: 158, depth: 0.50 },
  { src: fcCsc,     x: 85,  y: 50,  w: 150, depth: 0.65 },
  { src: fc7,       x: 75,  y: 68,  w: 145, depth: 0.40 },
  // Bottom row
  { src: fc8,       x: 4,   y: 77,  w: 155, depth: 0.50 },
  { src: fc9,       x: 22,  y: 83,  w: 148, depth: 0.35 },
  { src: fcSportsS, x: 46,  y: 79,  w: 150, depth: 0.55 },
  { src: fcExample, x: 65,  y: 81,  w: 148, depth: 0.45 },
  { src: fc10,      x: 82,  y: 75,  w: 150, depth: 0.60 },
] as const;

// ── Slide text (Book a Demo) ──────────────────────────────────────────────────

function SlideText({ children }: { children: string }) {
  const [hovered, setHovered] = useState(false);
  const chars = children.split('');
  const ease = '0.45s cubic-bezier(0.76, 0, 0.24, 1)';

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'inline-block', position: 'relative', verticalAlign: 'top' }}
    >
      {/* Original — exits through top, left → right */}
      <span style={{ display: 'block' }}>
        {chars.map((char, i) => (
          <span key={i} style={{
            display: 'inline-block',
            transition: `transform ${ease}`,
            transitionDelay: hovered ? `${i * 40}ms` : `${(chars.length - 1 - i) * 40}ms`,
            transform: hovered ? 'translateY(-220%)' : 'translateY(0%)',
          }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      {/* Ghost — enters from below, left → right */}
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'block' }}>
        {chars.map((char, i) => (
          <span key={i} style={{
            display: 'inline-block',
            transition: `transform ${ease}`,
            transitionDelay: hovered ? `${i * 40}ms` : `${(chars.length - 1 - i) * 40}ms`,
            transform: hovered ? 'translateY(0%)' : 'translateY(220%)',
          }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
}

// ── Wave text ─────────────────────────────────────────────────────────────────

function WaveText({ children }: { children: string }) {
  const [hovered, setHovered] = useState(false);
  const chars = children.split('');
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'inline', borderBottom: '1px solid currentColor', paddingBottom: 2 }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            transform: hovered ? 'translateY(-5px)' : 'translateY(0px)',
            transition: hovered
              ? `transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 45}ms`
              : `transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${(chars.length - 1 - i) * 45}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FaqItem({ item, index, isOpen, onToggle }: { item: typeof FAQS[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`} style={{ borderTop: `1px solid ${C.border}` }}>
      <div
        onClick={onToggle}
        className="faq-header"
        style={{ display: 'flex', alignItems: 'center', gap: 20, cursor: 'pointer', userSelect: 'none' }}
      >
        <span style={{ fontSize: 'clamp(17px, 2.2vw, 26px)', fontWeight: 700, color: C.dark, flex: 1, lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span style={{ fontSize: 44, fontWeight: 300, color: C.dark, flexShrink: 0, lineHeight: 1, transition: 'transform 0.4s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', display: 'block' }}>
          +
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
        <div style={{ overflow: 'hidden' }}>
          <p className="faq-answer" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: C.mid, lineHeight: 1.7, margin: 0, maxWidth: '90%' }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Bubble Canvas Footer ──────────────────────────────────────────────────────

function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const bubbles: { x: number; y: number; rx: number; ry: number; color: string; rot: number }[] = [];
      for (let i = 0; i < 120; i++) {
        const xFrac = Math.random();
        const wavePeak = 0.3 + 0.35 * Math.pow(xFrac, 1.2);
        const yFrac = wavePeak + Math.random() * (1 - wavePeak);
        const isGreen = Math.random() > 0.45;
        const big = Math.random() > 0.78;
        const rx = big ? 28 + Math.random() * 40 : 4 + Math.random() * 14;
        const ry = rx * (0.9 + Math.random() * 0.3);
        bubbles.push({ x: xFrac * W, y: yFrac * H, rx, ry, color: isGreen ? C.green : C.white, rot: Math.random() * 0.4 - 0.2 });
      }
      bubbles.sort((a, b) => b.rx - a.rx);
      bubbles.forEach(b => {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(b.x, b.y, b.rx, b.ry, b.rot, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.restore();
      });
    }

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      draw();
    }

    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
  );
}

// ── Footer Crowd SVG with per-layer parallax ─────────────────────────────────

// Parallax depth per group (px shift at p=0, eases to 0 when fully revealed).
// Groups ordered back→front by y-coord: 2,1,3,6,5,4,7
const CROWD_DEPTHS = [4, 8, 20, 36, 36, 20, 60];

function FooterCrowd() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    // Ensure SVG scales to full width naturally
    const svg = el.querySelector('svg');
    if (svg) {
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }

    function onScroll() {
      const footer = el.closest('footer');
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const viewH = window.innerHeight;
      // p: 0 = footer just entering bottom of viewport, 1 = fully visible
      const p = Math.max(0, Math.min(1, (viewH - rect.top) / rect.height));
      const groups = el.querySelectorAll<SVGGElement>('svg > g');
      groups.forEach((g, i) => {
        const depth = CROWD_DEPTHS[i] ?? 20;
        g.style.transform = `translateY(${depth * (1 - p)}px)`;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="footer-crowd-wrap"
      style={{ width: '100%', display: 'block' }}
      dangerouslySetInnerHTML={{ __html: footerCrowdRaw }}
    />
  );
}

// ── Hero Cloud ────────────────────────────────────────────────────────────────

function HeroCloud({ onDemo }: { onDemo: () => void }) {
  const spacerRef      = useRef<HTMLDivElement>(null);
  const fixedRef       = useRef<HTMLDivElement>(null);
  const cloudRef       = useRef<HTMLDivElement>(null);
  const contentRef     = useRef<HTMLDivElement>(null);
  const vignetteRef    = useRef<HTMLDivElement>(null);
  const mobileTopRef   = useRef<HTMLDivElement>(null);
  const mobileBottomRef= useRef<HTMLDivElement>(null);
  const cardRefs       = useRef<(HTMLDivElement | null)[]>([]);
  const mouse          = useRef({ x: 0, y: 0 });
  const scrollProg     = useRef(0);

  useEffect(() => {
    function apply() {
      const p = scrollProg.current;

      // Fade hero background + vignette in sync with cloud, then hide
      if (fixedRef.current) {
        const bgAlpha = Math.max(0, 1 - p * 1.5);
        fixedRef.current.style.background = `rgba(255,255,255,${bgAlpha})`;
        fixedRef.current.style.visibility = p >= 1 ? 'hidden' : 'visible';
      }
      if (vignetteRef.current) {
        vignetteRef.current.style.opacity = String(Math.max(0, 1 - p * 2));
      }

      // Per-card: mouse parallax only
      CLOUD.forEach((card, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        const mx = mouse.current.x * card.depth * 30;
        const my = mouse.current.y * card.depth * 30;
        el.style.transform = `translate(${mx}px, ${my}px)`;
      });

      // Whole cloud: zoom from viewport center + fade — "flying through" effect
      if (cloudRef.current) {
        const scale   = 1 + p * 2.4;
        const opacity = Math.max(0, 1 - p * 1.5);
        const vpScale = window.innerWidth < 768
          ? 0
          : Math.min(1, window.innerWidth / 1300);
        cloudRef.current.style.transform = `scale(${scale * vpScale})`;
        cloudRef.current.style.visibility = vpScale === 0 ? 'hidden' : 'visible';
        cloudRef.current.style.opacity   = String(opacity);
      }

      // Mobile card strips: fade with cloud
      const stripOpacity = Math.max(0, 1 - p * 1.5);
      if (mobileTopRef.current)    mobileTopRef.current.style.opacity    = String(stripOpacity);
      if (mobileBottomRef.current) mobileBottomRef.current.style.opacity = String(stripOpacity);

      // Center content: fade + move upward
      if (contentRef.current) {
        contentRef.current.style.opacity   = String(Math.max(0, 1 - p * 3));
        contentRef.current.style.transform = `translateY(${-p * 120}px)`;
      }
    }

    function onMouseMove(e: MouseEvent) {
      mouse.current = {
        x: (e.clientX / window.innerWidth)  * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
      apply();
    }

    function onScroll() {
      // Animation plays over 200vh of scroll regardless of spacer height
      scrollProg.current = Math.max(0, Math.min(1, window.scrollY / (window.innerHeight * 2)));
      apply();
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll',    onScroll,    { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll',    onScroll);
    };
  }, []);

  const font: React.CSSProperties = { fontFamily: "'TikTok Sans', sans-serif" };

  return (
    <>
      {/* Spacer — 150vh of scroll room. Engagement section begins at 150vh,
          overlapping the hero while the cloud is still fading (p ≈ 0.25–0.67). */}
      <div ref={spacerRef} style={{ height: '150vh' }} />

      {/* Fixed hero — always covers the viewport at z-index 1.
          The engagement section (z-index 2) slides over it from below. */}
      <div ref={fixedRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden', background: C.white, zIndex: 2 }}>

        {/* Floating fancard cloud */}
        <div
          ref={cloudRef}
          style={{
            position: 'absolute', inset: 0,
            transformOrigin: '50% 50%',
            willChange: 'transform, opacity',
            pointerEvents: 'none',
          }}
        >
          {CLOUD.map((card, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el; }}
              style={{
                position: 'absolute',
                left: `${card.x}%`,
                top:  `${card.y}%`,
                width: card.w,
                willChange: 'transform',
                borderRadius: 10,
                overflow: 'hidden',
                boxShadow: '0 6px 28px rgba(0,0,0,0.13)',
              }}
            >
              <img src={card.src} alt="" style={{ width: '100%', height: 'auto', display: 'block', userSelect: 'none', pointerEvents: 'none' }} />
            </div>
          ))}
        </div>

        {/* Mobile card strips — top & bottom, hidden on desktop via CSS */}
        <div ref={mobileTopRef} className="mobile-card-strip" style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 3,
          display: 'flex', justifyContent: 'center', gap: 12,
          padding: '18px 0', pointerEvents: 'none',
        }}>
          {([fc1, fcAz, fc3, fc4] as string[]).map((src, i) => (
            <img key={i} src={src} alt="" style={{
              width: 110, borderRadius: 8,
              boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
              transform: `rotate(${[-4, 2, -2, 4][i]}deg) translateY(${[6, 0, 4, -2][i]}px)`,
              flexShrink: 0,
            }} />
          ))}
        </div>
        <div ref={mobileBottomRef} className="mobile-card-strip" style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
          display: 'flex', justifyContent: 'center', gap: 12,
          padding: '18px 0', pointerEvents: 'none',
        }}>
          {([fc8, fcSportsS, fcExample, fc10] as string[]).map((src, i) => (
            <img key={i} src={src} alt="" style={{
              width: 110, borderRadius: 8,
              boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
              transform: `rotate(${[3, -3, 2, -4][i]}deg) translateY(${[-4, 2, -2, 6][i]}px)`,
              flexShrink: 0,
            }} />
          ))}
        </div>

        {/* Soft radial vignette */}
        <div ref={vignetteRef} style={{
          position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 58% 58% at 50% 50%, transparent 35%, rgba(255,255,255,0.7) 72%, #ffffff 100%)',
        }} />

        {/* Center content */}
        <div ref={contentRef} style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 clamp(24px, 4vw, 60px)', zIndex: 10,
        }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.green, border: `1px solid ${C.green}`, borderRadius: 4, padding: '5px 14px', marginBottom: 28 }}>Live Fan Engagement Platform</div>
          <h1 style={{ ...font, fontSize: 'clamp(36px, 4.2vw, 64px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-2px', color: C.dark, marginBottom: 24, maxWidth: 700 }}>The fastest way to turn live fan experience into online engagement</h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: C.mid, marginBottom: 44, maxWidth: 500 }}>Fancard allows your audience to instantly share their moments online — boosting your brand's reach and sponsorship value.</p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onDemo} className="btn-touch" style={{ ...font, background: 'transparent', border: 'none', color: C.dark, fontWeight: 500, fontSize: 15, cursor: 'pointer' }}><WaveText>Get in Touch</WaveText></button>
            <button onClick={onDemo} className="btn-demo" style={{ ...font, background: C.green, color: C.dark, fontWeight: 800, fontSize: 15, border: 'none', borderRadius: 8, padding: '14px 28px', cursor: 'pointer' }}><SlideText>Book a Demo</SlideText></button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Flow Arrows SVG ───────────────────────────────────────────────────────────

function FlowArrows() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const xs = [137, 412, 687, 962];
    const lines  = xs.map(x => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', String(x)); line.setAttribute('y1', '0');
      line.setAttribute('x2', String(x)); line.setAttribute('y2', '60');
      line.setAttribute('stroke', C.green); line.setAttribute('stroke-width', '1.5'); line.setAttribute('stroke-dasharray', '5,4');
      line.style.strokeDasharray = '60'; line.style.strokeDashoffset = '60';
      svg.appendChild(line); return line;
    });
    const heads = xs.map((x, i) => {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      p.setAttribute('points', `${x-4},56 ${x},66 ${x+4},56`);
      p.setAttribute('fill', C.green); p.style.opacity = '0';
      svg.appendChild(p); return p;
    });

    function onScroll() {
      const rect = svg!.getBoundingClientRect();
      const wH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (wH - rect.top) / (wH * 0.6)));
      lines.forEach((line, i) => {
        const delay = i * 0.08;
        const p = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
        line.style.strokeDashoffset = String(60 * (1 - p));
      });
      heads.forEach((h, i) => {
        const p = Math.max(0, Math.min(1, (progress - i * 0.08 - 0.7) / 0.3));
        h.style.opacity = String(p);
        h.style.transform = `translateY(${(1 - p) * -8}px)`;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 1100 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 80, display: 'block' }} />
  );
}

// ── Layer Spread Section ──────────────────────────────────────────────────────

const LAYER_CARD_W = 320;
const LAYER_GAP    = 48;
const LAYER_STEP   = LAYER_CARD_W + LAYER_GAP;
const LAYER_ROT_Y  = 30;
const LAYER_CARD_H = Math.round(LAYER_CARD_W * 1400 / 1120); // 400px

const LAYER_CAPTIONS = [
  { title: 'Fancard',          body: 'Create a custom branded experience that fans want to share. Turn every selfie into a trackable digital touchpoint.' },
  { title: 'The Experience',   body: 'Seamlessly integrate your brand into the match-day magic. Give fans the tools to capture the atmosphere while you capture the engagement.' },
  { title: 'Data Collection',  body: 'Turn interactions into insights. Populate your CRM in real-time with verified, opted-in fan profiles and actionable data.' },
];

function LayerSpread() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1100);
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1100);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    function onScroll() {
      if (!el) return;
      const idx = Math.round(el.scrollLeft / ((el.scrollWidth - el.clientWidth) / 2));
      setActiveCard(Math.min(2, Math.max(0, idx)));
    }
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  function scrollToCard(i: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * ((el.scrollWidth - el.clientWidth) / 2), behavior: 'smooth' });
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const l1Ref  = useRef<HTMLDivElement>(null);
  const l2Ref  = useRef<HTMLDivElement>(null);
  const l3Ref  = useRef<HTMLDivElement>(null);
  const c1Ref  = useRef<HTMLDivElement>(null);
  const c2Ref  = useRef<HTMLDivElement>(null);
  const c3Ref  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const container = containerRef.current;
      if (!container) return;
      const total = container.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -container.getBoundingClientRect().top / total));
      const e = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p + 2, 3) / 2;

      const x  = e * LAYER_STEP;
      const ry = e * LAYER_ROT_Y;

      // Cards
      if (l1Ref.current) l1Ref.current.style.transform = `translateX(${-x}px) rotateY(${-ry}deg)`;
      if (l2Ref.current) l2Ref.current.style.transform = `rotateY(${-ry}deg)`;
      if (l3Ref.current) l3Ref.current.style.transform = `translateX(${x}px) rotateY(${-ry}deg)`;

      // Captions: follow card x, fade in after 75% of animation
      const ce = Math.max(0, Math.min(1, (e - 0.75) * 4));
      const cy = (1 - ce) * 20;
      if (c1Ref.current) { c1Ref.current.style.transform = `translateX(${-x}px) translateY(${cy}px)`; c1Ref.current.style.opacity = String(ce); }
      if (c2Ref.current) { c2Ref.current.style.transform = `translateY(${cy}px)`;                      c2Ref.current.style.opacity = String(ce); }
      if (c3Ref.current) { c3Ref.current.style.transform = `translateX(${x}px) translateY(${cy}px)`;   c3Ref.current.style.opacity = String(ce); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const slotStyle: React.CSSProperties = {
    position: 'absolute', top: 0, left: 0,
    width: LAYER_CARD_W, height: LAYER_CARD_H,
    willChange: 'transform',
  };

  const captionStyle: React.CSSProperties = {
    position: 'absolute',
    top: LAYER_CARD_H + 50,
    left: 0,
    width: LAYER_CARD_W,
    opacity: 0,
    willChange: 'transform, opacity',
  };

  if (isMobile) {
    return (
      <section style={{ background: C.white, padding: 'clamp(60px, 8vw, 120px) 0' }}>
        <div
          ref={scrollRef}
          className="layer-scroll"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: 20,
            paddingLeft:  'calc((100vw - clamp(260px, 75vw, 340px)) / 2)',
            paddingRight: 'calc((100vw - clamp(260px, 75vw, 340px)) / 2)',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          } as React.CSSProperties}
        >
          {([layer1, layer2, layer3] as string[]).map((src, i) => (
            <div key={i} style={{
              flexShrink: 0,
              width: 'clamp(260px, 75vw, 340px)',
              scrollSnapAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}>
              <img src={src} alt="" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} />
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.dark, marginBottom: 8, lineHeight: 1.3, letterSpacing: '-0.02em' }}>{LAYER_CAPTIONS[i].title}</div>
                <p style={{ fontSize: 14, color: C.light, lineHeight: 1.6, margin: 0 }}>{LAYER_CAPTIONS[i].body}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Dot navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 28 }}>
          {[0, 1, 2].map(i => (
            <div
              key={i}
              onClick={() => scrollToCard(i)}
              style={{
                width: activeCard === i ? 20 : 6,
                height: 6,
                borderRadius: 999,
                background: activeCard === i ? C.dark : '#BBBBBB',
                transition: 'width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: C.white }}>
      <div ref={containerRef} style={{ position: 'relative', height: '350vh' }}>
        <div style={{
          position: 'sticky', top: 0, height: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: C.white, overflow: 'hidden',
        }}>
          {/* wrapper sized to one card + caption — centered by flex */}
          <div style={{ position: 'relative', width: LAYER_CARD_W, height: LAYER_CARD_H + 160 }}>

            {/* card slots — perspective lives here, captions are siblings so they stay 2D */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: LAYER_CARD_W, height: LAYER_CARD_H, perspective: '1200px', transformStyle: 'preserve-3d' }}>
              <div ref={l3Ref} style={slotStyle}>
                <img src={layer3} alt="" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 5 }} />
              </div>
              <div ref={l2Ref} style={slotStyle}>
                <img src={layer2} alt="" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 5 }} />
              </div>
              <div ref={l1Ref} style={slotStyle}>
                <img src={layer1} alt="" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 5 }} />
              </div>
            </div>

            {/* captions — translate in 2D matching card x */}
            <div ref={c1Ref} style={captionStyle}>
              <div style={{ fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 10, lineHeight: 1.3, letterSpacing: '-0.02em' }}>{LAYER_CAPTIONS[0].title}</div>
              <p style={{ fontSize: 17, color: C.light, lineHeight: 1.6, margin: 0 }}>{LAYER_CAPTIONS[0].body}</p>
            </div>
            <div ref={c2Ref} style={captionStyle}>
              <div style={{ fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 10, lineHeight: 1.3, letterSpacing: '-0.02em' }}>{LAYER_CAPTIONS[1].title}</div>
              <p style={{ fontSize: 17, color: C.light, lineHeight: 1.6, margin: 0 }}>{LAYER_CAPTIONS[1].body}</p>
            </div>
            <div ref={c3Ref} style={captionStyle}>
              <div style={{ fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 10, lineHeight: 1.3, letterSpacing: '-0.02em' }}>{LAYER_CAPTIONS[2].title}</div>
              <p style={{ fontSize: 17, color: C.light, lineHeight: 1.6, margin: 0 }}>{LAYER_CAPTIONS[2].body}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ── How It Works Sticky Section ───────────────────────────────────────────────

function HowItWorks() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const hScrollRef    = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [mobileStep, setMobileStep] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = hScrollRef.current;
    if (!el) return;
    function onScroll() {
      if (!el) return;
      const idx = Math.round(el.scrollLeft / ((el.scrollWidth - el.clientWidth) / (STEPS.length - 1)));
      setMobileStep(Math.min(STEPS.length - 1, Math.max(0, idx)));
    }
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  function scrollToStep(i: number) {
    const el = hScrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * ((el.scrollWidth - el.clientWidth) / (STEPS.length - 1)), behavior: 'smooth' });
  }

  useEffect(() => {
    function onScroll() {
      const container = containerRef.current;
      if (!container) return;
      const rect  = container.getBoundingClientRect();
      const total = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      setStep(Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length)));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function goToStep(i: number) {
    const container = containerRef.current;
    if (!container) return;
    const total = container.offsetHeight - window.innerHeight;
    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const target = containerTop + (i / STEPS.length) * total;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  const inner: React.CSSProperties = { maxWidth: 1500, margin: '0 auto', padding: '0 clamp(24px, 4vw, 60px)' };

  if (isMobile) {
    return (
      <section style={{ background: C.white, padding: 'clamp(60px, 8vw, 120px) 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 36, padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.green, border: `1px solid ${C.green}`, borderRadius: 4, padding: '6px 18px', marginBottom: 14 }}>How It Works</div>
          <h2 style={{ fontFamily: "'TikTok Sans', sans-serif", fontSize: 'clamp(26px, 6vw, 40px)', fontWeight: 800, letterSpacing: '-1.5px', color: C.dark, marginTop: 14 }}>Easy set up. Instant results.</h2>
        </div>
        <div
          ref={hScrollRef}
          className="layer-scroll"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: 20,
            paddingLeft:  'calc((100vw - clamp(260px, 75vw, 340px)) / 2)',
            paddingRight: 'calc((100vw - clamp(260px, 75vw, 340px)) / 2)',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          } as React.CSSProperties}
        >
          {STEPS.map((s, i) => (
            <div key={i} style={{
              flexShrink: 0,
              width: 'clamp(260px, 75vw, 340px)',
              scrollSnapAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <img src={s.img} alt={s.title} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: C.green, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontFamily: "'TikTok Sans', sans-serif", fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 800, color: C.dark, letterSpacing: '-0.5px', marginBottom: 10, lineHeight: 1.15 }}>{s.title}</div>
                <p style={{ fontSize: 14, color: C.light, lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Dot navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 28 }}>
          {STEPS.map((_, i) => (
            <div
              key={i}
              onClick={() => scrollToStep(i)}
              style={{
                width: mobileStep === i ? 20 : 6,
                height: 6,
                borderRadius: 999,
                background: mobileStep === i ? C.dark : '#BBBBBB',
                transition: 'width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: C.white }}>
      <div style={{ ...inner, textAlign: 'center', paddingTop: 'clamp(32px, 4vw, 64px)', paddingBottom: 20 }}>
        <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.green, border: `1px solid ${C.green}`, borderRadius: 4, padding: '6px 18px', marginBottom: 14 }}>How It Works</div>
        <h2 style={{ fontFamily: "'TikTok Sans', sans-serif", fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', color: C.dark, marginTop: 14 }}>Easy set up. Instant results.</h2>
      </div>

      {/* Tall scroll container — 100vh per step */}
      <div ref={containerRef} style={{ position: 'relative', height: '400vh' }}>
        <div className="hiw-panel" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 clamp(24px, 4vw, 60px)', overflow: 'hidden', background: C.white, maxWidth: 1500, margin: '0 auto' }}>

          {/* Main grid: text left, image right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 3fr', gap: 60, alignItems: 'center' }}>
            {/* Left: text slides */}
            <div style={{ position: 'relative', height: 240 }}>
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    opacity: step === i ? 1 : 0,
                    transform: step === i ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    pointerEvents: step === i ? 'auto' : 'none',
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: C.green, marginBottom: 12 }}>{s.num}</div>
                  <div style={{ fontFamily: "'TikTok Sans', sans-serif", fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 800, color: C.dark, letterSpacing: '-0.5px', marginBottom: 16, lineHeight: 1.15 }}>{s.title}</div>
                  <p style={{ fontSize: 16, color: C.light, lineHeight: 1.7, maxWidth: 420 }}>{s.body}</p>
                </div>
              ))}
            </div>

            {/* Right: visual slides + pill indicator on the right */}
            <div className="hiw-visual" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ position: 'relative', flex: 1 }}>
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      position: i === 0 ? 'relative' : 'absolute',
                      top: 0, left: 0, width: '100%',
                      opacity: step === i ? 1 : 0,
                      transition: 'opacity 0.5s ease',
                      pointerEvents: step === i ? 'auto' : 'none',
                    }}
                  >
                    <img src={s.img} alt={s.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                ))}
              </div>
              {/* Vertical step indicators */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => goToStep(i)}
                    style={{
                      width: 5,
                      height: step === i ? 20 : 5,
                      borderRadius: 999,
                      background: step === i ? C.green : '#BBBBBB',
                      transition: 'height 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s ease',
                      flexShrink: 0,
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}


// ── Main Page ─────────────────────────────────────────────────────────────────

export function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Lenis smooth scroll ────────────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let raf: number;
    function tick(time: number) { lenis.raf(time); raf = requestAnimationFrame(tick); }
    raf = requestAnimationFrame(tick);
    return () => { lenis.destroy(); cancelAnimationFrame(raf); };
  }, []);

  // ── Scroll-reveal (fade up) ────────────────────────────────────────────────
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const font: React.CSSProperties = { fontFamily: "'TikTok Sans', sans-serif" };
  const inner: React.CSSProperties = { maxWidth: 1500, margin: '0 auto', padding: '0 clamp(24px, 4vw, 60px)' };
  const section = (bg: string): React.CSSProperties => ({ background: bg, padding: 'clamp(80px, 10vw, 200px) 0' });

  return (
    <div style={{ ...font, color: C.dark, background: '#2A2A2A' }}>
      {/* Content wrapper — sits above the sticky footer */}
      <div style={{ position: 'relative', zIndex: 1, background: C.bg, clipPath: 'inset(0 0 0 0 round 0px 0px 30px 30px)' }}>
      {/* ── STICKY NAV ──────────────────────────────────────────────────── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'center', padding: '16px 20px', pointerEvents: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 60, background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14, padding: '8px 8px 8px 18px', pointerEvents: 'auto' }}>
          <img src={logoBlack} alt="Fancard" style={{ height: 22, display: 'block', marginRight: 'clamp(12px, 6vw, 100px)' }} />
          <button onClick={() => setDemoOpen(true)} className="nav-get-touch" style={{ ...font, background: 'transparent', border: 'none', color: C.dark, fontSize: 14, fontWeight: 500, cursor: 'pointer', padding: '8px 14px', borderRadius: 8 }}><WaveText>Get in Touch</WaveText></button>
          <button onClick={() => setDemoOpen(true)} className="btn-demo" style={{ ...font, background: C.green, border: 'none', color: C.dark, fontSize: 13, fontWeight: 800, cursor: 'pointer', padding: '0 20px', borderRadius: 8, alignSelf: 'stretch' }}><SlideText>Book a Demo</SlideText></button>
        </div>
      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <HeroCloud onDemo={() => setDemoOpen(true)} />

      {/* ── ENGAGEMENT GAP — PROBLEMS ───────────────────────────────────── */}
      <section style={{ background: 'transparent', padding: `0 20px clamp(80px, 12vw, 200px)`, marginTop: '-35vh', textAlign: 'center', position: 'relative', zIndex: 3 }}>
        <div style={{ background: '#2A2A2A', borderRadius: 20, padding: 'clamp(60px, 8vw, 120px) 0 clamp(80px, 12vw, 200px)', maxWidth: 1500, margin: '0 auto' }}>
          <div style={{ ...inner }}>
            <div data-reveal style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6FE866', border: '1px solid #6FE866', borderRadius: 4, padding: '6px 18px', marginBottom: 24 }}>The Engagement Gap</div>
            <h2 data-reveal style={{ ...font, fontSize: 'clamp(30px, 3.5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: C.white, maxWidth: 780, margin: '0 auto 40px', lineHeight: 1.1 }}>The Hidden Cost of Disconnected Fans</h2>
            <div style={{ textAlign: 'left' }}>
              <div className="four-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {PROBLEMS.map((p, i) => (
                  <div data-reveal key={i} style={{ background: C.white, borderRadius: 6, padding: 28, display: 'flex', flexDirection: 'column', minHeight: 'clamp(160px, 25vw, 350px)' }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 10, lineHeight: 1.3, letterSpacing: '-0.02em' }}>{p.title}</div>
                    <p style={{ fontSize: 17, color: C.light, lineHeight: 1.6, margin: 0, flex: 1 }}>{p.body}</p>
                    <img src={iconProblem} alt="" style={{ width: 50, height: 50, display: 'block', marginTop: 20, alignSelf: 'flex-end' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EACH PICTURE UNLOCKS VALUE ──────────────────────────────────── */}
      <section style={{ ...section(C.bg), paddingTop: 'clamp(40px, 6vw, 100px)', textAlign: 'center' }}>
        <div style={{ ...inner }}>
          <div data-reveal style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.green, border: `1px solid ${C.green}`, borderRadius: 4, padding: '5px 14px', marginBottom: 20 }}>Fancard is the solution</div>
          <h2 data-reveal style={{ ...font, fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-1px', color: C.dark, marginBottom: 16 }}>Each Picture Taken Unlocks Value</h2>
          <p data-reveal style={{ fontSize: 16, color: C.mid, maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.65 }}>Each Fancard bridges the live experience and the digital world — capturing data, generating content, and proving ROI all at once.</p>
        </div>

        {/* Card row — continuously scrolling marquee */}
        <div style={{ width: '100%', overflow: 'hidden', margin: 'clamp(36px, 6vw, 80px) 0', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="marquee-track">
            {[...CARD_ROW, ...CARD_ROW].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                aria-hidden={i >= CARD_ROW.length}
                style={{ flexShrink: 0, width: 220, height: 'auto', borderRadius: 6, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', marginRight: 20 }}
              />
            ))}
          </div>
        </div>

        <div style={{ ...inner }}>
          <div className="four-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, textAlign: 'left' }}>
            {SOLUTIONS.map((s, i) => (
              <div data-reveal key={i} style={{ background: C.white, borderRadius: 6, padding: 28, display: 'flex', flexDirection: 'column', minHeight: 'clamp(160px, 25vw, 350px)' }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 10, lineHeight: 1.3, letterSpacing: '-0.02em' }}>{s.title}</div>
                <p style={{ fontSize: 17, color: C.light, lineHeight: 1.6, margin: 0, flex: 1 }}>{s.body}</p>
                <img src={iconSolution} alt="" style={{ width: 50, height: 50, display: 'block', marginTop: 20, alignSelf: 'flex-end', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAYER SPREAD ────────────────────────────────────────────────── */}
      <LayerSpread />

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <HowItWorks />

{/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section style={{ ...section(C.white), textAlign: 'center' }}>
        <div style={{ ...inner }}>
          <h2 data-reveal style={{ ...font, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 800, letterSpacing: '-1px', color: C.dark, marginBottom: 14 }}>Frequently Asked Questions</h2>
          <p data-reveal style={{ fontSize: 16, color: C.light, marginBottom: 60 }}>Everything you need to know before your first campaign.</p>
          <div style={{ textAlign: 'left' }}>
            {FAQS.map((item, i) => (
              <FaqItem key={i} item={item} index={i} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
            <div style={{ borderBottom: `1px solid ${C.border}` }} />
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ background: C.white, padding: '0 20px', textAlign: 'center' }}>
        <div style={{ background: C.green, borderRadius: 20, padding: 'clamp(80px, 12vw, 200px) 0', maxWidth: 1500, margin: '0 auto' }}>
          <div style={{ ...inner }}>
            <h2 data-reveal style={{ ...font, fontSize: 'clamp(30px, 3.5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: C.dark, maxWidth: 600, margin: '0 auto 16px', lineHeight: 1.1 }}>Ready to turn fans into reach?</h2>
            <p data-reveal style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', marginBottom: 44 }}>Book a short demo and see Fancard live with your event branding.</p>
            <div data-reveal style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setDemoOpen(true)} className="btn-touch" style={{ ...font, background: 'transparent', border: 'none', color: 'rgba(0,0,0,0.6)', padding: '16px 0', fontSize: 16, fontWeight: 500, cursor: 'pointer' }}><WaveText>Get in Touch</WaveText></button>
              <button onClick={() => setDemoOpen(true)} className="btn-demo" style={{ ...font, background: C.white, border: 'none', color: C.dark, padding: '14px 28px', fontSize: 15, borderRadius: 8, fontWeight: 800, cursor: 'pointer' }}><SlideText>Book a Demo</SlideText></button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer — separates CTA from footer reveal */}
      <div style={{ height: 'clamp(60px, 10vw, 200px)', background: C.white }} />

      </div>{/* end content wrapper */}

      {/* ── FOOTER — sticky, revealed as content scrolls past ─────────── */}
      <footer style={{ background: '#2A2A2A', position: 'sticky', bottom: 0, zIndex: 0, overflow: 'hidden', height: 'clamp(350px, 45vw, 700px)' }}>
        {/* Top bar — copyright left, logo right */}
        <div style={{ ...inner, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 36, position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: 13, color: '#666666' }}>© 2026 Fancard. All rights reserved.</span>
          <img src={logoGreen} alt="Fancard" style={{ height: 36, display: 'block' }} />
        </div>
        {/* SVG crowd — fills bottom of footer */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <FooterCrowd />
        </div>
      </footer>

      <style>{`
        * { box-sizing: border-box; }

        /* ── Footer crowd SVG ── */
        .footer-crowd-wrap svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Marquee ── */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: flex-end;
          padding: 32px 0;
          width: max-content;
          animation: marquee 28s linear infinite;
        }


        /* ── Scroll reveal ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── FAQ ── */
        .faq-item {
          position: relative;
          overflow: hidden;
        }
        .faq-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #f1fdf0;
          transform: translateY(105%);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 0;
        }
        .faq-item:hover::before,
        .faq-item.open::before {
          transform: translateY(0);
        }
        .faq-item > * {
          position: relative;
          z-index: 1;
        }
        .faq-header {
          padding: 28px 30px;
        }
        .faq-answer {
          padding-bottom: 28px;
          padding-left: 30px;
          padding-right: 30px;
        }

        /* ── Button / link hover states ── */
        .btn-demo {
          overflow: hidden;
        }

        /* ── Layer spread scroll ── */
        .layer-scroll::-webkit-scrollbar { display: none; }

        /* ── Mobile hero card strips ── */
        .mobile-card-strip { display: none; }
        @media (max-width: 767px) {
          .mobile-card-strip { display: flex; }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .four-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .hiw-panel { grid-template-columns: 1fr !important; height: auto !important; position: relative !important; padding-top: 40px !important; padding-bottom: 40px !important; }
          .hiw-visual { display: none !important; }
          .nav-get-touch { display: none !important; }
          .faq-header { padding: 20px 16px !important; }
          .faq-answer { padding-left: 16px !important; padding-right: 16px !important; padding-bottom: 20px !important; max-width: 100% !important; }
        }
        @media (max-width: 560px) {
          .four-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
