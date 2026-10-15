import Footer from "components/layout/footer";
import { ClearCart } from "./clear-cart";

export const metadata = {
  title: "Pagamento Completato",
  description: "Grazie per il tuo ordine",
};

export default function SuccessPage() {
  return (
    <>
      <ClearCart />
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="mb-8 text-6xl">✅</div>
        <h1 className="mb-4 text-4xl font-bold">Pagamento Completato!</h1>
        <p className="mb-8 text-xl text-neutral-600">
          Grazie per aver scelto Ca' Paradiso Cagli
        </p>

        <div className="space-y-4 rounded-lg bg-neutral-100 p-8 text-left">
          <p className="mb-4 text-sm text-neutral-600">
            A breve riceverai un'email di conferma con i dettagli dell'ordine.
          </p>

          <div className="space-y-3">
            <div>
              <h3 className="font-bold">📧 Email di Conferma</h3>
              <p className="text-neutral-600">
                Controlla la tua posta per la ricevuta e le istruzioni
              </p>
            </div>

            <div>
              <h3 className="font-bold">🛏️ Per le Prenotazioni</h3>
              <p className="text-neutral-600">
                Ti scriveremo via email per confermare le date
              </p>
            </div>

            <div>
              <h3 className="font-bold">Contatti</h3>
              <p className="text-neutral-600">
                Ca' Paradiso Cagli<br />
                Email: info@caparadiso.com
              </p>
            </div>
          </div>
        </div>

        <a
          href="/"
          className="mt-8 inline-block rounded bg-black px-6 py-3 text-white hover:bg-neutral-800"
        >
          Torna alla Home
        </a>
      </div>
      <Footer />
    </>
  );
}
