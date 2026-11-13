/* menu.js - Menu responsivo (mobile) */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  const setIcon = (open) => {
    toggle.innerHTML = `<i class="fa-solid ${open ? 'fa-xmark' : 'fa-bars'}"></i>`;
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    setIcon(open);
  });

  // Fecha o menu ao clicar em um link
  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      setIcon(false);
    });
  });

  // Fecha o menu ao voltar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      setIcon(false);
    }
  });
});
