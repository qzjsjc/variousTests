import './mixin.styl';

function switchTheme(theme) {
  window.document.documentElement.setAttribute('data-theme', theme);
}

function customer() {
  const root = document.documentElement;
  root.removeAttribute('data-theme');
  root.style.setProperty('--background-color','green');
}

window.switchTheme = switchTheme;
window.customer = customer;