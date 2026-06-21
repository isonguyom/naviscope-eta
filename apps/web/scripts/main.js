const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const homeLink = document.querySelector('.nav-link[href="/"]');

// Toggle mobile menu
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// close menu when clicking a link (mobile UX improvement)
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

function setActive(link) {
  navLinks.forEach((l) => {
    l.classList.remove('active');
    l.removeAttribute('aria-current');
  });

  link.classList.add('active');
  link.setAttribute('aria-current', 'page');
}

// CLICK HANDLING (keep it simple)
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (!href.startsWith('#')) return;

    history.pushState(null, '', href);
    setActive(link);
  });
});

let currentActive = homeLink;
let ticking = false;

function getMostVisibleSection() {
  let bestSection = null;
  let maxVisibility = 0;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    const visibleHeight =
      Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

    const visibilityRatio = visibleHeight / section.offsetHeight;

    if (visibilityRatio > maxVisibility && visibilityRatio > 0) {
      maxVisibility = visibilityRatio;
      bestSection = section;
    }
  });

  return bestSection;
}

function updateRoute(sectionId) {
  if (window.location.hash !== `#${sectionId}`) {
    history.replaceState(null, '', `#${sectionId}`);
  }
}

function updateActiveFromScroll() {
  const section = getMostVisibleSection();

  if (!section) {
    setActive(homeLink);
    history.replaceState(null, '', '/'); // home route
    currentActive = homeLink;
    return;
  }

  const link = document.querySelector(`.nav-link[href="#${section.id}"]`);

  if (!link) {
    setActive(homeLink);
    history.replaceState(null, '', '/');
    currentActive = homeLink;
    return;
  }

  if (link !== currentActive) {
    setActive(link);
    currentActive = link;

    // 🔥 sync route
    updateRoute(section.id);
  }
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateActiveFromScroll();
      ticking = false;
    });

    ticking = true;
  }
});

window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '');

  if (!hash) {
    setActive(homeLink);
    return;
  }

  const link = document.querySelector(`.nav-link[href="#${hash}"]`);

  if (link) setActive(link);
});

// Scroll into view animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  },
);

revealElements.forEach((el) => revealObserver.observe(el));

// Generate copyright year
document.getElementById('copyright-year').textContent = new Date().getFullYear();
