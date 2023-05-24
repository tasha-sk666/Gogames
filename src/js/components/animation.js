import { gsap } from 'gsap';
import { isDesktop } from './check-viewport';

window.addEventListener('DOMContentLoaded', () => {
  if (isDesktop) {
    const heroTl = gsap.timeline({});

    heroTl.fromTo('.hero-scene__boy',
      {
        opacity: 0,
        y: '100',
      },
      {
        duration: 1.2,
        opacity: 1,
        y: 0,
      }
    ).fromTo('.hero-scene__joy',
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 1,
        opacity: 1,
        scale: 1,
      },
      '+=0.2'
    );
  }
});

