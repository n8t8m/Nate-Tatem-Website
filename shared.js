const SITE = {
  subtitle: "Sociologist & Music Producer"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-site-subtitle]").forEach((el) => {
    el.textContent = SITE.subtitle;
  });
});

