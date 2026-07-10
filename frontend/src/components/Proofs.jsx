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