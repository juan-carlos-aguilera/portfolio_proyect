//Barra de Navegacion

const hamburgerMenu = document.querySelector('.hamburger-menu__container')
const navMenu = document.querySelector('.nav-bar-menu__container')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item--link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.dataset.target;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Cierra el menú hamburguesa
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});



