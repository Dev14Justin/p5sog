import { motion } from 'framer-motion'
import type { Beneficiary } from '../../data/beneficiary'

type Props = { b: Beneficiary }

export default function BeneficiaryCard({ b }: Props) {
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white rounded-xl p-4 card-shadow">
      <div className="flex items-center gap-4">
        <img src={b.image} alt={b.name} className="h-20 w-20 rounded-md object-cover" />
        <div>
          <h4 className="font-semibold">{b.name}</h4>
          <div className="text-sm text-gray-500">{b.role}</div>
        </div>
      </div>
      <p className="mt-3 text-gray-600 text-sm">{b.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-gray-500">Projet : {b.project}</div>
        <a href={b.link || '#'} className="text-[var(--primary)] text-sm font-medium">Voir</a>
      </div>
    </motion.div>
  )
}