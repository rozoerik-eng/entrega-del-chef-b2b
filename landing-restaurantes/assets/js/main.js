/* Entrega del Chef — LP01 Restaurantes */

// ─── Header shadow on scroll ─────────────────
const header = document.getElementById('site-header');
const mobileCta = document.getElementById('mobileCta');

let lastScrollY = 0;
let scrolled = false;

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Header shadow
  if (y > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Mobile CTA bar — show after 200px
  if (y > 200 && !scrolled) {
    scrolled = true;
    mobileCta.classList.add('visible');
  } else if (y <= 200 && scrolled) {
    scrolled = false;
    mobileCta.classList.remove('visible');
  }

  lastScrollY = y;
}, { passive: true });


// ─── FAQ Accordion ────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const answerId = btn.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);

    // Close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.faq-answer').forEach(a => {
      a.hidden = true;
    });

    // Toggle current
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    }
  });
});


// ─── Fade-in on scroll (IntersectionObserver) ─
const fadeEls = document.querySelectorAll(
  '.product-card, .objection-pair, .step, .testimonial-card, .cred-item, .roi-col, .gallery-item'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => io.observe(el));
} else {
  // Fallback: show all immediately
  fadeEls.forEach(el => el.classList.add('visible'));
}


// ─── CTA click tracking (console / gtag ready) ─
document.querySelectorAll('[data-cta]').forEach(el => {
  el.addEventListener('click', () => {
    const cta = el.getAttribute('data-cta');
    // Google Analytics 4 — uncomment when gtag is configured:
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', 'cta_click', { cta_location: cta });
    // }
    console.log('[CTA]', cta);
  });
});
