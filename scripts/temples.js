// Dynamic Year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Last Modified
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Hamburger Menu Toggle with Icon Switch
const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  // Toggle between ☰ and ✕
  menuButton.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
});
