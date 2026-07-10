# Envol Campus — Site d'accompagnement Campus France

Site vitrine + formulaire de leads pour l'agence d'accompagnement Campus France (dossier, entretien, choix d'école, suivi visa).

Stack : React/Vite + Tailwind (frontend) · Node/Express + Prisma + PostgreSQL (backend) · Docker (base de données).

---

## 🚀 Démarrage rapide

### 1. Lancer la base de données
docker compose up -d

> Si le port 5432 est déjà pris par un autre projet (ex: Royal Cut), la base tourne ici sur le port **5433**.

### 2. Backend

cd backend
npm install
npx prisma migrate dev --name init
npm run dev

L'API tourne sur **http://localhost:4000**.

### 3. Frontend

Dans un nouveau terminal :

cd frontend
npm install
npm run dev
Le site tourne sur **http://localhost:5173**.

### 4. Voir les leads reçus
Ouvre **http://localhost:5555**, clique sur la table **Lead**.

---

## 📁 Structure du projet
Capture d’écran 2026-07-08 054359.png
il ma donner ca

Vite ne trouve pas le fichier Proofs.jsx — ça veut dire que la commande PowerShell qui devait le créer n'a pas fonctionné correctement (le fichier n'existe pas dans src/components/).

Vérifions d'abord. Ouvre un terminal dans frontend et tape :

dir src\components
Dis-moi si Proofs.jsx apparaît dans la liste ou pas.

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        08/07/2026     04:22           5542 ContactForm.jsx
-a----        08/07/2026     04:22           2577 FAQ.jsx
-a----        08/07/2026     04:22            871 Footer.jsx
-a----        08/07/2026     04:22           2395 Header.jsx
-a----        08/07/2026     04:22           4291 Hero.jsx
-a----        08/07/2026     04:22           3528 Offers.jsx
-a----        08/07/2026     04:22           1476 Problem.jsx
-a----        08/07/2026     04:22           1679 Process.jsx
-a----        08/07/2026     04:22           1761 Testimonials.jsx
-a----        08/07/2026     04:22           1157 WhatsAppButton.jsx
-a----        08/07/2026     04:22           2140 Why.jsx
PS C:\Users\User\Desktop\Campus agency\envol-campus\campus-agency\frontend>

Afficher plus
Confirmé, Proofs.jsx n'existe pas — la commande Out-File n'a pas dû s'exécuter correctement (probablement à cause du bloc @'...'@ copié en plusieurs morceaux, ou d'un caractère qui a cassé le heredoc dans PowerShell).

On va faire plus simple et plus fiable : ouvrir directement un nouveau fichier vide dans VS Code, et toi tu colles le contenu.

Étape 1 — Crée le fichier vide :

New-Item src\components\Proofs.jsx
Étape 2 — Ouvre-le :

code src\components\Proofs.jsx
Étape 3 — Une fois ouvert dans VS Code, colle ce contenu (Ctrl+A pour tout sélectionner s'il y a déjà du texte, puis colle) :

jsx
import { useState } from 'react'

const proofs = [
  { src: '/images/proof-1.jpg', name: 'A. D.', type: 'Admission', destination: 'Lyon', year: '2025' },
  { src: '/images/proof-2.jpg', name: 'M. B.', type: 'Visa étudiant', destination: 'Toulouse', year: '2025' },
  { src: '/images/proof-3.jpg', name: 'F. S.', type: 'Admission', destination: 'Paris', year: '2026' },
  { src: '/images/proof-4.jpg', name: 'K. C.', type: 'Visa étudiant', destination: 'Lille', year: '2026' }
]

function ProofCard({ proof }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative bg-white rounded-xl p-3 pb-6 shadow-[0_15px_35px_-10px_rgba(20,33,61,0.25)] rotate-[-1.5deg] even:rotate-[1.5deg] hover:rotate-0 transition-transform">
      <div className="aspect-[4/5] rounded-md overflow-hidden bg-navy/5 flex items-center justify-center">
        {!failed ? (
          <img
            src={proof.src}
            alt={`${proof.type} obtenu — ${proof.destination}`}
            className="w-full h-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-navy/30 p-4 text-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            <span className="font-mono text-[0.6rem] uppercase tracking-wide">Image à ajouter</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-3 px-1">
        <div>
          <p className="font-body text-sm font-medium text-navy">{proof.name}</p>
          <p className="font-mono text-[0.6rem] uppercase tracking-wide text-navy/50">{proof.destination} · {proof.year}</p>
        </div>
        <span className="visa-stamp w-9 h-9 flex items-center justify-center text-gold-dark shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </div>
      <p className="absolute top-2 right-2 font-mono text-[0.55rem] uppercase tracking-widest bg-navy text-ivory px-2 py-1 rounded-full">
        {proof.type}
      </p>
    </div>
  )
}

export default function Proofs() {
  return (
    <section id="preuves" className="bg-ivory py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark mb-4">Résultats obtenus</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-medium leading-tight">
            Des admissions et des visas réels, pas des promesses.
          </h2>
          <p className="font-body text-navy/60 mt-4">
            Documents partagés avec l'accord des candidats accompagnés, informations personnelles masquées.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {proofs.map(p => (
            <ProofCard key={p.src} proof={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
Sauvegarde (Ctrl+S), puis dis-moi si l'erreur a disparu dans ton navigateur (le site devrait se recharger automatiquement).

Ce site est inaccessible
localhost n'autorise pas la connexion.
Voici quelques conseils :

Vérifier la connexion
[Vérifier le proxy et le pare-feu](chrome-error://chromewebdata/#buttons) ERR_CONNECTION_REFUSED

Diagnostiqué crash serveur, recommandé redémarrage du processus
Diagnostiqué crash serveur, recommandé redémarrage du processus
Ça, c'est différent de l'erreur précédente — "ERR_CONNECTION_REFUSED" veut dire que le serveur Vite lui-même ne tourne plus (pas juste une erreur dans le code).

Retourne voir le terminal où tournait npm run dev (le frontend) et dis-moi ce qu'il affiche. S'il n'affiche plus rien ou que le terminal semble arrêté, relance simplement :

cd "C:\Users\User\Desktop\Campus agency\envol-campus\campus-agency\frontend"
npm run dev
Colle-moi ce que ça affiche.

super ca marche maintenent donne moi un bon reademi  pour ce projet


Orchestrated comprehensive README encompassing setup, structure, and deployment
Orchestrated comprehensive README encompassing setup, structure, and deployment
Voici un README complet et à jour pour le projet, avec toutes les infos utiles (setup, structure, images, déploiement). Je te donne les commandes pour le créer :

Étape 1 — Ouvre le fichier README à la racine du projet (pas dans frontend) :

cd "C:\Users\User\Desktop\Campus agency\envol-campus\campus-agency"
code README.md
Étape 2 — Sélectionne tout (Ctrl+A), supprime, et colle ce contenu :

markdown
# Envol Campus — Site d'accompagnement Campus France

Site vitrine + formulaire de leads pour l'agence d'accompagnement Campus France (dossier, entretien, choix d'école, suivi visa).

Stack : React/Vite + Tailwind (frontend) · Node/Express + Prisma + PostgreSQL (backend) · Docker (base de données).

---

## 🚀 Démarrage rapide

### 1. Lancer la base de données
docker compose up -d


> Si le port 5432 est déjà pris par un autre projet (ex: Royal Cut), la base tourne ici sur le port **5433**.

### 2. Backend
cd backend
npm install
npx prisma migrate dev --name init
npm run dev


L'API tourne sur **http://localhost:4000**.

### 3. Frontend

Dans un nouveau terminal :
cd frontend
npm install
npm run dev


Le site tourne sur **http://localhost:5173**.

### 4. Voir les leads reçus
cd backend
npx prisma studio


Ouvre **http://localhost:5555**, clique sur la table **Lead**.

---

## 📁 Structure du projet
campus-agency/
├── docker-compose.yml → config PostgreSQL
├── frontend/
│ ├── public/images/ → images (résultats, admissions, visas)
│ └── src/
│ ├── App.jsx → assemble toutes les sections
│ └── components/
│ ├── Header.jsx
│ ├── Hero.jsx
│ ├── Problem.jsx
│ ├── Offers.jsx → les 3 formules
│ ├── Why.jsx → légitimité / parcours perso
│ ├── Process.jsx → étapes du parcours client
│ ├── Proofs.jsx → galerie admissions/visas obtenus
│ ├── Testimonials.jsx
│ ├── FAQ.jsx
│ ├── ContactForm.jsx → envoie vers l'API
│ ├── Footer.jsx
│ └── WhatsAppButton.jsx
└── backend/
├── server.js → API Express (/api/leads)
├── prisma/schema.prisma → modèle Lead
└── .env → config (non versionné)


---

## ✏️ Personnalisation

| Élément | Fichier | Quoi changer |
|---|---|---|
| Numéro WhatsApp | `Hero.jsx`, `WhatsAppButton.jsx`, `Footer.jsx` | remplacer `33773324160` |
| Tarifs des formules | `Offers.jsx` | modifier `price` et `features` |
| Témoignages | `Testimonials.jsx` | remplacer par de vrais retours |
| Résultats (admissions/visas) | `Proofs.jsx` + `public/images/` | voir section ci-dessous |
| FAQ | `FAQ.jsx` | ajouter/modifier les questions |

### Ajouter une image de résultat (admission / visa)

1. **Anonymise le document** : masque numéro de dossier, passeport, adresse. Garde éventuellement juste les initiales.
2. Dépose l'image dans `frontend/public/images/` (ex: `proof-5.jpg`)
3. Dans `Proofs.jsx`, ajoute une ligne au tableau `proofs` :

```js
{ src: '/images/proof-5.jpg', name: 'X. Y.', type: 'Admission', destination: 'Bordeaux', year: '2026' }
```

⚠️ Publie uniquement avec l'accord explicite du candidat concerné.

---

## 📧 Activer les notifications email (optionnel)

Dans `backend/.env`, remplis les identifiants SMTP (Brevo par exemple) :
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=ton_identifiant
SMTP_PASS=ton_mot_de_passe


Tant que ces champs sont vides, les leads sont bien enregistrés en base mais aucun email n'est envoyé.

---

## 🌐 Déploiement

- **Frontend** : Vercel ou Netlify — build avec `npm run build` dans `frontend/`
- **Backend + Postgres** : Railway ou Render (déploiement Docker), ou VPS

---

## 🐛 Problèmes fréquents

| Erreur | Cause probable | Solution |
|---|---|---|
| `port is already allocated` | Un autre Postgres tourne déjà sur 5432 | Utiliser le port 5433 (déjà configuré) |
| `ERR_CONNECTION_REFUSED` sur localhost:5173 | Le serveur `npm run dev` (frontend) n'est plus lancé | Relancer `npm run dev` dans `frontend/` |
| `Failed to resolve import` | Fichier composant manquant ou mal nommé | Vérifier avec `dir src\components` que le fichier existe |
| `EBUSY` en supprimant `node_modules` | VS Code garde des fichiers ouverts/verrouillés | Fermer VS Code puis relancer la suppression |







