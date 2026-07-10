export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-dark mb-5">
            Accompagnement Campus France
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] text-navy font-medium">
            Votre dossier mérite mieux qu'un refus évitable.
          </h1>
          <p className="font-body text-lg text-navy/70 mt-6 max-w-md">
            Un accompagnement pas à pas — ètude des dossiers, rédaction des lettres de motivations, l'entretien, choix d'école — par quelqu'un qui a fait ce chemin avant vous : Guinée, Maroc, France.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-navy text-ivory px-7 py-3.5 font-body font-medium hover:bg-navy-light transition-colors focus-ring"
            >
              Réserver un audit gratuit
            </a>
            <a
              href="https://wa.me/33773324160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3.5 font-body font-medium text-navy hover:border-navy/40 transition-colors focus-ring"
            >
              Écrire sur WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 font-mono text-xs text-navy/50 uppercase tracking-wide">
            <span>Dossier</span>
            <span className="w-1 h-1 rounded-full bg-navy/30" />
            <span>Entretien</span>
            <span className="w-1 h-1 rounded-full bg-navy/30" />
            <span>Admission</span>
          </div>
        </div>

        {/* Signature element: stylised boarding pass / visa stub */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative bg-navy text-ivory rounded-2xl p-7 shadow-[0_30px_60px_-15px_rgba(20,33,61,0.4)] rotate-2">
            <div className="flex items-center justify-between font-mono text-[0.65rem] tracking-widest uppercase text-ivory/60">
              <span>Carte de candidature</span>
              <span>Isma Campus</span>
            </div>

            <div className="mt-6 flex items-baseline justify-between">
              <div>
                <p className="font-mono text-[0.65rem] text-ivory/50 uppercase tracking-widest">De</p>
                <p className="font-display text-2xl mt-1">Conakry</p>
              </div>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold mx-2 shrink-0">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <div className="text-right">
                <p className="font-mono text-[0.65rem] text-ivory/50 uppercase tracking-widest">Vers</p>
                <p className="font-display text-2xl mt-1">Paris</p>
              </div>
            </div>

            <div className="border-t border-dashed border-ivory/20 my-6" />

            <div className="grid grid-cols-3 gap-3 font-mono text-[0.65rem] uppercase tracking-wide text-ivory/50">
              <div>
                <p>Dossier</p>
                <p className="text-ivory text-sm mt-1">Validé</p>
              </div>
              <div>
                <p>Entretien</p>
                <p className="text-ivory text-sm mt-1">Préparé</p>
              </div>
              <div>
                <p>Statut</p>
                <p className="text-gold text-sm mt-1">Admis</p>
              </div>
            </div>

            {/* Stamp */}
            <div className="visa-stamp absolute -right-5 -bottom-5 w-24 h-24 flex items-center justify-center bg-ivory text-gold-dark rotate-[-12deg] shadow-lg">
              <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-center leading-tight">
                Admis<br />France
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
