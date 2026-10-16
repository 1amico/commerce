import { caLeSuore } from "./catalog/ca-le-suore";
import { collinaDelleFate } from "./catalog/collina-delle-fate";
import { teltonika } from "./catalog/teltonika";
import { fetchCatalogue } from "./catalog/sheet";
import type { Locale } from "./i18n";

type Translated = Record<Locale, { name: string; description: string }>;

export type Category =
  | "eggs"
  | "honey"
  | "accommodation"
  | "wine"
  | "sparkling"
  | "oil"
  | "ev-charging";

export interface Product {
  id: string;
  price: number;
  category: Category;
  t: Translated;
  image?: string;
  /** Marchio del produttore, quando rivendiamo per conto di qualcun altro. */
  brand?: string;
  soldOut?: boolean;
  /** Prodotti senza listino pubblico: si richiede un preventivo, non si comprano. */
  quoteOnly?: boolean;
}

export interface LocalizedProduct {
  id: string;
  price: number;
  category: Category;
  name: string;
  description: string;
  image?: string;
  brand?: string;
  soldOut?: boolean;
  quoteOnly?: boolean;
}

export const products: Product[] = [
  {
    id: "uova-001",
    price: 5.0,
    category: "eggs",
    t: {
      it: {
        name: "Uova naturali (confezione da 4)",
        description:
          "Uova fresche di galline allevate all'aperto, raccolte ogni giorno.",
      },
      en: {
        name: "Free-range eggs (box of 4)",
        description:
          "Fresh eggs from hens raised outdoors, collected every morning.",
      },
      fr: {
        name: "Œufs fermiers (boîte de 4)",
        description:
          "Œufs frais de poules élevées en plein air, ramassés chaque jour.",
      },
      de: {
        name: "Eier aus Freilandhaltung (4er-Packung)",
        description:
          "Frische Eier von Hühnern aus Freilandhaltung, täglich gesammelt.",
      },
      es: {
        name: "Huevos camperos (caja de 4)",
        description:
          "Huevos frescos de gallinas criadas al aire libre, recogidos cada día.",
      },
    },
  },
  {
    id: "uova-002",
    price: 6.5,
    category: "eggs",
    t: {
      it: {
        name: "Uova naturali (confezione da 6)",
        description:
          "Uova fresche di galline allevate all'aperto, raccolte ogni giorno.",
      },
      en: {
        name: "Free-range eggs (box of 6)",
        description:
          "Fresh eggs from hens raised outdoors, collected every morning.",
      },
      fr: {
        name: "Œufs fermiers (boîte de 6)",
        description:
          "Œufs frais de poules élevées en plein air, ramassés chaque jour.",
      },
      de: {
        name: "Eier aus Freilandhaltung (6er-Packung)",
        description:
          "Frische Eier von Hühnern aus Freilandhaltung, täglich gesammelt.",
      },
      es: {
        name: "Huevos camperos (caja de 6)",
        description:
          "Huevos frescos de gallinas criadas al aire libre, recogidos cada día.",
      },
    },
  },
  {
    id: "uova-003",
    price: 10.0,
    category: "eggs",
    t: {
      it: {
        name: "Uova naturali (confezione da 10)",
        description:
          "Uova fresche di galline allevate all'aperto, raccolte ogni giorno.",
      },
      en: {
        name: "Free-range eggs (box of 10)",
        description:
          "Fresh eggs from hens raised outdoors, collected every morning.",
      },
      fr: {
        name: "Œufs fermiers (boîte de 10)",
        description:
          "Œufs frais de poules élevées en plein air, ramassés chaque jour.",
      },
      de: {
        name: "Eier aus Freilandhaltung (10er-Packung)",
        description:
          "Frische Eier von Hühnern aus Freilandhaltung, täglich gesammelt.",
      },
      es: {
        name: "Huevos camperos (caja de 10)",
        description:
          "Huevos frescos de gallinas criadas al aire libre, recogidos cada día.",
      },
    },
  },
  {
    id: "miele-001",
    price: 12.0,
    category: "honey",
    t: {
      it: {
        name: "Miele millefiori (500 g)",
        description:
          "Dal giardino dell'Eden di Ca' Paradiso: millefiori 100% naturale, raccolto dalle nostre arnie.",
      },
      en: {
        name: "Wildflower honey (500 g)",
        description:
          "From the garden of Eden at Ca' Paradiso: 100% natural wildflower honey from our own hives.",
      },
      fr: {
        name: "Miel toutes fleurs (500 g)",
        description:
          "Du jardin d'Éden de Ca' Paradiso : miel toutes fleurs 100 % naturel, récolté dans nos ruches.",
      },
      de: {
        name: "Blütenhonig (500 g)",
        description:
          "Aus dem Garten Eden von Ca' Paradiso: 100 % natürlicher Blütenhonig aus unseren eigenen Bienenstöcken.",
      },
      es: {
        name: "Miel de mil flores (500 g)",
        description:
          "Del jardín del Edén de Ca' Paradiso: miel de mil flores 100 % natural, de nuestras colmenas.",
      },
    },
  },
  {
    id: "miele-002",
    price: 22.0,
    category: "honey",
    t: {
      it: {
        name: "Miele millefiori (1 kg)",
        description:
          "Dal giardino dell'Eden di Ca' Paradiso: millefiori 100% naturale, raccolto dalle nostre arnie.",
      },
      en: {
        name: "Wildflower honey (1 kg)",
        description:
          "From the garden of Eden at Ca' Paradiso: 100% natural wildflower honey from our own hives.",
      },
      fr: {
        name: "Miel toutes fleurs (1 kg)",
        description:
          "Du jardin d'Éden de Ca' Paradiso : miel toutes fleurs 100 % naturel, récolté dans nos ruches.",
      },
      de: {
        name: "Blütenhonig (1 kg)",
        description:
          "Aus dem Garten Eden von Ca' Paradiso: 100 % natürlicher Blütenhonig aus unseren eigenen Bienenstöcken.",
      },
      es: {
        name: "Miel de mil flores (1 kg)",
        description:
          "Del jardín del Edén de Ca' Paradiso: miel de mil flores 100 % natural, de nuestras colmenas.",
      },
    },
  },
  {
    id: "room-divano-singolo",
    price: 29.0,
    category: "accommodation",
    t: {
      it: {
        name: "Divano Letto Singolo",
        description: "Fino a 1 ospite · bagno privato esterno.",
      },
      en: {
        name: "Single Sofa Bed",
        description: "Up to 1 guest · private bathroom outside the room.",
      },
      fr: {
        name: "Canapé-lit simple",
        description:
          "Jusqu'à 1 personne · salle de bains privée à l'extérieur.",
      },
      de: {
        name: "Einzel-Schlafsofa",
        description: "Für 1 Gast · eigenes Bad außerhalb des Zimmers.",
      },
      es: {
        name: "Sofá cama individual",
        description: "Hasta 1 huésped · baño privado fuera de la habitación.",
      },
    },
  },
  {
    id: "room-divano-matrimoniale",
    price: 59.0,
    category: "accommodation",
    t: {
      it: {
        name: "Divano Letto Matrimoniale 1º piano",
        description: "Fino a 2 ospiti · bagno condiviso.",
      },
      en: {
        name: "Double Sofa Bed, first floor",
        description: "Up to 2 guests · shared bathroom.",
      },
      fr: {
        name: "Canapé-lit double, 1er étage",
        description: "Jusqu'à 2 personnes · salle de bains partagée.",
      },
      de: {
        name: "Doppel-Schlafsofa, 1. Stock",
        description: "Bis zu 2 Gäste · Gemeinschaftsbad.",
      },
      es: {
        name: "Sofá cama doble, primera planta",
        description: "Hasta 2 huéspedes · baño compartido.",
      },
    },
  },
  {
    id: "room-800",
    price: 89.0,
    category: "accommodation",
    t: {
      it: {
        name: "Camera 800 matrimoniale con doccia",
        description: "Fino a 2 ospiti · bagno in camera.",
      },
      en: {
        name: "Camera 800 — double with shower",
        description: "Up to 2 guests · en-suite bathroom.",
      },
      fr: {
        name: "Camera 800 — double avec douche",
        description: "Jusqu'à 2 personnes · salle de bains privative.",
      },
      de: {
        name: "Camera 800 — Doppelzimmer mit Dusche",
        description: "Bis zu 2 Gäste · eigenes Bad.",
      },
      es: {
        name: "Camera 800 — doble con ducha",
        description: "Hasta 2 huéspedes · baño en la habitación.",
      },
    },
  },
  {
    id: "room-cromoterapia",
    price: 128.0,
    category: "accommodation",
    t: {
      it: {
        name: "Matrimoniale con vasca cromoterapia",
        description: "Fino a 2 ospiti · bagno in camera.",
      },
      en: {
        name: "Double with chromotherapy bath",
        description: "Up to 2 guests · en-suite bathroom.",
      },
      fr: {
        name: "Double avec baignoire chromothérapie",
        description: "Jusqu'à 2 personnes · salle de bains privative.",
      },
      de: {
        name: "Doppelzimmer mit Farblichttherapie-Wanne",
        description: "Bis zu 2 Gäste · eigenes Bad.",
      },
      es: {
        name: "Doble con bañera de cromoterapia",
        description: "Hasta 2 huéspedes · baño en la habitación.",
      },
    },
  },
  {
    id: "room-folletti",
    price: 100.0,
    category: "accommodation",
    t: {
      it: {
        name: "Matrimoniale Folletti & Cherubini",
        description: "Fino a 2 ospiti · bagno condiviso.",
      },
      en: {
        name: "Folletti & Cherubini double",
        description: "Up to 2 guests · shared bathroom.",
      },
      fr: {
        name: "Chambre double Folletti & Cherubini",
        description: "Jusqu'à 2 personnes · salle de bains partagée.",
      },
      de: {
        name: "Doppelzimmer Folletti & Cherubini",
        description: "Bis zu 2 Gäste · Gemeinschaftsbad.",
      },
      es: {
        name: "Doble Folletti & Cherubini",
        description: "Hasta 2 huéspedes · baño compartido.",
      },
    },
  },
  {
    id: "tenda-eden",
    price: 60.0,
    category: "accommodation",
    t: {
      it: {
        name: "Tenda tripla nel Giardino dell'Eden",
        description: "Fino a 3 ospiti · bagno condiviso.",
      },
      en: {
        name: "Triple tent in the Garden of Eden",
        description: "Up to 3 guests · shared bathroom.",
      },
      fr: {
        name: "Tente triple dans le Jardin d'Éden",
        description: "Jusqu'à 3 personnes · salle de bains partagée.",
      },
      de: {
        name: "Dreibettzelt im Garten Eden",
        description: "Bis zu 3 Gäste · Gemeinschaftsbad.",
      },
      es: {
        name: "Tienda triple en el Jardín del Edén",
        description: "Hasta 3 huéspedes · baño compartido.",
      },
    },
  },
  {
    id: "room-tripla",
    price: 108.0,
    category: "accommodation",
    t: {
      it: {
        name: "Tripla (letto singolo + una piazza e mezza)",
        description: "Fino a 3 ospiti · bagno condiviso.",
      },
      en: {
        name: "Triple (single bed + small double)",
        description: "Up to 3 guests · shared bathroom.",
      },
      fr: {
        name: "Triple (lit simple + lit une place et demie)",
        description: "Jusqu'à 3 personnes · salle de bains partagée.",
      },
      de: {
        name: "Dreibettzimmer (Einzelbett + Französisches Bett)",
        description: "Bis zu 3 Gäste · Gemeinschaftsbad.",
      },
      es: {
        name: "Triple (cama individual + cama de matrimonio pequeña)",
        description: "Hasta 3 huéspedes · baño compartido.",
      },
    },
  },
  {
    id: "piazzola-camper",
    price: 20.0,
    category: "accommodation",
    t: {
      it: {
        name: "Piazzola camper, van o tenda da tetto",
        description: "Fino a 6 ospiti · bagno condiviso.",
      },
      en: {
        name: "Pitch for camper, van or roof tent",
        description: "Up to 6 guests · shared bathroom.",
      },
      fr: {
        name: "Emplacement camping-car, van ou tente de toit",
        description: "Jusqu'à 6 personnes · salle de bains partagée.",
      },
      de: {
        name: "Stellplatz für Wohnmobil, Van oder Dachzelt",
        description: "Bis zu 6 Gäste · Gemeinschaftsbad.",
      },
      es: {
        name: "Parcela para autocaravana, furgoneta o tienda de techo",
        description: "Hasta 6 huéspedes · baño compartido.",
      },
    },
  },
  {
    id: "apt-colline",
    price: 160.0,
    category: "accommodation",
    t: {
      it: {
        name: "Apt. Colline & Cherubini",
        description: "Fino a 7 ospiti · bagno privato esterno.",
      },
      en: {
        name: "Colline & Cherubini apartment",
        description: "Up to 7 guests · private bathroom outside the room.",
      },
      fr: {
        name: "Appartement Colline & Cherubini",
        description:
          "Jusqu'à 7 personnes · salle de bains privée à l'extérieur.",
      },
      de: {
        name: "Apartment Colline & Cherubini",
        description: "Bis zu 7 Gäste · eigenes Bad außerhalb des Zimmers.",
      },
      es: {
        name: "Apartamento Colline & Cherubini",
        description: "Hasta 7 huéspedes · baño privado fuera de la habitación.",
      },
    },
  },
];

/** Catalogo compilato nel codice: vale da riserva se il foglio non risponde. */
export const catalogue: Product[] = [
  ...products,
  ...collinaDelleFate,
  ...caLeSuore,
  ...teltonika,
];

export async function getCatalogue(): Promise<Product[]> {
  return (await fetchCatalogue()) ?? catalogue;
}

export async function getProductById(
  id: string
): Promise<Product | undefined> {
  return (await getCatalogue()).find((p) => p.id === id);
}

export function localize(product: Product, locale: Locale): LocalizedProduct {
  return {
    id: product.id,
    price: product.price,
    category: product.category,
    image: product.image,
    brand: product.brand,
    soldOut: product.soldOut,
    quoteOnly: product.quoteOnly,
    ...product.t[locale],
  };
}

export async function getProducts(
  locale: Locale
): Promise<LocalizedProduct[]> {
  return (await getCatalogue()).map((p) => localize(p, locale));
}
