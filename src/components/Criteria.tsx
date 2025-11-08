import { CheckCircle } from 'lucide-react'

const items: string[] = [
  'Avoir une activité existante (entreprise, marque, service)',
  'Être prêt à collaborer activement durant la conception',
  "Avoir un profil LinkedIn actif (publication d'avis après livraison)",
  'Fournir un avis écrit et une courte vidéo (min. 30s)'
]

export default function Criteria() {
  return (
    <section id="criteria" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Critères de sélection</h2>
        <p className="text-gray-600 mt-2">Voici les conditions et critères pris en compte pour sélectionner les 5 bénéficiaires.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-lg card-shadow">
              <CheckCircle className="text-[var(--primary)]" />
              <div className="text-gray-700">{it}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}