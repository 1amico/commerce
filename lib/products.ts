import type { Locale } from "./i18n";

type Translated = Record<Locale, { name: string; description: string }>;

export interface Product {
  id: string;
  price: number;
  category: "eggs" | "honey" | "accommodation";
  t: Translated;
}

export interface LocalizedProduct {
  id: string;
  price: number;
  category: Product["category"];
  name: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "uova-001",
    price: 5.0,
    category: "eggs",
    t: {
      it: {
        name: "Uova naturali (confezione da 4)",
        description: "Uova fresche di galline allevate all'aperto, raccolte ogni giorno.",
      },
      en: {
        name: "Free-range eggs (box of 4)",
        description: "Fresh eggs from hens raised outdoors, collected every morning.",
      },
      fr: {
        name: "Œufs fermiers (boîte de 4)",
        description: "Œufs frais de poules élevées en plein air, ramassés chaque jour.",
      },
      de: {
        name: "Eier aus Freilandhaltung (4er-Packung)",
        description: "Frische Eier von Hühnern aus Freilandhaltung, täglich gesammelt.",
      },
      es: {
        name: "Huevos camperos (caja de 4)",
        description: "Huevos frescos de gallinas criadas al aire libre, recogidos cada día.",
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
        description: "Uova fresche di galline allevate all'aperto, raccolte ogni giorno.",
      },
      en: {
        name: "Free-range eggs (box of 6)",
        description: "Fresh eggs from hens raised outdoors, collected every morning.",
      },
      fr: {
        name: "Œufs fermiers (boîte de 6)",
        description: "Œufs frais de poules élevées en plein air, ramassés chaque jour.",
      },
      de: {
        name: "Eier aus Freilandhaltung (6er-Packung)",
        description: "Frische Eier von Hühnern aus Freilandhaltung, täglich gesammelt.",
      },
      es: {
        name: "Huevos camperos (caja de 6)",
        description: "Huevos frescos de gallinas criadas al aire libre, recogidos cada día.",
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
        description: "Uova fresche di galline allevate all'aperto, raccolte ogni giorno.",
      },
      en: {
        name: "Free-range eggs (box of 10)",
        description: "Fresh eggs from hens raised outdoors, collected every morning.",
      },
      fr: {
        name: "Œufs fermiers (boîte de 10)",
        description: "Œufs frais de poules élevées en plein air, ramassés chaque jour.",
      },
      de: {
        name: "Eier aus Freilandhaltung (10er-Packung)",
        description: "Frische Eier von Hühnern aus Freilandhaltung, täglich gesammelt.",
      },
      es: {
        name: "Huevos camperos (caja de 10)",
        description: "Huevos frescos de gallinas criadas al aire libre, recogidos cada día.",
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
    id: "room-001",
    price: 80.0,
    category: "accommodation",
    t: {
      it: {
        name: "Camera matrimoniale",
        description: "Camera con vista sulla campagna, letto matrimoniale e bagno privato.",
      },
      en: {
        name: "Double room",
        description: "Room overlooking the countryside, double bed and private bathroom.",
      },
      fr: {
        name: "Chambre double",
        description: "Chambre avec vue sur la campagne, lit double et salle de bains privée.",
      },
      de: {
        name: "Doppelzimmer",
        description: "Zimmer mit Blick ins Grüne, Doppelbett und eigenem Bad.",
      },
      es: {
        name: "Habitación doble",
        description: "Habitación con vistas al campo, cama de matrimonio y baño privado.",
      },
    },
  },
  {
    id: "room-002",
    price: 50.0,
    category: "accommodation",
    t: {
      it: {
        name: "Camera singola",
        description: "Camera accogliente con letto singolo e bagno privato.",
      },
      en: {
        name: "Single room",
        description: "Cosy room with a single bed and private bathroom.",
      },
      fr: {
        name: "Chambre simple",
        description: "Chambre chaleureuse avec lit simple et salle de bains privée.",
      },
      de: {
        name: "Einzelzimmer",
        description: "Gemütliches Zimmer mit Einzelbett und eigenem Bad.",
      },
      es: {
        name: "Habitación individual",
        description: "Habitación acogedora con cama individual y baño privado.",
      },
    },
  },
  {
    id: "room-003",
    price: 120.0,
    category: "accommodation",
    t: {
      it: {
        name: "Suite",
        description: "Camera da letto separata, TV, frigobar e patio privato.",
      },
      en: {
        name: "Suite",
        description: "Separate bedroom, TV, minibar and a private patio.",
      },
      fr: {
        name: "Suite",
        description: "Chambre séparée, télévision, minibar et patio privé.",
      },
      de: {
        name: "Suite",
        description: "Separates Schlafzimmer, TV, Minibar und eigene Terrasse.",
      },
      es: {
        name: "Suite",
        description: "Dormitorio independiente, TV, minibar y patio privado.",
      },
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function localize(product: Product, locale: Locale): LocalizedProduct {
  return {
    id: product.id,
    price: product.price,
    category: product.category,
    ...product.t[locale],
  };
}

export function getProducts(locale: Locale): LocalizedProduct[] {
  return products.map((p) => localize(p, locale));
}
