const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  });
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 800) {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'Menu';
      }
    });
  });
}
document.querySelectorAll('.current-year').forEach((element) => { element.textContent = new Date().getFullYear(); });
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#form-status').textContent = 'Thank you. This prototype form is ready to be connected to an email or form service before launch.';
    contactForm.reset();
  });
}
