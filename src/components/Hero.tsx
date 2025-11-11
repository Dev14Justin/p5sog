import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BackgroundAnimation from "./BackgroundAnimation";

const HeroSection = () => {
  const name = "P5SOG";
  const title =
    "Programme de digitalisation des projets en développement";
  const subtitle =
    "Découvrez les candidats retenus et les projets qui profiteront d’une transformation digitale complète.";

  return (
    <section id="Hero" className="w-full py-4 sm:py-6 lg:py-8">
      <div className="relative flex flex-col items-center justify-center mx-4 sm:mx-6 lg:mx-10 p-8 sm:p-12 md:p-16 lg:p-20 text-center text-white bg-[hsl(var(--primary))] overflow-hidden rounded-lg shadow-lg">
        <BackgroundAnimation />

        <div className="relative z-10 flex flex-col items-center max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-4xl font-regular mb-4"
          >
            {name}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl opacity-90 mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[hsl(var(--accent))] text-black font-bold py-3 px-8 rounded-full text-lg hover:text-white hover:bg-[hsl(var(--accent-dark))] transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => console.log("Voir les bénéficiaires cliqué !")}
          >
            <a href="#beneficiaries">Voir les bénéficiaires</a>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          className="absolute bottom-5 z-10"
        >
          <ChevronDown size={48} className="text-white opacity-80" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
