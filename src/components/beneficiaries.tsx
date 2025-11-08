import BeneficiaryCard from './BeneficiaryCard'
import { beneficiaries } from '../../data/beneficiaries'

export default function BeneficiariesList() {
  return (
    <section id="beneficiaries" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Bénéficiaires sélectionnés</h2>
        <p className="text-gray-600 mt-2">Découvrez les projets retenus pour cette première édition.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficiaries.map((b) => (
            <BeneficiaryCard key={b.id} b={b} />
          ))}
        </div>
      </div>
    </section>
  )
}