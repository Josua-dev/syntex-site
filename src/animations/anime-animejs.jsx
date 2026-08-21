// anime.js v4 animations for syntex-site
// Integrated with existing Reveal component and framer-motion page transitions.
// Never use v3 syntax — all code below is v4 API exclusive.

import { animate, stagger, createTimeline, svg, splitText, onScroll } from 'animejs';

// ============================================================
// 1. HERO DIAGRAM ENTRANCE
// Animated SVG path drawing + element stagger
// ============================================================
export function animateHeroDiagram() {
  // Draw the SVG path (the connecting lines in the diagram)
  const drawable = svg.createDrawable('.hero-diagram svg path');
  animate(drawable, {
    draw: [0, 1],
    duration: 1500,
    ease: 'inOutQuad',
    // Sync with IntersectionObserver revealed class
    autoplay: false,
  });

  // Stagger the node pulses
  animate('.node-pulse', {
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 600,
    delay: stagger(50, { from: 'center' }),
    easing: 'outCubic',
  });

  // SYNTEX text fade-in
  animate('.diagram-caption text', {
    opacity: [0, 1],
    duration: 600,
    delay: 200,
  });
}

// Start hero animation when intersection observer reveals it
export function startHeroOnReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateHeroDiagram();
          io.disconnect();
        }
      });
    },
    { threshold: 0.1 }
  );

  io.observe(document.querySelector('.hero-diagram'));
}

// ============================================================
// 2. SERVICE CARDS STAGGERED ENTRANCE
// Used on Services and Home pages
// ============================================================
export function animateServiceCards() {
  animate('.service-card', {
    opacity: [0, 1],
    translateY: [30, 0],
    scale: [0.95, 1],
    duration: 600,
    delay: stagger(100, { from: 'center' }),
    easing: 'outCubic',
  });
}

// Hover lift effect for service cards
export function enableServiceCardHover() {
  document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      animate(card, {
        translateY: -8,
        scale: 1.02,
        duration: 250,
        easing: 'outQuad',
      });
    });
    card.addEventListener('mouseleave', () => {
      animate(card, {
        translateY: 0,
        scale: 1,
        duration: 250,
        easing: 'outQuad',
      });
    });
  });
}

// ============================================================
// 3. VALUE CARDS REVEAL
// Used on Home page — "How We Work" section
// ============================================================
export function animateValueCards() {
  animate('.value-card', {
    opacity: [0, 1],
    translateY: [30, 0],
    rotate: ['-15deg', '0'],
    duration: 600,
    delay: stagger(150, { from: 'center' }),
    easing: 'outCubic',
  });
}

// ============================================================
// 4. PRICING/PROCESS STEP ANIMATION
// Used on Home page — the 5-step process
// ============================================================
export function animateProcessSteps() {
  animate('.step', {
    opacity: [0, 1],
    translateX: [30, 0],
    duration: 500,
    delay: stagger(80, { from: 'center' }),
    easing: 'outCubic',
  });
}

// ============================================================
// 5. TEXT SPLIT REVEAL (Headings & Taglines)
// ============================================================
export function animateTextReveal() {
  // Heading character-by-character
  const headingSplitter = splitText('.hero h1, .section-head h2', {
    chars: true,
    accessible: true,
  });

  animate(headingSplitter.chars, {
    opacity: [0, 1],
    translateY: [20, 0],
    delay: stagger(25),
    duration: 400,
    easing: 'outCubic',
  });

  // Lead tagline word-by-word
  const leadSplitter = splitText('.lead', {
    words: true,
    accessible: true,
  });

  animate(leadSplitter.words, {
    opacity: [0, 1],
    translateX: [50, 0],
    delay: stagger(40),
    duration: 500,
    easing: 'outExpo',
  });
}

// ============================================================
// 6. SCROLL-TRIGGERED REVEALS
// Complements the existing Reveal component
// ============================================================
export function animateOnScroll() {
  // Section entrance with staggered children
  onScroll('.sectors, .values, .services, .process, .capabilities', {
    onEnter: () => {
      animate('.sectors .sector-list li, .values .value-card,',
        '.service-card, .process .step, .capabilities .cap-item', {
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        delay: stagger(100, { from: 'center' }),
        easing: 'outQuad',
      });
    },
  });

  // Parallax on hero scroll
  onScroll('.hero', {
    sync: 'playback',
    link: animate('.hero-diagram', {
      translateY: [-20, 20],
      duration: 2000,
      ease: 'linear',
      autoplay: false,
    }),
  });
}

// ============================================================
// 7. COUNTER ANIMATION (for stats/numbers)
// ============================================================
export function animateCounter(targetElement, endValue, duration = 2000) {
  const counter = { value: 0 };

  animate(counter, {
    value: endValue,
    duration,
    easing: 'outExpo',
    onUpdate: () => {
      targetElement.textContent = Math.round(counter.value);
    },
    onComplete: () => {
      // Ensure final value is displayed
      targetElement.textContent = endValue;
    },
  });
}

// ============================================================
// 8. INITIALIZE ALL ANIMATIONS
// Called from the Reveal component or after DOM is ready
// ============================================================
export function initAllAnimations() {
  // Start hero diagram when visible
  startHeroOnReveal();

  // Service cards (if on Services/Home page)
  // animateServiceCards();
  // enableServiceCardHover();

  // Value cards
  // animateValueCards();

  // Text reveal
  // animateTextReveal();

  // Scroll-triggered
  // animateOnScroll();
}