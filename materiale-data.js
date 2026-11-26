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
  {
    "id": "kabllo-energjie",
    "name": "Kabllo energjie"
  },
  {
    "id": "tela",
    "name": "Tela"
  },
  {
    "id": "rrjet-tv-dhe-kamera",
    "name": "Rrjet, TV dhe kamera"
  },
  {
    "id": "tuba-dhe-kanale",
    "name": "Tuba dhe kanale"
  },
  {
    "id": "kuti-instalimi",
    "name": "Kuti instalimi"
  },
  {
    "id": "automate-dhe-mbrojtje",
    "name": "Automatë dhe mbrojtje"
  },
  {
    "id": "kuadro-dhe-aksesore",
    "name": "Kuadro dhe aksesorë"
  },
  {
    "id": "priza-dhe-celesa",
    "name": "Priza dhe çelësa"
  },
  {
    "id": "lidhje-dhe-montim",
    "name": "Lidhje dhe montim"
  },
  {
    "id": "spote-dhe-llamba",
    "name": "Spote dhe llamba"
  },
  {
    "id": "led-dhe-profile",
    "name": "LED dhe profile"
  },
  {
    "id": "ndricim-i-brendshem",
    "name": "Ndriçim i brendshëm"
  },
  {
    "id": "ndricim-i-jashtem",
    "name": "Ndriçim i jashtëm"
  },
  {
    "id": "komandim-dhe-automatizim",
    "name": "Komandim dhe automatizim"
  },
  {
    "id": "aksesore-dhe-vegla",
    "name": "Aksesorë dhe vegla"
  }
];

// MATERIALET
const materialet = {
  "kabllo-energjie": [
    {
      "name": "Kabllo 2 përçues",
      "image": "images/materiale/01-kabllo-energjie/kabllo-2-percues.webp"
    },
    {
      "name": "Kabllo 3 përçues",
      "image": "images/materiale/01-kabllo-energjie/kabllo-3-percues.webp"
    },
    {
      "name": "Kabllo 4 përçues",
      "image": "images/materiale/01-kabllo-energjie/kabllo-4-percues.webp"
    },
    {
      "name": "Kabllo 5 përçues",
      "image": "images/materiale/01-kabllo-energjie/kabllo-5-percues.webp"
    },
    {
      "name": "Kabllo fleksibël",
      "image": "images/materiale/01-kabllo-energjie/kabllo-fleksibel.webp"
    },
    {
      "name": "Kabllo pa halogjen",
      "image": "images/materiale/01-kabllo-energjie/kabllo-pa-halogjen.webp"
    },
    {
      "name": "Kabllo për terren",
      "image": "images/materiale/01-kabllo-energjie/kabllo-per-terren.webp"
    }
  ],
  "tela": [
    {
      "name": "Tel fleksibël blu 1,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-blu-1-5mm2.webp"
    },
    {
      "name": "Tel fleksibël blu 2,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-blu-2-5mm2.webp"
    },
    {
      "name": "Tel fleksibël gri 1,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-gri-1-5mm2.webp"
    },
    {
      "name": "Tel fleksibël gri 2,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-gri-2-5mm2.webp"
    },
    {
      "name": "Tel fleksibël kafe 1,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-kafe-1-5mm2.webp"
    },
    {
      "name": "Tel fleksibël kafe 2,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-kafe-2-5mm2.webp"
    },
    {
      "name": "Tel fleksibël verdhë jeshil 1,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-verdhe-jeshil-1-5mm2.webp"
    },
    {
      "name": "Tel fleksibël verdhë jeshil 2,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-verdhe-jeshil-2-5mm2.webp"
    },
    {
      "name": "Tel fleksibël zi 1,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-zi-1-5mm2.webp"
    },
    {
      "name": "Tel fleksibël zi 2,5 mm²",
      "image": "images/materiale/02-tela/tel-fleksibel-zi-2-5mm2.webp"
    }
  ],
  "rrjet-tv-dhe-kamera": [
    {
      "name": "Fisha RJ45",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/fisha-rj45.webp"
    },
    {
      "name": "Kabllo CAT5E",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/kabllo-cat5e.webp"
    },
    {
      "name": "Kabllo CAT6",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/kabllo-cat6.webp"
    },
    {
      "name": "Kabllo HDMI",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/kabllo-hdmi.webp"
    },
    {
      "name": "Kabllo koaksial RG6",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/kabllo-koaksial-rg6.webp"
    },
    {
      "name": "Keystone RJ45",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/keystone-rj45.webp"
    },
    {
      "name": "Konektor BNC",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/konektor-bnc.webp"
    },
    {
      "name": "Patch cord",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/patch-cord.webp"
    },
    {
      "name": "Prizë rrjeti",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/prize-rrjeti.webp"
    },
    {
      "name": "Prizë TV",
      "image": "images/materiale/03-rrjet-tv-dhe-kamera/prize-tv.webp"
    }
  ],
  "tuba-dhe-kanale": [
    {
      "name": "Bashkues tubi",
      "image": "images/materiale/04-tuba-dhe-kanale/bashkues-tubi.webp"
    },
    {
      "name": "Bërryl tubi",
      "image": "images/materiale/04-tuba-dhe-kanale/berryl-tubi.webp"
    },
    {
      "name": "Kanal dyshemeje",
      "image": "images/materiale/04-tuba-dhe-kanale/kanal-dyshemeje.webp"
    },
    {
      "name": "Kanal PVC",
      "image": "images/materiale/04-tuba-dhe-kanale/kanal-pvc.webp"
    },
    {
      "name": "Kapëse tubi",
      "image": "images/materiale/04-tuba-dhe-kanale/kapese-tubi.webp"
    },
    {
      "name": "Tub fleksibël Ø 16 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-fleksibel-d16.webp"
    },
    {
      "name": "Tub fleksibël Ø 20 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-fleksibel-d20.webp"
    },
    {
      "name": "Tub fleksibël Ø 25 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-fleksibel-d25.webp"
    },
    {
      "name": "Tub fleksibël Ø 32 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-fleksibel-d32.webp"
    },
    {
      "name": "Tub fleksibël Ø 40 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-fleksibel-d40.webp"
    },
    {
      "name": "Tub fleksibël Ø 50 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-fleksibel-d50.webp"
    },
    {
      "name": "Tub i ngurtë Ø 16 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-i-ngurte-d16.webp"
    },
    {
      "name": "Tub i ngurtë Ø 20 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-i-ngurte-d20.webp"
    },
    {
      "name": "Tub i ngurtë Ø 25 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-i-ngurte-d25.webp"
    },
    {
      "name": "Tub i ngurtë Ø 32 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-i-ngurte-d32.webp"
    },
    {
      "name": "Tub i ngurtë Ø 40 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-i-ngurte-d40.webp"
    },
    {
      "name": "Tub i ngurtë Ø 50 mm",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-i-ngurte-d50.webp"
    },
    {
      "name": "Tub instalimi",
      "image": "images/materiale/04-tuba-dhe-kanale/tub-instalimi.webp"
    }
  ],
  "kuti-instalimi": [
    {
      "name": "Kapak kutie",
      "image": "images/materiale/05-kuti-instalimi/kapak-kutie.webp"
    },
    {
      "name": "Kuti derivacioni",
      "image": "images/materiale/05-kuti-instalimi/kuti-derivacioni.webp"
    },
    {
      "name": "Kuti dyshemeje",
      "image": "images/materiale/05-kuti-instalimi/kuti-dyshemeje.webp"
    },
    {
      "name": "Kuti hermetike",
      "image": "images/materiale/05-kuti-instalimi/kuti-hermetike.webp"
    },
    {
      "name": "Kuti kartongipsi e mesme",
      "image": "images/materiale/05-kuti-instalimi/kuti-kartongipsi-e-mesme.webp"
    },
    {
      "name": "Kuti kartongipsi e vogël",
      "image": "images/materiale/05-kuti-instalimi/kuti-kartongipsi-e-vogel.webp"
    },
    {
      "name": "Kuti modulare",
      "image": "images/materiale/05-kuti-instalimi/kuti-modulare.webp"
    },
    {
      "name": "Kuti për kartongips",
      "image": "images/materiale/05-kuti-instalimi/kuti-per-kartonxhes.webp"
    },
    {
      "name": "Kuti prizë për mur",
      "image": "images/materiale/05-kuti-instalimi/kuti-prize-per-mur.webp"
    }
  ],
  "automate-dhe-mbrojtje": [
    {
      "name": "Automat 1P",
      "image": "images/materiale/06-automate-dhe-mbrojtje/automat-1p.webp"
    },
    {
      "name": "Automat 2P",
      "image": "images/materiale/06-automate-dhe-mbrojtje/automat-2p.webp"
    },
    {
      "name": "Automat 3P",
      "image": "images/materiale/06-automate-dhe-mbrojtje/automat-3p.webp"
    },
    {
      "name": "Automat 4P",
      "image": "images/materiale/06-automate-dhe-mbrojtje/automat-4p.webp"
    },
    {
      "name": "Çelës kryesor",
      "image": "images/materiale/06-automate-dhe-mbrojtje/celes-kryesor.webp"
    },
    {
      "name": "Diferencial",
      "image": "images/materiale/06-automate-dhe-mbrojtje/diferencial.webp"
    },
    {
      "name": "Mbajtëse siguresë",
      "image": "images/materiale/06-automate-dhe-mbrojtje/mbajtese-sigurese.webp"
    },
    {
      "name": "RCBO",
      "image": "images/materiale/06-automate-dhe-mbrojtje/rcbo.webp"
    },
    {
      "name": "Rele tensioni",
      "image": "images/materiale/06-automate-dhe-mbrojtje/rele-tensioni.webp"
    },
    {
      "name": "Shkarkues mbitensioni",
      "image": "images/materiale/06-automate-dhe-mbrojtje/shkarkues-mbitensioni.webp"
    },
    {
      "name": "Siguresë cilindrike",
      "image": "images/materiale/06-automate-dhe-mbrojtje/sigurese-cilindrike.webp"
    }
  ],
  "kuadro-dhe-aksesore": [
    {
      "name": "Krehër për automate",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kreher-per-automate.webp"
    },
    {
      "name": "Kuadër inkaso 12 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-inkaso-12-module.webp"
    },
    {
      "name": "Kuadër inkaso 18 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-inkaso-18-module.webp"
    },
    {
      "name": "Kuadër inkaso 24 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-inkaso-24-module.webp"
    },
    {
      "name": "Kuadër inkaso 36 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-inkaso-36-module.webp"
    },
    {
      "name": "Kuadër inkaso 4 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-inkaso-4-module.webp"
    },
    {
      "name": "Kuadër inkaso 8 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-inkaso-8-module.webp"
    },
    {
      "name": "Kuadër mural 12 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-mural-12-module.webp"
    },
    {
      "name": "Kuadër mural 18 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-mural-18-module.webp"
    },
    {
      "name": "Kuadër mural 24 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-mural-24-module.webp"
    },
    {
      "name": "Kuadër mural 36 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-mural-36-module.webp"
    },
    {
      "name": "Kuadër mural 4 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-mural-4-module.webp"
    },
    {
      "name": "Kuadër mural 8 module",
      "image": "images/materiale/07-kuadro-dhe-aksesore/kuader-mural-8-module.webp"
    },
    {
      "name": "Shinë DIN",
      "image": "images/materiale/07-kuadro-dhe-aksesore/shine-din.webp"
    }
  ],
  "priza-dhe-celesa": [
    {
      "name": "Buton zileje",
      "image": "images/materiale/08-priza-dhe-celesa/buton-zileje.webp"
    },
    {
      "name": "Çelës devijator",
      "image": "images/materiale/08-priza-dhe-celesa/celes-devijator.webp"
    },
    {
      "name": "Çelës dopio",
      "image": "images/materiale/08-priza-dhe-celesa/celes-dopio.webp"
    },
    {
      "name": "Çelës tek",
      "image": "images/materiale/08-priza-dhe-celesa/celes-tek.webp"
    },
    {
      "name": "Dimmer",
      "image": "images/materiale/08-priza-dhe-celesa/dimmer.webp"
    },
    {
      "name": "Komande grilash",
      "image": "images/materiale/08-priza-dhe-celesa/komande-grilash.webp"
    },
    {
      "name": "Kornize 1 vende",
      "image": "images/materiale/08-priza-dhe-celesa/kornize-1-vende.webp"
    },
    {
      "name": "Kornize 2 vende",
      "image": "images/materiale/08-priza-dhe-celesa/kornize-2-vende.webp"
    },
    {
      "name": "Kornize 3 vende",
      "image": "images/materiale/08-priza-dhe-celesa/kornize-3-vende.webp"
    },
    {
      "name": "Kornize 4 vende",
      "image": "images/materiale/08-priza-dhe-celesa/kornize-4-vende.webp"
    },
    {
      "name": "Prizë dyshe",
      "image": "images/materiale/08-priza-dhe-celesa/prize-dyshe.webp"
    },
    {
      "name": "Prizë me kapak",
      "image": "images/materiale/08-priza-dhe-celesa/prize-me-kapak.webp"
    },
    {
      "name": "Prizë schuko",
      "image": "images/materiale/08-priza-dhe-celesa/prize-schuko.webp"
    },
    {
      "name": "Prizë teke",
      "image": "images/materiale/08-priza-dhe-celesa/prize-teke.webp"
    },
    {
      "name": "Prizë telefoni RJ11",
      "image": "images/materiale/08-priza-dhe-celesa/prize-telefoni-rj11.webp"
    },
    {
      "name": "Prizë TV koaksiale",
      "image": "images/materiale/08-priza-dhe-celesa/prize-tv-koaksiale.webp"
    },
    {
      "name": "Prizë USB",
      "image": "images/materiale/08-priza-dhe-celesa/prize-usb.webp"
    },
    {
      "name": "Suport 3 module",
      "image": "images/materiale/08-priza-dhe-celesa/suport-3-module.webp"
    },
    {
      "name": "Suport 4 module",
      "image": "images/materiale/08-priza-dhe-celesa/suport-4-module.webp"
    },
    {
      "name": "Zile modulare",
      "image": "images/materiale/08-priza-dhe-celesa/zile-modulare.webp"
    }
  ],
  "lidhje-dhe-montim": [
    {
      "name": "Fundore teli",
      "image": "images/materiale/09-lidhje-dhe-montim/fundore-teli.webp"
    },
    {
      "name": "Kapëse muri",
      "image": "images/materiale/09-lidhje-dhe-montim/kapese-muri.webp"
    },
    {
      "name": "Klemë me levë",
      "image": "images/materiale/09-lidhje-dhe-montim/kleme-me-leve.webp"
    },
    {
      "name": "Lidhëse plastike",
      "image": "images/materiale/09-lidhje-dhe-montim/lidhese-plastike.webp"
    },
    {
      "name": "Shirit izolues",
      "image": "images/materiale/09-lidhje-dhe-montim/shirit-izolues.webp"
    },
    {
      "name": "Terminal unazë",
      "image": "images/materiale/09-lidhje-dhe-montim/terminal-unaze.webp"
    },
    {
      "name": "Tub termotkurrës",
      "image": "images/materiale/09-lidhje-dhe-montim/tub-termotkurres.webp"
    }
  ],
  "spote-dhe-llamba": [
    {
      "name": "Kornize spot katrore e bardhë fikse",
      "image": "images/materiale/11-spote-dhe-llamba/kornize-spot-katrore-bardhe-fikse.webp"
    },
    {
      "name": "Kornize spot katrore e bardhë orientueshme",
      "image": "images/materiale/11-spote-dhe-llamba/kornize-spot-katrore-bardhe-orientueshme.webp"
    },
    {
      "name": "Kornize spot katrore e zezë fikse",
      "image": "images/materiale/11-spote-dhe-llamba/kornize-spot-katrore-zeze-fikse.webp"
    },
    {
      "name": "Kornize spot katrore e zezë orientueshme",
      "image": "images/materiale/11-spote-dhe-llamba/kornize-spot-katrore-zeze-orientueshme.webp"
    },
    {
      "name": "Kornize spot e rrumbullakët e bardhë fikse",
      "image": "images/materiale/11-spote-dhe-llamba/kornize-spot-rrumbullaket-bardhe-fikse.webp"
    },
    {
      "name": "Kornize spot e rrumbullakët e bardhë orientueshme",
      "image": "images/materiale/11-spote-dhe-llamba/kornize-spot-rrumbullaket-bardhe-orientueshme.webp"
    },
    {
      "name": "Kornize spot e rrumbullakët e zezë fikse",
      "image": "images/materiale/11-spote-dhe-llamba/kornize-spot-rrumbullaket-zeze-fikse.webp"
    },
    {
      "name": "Kornize spot e rrumbullakët e zezë orientueshme",
      "image": "images/materiale/11-spote-dhe-llamba/kornize-spot-rrumbullaket-zeze-orientueshme.webp"
    },
    {
      "name": "Llambë E14",
      "image": "images/materiale/11-spote-dhe-llamba/llambe-e14.webp"
    },
    {
      "name": "Llambë E27",
      "image": "images/materiale/11-spote-dhe-llamba/llambe-e27.webp"
    },
    {
      "name": "Llambë GU10",
      "image": "images/materiale/11-spote-dhe-llamba/llambe-gu10.webp"
    },
    {
      "name": "Llambë spirale CFL",
      "image": "images/materiale/11-spote-dhe-llamba/llambe-spirale-cfl.webp"
    }
  ],
  "led-dhe-profile": [
    {
      "name": "Difuzor profili LED",
      "image": "images/materiale/12-led-dhe-profile/difuzor-profili-led.webp"
    },
    {
      "name": "Kontrollor LED",
      "image": "images/materiale/12-led-dhe-profile/kontrollor-led.webp"
    },
    {
      "name": "Profil alumini i drejtë",
      "image": "images/materiale/12-led-dhe-profile/profil-alumini-i-drejte.webp"
    },
    {
      "name": "Shirit LED",
      "image": "images/materiale/12-led-dhe-profile/shirit-led.webp"
    },
    {
      "name": "Shirit LED COB",
      "image": "images/materiale/12-led-dhe-profile/shirit-led-cob.webp"
    },
    {
      "name": "Shirit LED RGB",
      "image": "images/materiale/12-led-dhe-profile/shirit-led-rgb.webp"
    },
    {
      "name": "Shirit LED SMD",
      "image": "images/materiale/12-led-dhe-profile/shirit-led-smd.webp"
    },
    {
      "name": "Ushqyes LED",
      "image": "images/materiale/12-led-dhe-profile/ushqyes-led.webp"
    },
    {
      "name": "Ushqyes LED vertikal",
      "image": "images/materiale/12-led-dhe-profile/ushqyes-led-vertikal.webp"
    }
  ],
  "ndricim-i-brendshem": [
    {
      "name": "Llambë tavoline",
      "image": "images/materiale/13-ndricim-i-brendshem/llambe-tavoline.webp"
    },
    {
      "name": "Ndriçues linear",
      "image": "images/materiale/13-ndricim-i-brendshem/ndricues-linear.webp"
    },
    {
      "name": "Ndriçues pasqyre",
      "image": "images/materiale/13-ndricim-i-brendshem/ndricues-pasqyre.webp"
    },
    {
      "name": "Ndriçues për shkallë",
      "image": "images/materiale/13-ndricim-i-brendshem/ndricues-per-shkalle.webp"
    },
    {
      "name": "Panel LED",
      "image": "images/materiale/13-ndricim-i-brendshem/panel-led.webp"
    },
    {
      "name": "Plafoniere",
      "image": "images/materiale/13-ndricim-i-brendshem/plafoniere.webp"
    },
    {
      "name": "Shinë me spote",
      "image": "images/materiale/13-ndricim-i-brendshem/shine-me-spote.webp"
    }
  ],
  "ndricim-i-jashtem": [
    {
      "name": "Ndriçues fasade",
      "image": "images/materiale/14-ndricim-i-jashtem/ndricues-fasade.webp"
    },
    {
      "name": "Ndriçues kopshti",
      "image": "images/materiale/14-ndricim-i-jashtem/ndricues-kopshti.webp"
    },
    {
      "name": "Ndriçues me kunj",
      "image": "images/materiale/14-ndricim-i-jashtem/ndricues-me-kunj.webp"
    },
    {
      "name": "Prozhektor LED",
      "image": "images/materiale/14-ndricim-i-jashtem/prozhektor-led.webp"
    },
    {
      "name": "Prozhektor me sensor",
      "image": "images/materiale/14-ndricim-i-jashtem/prozhektor-me-sensor.webp"
    },
    {
      "name": "Shirit LED për jashtë",
      "image": "images/materiale/14-ndricim-i-jashtem/shirit-led-per-jashte.webp"
    }
  ],
  "komandim-dhe-automatizim": [
    {
      "name": "Kontaktor",
      "image": "images/materiale/15-komandim-dhe-automatizim/kontaktor.webp"
    },
    {
      "name": "Prizë smart",
      "image": "images/materiale/15-komandim-dhe-automatizim/prize-smart.webp"
    },
    {
      "name": "Sensor lëvizjeje",
      "image": "images/materiale/15-komandim-dhe-automatizim/sensor-levizjeje.webp"
    },
    {
      "name": "Termostat",
      "image": "images/materiale/15-komandim-dhe-automatizim/termostat.webp"
    },
    {
      "name": "Zile",
      "image": "images/materiale/15-komandim-dhe-automatizim/zile.webp"
    }
  ],
  "aksesore-dhe-vegla": [
    {
      "name": "Adaptor",
      "image": "images/materiale/16-aksesore-dhe-vegla/adaptor.webp"
    },
    {
      "name": "Fishë industriale",
      "image": "images/materiale/16-aksesore-dhe-vegla/fishe-industriale.webp"
    },
    {
      "name": "Multiprizë",
      "image": "images/materiale/16-aksesore-dhe-vegla/multiprize.webp"
    },
    {
      "name": "Zgjatues",
      "image": "images/materiale/16-aksesore-dhe-vegla/zgjatues.webp"
    }
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
