document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("sideMenu");
  const main = document.getElementById("mainContent");
  const yearEl = document.getElementById("year");

  // Update year (nëse e ke elementin)
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toggle menu (single, central implementation)
  function toggleMenu(openState) {
    if (!menu || !burger || !main) return;

    // përcakto vlerën nëse u dha argument, përndryshe toggle
    const open =
      typeof openState === "boolean"
        ? openState
        : !menu.classList.contains("open");

    menu.classList.toggle("open", open);
    burger.classList.toggle("active", open);
    main.classList.toggle("shift", open);

    burger.setAttribute("aria-expanded", open ? "true" : "false");
    menu.setAttribute("aria-hidden", open ? "false" : "true");
  }

  if (burger) burger.addEventListener("click", () => toggleMenu());

  // Close menu when link clicked
  document.querySelectorAll("#sideMenu a").forEach((a) => {
    a.addEventListener("click", () => {
      if (menu && menu.classList.contains("open")) toggleMenu(false);
    });
  });

  // Close menu with ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu && menu.classList.contains("open")) {
      toggleMenu(false);
    }
  });

  /* HERO SLIDER */
  (function heroSlider() {
    const slides = Array.from(document.querySelectorAll(".slide"));
    if (!slides.length) return;

    let idx = slides.findIndex((s) => s.classList.contains("active"));
    if (idx < 0) {
      idx = 0;
      slides[0].classList.add("active");
    }

    const interval = 4500;
    let timer = setInterval(nextSlide, interval);

    function nextSlide() {
      slides[idx].classList.remove("active");
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add("active");
    }

    slides.forEach((s) => {
      s.addEventListener("mouseenter", () => clearInterval(timer));
      s.addEventListener("mouseleave", () => {
        timer = setInterval(nextSlide, interval);
      });
    });
  })();

  /* PROJECT MODAL */
  (function projectModal() {
    const modal = document.getElementById("projectModal");
    if (!modal) return;

    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalClose = document.getElementById("modalClose");

    document.querySelectorAll(".project-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        const img = btn.dataset.img || btn.querySelector("img")?.src || "";
        const title =
          btn.dataset.title || btn.querySelector("h3")?.textContent || "";
        const desc =
          btn.dataset.desc || btn.querySelector("p")?.textContent || "";

        if (modalImg) modalImg.src = img;
        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.textContent = desc;

        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
  })();

  /* LIGHTBOX GALLERY */
  (function galleryLightbox() {
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!galleryImages.length || !lightbox || !lightboxImg) return;

    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  })();

  /* SCROLL ANIMATIONS (SERVICES + WHY) */
  (function scrollAnimations() {
    const serviceCards = document.querySelectorAll(".service-card");
    const whyCards = document.querySelectorAll(".why-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    serviceCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = "0.6s";
      observer.observe(card);
    });

    whyCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = "0.6s";
      observer.observe(card);
    });
  })();
});
