// Modo oscuro
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  const darkMode = root.style.getPropertyValue("--bg-color") === "#1c1c1c";
  
  if (darkMode) {
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--text-color", "#1c1c1c");
    root.style.setProperty("--header-bg", "#000000");
    themeToggle.textContent = "🌙";
  } else {
    root.style.setProperty("--bg-color", "#1c1c1c");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--header-bg", "#333333");
    themeToggle.textContent = "☀️";
  }
});

// Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
