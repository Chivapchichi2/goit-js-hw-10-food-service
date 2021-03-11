import menu from'./menu.json';
import menuItems from './menu-items.hbs';
import './styles.css';

const menuList = document.querySelector('.js-menu');
const switcher = document.querySelector('#theme-switch-toggle');
const cardMarkup = menuItems(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuList.insertAdjacentHTML('afterbegin', cardMarkup);

if (!localStorage.theme) {
  document.body.classList.add(Theme.LIGHT);
} else {
  document.body.classList.add(localStorage.theme);
  if (document.body.classList.contains(Theme.DARK)) {
    switcher.checked = 'true';
  }
}

switcher.addEventListener('change', () => {
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);
  localStorage.theme = document.body.classList.contains(Theme.DARK) ? Theme.DARK : Theme.LIGHT;
})