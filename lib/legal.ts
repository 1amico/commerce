import type { Locale } from "./i18n";

// Informazioni obbligatorie per la vendita a distanza: chi vende, come si
// paga, come si restituisce, che fine fanno i dati. Un paragrafo per punto,
// in lingua corrente: servono a essere lette, non ad assolvere un obbligo.

export interface LegalDoc {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}

export type LegalSlug = "terms" | "returns" | "privacy";

const UPDATED = "2026-10-16";

const SELLER =
  "Siniscalco Matteo Azienda Agricola, Strada Monte Peruzzo 11, 61043 Cagli (PU)";

export const legalPaths: Record<LegalSlug, Record<Locale, string>> = {
  terms: {
    it: "condizioni",
    en: "terms",
    fr: "conditions",
    de: "agb",
    es: "condiciones",
  },
  returns: {
    it: "recesso",
    en: "returns",
    fr: "retours",
    de: "widerruf",
    es: "devoluciones",
  },
  privacy: {
    it: "privacy",
    en: "privacy",
    fr: "confidentialite",
    de: "datenschutz",
    es: "privacidad",
  },
};

type Docs = Record<LegalSlug, LegalDoc>;

const it: Docs = {
  terms: {
    title: "Condizioni di vendita",
    updated: UPDATED,
    sections: [
      {
        heading: "Chi vende",
        body: `I prodotti sono venduti da ${SELLER}, Italia, che opera con il nome commerciale Ca' Paradiso Cagli. Per qualsiasi cosa: info@caparadiso.com.`,
      },
      {
        heading: "Prezzi",
        body: "I prezzi sono in euro e comprendono l'IVA. Le spese di spedizione si calcolano al pagamento in base al peso e alla destinazione, e le vedi prima di confermare.",
      },
      {
        heading: "L'ordine",
        body: "L'ordine si conclude quando ricevi l'email di conferma. Fino a quel momento possiamo rifiutarlo, per esempio se un articolo è finito: in quel caso ti restituiamo l'intero importo.",
      },
      {
        heading: "Pagamento",
        body: "I pagamenti passano da Stripe. I dati della tua carta non li conserviamo e non transitano dai nostri sistemi.",
      },
      {
        heading: "Consegna",
        body: "Spediamo in Italia e nell'Unione Europea. Vino e bollicine solo in Italia, per via delle accise. I tempi mostrati al pagamento sono stime: il ritardo di un corriere non dipende da noi, ma se un pacco si perde ce ne occupiamo noi.",
      },
      {
        heading: "Soggiorni",
        body: "Le prenotazioni sono richieste soggette a conferma: controlliamo la disponibilità e ti scriviamo. Se le date non sono libere ti restituiamo tutto. Le pulizie finali, da 30 a 60 € secondo l'alloggio, si pagano in struttura.",
      },
      {
        heading: "Alcolici",
        body: "Le bevande alcoliche si vendono solo a maggiorenni, e al pagamento ti viene chiesto di confermarlo.",
      },
    ],
  },
  returns: {
    title: "Recesso e resi",
    updated: UPDATED,
    sections: [
      {
        heading: "Quattordici giorni",
        body: "Puoi restituire quello che hai comprato entro 14 giorni dalla consegna, senza spiegare perché. Scrivi a info@caparadiso.com e ti diciamo come fare.",
      },
      {
        heading: "Cosa non torna indietro",
        body: "La legge esclude dal recesso gli alimenti deperibili: uova e miele già aperto. Lo stesso vale per le bottiglie aperte. Miele e vino ancora sigillati si possono restituire.",
      },
      {
        heading: "Il rimborso",
        body: "Quando il reso arriva, rimborsiamo entro 14 giorni con lo stesso mezzo con cui hai pagato. La spedizione di ritorno è a tuo carico, tranne quando l'articolo è arrivato rotto o sbagliato: in quel caso paghiamo noi.",
      },
      {
        heading: "Se arriva rotto",
        body: "Fotografa il pacco e il contenuto e scrivici subito. Sostituiamo o rimborsiamo senza discutere.",
      },
      {
        heading: "Soggiorni",
        body: "Per gli alloggi con date fissate il recesso di 14 giorni non si applica, come per tutti i servizi di questo tipo. Valgono le condizioni di cancellazione che trovi nella conferma.",
      },
    ],
  },
  privacy: {
    title: "Privacy",
    updated: UPDATED,
    sections: [
      {
        heading: "Chi tratta i dati",
        body: `Il titolare è ${SELLER}. Per ogni richiesta: info@caparadiso.com.`,
      },
      {
        heading: "Che cosa raccogliamo",
        body: "Soltanto quello che serve a spedirti un ordine: nome, indirizzo, email. Li inserisci nella pagina di pagamento di Stripe, che ce li trasmette.",
      },
      {
        heading: "Pagamenti",
        body: "I dati della carta li tratta Stripe Payments Europe come responsabile. Noi vediamo l'esito e le ultime cifre della carta, nient'altro.",
      },
      {
        heading: "Per quanto tempo",
        body: "I dati degli ordini restano dieci anni, come impone la normativa fiscale.",
      },
      {
        heading: "Cookie",
        body: "Un cookie tecnico ricorda il carrello. Se arrivi dal link di un rivenditore, un secondo cookie conserva il suo codice per 90 giorni. Nessun cookie pubblicitario, nessuna profilazione, nessun tracciamento di terze parti.",
      },
      {
        heading: "I tuoi diritti",
        body: "Puoi chiederci quali dati abbiamo, correggerli, cancellarli o opporti, scrivendo a info@caparadiso.com. Puoi anche rivolgerti al Garante per la protezione dei dati personali.",
      },
    ],
  },
};

const en: Docs = {
  terms: {
    title: "Terms of sale",
    updated: UPDATED,
    sections: [
      {
        heading: "Who sells",
        body: `Products are sold by ${SELLER}, Italy, trading as Ca' Paradiso Cagli. For anything at all: info@caparadiso.com.`,
      },
      {
        heading: "Prices",
        body: "Prices are in euro and include VAT. Shipping is worked out at checkout from weight and destination, and you see it before confirming.",
      },
      {
        heading: "Your order",
        body: "The order is concluded when you receive our confirmation email. Until then we may decline it — if an item has sold out, for instance — and you get the full amount back.",
      },
      {
        heading: "Payment",
        body: "Payments go through Stripe. We don't keep your card details and they never touch our systems.",
      },
      {
        heading: "Delivery",
        body: "We ship to Italy and the European Union. Wine and sparkling wine go to Italy only, because of excise rules. Delivery times at checkout are estimates: a courier's delay isn't ours to control, but a lost parcel is ours to sort out.",
      },
      {
        heading: "Stays",
        body: "Bookings are requests subject to confirmation: we check the calendar and write to you. If the dates aren't free you get everything back. Final cleaning, €30 to €60 depending on the unit, is paid on arrival.",
      },
      {
        heading: "Alcohol",
        body: "Alcoholic drinks are sold to adults only, and you confirm this at checkout.",
      },
    ],
  },
  returns: {
    title: "Returns and cancellation",
    updated: UPDATED,
    sections: [
      {
        heading: "Fourteen days",
        body: "You can return what you bought within 14 days of delivery, without explaining why. Write to info@caparadiso.com and we'll tell you how.",
      },
      {
        heading: "What can't go back",
        body: "The law excludes perishable food: eggs and opened honey. The same goes for opened bottles. Sealed honey and wine can be returned.",
      },
      {
        heading: "Your refund",
        body: "Once the return arrives we refund within 14 days, by the same means you paid. Return postage is yours, except when the item arrived broken or wrong — then it's on us.",
      },
      {
        heading: "If it arrives broken",
        body: "Photograph the parcel and what's inside and write to us straight away. We replace or refund, no argument.",
      },
      {
        heading: "Stays",
        body: "The 14-day right doesn't apply to accommodation with fixed dates, as with all such services. The cancellation terms in your confirmation apply instead.",
      },
    ],
  },
  privacy: {
    title: "Privacy",
    updated: UPDATED,
    sections: [
      {
        heading: "Who holds your data",
        body: `The controller is ${SELLER}, Italy. Any request: info@caparadiso.com.`,
      },
      {
        heading: "What we collect",
        body: "Only what's needed to send you an order: name, address, email. You enter them on Stripe's payment page, which passes them to us.",
      },
      {
        heading: "Payments",
        body: "Card data is handled by Stripe Payments Europe as processor. We see the outcome and the last digits of the card, nothing more.",
      },
      {
        heading: "How long",
        body: "Order data is kept for ten years, as Italian tax law requires.",
      },
      {
        heading: "Cookies",
        body: "A technical cookie remembers your basket. If you arrive from a reseller's link, a second cookie keeps their code for 90 days. No advertising cookies, no profiling, no third-party tracking.",
      },
      {
        heading: "Your rights",
        body: "You can ask what we hold, have it corrected or erased, or object, by writing to info@caparadiso.com. You may also complain to the Italian data protection authority.",
      },
    ],
  },
};

const fr: Docs = {
  terms: {
    title: "Conditions de vente",
    updated: UPDATED,
    sections: [
      {
        heading: "Le vendeur",
        body: `Les produits sont vendus par ${SELLER}, Italie, sous le nom commercial Ca' Paradiso Cagli. Pour toute question : info@caparadiso.com.`,
      },
      {
        heading: "Prix",
        body: "Les prix sont en euros, TVA comprise. Les frais de livraison sont calculés au paiement selon le poids et la destination, et affichés avant la confirmation.",
      },
      {
        heading: "La commande",
        body: "La commande est conclue à la réception de notre e-mail de confirmation. Jusque-là nous pouvons la refuser, par exemple si un article est épuisé : vous êtes alors intégralement remboursé.",
      },
      {
        heading: "Paiement",
        body: "Les paiements passent par Stripe. Nous ne conservons pas vos données bancaires et elles ne transitent pas par nos systèmes.",
      },
      {
        heading: "Livraison",
        body: "Nous expédions en Italie et dans l'Union européenne. Les vins et effervescents uniquement en Italie, pour des raisons d'accises. Les délais affichés sont des estimations : un retard du transporteur ne dépend pas de nous, mais un colis perdu est notre affaire.",
      },
      {
        heading: "Séjours",
        body: "Les réservations sont des demandes soumises à confirmation : nous vérifions les disponibilités et vous écrivons. Si les dates ne sont pas libres, vous êtes intégralement remboursé. Le ménage de fin de séjour, de 30 à 60 € selon le logement, se règle sur place.",
      },
      {
        heading: "Alcool",
        body: "Les boissons alcoolisées sont vendues aux personnes majeures uniquement ; vous le confirmez au moment du paiement.",
      },
    ],
  },
  returns: {
    title: "Rétractation et retours",
    updated: UPDATED,
    sections: [
      {
        heading: "Quatorze jours",
        body: "Vous pouvez retourner votre achat dans les 14 jours suivant la livraison, sans avoir à vous justifier. Écrivez à info@caparadiso.com et nous vous expliquons la marche à suivre.",
      },
      {
        heading: "Ce qui ne se retourne pas",
        body: "La loi exclut les denrées périssables : les œufs et le miel entamé. Il en va de même pour les bouteilles ouvertes. Le miel et le vin encore scellés peuvent être retournés.",
      },
      {
        heading: "Le remboursement",
        body: "Dès réception du retour, nous remboursons sous 14 jours par le moyen que vous avez utilisé. Les frais de renvoi sont à votre charge, sauf si l'article est arrivé cassé ou erroné : ils sont alors pour nous.",
      },
      {
        heading: "Si le colis arrive abîmé",
        body: "Photographiez le colis et son contenu et écrivez-nous rapidement. Nous remplaçons ou remboursons, sans discuter.",
      },
      {
        heading: "Séjours",
        body: "Le droit de rétractation de 14 jours ne s'applique pas aux hébergements à dates fixées, comme pour tous les services de ce type. Les conditions d'annulation de votre confirmation s'appliquent.",
      },
    ],
  },
  privacy: {
    title: "Confidentialité",
    updated: UPDATED,
    sections: [
      {
        heading: "Responsable du traitement",
        body: `Le responsable est ${SELLER}, Italie. Pour toute demande : info@caparadiso.com.`,
      },
      {
        heading: "Ce que nous collectons",
        body: "Uniquement ce qu'il faut pour vous expédier une commande : nom, adresse, e-mail. Vous les saisissez sur la page de paiement Stripe, qui nous les transmet.",
      },
      {
        heading: "Paiements",
        body: "Les données bancaires sont traitées par Stripe Payments Europe, sous-traitant. Nous ne voyons que le résultat et les derniers chiffres de la carte.",
      },
      {
        heading: "Durée",
        body: "Les données de commande sont conservées dix ans, comme l'exige la réglementation fiscale italienne.",
      },
      {
        heading: "Cookies",
        body: "Un cookie technique retient votre panier. Si vous arrivez par le lien d'un revendeur, un second cookie conserve son code pendant 90 jours. Aucun cookie publicitaire, aucun profilage, aucun traceur tiers.",
      },
      {
        heading: "Vos droits",
        body: "Vous pouvez demander quelles données nous détenons, les faire rectifier ou effacer, ou vous y opposer, en écrivant à info@caparadiso.com. Vous pouvez aussi saisir l'autorité italienne de protection des données.",
      },
    ],
  },
};

const de: Docs = {
  terms: {
    title: "Verkaufsbedingungen",
    updated: UPDATED,
    sections: [
      {
        heading: "Wer verkauft",
        body: `Die Produkte verkauft ${SELLER}, Italien, unter dem Namen Ca' Paradiso Cagli. Für alles Weitere: info@caparadiso.com.`,
      },
      {
        heading: "Preise",
        body: "Die Preise verstehen sich in Euro inklusive Mehrwertsteuer. Der Versand wird beim Bezahlen nach Gewicht und Ziel berechnet und vor der Bestätigung angezeigt.",
      },
      {
        heading: "Die Bestellung",
        body: "Die Bestellung kommt mit unserer Bestätigungsmail zustande. Bis dahin können wir sie ablehnen, etwa wenn ein Artikel ausverkauft ist — dann erhalten Sie den vollen Betrag zurück.",
      },
      {
        heading: "Zahlung",
        body: "Die Zahlung läuft über Stripe. Ihre Kartendaten speichern wir nicht, sie berühren unsere Systeme überhaupt nicht.",
      },
      {
        heading: "Lieferung",
        body: "Wir versenden nach Italien und in die Europäische Union. Wein und Schaumwein wegen der Verbrauchsteuer nur innerhalb Italiens. Die angezeigten Zeiten sind Schätzungen: eine Verzögerung des Zustellers liegt nicht bei uns, ein verlorenes Paket schon.",
      },
      {
        heading: "Übernachtungen",
        body: "Buchungen sind Anfragen unter Vorbehalt: wir prüfen die Verfügbarkeit und melden uns. Sind die Daten belegt, erhalten Sie alles zurück. Die Endreinigung, je nach Unterkunft 30 bis 60 €, wird vor Ort bezahlt.",
      },
      {
        heading: "Alkohol",
        body: "Alkoholische Getränke geben wir nur an Volljährige ab; beim Bezahlen bestätigen Sie das.",
      },
    ],
  },
  returns: {
    title: "Widerruf und Rücksendung",
    updated: UPDATED,
    sections: [
      {
        heading: "Vierzehn Tage",
        body: "Sie können das Gekaufte innerhalb von 14 Tagen nach Erhalt zurückgeben, ohne Begründung. Schreiben Sie an info@caparadiso.com, wir sagen Ihnen wie.",
      },
      {
        heading: "Was nicht zurückgeht",
        body: "Vom Widerruf ausgenommen sind leicht verderbliche Lebensmittel: Eier und geöffneter Honig. Dasselbe gilt für geöffnete Flaschen. Versiegelter Honig und Wein können zurück.",
      },
      {
        heading: "Die Erstattung",
        body: "Sobald die Rücksendung eintrifft, erstatten wir innerhalb von 14 Tagen auf demselben Weg, auf dem Sie bezahlt haben. Das Rückporto tragen Sie, außer die Ware kam beschädigt oder falsch an — dann tragen wir es.",
      },
      {
        heading: "Wenn etwas zerbrochen ankommt",
        body: "Fotografieren Sie Paket und Inhalt und schreiben Sie uns zeitnah. Wir ersetzen oder erstatten, ohne Diskussion.",
      },
      {
        heading: "Übernachtungen",
        body: "Für Unterkünfte mit festem Datum gilt das 14-tägige Widerrufsrecht nicht, wie bei allen Dienstleistungen dieser Art. Es gelten die Stornobedingungen aus Ihrer Bestätigung.",
      },
    ],
  },
  privacy: {
    title: "Datenschutz",
    updated: UPDATED,
    sections: [
      {
        heading: "Verantwortlicher",
        body: `Verantwortlich ist ${SELLER}, Italien. Für Anfragen: info@caparadiso.com.`,
      },
      {
        heading: "Was wir erheben",
        body: "Nur was nötig ist, um Ihnen eine Bestellung zu schicken: Name, Anschrift, E-Mail. Sie geben das auf der Zahlungsseite von Stripe ein, die es an uns übermittelt.",
      },
      {
        heading: "Zahlungen",
        body: "Die Kartendaten verarbeitet Stripe Payments Europe als Auftragsverarbeiter. Wir sehen nur das Ergebnis und die letzten Ziffern der Karte.",
      },
      {
        heading: "Wie lange",
        body: "Bestelldaten bewahren wir zehn Jahre auf, wie es das italienische Steuerrecht verlangt.",
      },
      {
        heading: "Cookies",
        body: "Ein technisches Cookie merkt sich den Warenkorb. Kommen Sie über den Link eines Händlers, hält ein zweites Cookie dessen Code 90 Tage. Keine Werbecookies, kein Profiling, keine Tracker Dritter.",
      },
      {
        heading: "Ihre Rechte",
        body: "Sie können erfahren, welche Daten wir haben, sie berichtigen oder löschen lassen oder widersprechen — per E-Mail an info@caparadiso.com. Sie können sich auch an die italienische Datenschutzbehörde wenden.",
      },
    ],
  },
};

const es: Docs = {
  terms: {
    title: "Condiciones de venta",
    updated: UPDATED,
    sections: [
      {
        heading: "Quién vende",
        body: `Los productos los vende ${SELLER}, Italia, con el nombre comercial Ca' Paradiso Cagli. Para cualquier cosa: info@caparadiso.com.`,
      },
      {
        heading: "Precios",
        body: "Los precios están en euros e incluyen el IVA. Los gastos de envío se calculan al pagar según peso y destino, y se muestran antes de confirmar.",
      },
      {
        heading: "El pedido",
        body: "El pedido queda cerrado cuando recibes nuestro correo de confirmación. Hasta entonces podemos rechazarlo, por ejemplo si un artículo se ha agotado: en ese caso te devolvemos el importe íntegro.",
      },
      {
        heading: "Pago",
        body: "Los pagos pasan por Stripe. No guardamos los datos de tu tarjeta y no pasan por nuestros sistemas.",
      },
      {
        heading: "Entrega",
        body: "Enviamos a Italia y a la Unión Europea. El vino y los espumosos solo a Italia, por los impuestos especiales. Los plazos que ves al pagar son estimaciones: el retraso de un transportista no depende de nosotros, pero un paquete perdido sí es cosa nuestra.",
      },
      {
        heading: "Alojamiento",
        body: "Las reservas son solicitudes sujetas a confirmación: comprobamos la disponibilidad y te escribimos. Si las fechas no están libres, te devolvemos todo. La limpieza final, de 30 a 60 € según el alojamiento, se paga en el establecimiento.",
      },
      {
        heading: "Alcohol",
        body: "Las bebidas alcohólicas se venden solo a mayores de edad, y lo confirmas al pagar.",
      },
    ],
  },
  returns: {
    title: "Desistimiento y devoluciones",
    updated: UPDATED,
    sections: [
      {
        heading: "Catorce días",
        body: "Puedes devolver lo que has comprado en los 14 días siguientes a la entrega, sin dar explicaciones. Escribe a info@caparadiso.com y te decimos cómo.",
      },
      {
        heading: "Lo que no se devuelve",
        body: "La ley excluye los alimentos perecederos: huevos y miel ya abierta. Lo mismo vale para las botellas abiertas. La miel y el vino precintados sí se pueden devolver.",
      },
      {
        heading: "El reembolso",
        body: "En cuanto llega la devolución reembolsamos en 14 días, por el mismo medio con el que pagaste. El envío de vuelta corre de tu cuenta, salvo que el artículo llegara roto o equivocado: entonces lo pagamos nosotros.",
      },
      {
        heading: "Si llega roto",
        body: "Fotografía el paquete y el contenido y escríbenos enseguida. Sustituimos o reembolsamos, sin discutir.",
      },
      {
        heading: "Alojamiento",
        body: "El desistimiento de 14 días no se aplica al alojamiento con fechas fijadas, como en todos los servicios de este tipo. Rigen las condiciones de cancelación de tu confirmación.",
      },
    ],
  },
  privacy: {
    title: "Privacidad",
    updated: UPDATED,
    sections: [
      {
        heading: "Quién trata los datos",
        body: `El responsable es ${SELLER}, Italia. Para cualquier solicitud: info@caparadiso.com.`,
      },
      {
        heading: "Qué recogemos",
        body: "Solo lo necesario para enviarte un pedido: nombre, dirección, correo. Los introduces en la página de pago de Stripe, que nos los transmite.",
      },
      {
        heading: "Pagos",
        body: "Los datos de la tarjeta los trata Stripe Payments Europe como encargado. Nosotros vemos el resultado y las últimas cifras de la tarjeta, nada más.",
      },
      {
        heading: "Cuánto tiempo",
        body: "Los datos de pedidos se conservan diez años, como exige la normativa fiscal italiana.",
      },
      {
        heading: "Cookies",
        body: "Una cookie técnica recuerda la cesta. Si llegas desde el enlace de un distribuidor, una segunda cookie guarda su código durante 90 días. Ninguna cookie publicitaria, ningún perfilado, ningún rastreador de terceros.",
      },
      {
        heading: "Tus derechos",
        body: "Puedes preguntarnos qué datos tenemos, corregirlos, borrarlos u oponerte, escribiendo a info@caparadiso.com. También puedes dirigirte a la autoridad italiana de protección de datos.",
      },
    ],
  },
};

const byLocale: Record<Locale, Docs> = { it, en, fr, de, es };

export function getLegalDoc(locale: Locale, slug: LegalSlug): LegalDoc {
  return byLocale[locale][slug];
}

export function legalPath(locale: Locale, slug: LegalSlug): string {
  return `/${legalPaths[slug][locale]}`;
}
