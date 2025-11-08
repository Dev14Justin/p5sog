import { Phone, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed w-full z-30 bg-white/60 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold">JM</div>
          <div className="font-semibold text-lg">Programme 5 Sites</div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#home" className="hover:underline">Accueil</a>
          <a href="#about" className="hover:underline">À propos</a>
          <a href="#beneficiaries" className="hover:underline">Bénéficiaires</a>
          <a href="#criteria" className="hover:underline">Critères</a>
          <a href="#developer" className="hover:underline">Développeur</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/229XXXXXXXX" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-2 rounded-md text-black font-medium"> 
            <Phone size={16}/> Contact
          </a>

          <button className="md:hidden p-2 rounded-md border">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}