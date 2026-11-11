(function () {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-navigation');
  const backToTop = document.querySelector('.back-to-top');
  const year = document.querySelector('#copyright-year');
  const profilePhoto = document.querySelector('.profile-photo');
  const portraitPlaceholder = document.querySelector('.portrait-placeholder');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = String(new Date().getFullYear());
  if (window.lucide) window.lucide.createIcons();

  if (profilePhoto && portraitPlaceholder) {
    const updatePortrait = () => { portraitPlaceholder.hidden = profilePhoto.complete && profilePhoto.naturalWidth > 0; };
    profilePhoto.addEventListener('load', updatePortrait);
    profilePhoto.addEventListener('error', () => {
      profilePhoto.remove();
      portraitPlaceholder.hidden = false;
    });
    updatePortrait();
  }

  if (menuButton && nav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      nav.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButton.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 850) closeMenu();
    });
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));

    if (!prefersReducedMotion) {
      document.documentElement.classList.add('motion-ready');
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
      document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    }
  }

  if (backToTop) {
    const updateTopButton = () => backToTop.classList.toggle('is-visible', window.scrollY > 600);
    window.addEventListener('scroll', updateTopButton, { passive: true });
    updateTopButton();
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));
  }
})();
