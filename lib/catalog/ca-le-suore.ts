import type { Product } from "../products";

// Catalogo rivenduto per conto di Ca' le Suore (Cagli).
// ATTENZIONE: il produttore non pubblica un listino. Questi prezzi sono una
// stima al 25% in meno rispetto ai vini analoghi di Collina delle Fate, decisa
// il 2026-10-16 in mancanza d'altro: vanno sostituiti col listino vero prima
// di considerarli definitivi.

export const caLeSuore: Product[] = [
  {
    id: "cls-ca-le-suore",
    price: 11.25,
    category: "wine",
    brand: "Ca' le Suore",
    t: {
      it: {
        name: "Ca' Le Suore",
        description:
          "Bianco da uvaggio di trebbiano e malvasia, dalle vigne di Cagli nel Montefeltro.",
      },
      en: {
        name: "Ca' Le Suore",
        description:
          "A white from Trebbiano and Malvasia grapes, grown on the Cagli hills in Montefeltro.",
      },
      fr: {
        name: "Ca' Le Suore",
        description:
          "Un blanc d'assemblage trebbiano et malvasia, des vignes de Cagli dans le Montefeltro.",
      },
      de: {
        name: "Ca' Le Suore",
        description:
          "Weißwein aus Trebbiano und Malvasia, von den Reben bei Cagli im Montefeltro.",
      },
      es: {
        name: "Ca' Le Suore",
        description:
          "Blanco de trebbiano y malvasía, de las viñas de Cagli en el Montefeltro.",
      },
    },
  },
  {
    id: "cls-donna-agnese",
    price: 11.25,
    category: "wine",
    brand: "Ca' le Suore",
    t: {
      it: {
        name: "Donna Agnese",
        description:
          "Bianco 100% Incrocio Bruni 54, vitigno nato da Verdicchio e Sauvignon.",
      },
      en: {
        name: "Donna Agnese",
        description:
          "A white made entirely from Incrocio Bruni 54, a cross of Verdicchio and Sauvignon.",
      },
      fr: {
        name: "Donna Agnese",
        description:
          "Blanc 100 % Incrocio Bruni 54, cépage né du Verdicchio et du Sauvignon.",
      },
      de: {
        name: "Donna Agnese",
        description:
          "Weißwein aus 100 % Incrocio Bruni 54, einer Kreuzung aus Verdicchio und Sauvignon.",
      },
      es: {
        name: "Donna Agnese",
        description:
          "Blanco 100 % Incrocio Bruni 54, variedad nacida del Verdicchio y el Sauvignon.",
      },
    },
  },
  {
    id: "cls-mochetto",
    price: 11.25,
    category: "wine",
    brand: "Ca' le Suore",
    t: {
      it: {
        name: "Mochetto",
        description: "Rosso da uvaggio di Sangiovese e Merlot.",
      },
      en: {
        name: "Mochetto",
        description: "A red blend of Sangiovese and Merlot.",
      },
      fr: {
        name: "Mochetto",
        description: "Rouge d'assemblage Sangiovese et Merlot.",
      },
      de: {
        name: "Mochetto",
        description: "Rotwein aus Sangiovese und Merlot.",
      },
      es: {
        name: "Mochetto",
        description: "Tinto de Sangiovese y Merlot.",
      },
    },
  },
  {
    id: "cls-massimo",
    price: 24.0,
    category: "wine",
    brand: "Ca' le Suore",
    t: {
      it: {
        name: "Massimo",
        description:
          "Rosso di struttura da Sangiovese e Merlot, dalle vigne di Cà Bartolozzo.",
      },
      en: {
        name: "Massimo",
        description:
          "A structured red from Sangiovese and Merlot, from the Cà Bartolozzo vineyard.",
      },
      fr: {
        name: "Massimo",
        description:
          "Rouge de structure, Sangiovese et Merlot, des vignes de Cà Bartolozzo.",
      },
      de: {
        name: "Massimo",
        description:
          "Strukturierter Rotwein aus Sangiovese und Merlot, aus der Lage Cà Bartolozzo.",
      },
      es: {
        name: "Massimo",
        description:
          "Tinto con estructura de Sangiovese y Merlot, de las viñas de Cà Bartolozzo.",
      },
    },
  },
  {
    id: "cls-burano",
    price: 24.0,
    category: "wine",
    brand: "Ca' le Suore",
    t: {
      it: {
        name: "Burano",
        description: "Merlot in purezza.",
      },
      en: {
        name: "Burano",
        description: "Single-varietal Merlot.",
      },
      fr: {
        name: "Burano",
        description: "Merlot en pureté.",
      },
      de: {
        name: "Burano",
        description: "Sortenreiner Merlot.",
      },
      es: {
        name: "Burano",
        description: "Merlot monovarietal.",
      },
    },
  },
  {
    id: "cls-venco",
    price: 11.25,
    category: "wine",
    brand: "Ca' le Suore",
    t: {
      it: {
        name: "Venco",
        description:
          "Rosso della cantina di Ca' le Suore, dalle vigne del comune di Cagli.",
      },
      en: {
        name: "Venco",
        description:
          "A red from the Ca' le Suore cellar, grown in the Cagli countryside.",
      },
      fr: {
        name: "Venco",
        description:
          "Rouge de la cave de Ca' le Suore, des vignes de la commune de Cagli.",
      },
      de: {
        name: "Venco",
        description:
          "Rotwein aus dem Keller von Ca' le Suore, von Reben rund um Cagli.",
      },
      es: {
        name: "Venco",
        description:
          "Tinto de la bodega Ca' le Suore, de las viñas del municipio de Cagli.",
      },
    },
  },
];
