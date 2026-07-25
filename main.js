// Small vanilla JS helpers — no libraries, works anywhere.

// 1. Footer year
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 2. Mobile nav toggle
var navToggle = document.getElementById("navToggle");
var siteNav = document.getElementById("siteNav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", function () {
    var open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// 3. Lightbox (gallery page only)
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightboxImg");
var lightboxCaption = document.getElementById("lightboxCaption");
var lightboxClose = document.getElementById("lightboxClose");

if (lightbox && lightboxImg) {
  document.querySelectorAll("[data-lightbox]").forEach(function (frame) {
    frame.addEventListener("click", function () {
      var img = frame.querySelector("img");
      var figure = frame.closest("figure");
      var title = figure ? figure.querySelector("figcaption h2") : null;
      var details = figure ? figure.querySelector("figcaption p") : null;

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent =
        (title ? title.textContent : "") +
        (details ? " — " + details.textContent : "");
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}
