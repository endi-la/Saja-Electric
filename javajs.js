/* Saja Electric — enhancements are independent; HTML stays usable without JS. */
(() => {
  "use strict";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const init = (name, fn) => { try { fn(); } catch (error) { console.warn("Saja Electric:", name, error); } };
  const motion = () => reduced.matches ? "auto" : "smooth";

  init("Kontaktet", () => {
    const config = window.SAJA_SITE || {};
    const safeUrl = (value, instagram = false) => {
      try {
        const url = new URL(value);
        if (url.protocol !== "https:") return null;
        if (instagram && !["instagram.com","www.instagram.com"].includes(url.hostname)) return null;
        return url.href;
      } catch { return null; }
    };
    qa("[data-social]").forEach(link => {
      const value = link.dataset.social === "store" ? config.instagramStore : config.instagramWork;
      const url = safeUrl(value, true);
      if (url) { link.href = url; link.hidden = false; }
    });
    const address = String(config.storeAddress || "").trim();
    qa("[data-store-address]").forEach(el => { el.textContent = address; el.hidden = !address; });
    const map = safeUrl(config.storeMapUrl);
    qa("[data-store-map]").forEach(link => { if (map) { link.href = map; link.hidden = false; } });
    qa("[data-location-box]").forEach(el => { el.hidden = !address && !map; });
    qa("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
  });

  init("Menuja", () => {
    const burger = q("#burgerBtn"), menu = q("#sideMenu");
    if (!burger || !menu) return;
    const links = qa("a", menu);
    let open = false;
    const setOpen = (next, returnFocus = false) => {
      open = next;
      menu.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
      menu.inert = !open;
      menu.setAttribute("aria-hidden", String(!open));
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Mbyll menunë" : "Hap menunë");
      links.forEach(link => { if (open) link.removeAttribute("tabindex"); else link.tabIndex = -1; });
      if (returnFocus) burger.focus();
    };
    burger.addEventListener("click", () => setOpen(!open));
    links.forEach(link => link.addEventListener("click", () => {
      setOpen(false);
      // Keep keyboard focus at the destination rather than in a closed panel.
      if (link.hash) {
        const target = document.getElementById(link.hash.slice(1));
        if (target && !target.hidden) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      }
    }));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && open) setOpen(false, true);
    });
    document.addEventListener("click", event => {
      if (open && !menu.contains(event.target) && !burger.contains(event.target)) setOpen(false);
    });
    document.addEventListener("focusin", event => {
      if (open && !menu.contains(event.target) && !burger.contains(event.target)) setOpen(false);
    });
    setOpen(false);
    document.body.classList.add("menu-ready");
    burger.hidden = false;
  });

  init("Lëvizja e faqes", () => {
    const header = q(".header"), progress = q(".scroll-progress"), topButton = q(".back-top");
    const sections = qa("main > section[id]");
    const navLinks = qa("#sideMenu a");
    let scheduled = false;
    const update = () => {
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      header?.classList.toggle("scrolled", y > 40);
      if (progress) progress.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
      if (topButton) topButton.hidden = y < 600;
      let active = "";
      sections.forEach(section => {
        if (!section.hidden && section.getBoundingClientRect().top <= 160) active = section.id;
      });
      navLinks.forEach(link => {
        const current = link.hash === "#" + active && !link.hidden;
        link.classList.toggle("is-active", current);
        if (current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      scheduled = false;
    };
    window.addEventListener("scroll", () => {
      if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("saja:catalog", update);
    topButton?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: motion() });
      q(".brand")?.focus({ preventScroll: true });
    });
    update();
  });

  init("Fotografitë kryesore", () => {
    const hero = q(".hero");
    if (!hero) return;
    const slides = qa(".slide", hero);
    if (slides.length < 2) return;
    let current = 0, timer;

    function show(index) {
      current = index;
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === current);
      });
    }

    function schedule() {
      clearTimeout(timer);
      const paused = reduced.matches || document.hidden;
      hero.classList.toggle("is-paused", paused);
      hero.classList.toggle("slider-ready", !reduced.matches);
      if (!paused) {
        timer = setTimeout(() => {
          show((current + 1) % slides.length);
          schedule();
        }, 8000);
      }
    }

    reduced.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", schedule);
    show(0);
    schedule();
  });

  init("Shfaqja e seksioneve", () => {
    if (!("IntersectionObserver" in window) || reduced.matches) return;
    const targets = qa(".service-card,.project-card,.gallery-tile,.stat,.contact-box,.footer-col,.section-heading,.process-grid");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: .08 });
    targets.forEach(el => {
      if (el.closest("[hidden]")) return;
      const index = [...el.parentElement.children].indexOf(el);
      el.style.setProperty("--reveal-delay", Math.min(index % 4 * 70, 210) + "ms");
      // Only hide content that is below the initial viewport, after observer setup.
      if (el.getBoundingClientRect().top > innerHeight) el.classList.add("reveal-pending");
      observer.observe(el);
    });
    reduced.addEventListener("change", () => {
      if (reduced.matches) {
        observer.disconnect();
        targets.forEach(el => el.classList.remove("reveal-pending"));
      }
    });
  });

  init("Statistikat", () => {
    if (!("IntersectionObserver" in window) || reduced.matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target, final = Number(el.dataset.target);
        observer.unobserve(el);
        if (!Number.isFinite(final)) return;
        const started = performance.now();
        const tick = now => {
          const t = Math.min((now - started) / 700, 1);
          el.textContent = Math.round(final * (1 - Math.pow(1 - t, 3))) + "+";
          if (t < 1 && !reduced.matches) requestAnimationFrame(tick);
          else el.textContent = final + "+";
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: .4 });
    qa(".counter[data-target]").forEach(el => observer.observe(el));
  });

  init("Ngarkimi i imazheve", () => {
    qa('img[loading="lazy"]').forEach(img => {
      if (!img.complete) img.addEventListener("load", () => img.classList.add("image-loaded"), { once: true });
    });
  });

  init("Galeria", () => {
    const dialog = q("#lightbox");
    if (!dialog || typeof dialog.showModal !== "function") return;
    const photo = q("#lightbox-img"), caption = q("#lightbox-caption"), counter = q("#lightbox-counter");
    const close = q("[data-lightbox-close]"), previous = q("[data-lightbox-prev]"), next = q("[data-lightbox-next]");
    let items = [], index = 0, opener = null, touchStart = null;
    const render = () => {
      const item = items[index], image = q("img", item);
      photo.src = item.href;
      photo.alt = image?.alt || "";
      caption.textContent = item.dataset.caption || image?.alt || "";
      counter.textContent = (index + 1) + " / " + items.length;
      previous.disabled = next.disabled = items.length < 2;
    };
    const change = delta => { index = (index + delta + items.length) % items.length; render(); };
    qa("[data-lightbox]").forEach(link => link.addEventListener("click", event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      items = qa("[data-lightbox]", link.closest("[data-gallery]") || document);
      index = items.indexOf(link);
      opener = link;
      render();
      dialog.showModal();
      document.body.classList.add("dialog-open");
      close.focus();
      event.preventDefault();
    }));
    close.addEventListener("click", () => dialog.close());
    previous.addEventListener("click", () => change(-1));
    next.addEventListener("click", () => change(1));
    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      opener?.focus({ preventScroll: true });
    });
    dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") { event.preventDefault(); change(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); change(1); }
      if (event.key === "Tab") {
        const buttons = qa("button:not(:disabled)", dialog);
        const first = buttons[0], last = buttons.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    photo.addEventListener("touchstart", event => {
      const t = event.changedTouches[0]; touchStart = { x: t.clientX, y: t.clientY };
    }, { passive: true });
    photo.addEventListener("touchend", event => {
      if (!touchStart) return;
      const t = event.changedTouches[0], dx = t.clientX - touchStart.x, dy = t.clientY - touchStart.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) change(dx < 0 ? 1 : -1);
      touchStart = null;
    }, { passive: true });
  });

  init("Formulari", () => {
    const form = q("#contactForm");
    if (!form) return;
    const name = q("#clientName"), phone = q("#clientPhone"), message = q("#clientMessage");
    const service = q("#clientService"), status = q("#formStatus"), fallback = q("#formFallback");
    function validate(el, errorId, valid, text) {
      q("#" + errorId).textContent = valid ? "" : text;
      el.setAttribute("aria-invalid", String(!valid));
      return valid;
    }
    form.addEventListener("submit", event => {
      event.preventDefault();
      const checks = [
        validate(name, "nameError", name.value.trim().length >= 2, "Shkruaj emrin me të paktën 2 shkronja."),
        validate(phone, "phoneError", /^\+?[\d\s().-]{7,25}$/.test(phone.value.trim()) && phone.value.replace(/\D/g, "").length >= 7, "Shkruaj një numër telefoni të vlefshëm."),
        validate(message, "messageError", message.value.trim().length >= 10, "Shkruaj një mesazh me të paktën 10 karaktere.")
      ];
      fallback.hidden = true;
      if (checks.includes(false)) {
        status.textContent = "Kontrollo fushat e shënuara më sipër.";
        [name, phone, message][checks.indexOf(false)].focus();
        return;
      }
      const text = "Përshëndetje Saja Electric!\nEmri: " + name.value.trim() +
        "\nTelefoni: " + phone.value.trim() + (service.value ? "\nShërbimi: " + service.value : "") +
        "\nMesazhi: " + message.value.trim();
      const url = "https://wa.me/355692151480?text=" + encodeURIComponent(text);
      fallback.href = url;
      fallback.hidden = false;
      // Open a blank window first, then clear opener; blocked windows are detectable.
      const tab = window.open("about:blank", "_blank");
      if (tab) {
        tab.opener = null;
        tab.location.replace(url);
        status.textContent = "Mesazhi u përgatit. Konfirmo dërgimin në WhatsApp.";
      } else {
        status.textContent = "Shfletuesi bllokoi dritaren. Përdor lidhjen më poshtë për të vazhduar.";
      }
    });
    form.noValidate = true;
  });
})();
