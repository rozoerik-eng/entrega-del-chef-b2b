/* Entrega del Chef — LP03 Hoteles & Casinos */

// ─── Header shadow on scroll ─────────────────
const header = document.getElementById('site-header');
const mobileCta = document.getElementById('mobileCta');
let scrolled = false;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 10);
  if (y > 200 && !scrolled) {
    scrolled = true;
    mobileCta && mobileCta.classList.add('visible');
  } else if (y <= 200 && scrolled) {
    scrolled = false;
    mobileCta && mobileCta.classList.remove('visible');
  }
}, { passive: true });


// ─── FAQ Accordion ────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.faq-answer').forEach(a => { a.hidden = true; });
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      document.getElementById(btn.getAttribute('aria-controls')).hidden = false;
    }
  });
});


// ─── Product card modal ───────────────────────
(function () {
  const modal    = document.getElementById('dishesModal');
  const mTitle   = document.getElementById('dishesModalTitle');
  const mGrid    = document.getElementById('dishesModalGrid');
  const mClose   = document.getElementById('dishesClose');
  const backdrop = document.getElementById('dishesBackdrop');

  function openModal(btn) {
    const card = btn.closest('.product-card');
    mTitle.textContent = card.querySelector('.product-name').textContent;
    mGrid.innerHTML    = document.getElementById(btn.getAttribute('aria-controls'))
                                 .querySelector('.dishes-grid').innerHTML;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.expand-btn').forEach(b => b.addEventListener('click', () => openModal(b)));
  mClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();


// ─── Fade-in on scroll ────────────────────────
const fadeEls = document.querySelectorAll('.product-card, .objection-pair, .roi-item, .stat-item, .faq-item');
fadeEls.forEach(el => el.classList.add('fade-in'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => io.observe(el));
} else {
  fadeEls.forEach(el => el.classList.add('visible'));
}


// ─── CTA tracking ─────────────────────────────
document.querySelectorAll('[data-cta]').forEach(el => {
  el.addEventListener('click', () => console.log('[CTA]', el.getAttribute('data-cta')));
});
