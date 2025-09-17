const mainNav = document.querySelector('.navigation')
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    hamburgerButton.classList.toggle('open');
    hamburgerButton.setAttribute("aria-expanded", isOpen);
});

const homeButton = document.querySelector('#home');
const chamberButton = document.querySelector('#chamber');
const finalButton = document.querySelector('#final');

homeButton.addEventListener('click', () => {
    homeButton.classList.add('active');
    chamberButton.classList.remove('active');
    finalButton.classList.remove('active');
})

chamberButton.addEventListener('click', () => {
    chamberButton.classList.add('active');
    homeButton.classList.remove('active');
    finalButton.classList.remove('active');
})

finalButton.addEventListener('click', () => {
    finalButton.classList.add('active');
    chamberButton.classList.remove('active');
    homeButton.classList.remove('active');
})
