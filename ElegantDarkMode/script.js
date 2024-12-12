const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

/* Light Mode Variables */
if (document.body.classList.contains('light-mode')) {
  document.documentElement.style.setProperty('--bg-color', '#ffffff');
  document.documentElement.style.setProperty('--text-color', '#121212');
  document.documentElement.style.setProperty('--card-bg', '#f5f5f5');
  document.documentElement.style.setProperty('--header-bg', '#ffffff');
}
