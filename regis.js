document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrar-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar-senha');
    const nomeError = document.getElementById('nome-error');
    const emailError = document.getElementById('email-error');
    const confirmarSenhaError = document.getElementById('confirmar-senha-error');

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

        if (senhaInput.value!== confirmarSenhaInput.value) {
            confirmarSenhaError.innerHTML = '⚠ As senhas não coencidem!';
            confirmarSenhaError.style.color = 'ed';
        } else {
            confirmarSenhaError.textContent = '';
        }
    });

    nomeInput.addEventListener('input', () => {
        nomeError.textContent = '';
    });

    emailInput.addEventListener('input', () => {
        emailError.textContent = '';
    });

    confirmarSenhaInput.addEventListener('input', () => {
        confirmarSenhaError.textContent = '';
    });
});