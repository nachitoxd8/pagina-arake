const sections = document.querySelectorAll('.section');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));

let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll hacia abajo: oculta el header
    header.style.top = '-100px';
  } else {
    // Scroll hacia arriba: muestra el header
    header.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Activa o desactiva el menú desplegable
});