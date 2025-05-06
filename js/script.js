document.addEventListener('DOMContentLoaded', function() {
  // Atualiza o ano no footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Menu mobile
  const menuButton = document.querySelector('.menu-button');
  const dropdownMenu = document.querySelector('.dropdown-content');
  
  if (menuButton && dropdownMenu) {
    menuButton.addEventListener('click', function() {
      const isOpen = dropdownMenu.style.display === 'block';
      dropdownMenu.style.display = isOpen ? 'none' : 'block';
    });
  }

  // Fecha o menu ao clicar fora
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-menu') && dropdownMenu) {
      dropdownMenu.style.display = 'none';
    }
  });

  // Projetos clicáveis
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (!e.target.closest('a, button')) {
        const link = this.querySelector('.project-link');
        if (link) {
          window.location.href = link.href;
        }
      }
    });
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});
