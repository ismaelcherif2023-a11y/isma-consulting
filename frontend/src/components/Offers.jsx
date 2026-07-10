const offers = [
  {
    name: 'Dossier',
    price: 'à partir de 80€',
    tagline: 'Pour poser des bases solides',
    features: [
      'Constitution complète du dossier Campus France',
      'Hiérarchisation stratégique des vœux',
      'Relecture et réécriture de la lettre de motivation',
      'Vérification des pièces justificatives'
    ],
    highlight: false
  },
  {
    name: 'Entretien',
    price: 'à partir de 60€',
    tagline: "Pour aborder l'oral avec confiance",
    features: [
      '2 simulations d\u2019entretien filmées',
      'Banque de questions types par filière',
      'Travail sur la posture et l\u2019argumentaire',
      'Débrief détaillé après chaque simulation'
    ],
    highlight: false
  },
  {
    name: 'Complet',
    price: 'à partir de 120€',
    tagline: 'Du dossier au visa, accompagné de bout en bout',
    features: [
      'Tout le pack Dossier + Entretien',
      'Choix des écoles selon votre profil',
      'Suivi jusqu\u2019à la réponse Campus France',
      'Accompagnement démarches visa'
    ],
    highlight: true
  }
]

export default function Offers() {
  return (
    <section id="offres" className="bg-navy py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold mb-4">Nos formules</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory font-medium leading-tight">
            Un accompagnement adapté à où vous en êtes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {offers.map(o => (
            <div
              key={o.name}
              className={`rounded-2xl p-8 flex flex-col ${
                o.highlight
                  ? 'bg-gold text-navy shadow-[0_25px_50px_-12px_rgba(232,176,75,0.35)] md:-translate-y-3'
                  : 'bg-navy-light text-ivory'
              }`}
            >
              {o.highlight && (
                <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-navy text-gold rounded-full px-3 py-1 w-fit mb-4">
                  Le plus choisi
                </span>
              )}
              <h3 className="font-display text-2xl mb-1">{o.name}</h3>
              <p className={`font-body text-sm mb-5 ${o.highlight ? 'text-navy/70' : 'text-ivory/60'}`}>
                {o.tagline}
              </p>
              <p className="font-display text-2xl mb-6">{o.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {o.features.map(f => (
                  <li key={f} className="flex gap-3 font-body text-sm leading-relaxed">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 mt-0.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center rounded-full py-3 font-body font-medium focus-ring transition-colors ${
                  o.highlight
                    ? 'bg-navy text-ivory hover:bg-navy-dark'
                    : 'bg-ivory/10 text-ivory hover:bg-ivory/20'
                }`}
              >
                Choisir cette formule
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
