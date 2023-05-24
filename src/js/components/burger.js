import { disableScroll } from './disable-scroll';
import { enableScroll } from './enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const nav = document?.querySelector('[data-nav]');
  const navOverlay = document?.querySelector('[data-nav-overlay]');
  const navItems = document?.querySelectorAll('[data-nav-item]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--active');
    navOverlay?.classList.toggle('nav-overlay--active');

    if (nav?.classList.contains('nav--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Close menu');
      disableScroll()
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      enableScroll();
    }
  });

  navOverlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--active');
    navOverlay.classList.remove('nav-overlay--active');
    enableScroll();
  });

  navItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--active');
      navOverlay.classList.remove('nav-overlay--active');
      enableScroll();
    });
  });
})();
