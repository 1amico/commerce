import type { Product } from "../products";

// Catalogo rivenduto per conto di Collina delle Fate (Fossombrone).
// Prezzi e disponibilità presi dal listino del produttore il 2026-10-15:
// vanno riallineati quando il produttore li cambia.

export const collinaDelleFate: Product[] = [
  {
    id: "cdf-celeste",
    price: 15.0,
    category: "wine",
    brand: "Collina delle Fate",
    image: "/products/celeste.webp",
    t: {
      it: {
        name: "Celeste",
        description:
          "Chardonnay biologico in purezza dalle colline di Fossombrone. Fresco e di sorprendente finezza.",
      },
      en: {
        name: "Celeste",
        description:
          "Single-varietal organic Chardonnay from the hills of Fossombrone. Fresh, with surprising finesse.",
      },
      fr: {
        name: "Celeste",
        description:
          "Chardonnay biologique en pureté des collines de Fossombrone. Frais et d'une finesse surprenante.",
      },
      de: {
        name: "Celeste",
        description:
          "Sortenreiner Bio-Chardonnay von den Hügeln um Fossombrone. Frisch und überraschend fein.",
      },
      es: {
        name: "Celeste",
        description:
          "Chardonnay ecológico monovarietal de las colinas de Fossombrone. Fresco y de sorprendente finura.",
      },
    },
  },
  {
    id: "cdf-alfresco",
    price: 15.5,
    category: "wine",
    brand: "Collina delle Fate",
    image: "/products/alfresco.webp",
    soldOut: true,
    t: {
      it: {
        name: "Alfresco",
        description:
          "Sauvignon in purezza, annata 2024. Profilo aromatico intenso, da bere giovane.",
      },
      en: {
        name: "Alfresco",
        description:
          "Single-varietal Sauvignon, 2024 vintage. Intensely aromatic, best drunk young.",
      },
      fr: {
        name: "Alfresco",
        description:
          "Sauvignon en pureté, millésime 2024. Profil aromatique intense, à boire jeune.",
      },
      de: {
        name: "Alfresco",
        description:
          "Sortenreiner Sauvignon, Jahrgang 2024. Intensiv aromatisch, jung zu trinken.",
      },
      es: {
        name: "Alfresco",
        description:
          "Sauvignon monovarietal, añada 2024. Perfil aromático intenso, para beber joven.",
      },
    },
  },
  {
    id: "cdf-adagio-atto2-075",
    price: 21.5,
    category: "wine",
    brand: "Collina delle Fate",
    image: "/products/adagio-atto-ii.webp",
    t: {
      it: {
        name: "Adagio Atto II (0,75 L)",
        description:
          "Assemblaggio di Chardonnay delle annate 2024, 2021, 2020 e 2015, affinato tra acciaio e grandi botti.",
      },
      en: {
        name: "Adagio Atto II (0.75 L)",
        description:
          "A blend of Chardonnay from the 2024, 2021, 2020 and 2015 vintages, aged in steel and large casks.",
      },
      fr: {
        name: "Adagio Atto II (0,75 L)",
        description:
          "Assemblage de Chardonnay des millésimes 2024, 2021, 2020 et 2015, élevé en cuve et en grands fûts.",
      },
      de: {
        name: "Adagio Atto II (0,75 L)",
        description:
          "Cuvée aus Chardonnay der Jahrgänge 2024, 2021, 2020 und 2015, ausgebaut in Stahl und großen Fässern.",
      },
      es: {
        name: "Adagio Atto II (0,75 L)",
        description:
          "Ensamblaje de Chardonnay de las añadas 2024, 2021, 2020 y 2015, criado en acero y en grandes barricas.",
      },
    },
  },
  {
    id: "cdf-adagio-atto2-magnum",
    price: 45.0,
    category: "wine",
    brand: "Collina delle Fate",
    image: "/products/adagio-atto-ii.webp",
    t: {
      it: {
        name: "Adagio Atto II — Magnum (1,5 L)",
        description: "Lo stesso assemblaggio di Chardonnay nel formato magnum.",
      },
      en: {
        name: "Adagio Atto II — Magnum (1.5 L)",
        description: "The same Chardonnay blend in magnum format.",
      },
      fr: {
        name: "Adagio Atto II — Magnum (1,5 L)",
        description: "Le même assemblage de Chardonnay en format magnum.",
      },
      de: {
        name: "Adagio Atto II — Magnum (1,5 L)",
        description: "Dieselbe Chardonnay-Cuvée in der Magnumflasche.",
      },
      es: {
        name: "Adagio Atto II — Magnum (1,5 L)",
        description: "El mismo ensamblaje de Chardonnay en formato magnum.",
      },
    },
  },
  {
    id: "cdf-adagio-esperienza-075",
    price: 46.0,
    category: "wine",
    brand: "Collina delle Fate",
    image: "/products/adagio-esperienza.webp",
    t: {
      it: {
        name: "Adagio Esperienza (0,75 L)",
        description:
          "Il vino che raccoglie l'esperienza della cantina dal 2010, fra tradizione e affinamento lungo.",
      },
      en: {
        name: "Adagio Esperienza (0.75 L)",
        description:
          "The wine that gathers the estate's experience since 2010, between tradition and long ageing.",
      },
      fr: {
        name: "Adagio Esperienza (0,75 L)",
        description:
          "Le vin qui réunit l'expérience du domaine depuis 2010, entre tradition et long élevage.",
      },
      de: {
        name: "Adagio Esperienza (0,75 L)",
        description:
          "Der Wein, der die Erfahrung des Weinguts seit 2010 bündelt — Tradition und langer Ausbau.",
      },
      es: {
        name: "Adagio Esperienza (0,75 L)",
        description:
          "El vino que reúne la experiencia de la bodega desde 2010, entre tradición y larga crianza.",
      },
    },
  },
  {
    id: "cdf-adagio-esperienza-magnum",
    price: 97.0,
    category: "wine",
    brand: "Collina delle Fate",
    image: "/products/adagio-esperienza.webp",
    t: {
      it: {
        name: "Adagio Esperienza — Magnum (1,5 L)",
        description:
          "Il formato magnum della selezione più matura della cantina.",
      },
      en: {
        name: "Adagio Esperienza — Magnum (1.5 L)",
        description: "The magnum format of the estate's most mature selection.",
      },
      fr: {
        name: "Adagio Esperienza — Magnum (1,5 L)",
        description:
          "Le format magnum de la sélection la plus mûre du domaine.",
      },
      de: {
        name: "Adagio Esperienza — Magnum (1,5 L)",
        description: "Die Magnumflasche der reifsten Selektion des Weinguts.",
      },
      es: {
        name: "Adagio Esperienza — Magnum (1,5 L)",
        description:
          "El formato magnum de la selección más madura de la bodega.",
      },
    },
  },
  {
    id: "cdf-nina",
    price: 15.0,
    category: "wine",
    brand: "Collina delle Fate",
    image: "/products/nina.webp",
    soldOut: true,
    t: {
      it: {
        name: "Nina",
        description:
          "Pinot Nero biologico in purezza: elegante, con frutto e tannini nobili.",
      },
      en: {
        name: "Nina",
        description:
          "Single-varietal organic Pinot Noir: elegant, with ripe fruit and fine tannins.",
      },
      fr: {
        name: "Nina",
        description:
          "Pinot Noir biologique en pureté : élégant, fruité, aux tanins nobles.",
      },
      de: {
        name: "Nina",
        description:
          "Sortenreiner Bio-Spätburgunder: elegant, fruchtbetont, mit edlen Tanninen.",
      },
      es: {
        name: "Nina",
        description:
          "Pinot Noir ecológico monovarietal: elegante, con fruta y taninos nobles.",
      },
    },
  },
  {
    id: "cdf-arte-sia",
    price: 32.0,
    category: "wine",
    brand: "Collina delle Fate",
    image: "/products/arte-sia.webp",
    t: {
      it: {
        name: "Arte Sìa",
        description:
          "Rosso rubino intenso, frutta nera e note di sottobosco, tannini equilibrati.",
      },
      en: {
        name: "Arte Sìa",
        description:
          "Deep ruby red, black fruit and forest-floor notes, balanced tannins.",
      },
      fr: {
        name: "Arte Sìa",
        description:
          "Rouge rubis intense, fruits noirs et notes de sous-bois, tanins équilibrés.",
      },
      de: {
        name: "Arte Sìa",
        description:
          "Tiefes Rubinrot, dunkle Früchte und Waldbodennoten, ausgewogene Tannine.",
      },
      es: {
        name: "Arte Sìa",
        description:
          "Rojo rubí intenso, fruta negra y notas de sotobosque, taninos equilibrados.",
      },
    },
  },
  {
    id: "cdf-marte-brut-075",
    price: 30.0,
    category: "sparkling",
    brand: "Collina delle Fate",
    image: "/products/marte-extra-brut.webp",
    t: {
      it: {
        name: "M'Arte Extra Brut (0,75 L)",
        description: "Spumante metodo classico della cantina.",
      },
      en: {
        name: "M'Arte Extra Brut (0.75 L)",
        description: "The estate's traditional-method sparkling wine.",
      },
      fr: {
        name: "M'Arte Extra Brut (0,75 L)",
        description: "Le vin effervescent méthode traditionnelle du domaine.",
      },
      de: {
        name: "M'Arte Extra Brut (0,75 L)",
        description:
          "Der Schaumwein des Weinguts nach klassischer Flaschengärung.",
      },
      es: {
        name: "M'Arte Extra Brut (0,75 L)",
        description: "El espumoso método clásico de la bodega.",
      },
    },
  },
  {
    id: "cdf-marte-brut-magnum",
    price: 55.0,
    category: "sparkling",
    brand: "Collina delle Fate",
    image: "/products/marte-extra-brut.webp",
    t: {
      it: {
        name: "M'Arte Extra Brut — Magnum (1,5 L)",
        description: "Metodo classico nel formato magnum.",
      },
      en: {
        name: "M'Arte Extra Brut — Magnum (1.5 L)",
        description: "Traditional method in magnum format.",
      },
      fr: {
        name: "M'Arte Extra Brut — Magnum (1,5 L)",
        description: "Méthode traditionnelle en format magnum.",
      },
      de: {
        name: "M'Arte Extra Brut — Magnum (1,5 L)",
        description: "Klassische Flaschengärung in der Magnumflasche.",
      },
      es: {
        name: "M'Arte Extra Brut — Magnum (1,5 L)",
        description: "Método clásico en formato magnum.",
      },
    },
  },
  {
    id: "cdf-marte-brut-jeroboam",
    price: 157.0,
    category: "sparkling",
    brand: "Collina delle Fate",
    image: "/products/marte-extra-brut.webp",
    t: {
      it: {
        name: "M'Arte Extra Brut — Jeroboam (3 L)",
        description: "Formato da tavolata: tre litri di metodo classico.",
      },
      en: {
        name: "M'Arte Extra Brut — Jeroboam (3 L)",
        description:
          "A format made for a full table: three litres of traditional method.",
      },
      fr: {
        name: "M'Arte Extra Brut — Jéroboam (3 L)",
        description:
          "Un format de grande tablée : trois litres de méthode traditionnelle.",
      },
      de: {
        name: "M'Arte Extra Brut — Jeroboam (3 L)",
        description:
          "Ein Format für die große Tafel: drei Liter klassische Flaschengärung.",
      },
      es: {
        name: "M'Arte Extra Brut — Jeroboam (3 L)",
        description:
          "Un formato para mesa larga: tres litros de método clásico.",
      },
    },
  },
  {
    id: "cdf-marte-brut-mathusalem",
    price: 308.0,
    category: "sparkling",
    brand: "Collina delle Fate",
    image: "/products/marte-extra-brut.webp",
    t: {
      it: {
        name: "M'Arte Extra Brut — Mathusalem (6 L)",
        description: "Sei litri: il formato delle grandi occasioni.",
      },
      en: {
        name: "M'Arte Extra Brut — Methuselah (6 L)",
        description: "Six litres: the bottle for a real occasion.",
      },
      fr: {
        name: "M'Arte Extra Brut — Mathusalem (6 L)",
        description: "Six litres : le format des grandes occasions.",
      },
      de: {
        name: "M'Arte Extra Brut — Methusalem (6 L)",
        description: "Sechs Liter: die Flasche für den großen Anlass.",
      },
      es: {
        name: "M'Arte Extra Brut — Matusalén (6 L)",
        description: "Seis litros: el formato de las grandes ocasiones.",
      },
    },
  },
  {
    id: "cdf-marte-attesa-2015",
    price: 57.0,
    category: "sparkling",
    brand: "Collina delle Fate",
    image: "/products/marte-attesa.webp",
    t: {
      it: {
        name: "M'Arte L'Attesa 2015",
        description: "Metodo classico da lungo affinamento, annata 2015.",
      },
      en: {
        name: "M'Arte L'Attesa 2015",
        description: "Traditional method with extended ageing, 2015 vintage.",
      },
      fr: {
        name: "M'Arte L'Attesa 2015",
        description:
          "Méthode traditionnelle à long vieillissement, millésime 2015.",
      },
      de: {
        name: "M'Arte L'Attesa 2015",
        description:
          "Klassische Flaschengärung mit langer Reifung, Jahrgang 2015.",
      },
      es: {
        name: "M'Arte L'Attesa 2015",
        description: "Método clásico de larga crianza, añada 2015.",
      },
    },
  },
  {
    id: "cdf-marte-attesa-2014",
    price: 60.0,
    category: "sparkling",
    brand: "Collina delle Fate",
    image: "/products/marte-attesa.webp",
    t: {
      it: {
        name: "M'Arte L'Attesa 2014",
        description: "Metodo classico da lungo affinamento, annata 2014.",
      },
      en: {
        name: "M'Arte L'Attesa 2014",
        description: "Traditional method with extended ageing, 2014 vintage.",
      },
      fr: {
        name: "M'Arte L'Attesa 2014",
        description:
          "Méthode traditionnelle à long vieillissement, millésime 2014.",
      },
      de: {
        name: "M'Arte L'Attesa 2014",
        description:
          "Klassische Flaschengärung mit langer Reifung, Jahrgang 2014.",
      },
      es: {
        name: "M'Arte L'Attesa 2014",
        description: "Método clásico de larga crianza, añada 2014.",
      },
    },
  },
  {
    id: "cdf-olio-blend",
    price: 20.5,
    category: "oil",
    brand: "Collina delle Fate",
    image: "/products/olio-blend.webp",
    t: {
      it: {
        name: "Olio EVO Cappuccini Blend",
        description:
          "Olio extravergine di oliva, blend dell'uliveto dei Cappuccini.",
      },
      en: {
        name: "Cappuccini Blend EVO oil",
        description:
          "Extra virgin olive oil, a blend from the Cappuccini grove.",
      },
      fr: {
        name: "Huile d'olive vierge extra Cappuccini Blend",
        description:
          "Huile d'olive vierge extra, assemblage de l'oliveraie des Cappuccini.",
      },
      de: {
        name: "Natives Olivenöl extra Cappuccini Blend",
        description:
          "Natives Olivenöl extra, Cuvée aus dem Olivenhain Cappuccini.",
      },
      es: {
        name: "Aceite AOVE Cappuccini Blend",
        description:
          "Aceite de oliva virgen extra, mezcla del olivar de los Cappuccini.",
      },
    },
  },
  {
    id: "cdf-olio-sinfolio",
    price: 23.0,
    category: "oil",
    brand: "Collina delle Fate",
    image: "/products/olio-sinfolio.webp",
    t: {
      it: {
        name: "Olio EVO Sinfolio",
        description: "Olio extravergine di oliva, selezione Sinfolio.",
      },
      en: {
        name: "Sinfolio EVO oil",
        description: "Extra virgin olive oil, Sinfolio selection.",
      },
      fr: {
        name: "Huile d'olive vierge extra Sinfolio",
        description: "Huile d'olive vierge extra, sélection Sinfolio.",
      },
      de: {
        name: "Natives Olivenöl extra Sinfolio",
        description: "Natives Olivenöl extra, Selektion Sinfolio.",
      },
      es: {
        name: "Aceite AOVE Sinfolio",
        description: "Aceite de oliva virgen extra, selección Sinfolio.",
      },
    },
  },
  {
    id: "cdf-olio-arancia",
    price: 18.5,
    category: "oil",
    brand: "Collina delle Fate",
    image: "/products/olio-arancia.webp",
    t: {
      it: {
        name: "Olio EVO Cappuccini all'arancia",
        description: "Olio extravergine aromatizzato all'arancia.",
      },
      en: {
        name: "Cappuccini EVO oil with orange",
        description: "Extra virgin olive oil flavoured with orange.",
      },
      fr: {
        name: "Huile d'olive vierge extra Cappuccini à l'orange",
        description: "Huile d'olive vierge extra aromatisée à l'orange.",
      },
      de: {
        name: "Natives Olivenöl extra Cappuccini mit Orange",
        description: "Natives Olivenöl extra mit Orangenaroma.",
      },
      es: {
        name: "Aceite AOVE Cappuccini con naranja",
        description: "Aceite de oliva virgen extra aromatizado con naranja.",
      },
    },
  },
  {
    id: "cdf-olio-limone",
    price: 18.5,
    category: "oil",
    brand: "Collina delle Fate",
    image: "/products/olio-limone.webp",
    soldOut: true,
    t: {
      it: {
        name: "Olio EVO Cappuccini al limone",
        description: "Olio extravergine aromatizzato al limone.",
      },
      en: {
        name: "Cappuccini EVO oil with lemon",
        description: "Extra virgin olive oil flavoured with lemon.",
      },
      fr: {
        name: "Huile d'olive vierge extra Cappuccini au citron",
        description: "Huile d'olive vierge extra aromatisée au citron.",
      },
      de: {
        name: "Natives Olivenöl extra Cappuccini mit Zitrone",
        description: "Natives Olivenöl extra mit Zitronenaroma.",
      },
      es: {
        name: "Aceite AOVE Cappuccini con limón",
        description: "Aceite de oliva virgen extra aromatizado con limón.",
      },
    },
  },
  {
    id: "cdf-olio-peperoncino",
    price: 18.5,
    category: "oil",
    brand: "Collina delle Fate",
    image: "/products/olio-peperoncino.webp",
    soldOut: true,
    t: {
      it: {
        name: "Olio EVO Cappuccini al peperoncino",
        description: "Olio extravergine aromatizzato al peperoncino.",
      },
      en: {
        name: "Cappuccini EVO oil with chilli",
        description: "Extra virgin olive oil flavoured with chilli.",
      },
      fr: {
        name: "Huile d'olive vierge extra Cappuccini au piment",
        description: "Huile d'olive vierge extra aromatisée au piment.",
      },
      de: {
        name: "Natives Olivenöl extra Cappuccini mit Chili",
        description: "Natives Olivenöl extra mit Chiliaroma.",
      },
      es: {
        name: "Aceite AOVE Cappuccini con guindilla",
        description: "Aceite de oliva virgen extra aromatizado con guindilla.",
      },
    },
  },
  {
    id: "cdf-olio-basilico",
    price: 18.5,
    category: "oil",
    brand: "Collina delle Fate",
    image: "/products/olio-basilico.webp",
    t: {
      it: {
        name: "Olio EVO Cappuccini al basilico",
        description: "Olio extravergine aromatizzato al basilico.",
      },
      en: {
        name: "Cappuccini EVO oil with basil",
        description: "Extra virgin olive oil flavoured with basil.",
      },
      fr: {
        name: "Huile d'olive vierge extra Cappuccini au basilic",
        description: "Huile d'olive vierge extra aromatisée au basilic.",
      },
      de: {
        name: "Natives Olivenöl extra Cappuccini mit Basilikum",
        description: "Natives Olivenöl extra mit Basilikumaroma.",
      },
      es: {
        name: "Aceite AOVE Cappuccini con albahaca",
        description: "Aceite de oliva virgen extra aromatizado con albahaca.",
      },
    },
  },
];
