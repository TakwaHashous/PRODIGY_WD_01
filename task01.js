const navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


navbar.querySelectorAll('a').forEach((a) => {
    a.addEventListener('mouseover', () => {
        a.classList.add('hover');
    });
    a.addEventListener('mouseout', () => {
        a.classList.remove('hover');
    });
});
navbar.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = a.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    navbar.classList.add('mobile');
  } else {
    navbar.classList.remove('mobile');
  }
});
document.querySelector('.mobile-toggle').addEventListener('click', () => {
  navbar.classList.toggle('mobile-open');
});
const homeButton = document.querySelector('.home-button');
const servicesButton = document.querySelector('.services-button');
const aboutButton = document.querySelector('.about-button');

homeButton.addEventListener('mouseover', () => {
  homeButton.style.backgroundColor = '#ff9900'; /* orange */
  homeButton.style.color = '#fff';
});

homeButton.addEventListener('mouseout', () => {
  homeButton.style.backgroundColor = '';
  homeButton.style.color = '';
});

servicesButton.addEventListener('mouseover', () => {
  servicesButton.style.backgroundColor = '#ff9900'; /* orange */
  servicesButton.style.color = '#fff';
});
servicesButton.addEventListener('mouseout', () => {
  servicesButton.style.backgroundColor = '';
  servicesButton.style.color = '';
});

aboutButton.addEventListener('mouseover', () => {
  aboutButton.style.backgroundColor = '#c6efce'; /* light green */
  aboutButton.style.color = '#333';
});

aboutButton.addEventListener('mouseout', () => {
  aboutButton.style.backgroundColor = '';
  aboutButton.style.color = '';
});