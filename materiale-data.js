"use strict";
// Katalogu shfaq edhe vendet e numëruara derisa të plotësosh produktet.
window.SAJA_SHOW_CATALOG = true;

// TODO: Plotëso dy Instagram-et dhe VETËM vendndodhjen e dyqanit.
// Lidhjet bosh nuk shfaqen. Përdor URL të plota https://.
window.SAJA_SITE = {
  instagramStore: "https://www.instagram.com/saja.electric?cnvx=MTYzYWRzNG1hdmd2cg==",
  instagramWork: "https://www.instagram.com/sajaelectric?avpt=MXd2ZHVlb3hoeXhqMg==",
  storeAddress: "Rruga Azem Galica, Tiranë 1047, Albania",
  storeMapUrl: "https://maps.app.goo.gl/2rAcBhPXrKkQiSWb8"
};



// KATEGORITË
window.SAJA_CATEGORIES = [
  { id: "ndricim", name: "Ndriçim" },
  { id: "kabllo", name: "Kabllo & Përçues" },
  { id: "priza", name: "Priza & Çelësa" },
  { id: "automate", name: "Automatë & Diferencialë" },
  { id: "panele", name: "Panele & Kuti Elektrike" },
  { id: "tuba", name: "Tuba & Kanalina" },
  { id: "aksesore", name: "Aksesorë Instalimi" },
  { id: "automatizim", name: "Sensorë & Automatizim" }
];

// MATERIALET
// Ndrysho name për emrin dhe image për rrugën e fotos.
// image: "" e lë kornizën pa foto.
// Mund të shtosh ose heqësh rreshta në çdo kategori.

const materialet = {
  ndricim: [
    { name: "Material 01", image: "" },
    { name: "Material 02", image: "" },
    { name: "Material 03", image: "" },
    { name: "Material 04", image: "" },
    { name: "Material 05", image: "" },
    { name: "Material 06", image: "" },
    { name: "Material 07", image: "" },
    { name: "Material 08", image: "" },
    { name: "Material 09", image: "" },
    { name: "Material 10", image: "" }
  ],

  kabllo: [
    { name: "Material 01", image: "" },
    { name: "Material 02", image: "" },
    { name: "Material 03", image: "" },
    { name: "Material 04", image: "" },
    { name: "Material 05", image: "" },
    { name: "Material 06", image: "" },
    { name: "Material 07", image: "" },
    { name: "Material 08", image: "" },
    { name: "Material 09", image: "" },
    { name: "Material 10", image: "" }
  ],

  priza: [
    { name: "Material 01", image: "" },
    { name: "Material 02", image: "" },
    { name: "Material 03", image: "" },
    { name: "Material 04", image: "" },
    { name: "Material 05", image: "" },
    { name: "Material 06", image: "" },
    { name: "Material 07", image: "" },
    { name: "Material 08", image: "" },
    { name: "Material 09", image: "" },
    { name: "Material 10", image: "" }
  ],

  automate: [
    { name: "Material 01", image: "" },
    { name: "Material 02", image: "" },
    { name: "Material 03", image: "" },
    { name: "Material 04", image: "" },
    { name: "Material 05", image: "" },
    { name: "Material 06", image: "" },
    { name: "Material 07", image: "" },
    { name: "Material 08", image: "" },
    { name: "Material 09", image: "" },
    { name: "Material 10", image: "" }
  ],

  panele: [
    { name: "Material 01", image: "" },
    { name: "Material 02", image: "" },
    { name: "Material 03", image: "" },
    { name: "Material 04", image: "" },
    { name: "Material 05", image: "" },
    { name: "Material 06", image: "" },
    { name: "Material 07", image: "" },
    { name: "Material 08", image: "" },
    { name: "Material 09", image: "" },
    { name: "Material 10", image: "" }
  ],

  tuba: [
    { name: "Material 01", image: "" },
    { name: "Material 02", image: "" },
    { name: "Material 03", image: "" },
    { name: "Material 04", image: "" },
    { name: "Material 05", image: "" },
    { name: "Material 06", image: "" },
    { name: "Material 07", image: "" },
    { name: "Material 08", image: "" },
    { name: "Material 09", image: "" },
    { name: "Material 10", image: "" }
  ],

  aksesore: [
    { name: "Material 01", image: "" },
    { name: "Material 02", image: "" },
    { name: "Material 03", image: "" },
    { name: "Material 04", image: "" },
    { name: "Material 05", image: "" },
    { name: "Material 06", image: "" },
    { name: "Material 07", image: "" },
    { name: "Material 08", image: "" },
    { name: "Material 09", image: "" },
    { name: "Material 10", image: "" }
  ],

  automatizim: [
    { name: "Material 01", image: "" },
    { name: "Material 02", image: "" },
    { name: "Material 03", image: "" },
    { name: "Material 04", image: "" },
    { name: "Material 05", image: "" },
    { name: "Material 06", image: "" },
    { name: "Material 07", image: "" },
    { name: "Material 08", image: "" },
    { name: "Material 09", image: "" },
    { name: "Material 10", image: "" }
  ]
};

// Përgatit listën për faqen.
// Kjo pjesë nuk krijon vende bosh shtesë.
let numriMaterialit = 0;

window.SAJA_PRODUCTS = window.SAJA_CATEGORIES.flatMap(
  (category) =>
    (materialet[category.id] || []).map((material) => ({
      id: ++numriMaterialit,
      category: category.id,
      name: material.name,
      image: material.image
    }))
);