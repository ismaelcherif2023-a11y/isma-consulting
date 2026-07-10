import { useState } from 'react'

const faqs = [
  {
    q: 'Combien coûte l\u2019accompagnement ?',
    a: 'Nos formules démarrent à 60€ pour la préparation à l\u2019entretien seul, jusqu\u2019à 120€ pour l\u2019accompagnement complet dossier + entretien + suivi visa. Le tarif exact dépend de votre profil, discuté lors de l\u2019audit gratuit.'
  },
  {
    q: 'Combien de temps dure l\u2019accompagnement ?',
    a: 'En général entre 3 et 6 semaines, selon la formule choisie et le calendrier Campus France de votre pays.'
  },
  {
    q: 'Pour quels pays travaillez-vous ?',
    a: 'Nous accompagnons principalement les candidats de Guinée, du Maroc et d\u2019Afrique francophone, mais la méthode s\u2019applique à toute procédure Campus France.'
  },
  {
    q: 'Est-ce que vous garantissez l\u2019admission ?',
    a: 'Non, personne ne peut garantir une admission. On maximise vos chances en travaillant chaque point du dossier et de l\u2019entretien qui dépend de vous.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
      <div className="max-w-xl mb-12">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark mb-4">Questions fréquentes</p>
        <h2 className="font-display text-3xl md:text-4xl text-navy font-medium leading-tight">
          Avant de vous lancer.
        </h2>
      </div>

      <div className="max-w-2xl divide-y divide-navy/10 border-t border-b border-navy/10">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q}>
              <button
                className="w-full flex items-center justify-between py-5 text-left focus-ring"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="font-body font-medium text-navy pr-4">{item.q}</span>
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`shrink-0 text-navy/50 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              {isOpen && (
                <p className="font-body text-navy/65 leading-relaxed pb-5 pr-8">{item.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
