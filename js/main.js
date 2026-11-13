/* main.js - Funções gerais: ano, link ativo, scroll suave e formulário demonstrativo */
document.addEventListener('DOMContentLoaded', () => {
  // Ano atual no rodapé
  const year = document.getElementById('ano');
  if (year) year.textContent = new Date().getFullYear();

  // Destaca o link do menu referente à página atual
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach((link) => {
    const target = link.getAttribute('href').split('/').pop().split('#')[0];
    if (target && target === currentPage) link.classList.add('active');
  });

  // Scroll suave com compensação da altura do header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Formulário demonstrativo (nenhum dado é enviado)
  const form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const feedback = form.querySelector('.form-feedback');
      feedback.textContent = 'Obrigado! Este formulário é apenas demonstrativo e nenhuma informação foi enviada.';
      form.reset();
    });
  }
});
