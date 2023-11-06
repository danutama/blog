//*========== KEEP URL ==========*//
$(window).on('hashchange', function (e) {
  history.replaceState('', document.title, e.originalEvent.oldURL);
});
//*========== END ==========*//

/*========== DARK LIGHT MODE ==========*/
const themeToggleButton = document.querySelector('.theme-toggle-button');
const darkThemeClass = 'dark-theme';

const toggleDarkTheme = () => {
  document.body.classList.toggle(darkThemeClass);
  if (document.body.classList.contains(darkThemeClass)) {
    localStorage.setItem('theme', 'dark');
    themeToggleButton.textContent = 'Light mode';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggleButton.textContent = 'Dark mode';
  }
};

const selectedTheme = localStorage.getItem('theme');
if (selectedTheme === 'dark') {
  document.body.classList.add(darkThemeClass);
  themeToggleButton.textContent = 'Light mode';
}

themeToggleButton.addEventListener('click', toggleDarkTheme);
//*========== END ==========*//
