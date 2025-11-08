import { Star, Globe } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-bold">À propos du programme</h2>
          <p className="text-gray-600 mt-3">Le programme "5 Sites Offerts Gratuitement" vise à accompagner 5 personnes ou entreprises dans la digitalisation de leurs services et le renforcement de leur crédibilité en ligne.</p>

          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-3"><Star size={18} className="text-[var(--primary)]" /><span>Accompagnement complet (design, dev, déploiement)</span></li>
            <li className="flex items-start gap-3"><Globe size={18} className="text-[var(--primary)]" /><span>Visibilité et présence en ligne</span></li>
          </ul>
        </div>

        <div>
          <img src="/images/about-illustration.jpg" alt="about" className="rounded-lg object-cover w-full h-64" />
        </div>
      </div>
    </section>
  )
}