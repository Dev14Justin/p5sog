import { motion } from "framer-motion";
import { Target, TrendingUp, Zap, Settings } from "lucide-react";

interface Objective {
  icon: React.ElementType;
  title: string;
  description: string;
}

const objectives: Objective[] = [
  {
    icon: Target,
    title: "Digitaliser les entreprises locales",
    description:
      "Offrir une transformation numérique concrète et adaptée à leur réalité.",
  },
  {
    icon: Zap,
    title: "Automatiser les processus métiers",
    description:
      "Intégrer des solutions numériques et IA qui simplifient et optimisent le quotidien.",
  },
  {
    icon: Settings,
    title: "Renforcer la crédibilité et le professionnalisme",
    description: "Créer des identités digitales fortes et inspirantes.",
  },
  {
    icon: TrendingUp,
    title: "Créer des outils générateurs de revenus",
    description:
      "Concevoir des plateformes capables de soutenir la croissance financière.",
  },
];

interface ObjectiveCardProps extends Objective {
  index: number;
}

const ObjectiveCard = ({ icon: Icon, title, description, index }: ObjectiveCardProps) => {
  const isPrimary = index % 2 === 0;

  const cardClasses = isPrimary
    ? "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary-dark))] transition-colors duration-300"
    : "bg-white text-gray-800 hover:bg-[hsl(var(--primary-light))] transition-colors duration-300";

  const iconClasses = isPrimary
    ? "bg-white text-[hsl(var(--primary))]"
    : "bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`p-6 rounded-xl card-shadow h-full flex flex-col cursor-pointer ${cardClasses}`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconClasses}`}
      >
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <h3
        className={`text-xl font-semibold mb-2 ${
          isPrimary ? "text-[hsl(var(--accent))]" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p className="text-sm opacity-80 flex-grow">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const aboutText = {
    title: "À propos du programme",
    content: [
      "Le Programme P5SOG, initié par Justin MONDJI, vise à rendre la digitalisation plus accessible aux entreprises en voie de développement.",
      "Sa mission principale est d'offrir aux entrepreneurs une présence en ligne professionnelle pour stimuler leur croissance et leur visibilité.",
      "À travers ce programme, nous accompagnons les acteurs économiques à renforcer leur crédibilité, automatiser leurs activités et générer de nouveaux revenus grâce au digital.",
      "Au-delà de la simple création de sites web, le Programme P5SOG s’inscrit dans une démarche durable de transformation numérique. Il s’agit d’un véritable levier de développement, qui favorise l’innovation, la compétitivité et l’autonomie des entreprises face aux défis du marché moderne.",
    ],
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[hsl(var(--primary))] font-bold text-sm tracking-widest uppercase mb-2 flex items-center">
            <span className="w-12 h-0.5 bg-[hsl(var(--accent))] mr-3"></span>
            {aboutText.title}
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Une vision, une ambition.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-600 text-lg">
              {aboutText.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <button className="flex items-center mt-10 group">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <Target size={24} className="text-white" fill="white" />
              </div>
              <span className="ml-3 font-semibold text-gray-800 uppercase tracking-wider text-sm hover:text-[hsl(var(--primary))] transition-colors">
                <a
                  href="https://wa.me/22897791374"
                  target="_blank"
                  rel="noreferrer"
                >
                  En Savoir Plus
                </a>
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {objectives.map((obj, index) => (
              <ObjectiveCard key={index} {...obj} index={index + 1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
