"use strict";
// true: seksioni dhe kategoritë shfaqen edhe kur nuk ka ende artikuj.
window.SAJA_SHOW_CATALOG = true;

// Kontaktet publike të dyqanit dhe profilit të punimeve.
// Lidhjet bosh nuk shfaqen. Përdor URL të plota https://.
window.SAJA_SITE = {
  instagramStore: "https://www.instagram.com/saja.electric/",
  instagramWork: "https://www.instagram.com/sajaelectric/",
  storeAddress: "Rruga Azem Galica, Tiranë 1047, Albania",
  storeMapUrl: "https://maps.app.goo.gl/2rAcBhPXrKkQiSWb8"
};



// Vetëm të dhëna reale. Fushat bosh nuk shfaqen.
// Kjo adresë zyrtare është e veçantë nga adresa publike e dyqanit.
window.SAJA_BIZNES = {
  emriLigjor: "", nipt: "", adresaZyrtare: "",
  ofruesiHosting: "", ruajtjaKerkesave: ""
};

// Shto vetëm punën që keni realizuar dhe zonën e konfirmuar.
// Përshkrimet ekzistuese të fotografive shfaqen edhe pa këto fusha.
window.SAJA_PROJEKTE = {
  project1: { zona: "Tiranë", puna: "" }, // Yellow Mood
  project2: { zona: "Tiranë", puna: "" }, // Migo's
  project3: { zona: "Tiranë", puna: "" }, // Oculus
  project4: { zona: "", puna: "" },        // Heb's
  project5: { zona: "", puna: "" },        // Oxygen Prime Fitness
  project6: { zona: "", puna: "" }         // Class Gold
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
// Një rresht pa emër nuk publikohet. Kur vendos emrin real, artikulli shfaqet.
// Një emër real pa fotografi shfaqet me kornizë neutrale.
// Mund të shtosh ose heqësh rreshta në çdo kategori.

const materialet = {
  ndricim: [
    {"name": "Spot inkaso i rrumbullakët i bardhë me kapëse të kuqe", "image": "images/materiale/spot-01/01-perballe.webp", "images": ["images/materiale/spot-01/01-perballe.webp", "images/materiale/spot-01/02-siper-perpara.webp", "images/materiale/spot-01/03-mbrapa.webp", "images/materiale/spot-01/04-siper-mbrapa.webp"]},
    {"name": "Spot inkaso i rrumbullakët i zi me kapëse të kuqe", "image": "images/materiale/spot-02/01-perballe.webp", "images": ["images/materiale/spot-02/01-perballe.webp", "images/materiale/spot-02/02-siper-perpara.webp", "images/materiale/spot-02/03-mbrapa.webp", "images/materiale/spot-02/04-siper-mbrapa.webp"]},
    {"name": "Spot inkaso i rrumbullakët me krahë montimi", "image": "images/materiale/spot-03/01-perballe.webp", "images": ["images/materiale/spot-03/01-perballe.webp", "images/materiale/spot-03/02-siper-perpara.webp", "images/materiale/spot-03/03-mbrapa.webp", "images/materiale/spot-03/04-siper-mbrapa.webp"]},
    {"name": "Spot inkaso cilindrik i bardhë me krahë montimi", "image": "images/materiale/spot-04/01-perballe.webp", "images": ["images/materiale/spot-04/01-perballe.webp", "images/materiale/spot-04/02-siper-perpara.webp", "images/materiale/spot-04/03-mbrapa.webp", "images/materiale/spot-04/04-siper-mbrapa.webp"]},
    {"name": "Spot inkaso i zi me kapëse portokalli", "image": "images/materiale/spot-05/01-perballe.webp", "images": ["images/materiale/spot-05/01-perballe.webp", "images/materiale/spot-05/02-siper-perpara.webp", "images/materiale/spot-05/03-mbrapa.webp", "images/materiale/spot-05/04-siper-mbrapa.webp"]},
    {"name": "Spot inkaso katror i bardhë", "image": "images/materiale/spot-06/01-perballe.webp", "images": ["images/materiale/spot-06/01-perballe.webp", "images/materiale/spot-06/02-siper-perpara.webp", "images/materiale/spot-06/03-mbrapa.webp", "images/materiale/spot-06/04-siper-mbrapa.webp"]},
    {"name": "Spot inkaso cilindrik me brendësi ngjyrë bronzi", "image": "images/materiale/spot-07/01-perballe.webp", "images": ["images/materiale/spot-07/01-perballe.webp", "images/materiale/spot-07/02-siper-perpara.webp", "images/materiale/spot-07/03-mbrapa.webp", "images/materiale/spot-07/04-siper-mbrapa.webp"]},
    {"name": "Spot inkaso cilindrik i bardhë me kapëse të zeza", "image": "images/materiale/spot-08/01-perballe.webp", "images": ["images/materiale/spot-08/01-perballe.webp", "images/materiale/spot-08/02-siper-perpara.webp", "images/materiale/spot-08/03-mbrapa.webp", "images/materiale/spot-08/04-siper-mbrapa.webp"]},
    { name: "", image: "" },
    { name: "", image: "" }
  ],

  kabllo: [
    { name: "" /* 01 */, image: "" },
    { name: "" /* 02 */, image: "" },
    { name: "" /* 03 */, image: "" },
    { name: "" /* 04 */, image: "" },
    { name: "" /* 05 */, image: "" },
    { name: "" /* 06 */, image: "" },
    { name: "" /* 07 */, image: "" },
    { name: "" /* 08 */, image: "" },
    { name: "" /* 09 */, image: "" },
    { name: "" /* 10 */, image: "" }
  ],

  priza: [
    { name: "" /* 01 */, image: "" },
    { name: "" /* 02 */, image: "" },
    { name: "" /* 03 */, image: "" },
    { name: "" /* 04 */, image: "" },
    { name: "" /* 05 */, image: "" },
    { name: "" /* 06 */, image: "" },
    { name: "" /* 07 */, image: "" },
    { name: "" /* 08 */, image: "" },
    { name: "" /* 09 */, image: "" },
    { name: "" /* 10 */, image: "" }
  ],

  automate: [
    { name: "" /* 01 */, image: "" },
    { name: "" /* 02 */, image: "" },
    { name: "" /* 03 */, image: "" },
    { name: "" /* 04 */, image: "" },
    { name: "" /* 05 */, image: "" },
    { name: "" /* 06 */, image: "" },
    { name: "" /* 07 */, image: "" },
    { name: "" /* 08 */, image: "" },
    { name: "" /* 09 */, image: "" },
    { name: "" /* 10 */, image: "" }
  ],

  panele: [
    { name: "" /* 01 */, image: "" },
    { name: "" /* 02 */, image: "" },
    { name: "" /* 03 */, image: "" },
    { name: "" /* 04 */, image: "" },
    { name: "" /* 05 */, image: "" },
    { name: "" /* 06 */, image: "" },
    { name: "" /* 07 */, image: "" },
    { name: "" /* 08 */, image: "" },
    { name: "" /* 09 */, image: "" },
    { name: "" /* 10 */, image: "" }
  ],

  tuba: [
    { name: "" /* 01 */, image: "" },
    { name: "" /* 02 */, image: "" },
    { name: "" /* 03 */, image: "" },
    { name: "" /* 04 */, image: "" },
    { name: "" /* 05 */, image: "" },
    { name: "" /* 06 */, image: "" },
    { name: "" /* 07 */, image: "" },
    { name: "" /* 08 */, image: "" },
    { name: "" /* 09 */, image: "" },
    { name: "" /* 10 */, image: "" }
  ],

  aksesore: [
    { name: "" /* 01 */, image: "" },
    { name: "" /* 02 */, image: "" },
    { name: "" /* 03 */, image: "" },
    { name: "" /* 04 */, image: "" },
    { name: "" /* 05 */, image: "" },
    { name: "" /* 06 */, image: "" },
    { name: "" /* 07 */, image: "" },
    { name: "" /* 08 */, image: "" },
    { name: "" /* 09 */, image: "" },
    { name: "" /* 10 */, image: "" }
  ],

  automatizim: [
    { name: "" /* 01 */, image: "" },
    { name: "" /* 02 */, image: "" },
    { name: "" /* 03 */, image: "" },
    { name: "" /* 04 */, image: "" },
    { name: "" /* 05 */, image: "" },
    { name: "" /* 06 */, image: "" },
    { name: "" /* 07 */, image: "" },
    { name: "" /* 08 */, image: "" },
    { name: "" /* 09 */, image: "" },
    { name: "" /* 10 */, image: "" }
  ]
};

// Numri i rreshtit ruhet edhe kur vendet përpara tij janë ende bosh.
let numriMaterialit = 0;
window.SAJA_PRODUCTS = window.SAJA_CATEGORIES.flatMap(category =>
  (materialet[category.id] || []).map(material => ({
    id: ++numriMaterialit,
    category: category.id,
    name: String(material.name || "").trim(),
    image: String(material.image || "").trim(),
    images: Array.isArray(material.images) ? material.images.filter(Boolean) : []
  })).filter(product => product.name && !/^Material +[0-9]+$/i.test(product.name))
);
