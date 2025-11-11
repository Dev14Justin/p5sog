import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  MessageSquare,
  Video,
  CheckCircle,
  Handshake,
} from "lucide-react";

const criteriaData = [
  {
    icon: Linkedin,
    title: "Compte LinkedIn Actif",
    description:
      "Disposer d'un compte LinkedIn 'actif' et s'engager à publier un post après la livraison du site.",
    number: "01",
  },
  {
    icon: MessageSquare,
    title: "Avis Écrit (WhatsApp)",
    description:
      "Être prêt(e) à partager un avis écrit par message WhatsApp sur le site réalisé et l'expérience de collaboration.",
    number: "02",
  },
  {
    icon: Video,
    title: "Témoignage Vidéo (30s+)",
    description:
      "Fournir une courte vidéo d'au moins 30 secondes, partageant votre ressenti sur le programme P5SOG.",
    number: "03",
  },
  {
    icon: CheckCircle,
    title: "Faisabilité du Projet",
    description:
      "Votre projet doit être réalisable techniquement et dans le cadre défini par le programme.",
    number: "04",
  },
  {
    icon: Handshake,
    title: "Engagement et Collaboration",
    description:
      "S'engager à collaborer efficacement et à fournir les éléments nécessaires pour la réalisation de votre projet.",
    number: "05",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const CriteriaStep = ({ icon: Icon, title, description, number, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.15 }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="relative w-20 h-20 mb-4">
        <div className="w-full h-full rounded-full bg-[hsl(var(--primary))] flex items-center justify-center shadow-lg">
          <Icon size={32} className="text-white" />
        </div>

        <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] font-bold flex items-center justify-center text-xs border-2 border-white">
          {number}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 mt-4">{title}</h3>
      <p className="text-sm text-gray-600 max-w-xs">{description}</p>
    </motion.div>
  );
};

const SelectionCriteriaSection = () => {
  return (
    <section id="criteria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[hsl(var(--primary))] font-bold text-sm tracking-widest uppercase mb-2">
            <span className="w-12 h-0.5 bg-[hsl(var(--accent))] mr-3 inline-block"></span>
            Transparence & Engagement
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Les Critères de Sélection du Programme,
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez ci-dessous des critères de sélection sur lesquels la
            sélection a été faite, dans le stricte respect de l'égalité des
            chances et qui garantit la qualité et l'efficacité de notre
            programme P5SOG.
          </p>
        </div>

        <div className="relative flex justify-center w-full">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 mx-16"></div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 relative z-10">
            {criteriaData.map((criteria, index) => (
              <React.Fragment key={criteria.number}>
                <CriteriaStep {...criteria} index={index} />

                {index < criteriaData.length - 1 && (
                  <div className="lg:hidden col-span-1 sm:col-span-2 md:col-span-3 h-px bg-gray-200 mx-auto w-3/4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionCriteriaSection;
