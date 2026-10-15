# 🚀 Ca' Paradiso Cagli - Setup Guida

## ✅ Cosa è stato completato

- ✅ Template Next.js Commerce configurato
- ✅ Catalogo prodotti (Uova, Miele, Ospitalità)
- ✅ Carrello con localStorage
- ✅ Integrazione Stripe per pagamenti
- ✅ Pagine: Shop, Carrello, Success
- ✅ API endpoint `/api/checkout` per Stripe

---

## 📋 Step da fare TU

### 1. **Fai il Push al Repository GitHub**

```bash
# Nel tuo terminale, nella cartella del progetto
git push origin main
```

(O usa SSH se HTTPS non funziona)

---

### 2. **Configura Stripe**

1. Vai su https://stripe.com
2. Crea account con `info@caparadiso.com`
3. Vai a Dashboard → API Keys
4. Copia:
   - **Publishable Key** → `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
   - **Secret Key** → `STRIPE_SECRET_KEY`

---

### 3. **Crea .env.local in locale**

```bash
# Copia .env.example in .env.local
cp .env.example .env.local

# Modifica .env.local con le tue chiavi Stripe:
STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_xxxxx
NEXT_PUBLIC_BASE_URL=https://tuodominio.com
```

---

### 4. **Installa dipendenze**

```bash
npm install
# oppure
pnpm install
```

---

### 5. **Test in locale**

```bash
npm run dev
```

Vai a http://localhost:3000
- Clicca "Negozio"
- Vedi i prodotti (Uova, Miele, Camere)
- Aggiungi al carrello
- Procedi al checkout (Stripe test mode)

---

### 6. **Deploy su Vercel**

#### Opzione A: CLI Vercel (Veloce)
```bash
npm i -g vercel
vercel
```

Segui i passaggi:
- Connetti il tuo GitHub
- Importa il progetto
- Aggiungi le variabili d'ambiente (Stripe keys)

#### Opzione B: Vercel Dashboard
1. Vai a https://vercel.com
2. Clicca "Import Project"
3. Seleziona il tuo repo GitHub
4. Aggiungi Environment Variables:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
   - `NEXT_PUBLIC_BASE_URL`
5. Deploy!

---

## 🎨 Personalizzazioni suggerite

### Aggiungere immagini

Crea folder `/public/images/` e aggiungi:
- `uova.jpg`
- `miele.jpg`
- `room-doppia.jpg`
- `room-singola.jpg`
- `room-suite.jpg`

Poi aggiorna `lib/products.ts` con i percorsi corretti.

### Customizzare il design

- **Colori**: Modifica `app/globals.css`
- **Font**: Guarda `app/layout.tsx` (già con Geist)
- **Logo**: Cambia il logo nella Navbar (`components/layout/navbar.tsx`)

---

## 💳 Test Stripe

Usa le carte di test Stripe:

**Successo:**
```
4242 4242 4242 4242
MM/YY: qualsiasi data futura
CVC: qualsiasi numero a 3 cifre
```

**Fallimento:**
```
4000 0000 0000 0002
```

---

## 📧 Email Configurazione (Prossimo Step)

Per inviare email di conferma ordini:
- Usa Stripe per notifiche (integrato)
- Oppure integra SendGrid/Resend più tardi

---

## 🎯 Prossimi Step Facoltativi

1. **Admin Panel** - Gestisci prodotti e ordini
2. **Booking Calendar** - Stripe Calendar per prenotazioni
3. **Database** - Sposta dati da JSON a Supabase/PostgreSQL
4. **Email Notifications** - Invia email automatiche per ordini
5. **Mobile App** - React Native o PWA

---

## ❓ Domande?

- **Stripe**: https://stripe.com/docs
- **Next.js**: https://nextjs.org/docs
- **Vercel**: https://vercel.com/docs

**Contatti CA' PARADISO:**
- Email: info@caparadiso.com
- Tel: +39 721 787 307

---

**Fatto da:** Claude Haiku 4.5  
**Data:** 2026-10-15  
**Costo totale:** €0/mese (Vercel free tier + Stripe 2.9% commissioni)
