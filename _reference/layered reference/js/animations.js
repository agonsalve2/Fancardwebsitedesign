gsap.registerPlugin(ScrollTrigger);

/* ===== SECTION 1: PARALLAX HERO ===== */
function initParallaxHero() {
  const hero = document.querySelector('.parallax-hero');
  if (!hero) return;

  const images = hero.querySelectorAll('.parallax-img');
  const texts = hero.querySelectorAll('.parallax-text');

  // Parallax: each depth layer moves a different TOTAL distance over the same scroll range.
  // Section is 3600px, so travel needs to be large enough to keep images visible throughout.
  // depth 3 (bg, blurred): ~300px total — slow, nearly static feel
  // depth 2 (mid):         ~800px total
  // depth 1 (fg, sharp):   ~1600px total — fast, dramatic movement
  const depthTravel = { '3': 300, '2': 800, '1': 1600 };

  images.forEach((img) => {
    const depth = img.dataset.depth || '2';
    const travel = depthTravel[depth] || 800;

    gsap.fromTo(img,
      { y: travel * 0.5 },
      {
        y: -travel * 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  });

  // Text block 1 — fades in early (around 8-16%)
  if (texts[0]) {
    gsap.fromTo(texts[0],
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: '5% center',
          end: '14% center',
          scrub: 1,
        },
      }
    );
  }

  // Text block 2 — fades in much later (around 52-62%), well separated from text 1
  if (texts[1]) {
    gsap.fromTo(texts[1],
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: '48% center',
          end: '58% center',
          scrub: 1,
        },
      }
    );
  }
}

/* ===== SECTION 2: CONTENT REVEAL ===== */
function initContentReveal() {
  const cards = document.querySelectorAll('.content-card');
  if (!cards.length) return;

  // Title and description
  gsap.from('.content-block__title', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.content-block',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  gsap.from('.content-block__desc', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.content-block',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  // Cards stagger
  gsap.from(cards, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.content-block__cards',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/* ===== SECTION 3: CARD FAN-OUT ===== */
function initCardFan() {
  const section = document.querySelector('.card-fan');
  if (!section) return;

  const sticky = section.querySelector('.card-fan__sticky');
  const slots = section.querySelectorAll('.card-fan__slot');
  const captionEls = section.querySelectorAll('.card-fan__caption');

  // Gap between cards in the end state (card width + gap)
  const cardWidth = 320;
  const gap = 48;
  const step = cardWidth + gap;

  const rotateAmount = 30; // rotateY degrees — right side recedes

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sticky,
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 1,
    },
  });

  // Slot 1 (left): fan out to the left with rotation
  tl.fromTo(slots[0],
    { x: 0, rotateY: 0 },
    { x: -step, rotateY: rotateAmount, duration: 1 },
    0
  );

  // Slot 2 (center): stays in place, just rotates
  tl.fromTo(slots[1],
    { rotateY: 0 },
    { rotateY: rotateAmount, duration: 1 },
    0
  );

  // Slot 3 (right): fan out to the right with rotation
  tl.fromTo(slots[2],
    { x: 0, rotateY: 0 },
    { x: step, rotateY: rotateAmount, duration: 1 },
    0
  );

  // Caption 1 (left): translate x only, no rotation, fade in
  tl.fromTo(captionEls[0],
    { x: 0, opacity: 0, y: 20 },
    { x: -step, opacity: 1, y: 0, duration: 0.25 },
    0.75
  );

  // Caption 2 (center): just fade in
  tl.fromTo(captionEls[1],
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.25 },
    0.75
  );

  // Caption 3 (right): translate x only, no rotation, fade in
  tl.fromTo(captionEls[2],
    { x: 0, opacity: 0, y: 20 },
    { x: step, opacity: 1, y: 0, duration: 0.25 },
    0.75
  );
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initParallaxHero();
  initContentReveal();
  initCardFan();
});
