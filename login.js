document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const nomeError = document.getElementById('nome-error');
    const emailError = document.getElementById('email-error');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (!nomeInput.validity.valid) {
        nomeError.textContent = 'Por favor, use apenas letras e espaços.';
      } else {
        nomeError.textContent = '';
      }
  
      if (!emailInput.validity.valid) {
        emailError.textContent = 'Por favor, insira um endereço de e-mail válido.';
      } else {
        emailError.textContent = '';
      }
    });
  
    nomeInput.addEventListener('input', () => {
      nomeError.textContent = '';
    });
  
    emailInput.addEventListener('input', () => {
      emailError.textContent = '';
    });
  });