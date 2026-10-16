import type { Locale } from "./i18n";

// Il sito EV parla a un pubblico diverso dal negozio agricolo: tre lingue
// (Italia, Spagna, Svizzera di lingua spagnola o inglese) e un registro tecnico.
export const evLocales = ["it", "es", "en"] as const;

export const evCopy = {
  it: {
    eyebrow: "Rivenditore autorizzato Teltonika Energy",
    title: "Ricarica elettrica, installata dove serve",
    lead: "Colonnine EVC 2 per casa, azienda e strutture ricettive. Vendita e assistenza per Italia, Spagna e Svizzera.",
    cta: "Richiedi un preventivo",
    specsTitle: "Caratteristiche",
    modelsTitle: "I modelli",
    whyTitle: "Perché EVC 2",
    contactTitle: "Parliamone",
    contactLead:
      "Dicci dove va installata e che potenza ti serve: ti rispondiamo con una proposta.",
    disclaimer:
      "Ca' Paradiso Cagli è rivenditore autorizzato Teltonika Energy per Italia, Spagna e Svizzera. Teltonika ed EVC 2 sono marchi di Teltonika Energy; questo non è un sito ufficiale del produttore.",
    backToShop: "Vai al negozio Ca' Paradiso",
    specs: [
      ["Potenza", "7,4 · 11 · 22 kW"],
      ["Connessione", "Wi-Fi, Ethernet, Bluetooth, 4G LTE"],
      ["Uscita", "Cavo o presa Type 2"],
      ["Protezione", "IP56 polvere e acqua · IK10 urti"],
      ["Temperature", "da −30 °C a +50 °C"],
      ["Garanzia", "36 mesi, estendibile a 60"],
      ["Colori frontale", "cinque finiture, legno incluso"],
      ["Produzione", "Unione Europea"],
    ],
    why: [
      [
        "Bilanciamento del carico",
        "La potenza si distribuisce senza far scattare il contatore.",
      ],
      ["Fotovoltaico", "Ricarica con l'energia che produci, quando ce n'è."],
      [
        "Gestione da remoto",
        "App in 25 lingue, programmazione oraria, statistiche dei consumi.",
      ],
      ["Tiene il tempo", "Pioggia, gelo o afa: resta fuori tutto l'anno."],
    ],
  },
  es: {
    eyebrow: "Distribuidor autorizado Teltonika Energy",
    title: "Recarga eléctrica, instalada donde hace falta",
    lead: "Cargadores EVC 2 para vivienda, empresa y alojamientos. Venta y asistencia en Italia, España y Suiza.",
    cta: "Solicitar presupuesto",
    specsTitle: "Características",
    modelsTitle: "Los modelos",
    whyTitle: "Por qué EVC 2",
    contactTitle: "Hablemos",
    contactLead:
      "Cuéntanos dónde se instala y qué potencia necesitas: te respondemos con una propuesta.",
    disclaimer:
      "Ca' Paradiso Cagli es distribuidor autorizado de Teltonika Energy para Italia, España y Suiza. Teltonika y EVC 2 son marcas de Teltonika Energy; este no es un sitio oficial del fabricante.",
    backToShop: "Ir a la tienda Ca' Paradiso",
    specs: [
      ["Potencia", "7,4 · 11 · 22 kW"],
      ["Conectividad", "Wi-Fi, Ethernet, Bluetooth, 4G LTE"],
      ["Salida", "Cable o toma Type 2"],
      ["Protección", "IP56 polvo y agua · IK10 impactos"],
      ["Temperaturas", "de −30 °C a +50 °C"],
      ["Garantía", "36 meses, ampliable a 60"],
      ["Colores de frontal", "cinco acabados, madera incluida"],
      ["Fabricación", "Unión Europea"],
    ],
    why: [
      [
        "Equilibrio de carga",
        "La potencia se reparte sin saltar el diferencial.",
      ],
      ["Fotovoltaica", "Carga con la energía que produces, cuando la hay."],
      [
        "Gestión remota",
        "App en 25 idiomas, programación horaria, estadísticas de consumo.",
      ],
      [
        "Aguanta la intemperie",
        "Lluvia, hielo o calor: se queda fuera todo el año.",
      ],
    ],
  },
  en: {
    eyebrow: "Authorised Teltonika Energy reseller",
    title: "EV charging, fitted where you need it",
    lead: "EVC 2 chargers for homes, businesses and places that host guests. Sales and support across Italy, Spain and Switzerland.",
    cta: "Request a quote",
    specsTitle: "Specifications",
    modelsTitle: "The range",
    whyTitle: "Why EVC 2",
    contactTitle: "Let's talk",
    contactLead:
      "Tell us where it goes and how much power you need, and we'll come back with a proposal.",
    disclaimer:
      "Ca' Paradiso Cagli is an authorised Teltonika Energy reseller for Italy, Spain and Switzerland. Teltonika and EVC 2 are trademarks of Teltonika Energy; this is not an official manufacturer site.",
    backToShop: "Visit the Ca' Paradiso shop",
    specs: [
      ["Power", "7.4 · 11 · 22 kW"],
      ["Connectivity", "Wi-Fi, Ethernet, Bluetooth, 4G LTE"],
      ["Output", "Type 2 cable or socket"],
      ["Protection", "IP56 dust and water · IK10 impact"],
      ["Temperature", "−30 °C to +50 °C"],
      ["Warranty", "36 months, extendable to 60"],
      ["Front plate", "five finishes, wood included"],
      ["Built in", "the European Union"],
    ],
    why: [
      ["Load balancing", "Power is shared out without tripping your supply."],
      ["Solar ready", "Charge on the energy you generate, while it lasts."],
      [
        "Remote management",
        "App in 25 languages, scheduling, consumption stats.",
      ],
      ["Built for weather", "Rain, frost or heat: it stays outside all year."],
    ],
  },
} satisfies Record<string, unknown>;

export type EvLocale = keyof typeof evCopy;
export function isEvLocale(v: string): v is EvLocale {
  return v in evCopy;
}
export function getEvCopy(locale: Locale) {
  return isEvLocale(locale) ? evCopy[locale] : evCopy.en;
}
