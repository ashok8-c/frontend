document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return; // Button isn't on this page → do nothing

  function applyTheme() {
    const saved = localStorage.getItem("theme") || "dark"; // default
    document.body.classList.toggle("light", saved === "light");
    themeToggle.textContent = saved === "light" ? "🌙" : "🔆";
  }

  applyTheme();

  themeToggle.addEventListener("click", () => {
    const current = document.body.classList.contains("light") ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme();
  });
});
