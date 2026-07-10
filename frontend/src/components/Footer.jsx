export default function Footer() {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg text-ivory">
          Isma<span className="text-gold">Campus</span>
        </p>
        <p className="font-body text-sm text-ivory/40 text-center">
          Accompagnement Campus France — Conakry · Rabat · Paris
        </p>
        <div className="flex gap-5 font-body text-sm text-ivory/50">
          <a href="mailto:cherifismaelfr@gmail.com" className="hover:text-ivory focus-ring transition-colors">Email</a>
          <a href="https://wa.me/33773324160" target="_blank" rel="noopener noreferrer" className="hover:text-ivory focus-ring transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
