import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold text-[var(--primary)]">
            Les 5 bénéficiaires du programme <span className="text-[var(--accent)]">5 Sites Offerts Gratuitement</span>
          </motion.h1>

          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="mt-4 text-lg text-gray-700">
            Découvrez les projets qui vont bénéficier d’un accompagnement complet pour leur transformation digitale.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <a href="#beneficiaries" className="px-5 py-3 rounded-md bg-[var(--primary)] text-white font-semibold">Voir les bénéficiaires</a>
            <a href="#about" className="px-5 py-3 rounded-md border border-[var(--primary)] text-[var(--primary)]">En savoir plus</a>
          </div>
        </div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
          <div className="w-full max-w-md card-shadow rounded-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50 p-6">
            <img src="/images/hero-illustration.jpg" alt="illustration" className="w-full h-56 object-cover rounded-md" />
            <div className="mt-4">
              <h3 className="font-semibold">Programme 1ère édition</h3>
              <p className="text-sm text-gray-600 mt-1">Accompagnement, conception, publication.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}