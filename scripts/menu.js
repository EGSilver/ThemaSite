const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

function checkScreenSize() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
}

menuButton.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
});

window.addEventListener('resize', checkScreenSize);
checkScreenSize();