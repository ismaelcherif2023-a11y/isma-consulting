export default function Why() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark mb-4">Pourquoi nous</p>
        <h2 className="font-display text-3xl md:text-4xl text-navy font-medium leading-tight mb-6">
          On ne vous vend pas une méthode théorique. On vous montre le chemin qu'on a pris.
        </h2>
        <p className="font-body text-navy/70 leading-relaxed mb-4">
          Ce parcours, Conakry → Rabat → Paris, on l'a vécu de l'intérieur : les démarches, les doutes,
          les dossiers à refaire. C'est cette expérience concrète qui structure chaque accompagnement,
          pas un modèle générique copié d'un guide en ligne.
        </p>
        <p className="font-body text-navy/70 leading-relaxed">
          Aujourd'hui en alternance dans une école d'ingénierie informatique à Paris, on connaît aussi
          le système français vu de l'intérieur — ses attentes, ses codes, ses délais.
        </p>
      </div>

      <div className="bg-ivory border border-navy/10 rounded-2xl p-8">
        <div className="font-mono text-[0.65rem] uppercase tracking-widest text-navy/40 mb-6">Le parcours suivi</div>
        <ol className="space-y-6">
          {[
            { place: 'Conakry, Guinée', role: 'Point de départ' },
            { place: 'Rabat, Maroc', role: 'Formation supérieure' },
            { place: 'Paris, France', role: 'École d\u2019ingénierie, en alternance' }
          ].map((step, i) => (
            <li key={step.place} className="flex items-center gap-4">
              <span className="visa-stamp w-11 h-11 flex items-center justify-center text-navy shrink-0 font-mono text-xs">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-lg text-navy">{step.place}</p>
                <p className="font-body text-sm text-navy/55">{step.role}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
