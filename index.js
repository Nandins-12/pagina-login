window.addEventListener('load', () => {
    document.getElementById('loadingPage').style.opacity = 0;

    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    main.style.opacity = 1;
    main.style.position = 'initial';
    footer.style.opacity = 1;
    footer.style.position = 'initial';
    document.body.style.overflow = 'initial';
});

const show_password = document.querySelector('.area-login .show-password');

show_password.addEventListener('click', () => {
    if (senha.type == 'password') {
        senha.type = 'text';
        show_password.innerText = 'Ocultar senha';
    } else {
        senha.type = 'password';
        show_password.innerText = 'Mostrar senha';
    }
});

document.querySelector('form').addEventListener('submit', () => {
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
});