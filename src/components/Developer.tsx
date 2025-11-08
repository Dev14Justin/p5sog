
export default function Developer() {
  return (
    <section id="developer" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block p-6 rounded-xl bg-white card-shadow">
          <img src="/images/justin.jpg" alt="Justin" className="w-28 h-28 rounded-full mx-auto object-cover" />
          <h3 className="mt-4 font-semibold">Justin MONDJI</h3>
          <p className="text-sm text-gray-600 mt-2">Développeur Full Stack — Initiateur du programme "5 Sites Offerts Gratuitement"</p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="https://justin-mondji.vercel.app" target="_blank" rel="noreferrer" className="text-[var(--primary)] font-medium">Portfolio</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}