(function () {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeApp);
    window.onload = initializeApp;
  }
})();

function initializeApp() {
  setupLoadingScreen();
  setupThemeToggle();
  setupMenuToggle();
  setupScrollEffect();
  setupModal();
  setupAnimations();
}

function setupLoadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');
  const mainContent = document.querySelector('.main-content');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      if (mainContent) mainContent.style.display = 'block';
    }, 1500);
  }
}

function setupThemeToggle() {
  const mode = document.querySelector('#theme');
  let isDarkMode = false;
  if (mode) {
    mode.addEventListener('click', () => {
      const root = document.documentElement || document.body;
      isDarkMode = !isDarkMode;
      root.style.setProperty('--text-color', isDarkMode ? '#fff' : '#111');
      root.style.setProperty('--back-color', isDarkMode ? '#111' : '#fff');
      mode.textContent = isDarkMode ? 'Light' : 'Dark';
    });
  }
}

function setupMenuToggle() {
  const menuIcon = document.querySelector('.menu');
  const navbar = document.querySelector('nav');
  menuIcon.replaceWith(menuIcon.cloneNode(true)); 
  document.querySelector('.menu').addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
}

function setupScrollEffect() {
  let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
  const navFixed = document.querySelector('.nav-fixed');
  if (navFixed && typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      navFixed.classList.toggle('hidden', window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    });
  }
}

function setupModal() {
  const modal = document.querySelector('#modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtns = document.getElementById('closeModalBtn');
  if (modal) {
    openModalBtn.addEventListener('click', () => showElement(modal));
    closeModalBtns.addEventListener('click', () => hideElement(modal));
    window.addEventListener('click', (e) => {
      if (e.target === modal) hideElement(modal);
    });
  }
}

function setupAnimations() {
  const elements = document.querySelectorAll('.animate');
  if (elements.length > 0) {
    elements.forEach(el => {
      el.classList.add('fade-in');
    });
  }
}

// Ensure compatibility with React & Vanilla JS
// export default function useGlobalScripts() {
//   if (typeof window !== 'undefined') {
//     initializeApp();
//   }
// }

function showElement(element) {
  if (element) element.style.display = 'block';
}

function hideElement(element) {
  if (element) element.style.display = 'none';
}