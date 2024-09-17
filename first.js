// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

console.log(`Width: ${window.screen.width}, Height: ${window.screen.height}`);
