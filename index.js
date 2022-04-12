const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


window.addEventListener('load', () => {
    document.getElementById('loadingPage').style.display = 'none';

    header.style.opacity = 1;
    header.style.position = 'initial';
    main.style.opacity = 1;
    main.style.position = 'initial';
    footer.style.opacity = 1;
    document.body.style.overflow = 'initial';
});

window.addEventListener('resize', () => {
    window.innerWidth > 1439 ? document.body.style.backgroundSize = 'cover': document.body.style.backgroundSize = 'initial';
    window.innerWidth < 992 ? footer.style.position = 'absolute' : footer.style.position = 'initial'; 
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