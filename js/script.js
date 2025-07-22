document.addEventListener('DOMContentLoaded', function () {
  // Atualiza o ano no footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Menu mobile aprimorado
  const menuButton = document.querySelector('.menu-button');
  const dropdownMenu = document.querySelector('.dropdown-content');
  const navMenu = document.querySelector('.nav-menu');

  if (menuButton && dropdownMenu) {
    menuButton.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', isOpen);
      if (isOpen) {
        dropdownMenu.style.display = 'block';
        dropdownMenu.setAttribute('aria-hidden', 'false');
      } else {
        dropdownMenu.style.display = '';
        dropdownMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Fecha o menu ao clicar fora
  document.addEventListener('click', function (e) {
    if (
      !e.target.closest('.nav-menu') &&
      navMenu &&
      navMenu.classList.contains('open')
    ) {
      navMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      dropdownMenu.style.display = '';
      dropdownMenu.setAttribute('aria-hidden', 'true');
    }
  });

  // Fecha o menu ao navegar por Tab fora do menu
  dropdownMenu &&
    dropdownMenu.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && !dropdownMenu.contains(document.activeElement)) {
        navMenu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.style.display = '';
        dropdownMenu.setAttribute('aria-hidden', 'true');
      }
    });

  // Projetos clicáveis
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', function (e) {
      if (!e.target.closest('a, button')) {
        const link = this.querySelector('.project-link');
        if (link) {
          window.location.href = link.href;
        }
      }
    });
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    });
  });
});
