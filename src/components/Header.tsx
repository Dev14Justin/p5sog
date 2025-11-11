import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-30 bg-[hsl(var(--primary-light))]/60 backdrop-blur-md border-b-2 border-[hsl(var(--primary))]">
      <div className=" px-10 flex items-center justify-between h-16 md:h-15">
        <div className="shrink-0 mr-4">
          <div className="flex items-center gap-3">
            <div className="font-semibold text-lg">P5SOG</div>
          </div>
        </div>

        <nav className="hidden md:flex md:grow">
          <ul className="flex grow justify-center flex-wrap items-center">
            <li>
              <a
                onClick={() => handleScroll("Hero")}
                className="relative group font-medium text-sm text-gray-600 hover:text-[hsl(var(--primary))] px-4 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer"
              >
                Accueil
                <span className="absolute left-0 bottom-0 h-0.5 bg-[hsl(var(--primary))] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("about")}
                className="relative group font-medium text-sm text-gray-600 hover:text-[hsl(var(--primary))] px-4 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer"
              >
                À propos
                <span className="absolute left-0 bottom-0 h-0.5 bg-[hsl(var(--primary))] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("beneficiaries")}
                className="relative group font-medium text-sm text-gray-600 hover:text-[hsl(var(--primary))] px-4 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer"
              >
                Bénéficiaires
                <span className="absolute left-0 bottom-0 h-0.5 bg-[hsl(var(--primary))] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("criteria")}
                className="relative group font-medium text-sm text-gray-600 hover:text-[hsl(var(--primary))] px-4 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer"
              >
                Critères
                <span className="absolute left-0 bottom-0 h-0.5 bg-[hsl(var(--primary))] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("developer")}
                className="relative group font-medium text-sm text-gray-600 hover:text-[hsl(var(--primary))] px-4 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer"
              >
                Développeur
                <span className="absolute left-0 bottom-0 h-0.5 bg-[hsl(var(--primary))] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("partnership")}
                className="relative group font-medium text-sm text-gray-600 hover:text-[hsl(var(--primary))] px-4 py-2 flex items-center transition duration-150 ease-in-out cursor-pointer"
              >
                Partenariat
                <span className="absolute left-0 bottom-0 h-0.5 bg-[hsl(var(--primary))] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/22897791374"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[hsl(var(--primary))] px-4 py-2 rounded-md text-white font-medium"
          >
            <Phone size={16} /> Contact
          </a>

          <button
            className="md:hidden p-2 rounded-md border"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t" id="mobile-nav">
          <nav className="flex flex-col p-6 text-sm">
            <a
              onClick={() => handleScroll("Hero")}
              className="py-2 font-medium text-gray-600 hover:text-[hsl(var(--primary))] cursor-pointer"
            >
              Accueil
            </a>
            <a
              onClick={() => handleScroll("about")}
              className="py-2 font-medium text-gray-600 hover:text-[hsl(var(--primary))] cursor-pointer"
            >
              À propos
            </a>
            <a
              onClick={() => handleScroll("beneficiaries")}
              className="py-2 font-medium text-gray-600 hover:text-[hsl(var(--primary))] cursor-pointer"
            >
              Bénéficiaires
            </a>
            <a
              onClick={() => handleScroll("criteria")}
              className="py-2 font-medium text-gray-600 hover:text-[hsl(var(--primary))] cursor-pointer"
            >
              Critères
            </a>
            <a
              onClick={() => handleScroll("developer")}
              className="py-2 font-medium text-gray-600 hover:text-[hsl(var(--primary))] cursor-pointer"
            >
              Développeur
            </a>
            <a
              onClick={() => handleScroll("partnership")}
              className="py-2 font-medium text-gray-600 hover:text-[hsl(var(--primary))] cursor-pointer"
            >
              Partenariat
            </a>
            <div className="mt-4">
              <a
                href="https://wa.me/22897791374"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[hsl(var(--primary))] px-4 py-2 rounded-md text-white font-medium w-full"
              >
                <Phone size={16} /> Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
