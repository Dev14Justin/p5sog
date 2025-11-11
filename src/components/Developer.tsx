import { motion } from "framer-motion";
import { Linkedin, Link } from "lucide-react";

const devInfo = {
  name: "Justin MONDJI",
  role: "Développeur Full Stack — Initiateur du programme 'P5SOG'",
  mission:
    "Mon Objectif à travers ce programme est simple : apporter de la valeur aux entrepreneurs de mon environnement, en leur offrant les outils pour transformer leurs idées en solutions digitales performantes.",
  portfolioUrl: "https://justin-mondji.vercel.app",
  linkedinUrl: "#",
  imageUrl: "public/justin_mondji.jpg",
};

const DeveloperSection = () => {
  return (
    <section id="developer" className="py-20 bg-[hsl(var(--primary-light))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[hsl(var(--primary))] font-bold text-sm tracking-widest uppercase mb-2">
            <span className="w-12 h-0.5 bg-[hsl(var(--accent))] mr-3 inline-block"></span>
            Le Pilote du Programme
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Le Développeur en Charge
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-1 rounded-2xl overflow-hidden card-shadow h-full min-h-[300px] shadow-lg"
            >
              <img
                src={devInfo.imageUrl}
                alt={`Photo de ${devInfo.name}`}
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/400x400/FEE101/1001F4?text=J.M.";
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-2 p-8 sm:p-12 rounded-2xl bg-[hsl(var(--primary))] text-white card-shadow flex flex-col justify-center"
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[hsl(var(--accent))] mb-2">
                Qui suis-je ?
              </h3>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                {devInfo.name}
              </h2>
              <p className="text-lg font-medium opacity-90 mb-6 border-b border-white border-opacity-30 pb-4">
                {devInfo.role}
              </p>

              <p className="text-base sm:text-lg mb-8 italic">
                {devInfo.mission}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <a
                  href={devInfo.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[hsl(var(--accent))] p-2 px-4 rounded-full text-[hsl(var(--primary))] text-center justify-center font-bold hover:text-black hover:bg-white ransition-colors duration-200 group"
                >
                  <Link
                    size={20}
                    className="mr-2 group-hover:scale-110 transition-transform"
                  />
                  <span>Découvrez mon portfolio</span>
                </a>

                <a
                  href={devInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Accéder au profil LinkedIn"
                  className="w-10 h-10 rounded-full bg-white text-[hsl(var(--primary))] flex items-center justify-center shadow-lg hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary-dark))] transition-all duration-300"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
