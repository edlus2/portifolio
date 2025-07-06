document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    function showError(element, message, errorElement) {
        element.classList.add('error');
        errorElement.textContent = message;
    }

    function clearError(element, errorElement) {
        element.classList.remove('error');
        errorElement.textContent = '';
    }

    function validateName() {
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'O nome é obrigatório.', nameError);
            return false;
        } else if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'O nome deve ter pelo menos 2 caracteres.', nameError);
            return false;
        } else {
            clearError(nameInput, nameError);
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'O email é obrigatório.', emailError);
            return false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, 'Por favor, insira um email válido.', emailError);
            return false;
        } else {
            clearError(emailInput, emailError);
            return true;
        }
    }

    function validateMessage() {
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'A mensagem é obrigatória.', messageError);
            return false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'A mensagem deve ter pelo menos 10 caracteres.', messageError);
            return false;
        } else {
            clearError(messageInput, messageError);
            return true;
        }
    }

    nameInput.addEventListener('blur', validateName);
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error')) {
            validateName();
        }
    });

    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error')) {
            validateEmail();
        }
    });

    messageInput.addEventListener('blur', validateMessage);
    messageInput.addEventListener('input', () => {
        if (messageInput.classList.contains('error')) {
            validateMessage();
        }
    });

    form.addEventListener('submit', (event) => {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            event.preventDefault();
        }
    });
});