document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    const categories = window.SAJA_CATEGORIES || [];
    const products = (window.SAJA_PRODUCTS || []).filter(product =>
      typeof product.name === "string" && product.name.trim()
    );
    const root = document.getElementById("materiale");
    const enabled = window.SAJA_SHOW_CATALOG === true && products.length > 0;
    document.querySelectorAll("[data-catalog-link]").forEach(link => { link.hidden = !enabled; });
    document.querySelectorAll("[data-catalog-unavailable]").forEach(el => { el.hidden = enabled; });
    if (!root || !enabled) return;
    const note = root.querySelector(".demo-note");
    if (note) note.hidden = true;

    const categoryList = document.getElementById("categoryList");
    const searchInput = document.getElementById("materialSearch");
    const sortSelect = document.getElementById("sortSelect");
    const productsGrid = document.getElementById("productsGrid");
    const categoryTitle = document.getElementById("categoryTitle");
    const resultCount = document.getElementById("resultCount");
    const pagination = document.getElementById("pagination");
    const emptyResults = document.getElementById("emptyResults");

    // Tre rreshta: 9 materiale ne desktop, 6 ne ekranet me dy kolona.
    const compactCatalog = window.matchMedia("(max-width: 1000px)");
    let pageSize = compactCatalog.matches ? 6 : 9;

    let selectedCategory = "all";
    let currentPage = 1;

    // Kërkimi punon edhe nëse shkruan e në vend të ë, ose c në vend të ç.
    function normalizeText(value) {
      return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
    }

    function categoryName(id) {
      return categories.find(category => category.id === id)?.name || "";
    }

    function makeCategoryButton(id, name, count) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "category-button";
      button.dataset.category = id;

      const label = document.createElement("span");
      label.textContent = name;

      const amount = document.createElement("span");
      amount.className = "category-count";
      amount.textContent = count;

      button.append(label, amount);

      button.addEventListener("click", () => {
        selectedCategory = id;
        currentPage = 1;
        updateCategoryButtons();
        renderProducts();
      });

      return button;
    }

    function renderCategories() {
      categoryList.replaceChildren();

      categoryList.append(
        makeCategoryButton("all", "Të gjitha", products.length)
      );

      categories.forEach(category => {
        const count = products.filter(
          product => product.category === category.id
        ).length;

        categoryList.append(
          makeCategoryButton(category.id, category.name, count)
        );
      });

      updateCategoryButtons();
    }

    function updateCategoryButtons() {
      categoryList.querySelectorAll("button").forEach(button => {
        const active = button.dataset.category === selectedCategory;

        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }

    function getFilteredProducts() {
      const query = normalizeText(searchInput.value);

      const filtered = products.filter(product => {
        const matchesCategory =
          selectedCategory === "all" ||
          product.category === selectedCategory;

        const searchableText = normalizeText(
          product.name + " " +
          product.id + " " +
          String(product.id).padStart(3, "0") + " " +
          categoryName(product.category)
        );

        return matchesCategory && searchableText.includes(query);
      });

      if (sortSelect.value === "az") {
        filtered.sort((a, b) =>
          a.name.localeCompare(b.name, "sq", { numeric: true })
        );
      } else if (sortSelect.value === "za") {
        filtered.sort((a, b) =>
          b.name.localeCompare(a.name, "sq", { numeric: true })
        );
      } else {
        filtered.sort((a, b) => a.id - b.id);
      }

      return filtered;
    }

    function createProductCard(product) {
      const card = document.createElement("article");
      card.className = "product-card";

      const photo = document.createElement("div");
      photo.className = "product-image";

      // Kur image është bosh, shfaqet vetëm korniza.
      if (product.image) {
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";
        image.decoding = "async";
        image.width = 600;
        image.height = 600;

        // Nëse mungon skedari, ruaj kornizën pa ikonë fotografie të prishur.
        image.addEventListener("error", () => image.remove(), { once: true });

        photo.append(image);
      }

      const info = document.createElement("div");
      info.className = "product-info";

      const number = document.createElement("span");
      number.className = "product-number";
      number.textContent = "Nr. " + String(product.id).padStart(3, "0");

      const title = document.createElement("h3");
      title.textContent = product.name;

      const category = document.createElement("p");
      category.className = "product-category";
      category.textContent = categoryName(product.category);

      info.append(number, title, category);
      const inquiry = document.createElement("a");
      inquiry.className = "product-inquiry";
      inquiry.textContent = "Pyet në WhatsApp";
      inquiry.href = "https://wa.me/355692151480?text=" + encodeURIComponent(
        "Përshëndetje! Interesohem për: " + product.name + " (Nr. " + product.id + ")."
      );
      info.append(inquiry);
      card.append(photo, info);

      return card;
    }

    function changePage(page) {
      currentPage = page;
      renderProducts();

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const headerHeight = document.querySelector(
        ".header"
      )?.getBoundingClientRect().height || 92;

      const top =
        productsGrid.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        20;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: reducedMotion ? "auto" : "smooth"
      });

      // Ruaj fokusin te numri i faqes së zgjedhur.
      pagination.querySelector('[aria-current="page"]')
        ?.focus({ preventScroll: true });
    }

    function makePageButton(text, page, disabled = false, active = false) {
      const button = document.createElement("button");

      button.type = "button";
      button.textContent = text;
      button.disabled = disabled;

      if (active) {
        button.classList.add("active");
        button.setAttribute("aria-current", "page");
      }

      if (typeof text === "number") {
        button.setAttribute("aria-label", "Faqja " + text);
      }

      button.addEventListener("click", () => changePage(page));

      return button;
    }

    function renderPagination(totalPages) {
      pagination.replaceChildren();

      if (totalPages <= 1) return;

      pagination.append(
        makePageButton("←", currentPage - 1, currentPage === 1)
      );
      pagination.lastElementChild.setAttribute(
        "aria-label", "Faqja e mëparshme"
      );

      // Faqja e parë, e fundit dhe faqet pranë faqes aktuale.
      const visiblePages = new Set([1, totalPages]);

      for (
        let page = Math.max(1, currentPage - 1);
        page <= Math.min(totalPages, currentPage + 1);
        page++
      ) {
        visiblePages.add(page);
      }

      const orderedPages = [...visiblePages].sort((a, b) => a - b);
      let previousPage = 0;

      orderedPages.forEach(page => {
        if (previousPage && page - previousPage > 1) {
          const gap = document.createElement("span");
          gap.className = "pagination-gap";
          gap.textContent = "…";
          pagination.append(gap);
        }

        pagination.append(
          makePageButton(page, page, false, page === currentPage)
        );

        previousPage = page;
      });

      pagination.append(
        makePageButton("→", currentPage + 1, currentPage === totalPages)
      );
      pagination.lastElementChild.setAttribute(
        "aria-label", "Faqja tjetër"
      );
    }

    function renderProducts() {
      const filtered = getFilteredProducts();

      const totalPages = Math.ceil(filtered.length / pageSize);
      currentPage = Math.max(1, Math.min(currentPage, totalPages || 1));

      const start = (currentPage - 1) * pageSize;
      const visibleProducts = filtered.slice(start, start + pageSize);

      productsGrid.replaceChildren();

      const fragment = document.createDocumentFragment();

      visibleProducts.forEach(product => {
        fragment.append(createProductCard(product));
      });

      productsGrid.append(fragment);

      categoryTitle.textContent =
        selectedCategory === "all"
          ? "Të gjitha materialet"
          : categoryName(selectedCategory);

      resultCount.textContent = filtered.length
        ? `${start + 1}–${start + visibleProducts.length} nga ${filtered.length} materiale`
        : "0 materiale";

      emptyResults.hidden = filtered.length !== 0;

      renderPagination(totalPages);
    }

    searchInput.addEventListener("input", () => {
      currentPage = 1;
      renderProducts();
    });

    sortSelect.addEventListener("change", () => {
      currentPage = 1;
      renderProducts();
    });

    document.getElementById("resetSearch").addEventListener("click", () => {
      searchInput.value = "";
      selectedCategory = "all";
      sortSelect.value = "number";
      currentPage = 1;

      updateCategoryButtons();
      renderProducts();
      searchInput.focus();
    });

    compactCatalog.addEventListener("change", () => {
      pageSize = compactCatalog.matches ? 6 : 9;
      currentPage = 1;
      renderProducts();
    });

    renderCategories();
    renderProducts();
    root.hidden = false;
    document.dispatchEvent(new Event("saja:catalog"));
  
});
