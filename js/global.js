/* =========================================================
   ODPMX - GLOBAL.JS
   ========================================================= */

/* ---------------- MOBILE NAV MENU ---------------- */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.setAttribute("aria-label", "Abrir menú");
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}

/* ---------------- ACTIVE NAV LINK ---------------- */

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach((link) => {
  const linkPage = link.getAttribute("href");

  link.classList.toggle("active", linkPage === currentPage);
});

/* ---------------- AUTO REVEAL ELEMENTS ---------------- */

const animatedSelectors = [
  ".hero-content",
  ".page-hero",
  ".section",
  ".info-card",
  ".case-card",
  ".panel",
  ".contact-form",
  ".case-detail",
  ".timeline",
  ".search-box",
  ".cases-grid"
];

document.querySelectorAll(animatedSelectors.join(",")).forEach((element) => {
  element.classList.add("reveal");
});

/* ---------------- REPEATING SCROLL ANIMATIONS ---------------- */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

/* ---------------- BUTTON PRESS ANIMATION ---------------- */

document
  .querySelectorAll(".btn, .side-menu-btn, .menu-toggle, .nav-menu a")
  .forEach((element) => {
    element.addEventListener("pointerdown", () => {
      element.classList.add("pressed");
    });

    element.addEventListener("pointerup", () => {
      element.classList.remove("pressed");
    });

    element.addEventListener("pointerleave", () => {
      element.classList.remove("pressed");
    });

    element.addEventListener("pointercancel", () => {
      element.classList.remove("pressed");
    });
  });