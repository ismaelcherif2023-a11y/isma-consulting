import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#offres', label: 'Nos offres' },
    { href: '#parcours', label: 'Le parcours' },
    { href: '#temoignages', label: 'Témoignages' },
    { href: '#faq', label: 'FAQ' }
  ]

  return (
    <header className="sticky top-0 z-40 bg-ivory/90 backdrop-blur border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#top" className="font-display text-xl font-semibold text-navy focus-ring">
          Isma <span className="text-gold-dark">Campus</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-navy/80">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-navy focus-ring transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-navy text-ivory px-5 py-2 text-sm font-body font-medium hover:bg-navy-light transition-colors focus-ring"
        >
          Audit gratuit
        </a>

        <button
          className="md:hidden text-navy focus-ring"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-navy/10 bg-ivory">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 font-body text-navy">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="focus-ring">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-navy text-ivory px-5 py-2.5 text-sm font-medium focus-ring"
            >
              Audit gratuit
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
