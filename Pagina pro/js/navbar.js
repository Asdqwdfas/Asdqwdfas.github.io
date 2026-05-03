document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("overlay");

  let lastScrollY = window.scrollY;

  // =====================
  // SCROLL EFFECT (SIN AUTO-HIDE)
  // =====================
  window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;

    // solo cambio de fondo
    navbar.classList.toggle("scrolled", currentScrollY > 50);

    lastScrollY = currentScrollY;
  });

  // =====================
  // ABRIR MENU
  // =====================
  const openMenu = () => {
    menu.classList.add("active");
    toggle.classList.add("active");
    overlay.classList.add("active");

    navbar.classList.add("menu-open");
    document.body.classList.add("menu-open");
  };

  // =====================
  // CERRAR MENU
  // =====================
  const closeMenu = () => {
    menu.classList.remove("active");
    toggle.classList.remove("active");
    overlay.classList.remove("active");

    navbar.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
  };

  // =====================
  // TOGGLE MENU
  // =====================
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
  });

  // =====================
  // CLICK OVERLAY
  // =====================
  overlay.addEventListener("click", closeMenu);

  // =====================
  // CLICK LINKS
  // =====================
  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // =====================
  // TECLA ESC
  // =====================
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

});
const scrollTopBtn = document.getElementById("scrollTopBtn");

// mostrar / ocultar botón
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// click para subir
scrollTopBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});