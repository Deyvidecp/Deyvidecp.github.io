document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada! Obrigado pelo contato.');
      form.reset();
    });
  }
});
