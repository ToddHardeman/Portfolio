// ─── NAV TOGGLE (mobile) ─────────────────────────────────────
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ─── ACTIVE NAV LINK ─────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ─── SCROLL REVEAL ───────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

// ─── TYPEWRITER for hero eyebrow ─────────────────────────────
const typeTarget = document.querySelector('.typewriter');
if (typeTarget) {
  const text = typeTarget.dataset.text || typeTarget.textContent;
  typeTarget.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    typeTarget.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 45);
}

// ─── SCROLL-DRIVEN LOGO BUILD ANIMATION ──────────────────────
const maxScrollTrigger = 5000; // Scroll distance for full logo build

function updateLogoAnimation() {
  const scrolled = window.scrollY;
  const scrollProgress = Math.min(scrolled / maxScrollTrigger, 1); // 0 to 1
  
  // Send scroll progress to logo iframe
  const logoIframes = document.querySelectorAll('.animated-logo-iframe');
  logoIframes.forEach((logoIframe) => {
    if (logoIframe && logoIframe.contentWindow) {
      try {
        logoIframe.contentWindow.postMessage(
          { scrollProgress: scrollProgress },
          '*'
        );
      } catch (e) {
        console.error('Error sending scroll to logo iframe:', e);
      }
    }
  });
}

window.addEventListener('scroll', updateLogoAnimation, { passive: true });
// Call immediately on page load
setTimeout(updateLogoAnimation, 100);

// ─── PROJECT CAROUSEL PHYSICS ────────────────────────────────
const projectsContainer = document.querySelector('.projects-container');
if (projectsContainer) {
  let isDown = false;
  let startX;
  let scrollLeft;

  projectsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - projectsContainer.offsetLeft;
    scrollLeft = projectsContainer.scrollLeft;
    projectsContainer.style.cursor = 'grabbing';
  });

  projectsContainer.addEventListener('mouseleave', () => {
    isDown = false;
    projectsContainer.style.cursor = 'grab';
  });

  projectsContainer.addEventListener('mouseup', () => {
    isDown = false;
    projectsContainer.style.cursor = 'grab';
  });

  projectsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectsContainer.offsetLeft;
    const walk = (x - startX) * 2;
    projectsContainer.scrollLeft = scrollLeft - walk;
  });

  // Snap to nearest project on scroll end
  let scrollTimeout;
  projectsContainer.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const cardWidth = 400; // project card width + gap
      const scrollPos = projectsContainer.scrollLeft;
      const nearestCard = Math.round(scrollPos / cardWidth) * cardWidth;
      projectsContainer.scrollTo({
        left: nearestCard,
        behavior: 'smooth'
      });
    }, 150);
  });
}

// ─── MICRO-INTERACTIONS ──────────────────────────────────────
const interactiveEls = document.querySelectorAll('.stat-card, .project-card, .btn-primary');
interactiveEls.forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  });

  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ─── PERFORMANCE OPTIMIZATION ────────────────────────────────
function optimizeAnimations() {
  const animatedEls = document.querySelectorAll('.reveal, .parallax-bg, .liquid-glass');
  animatedEls.forEach(el => {
    el.style.willChange = 'transform, opacity';
  });

  // Remove will-change after animations complete
  setTimeout(() => {
    animatedEls.forEach(el => {
      el.style.willChange = 'auto';
    });
  }, 3000);
}

window.addEventListener('load', optimizeAnimations);
