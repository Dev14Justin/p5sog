import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface Beneficiary {
  name: string;
  title: string;
  projectType: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

const beneficiariesData: Beneficiary[] = [
  {
    name: "Damande TOGOU ",
    title: "Ingénieur Agronome",
    projectType: "Site E-commerce et de formation",
    description: " « PAFA » est un programme de formation et d’accompagnement en agroécologie, axé sur les bonnes pratiques agricoles durables et la valorisation commerciale des produits locaux.",
    imageUrl: "./public/b-5.jpg",
    linkedinUrl: "https://www.linkedin.com/in/damande-togou-9b907a334/",
  },
  {
    name: "Elie ADORGLOH",
    title: "Stratège en Acquisition Clients",
    projectType: "Site Vitrine Professionnel",
    description: "« ENTREPRENEURS EPANOUIS » est une agence de marketing spécialisé en Stratégie d'Acquisition de Clients pour les Coachs et Consultants du domaine des relations humaines",
    imageUrl: "./public/b-3.png",
    linkedinUrl: "https://www.linkedin.com/in/eli-koffi-adorgloh/",
  },
  {
    name: "POUWEDEOU ASSIOU",
    title: "Agronome",
    projectType: "Site Professionnel et de Formation",
    description: "« Parlons Business en Agronomie » est un projet qui aide les acteurs agricoles à devenir rentables grâce à la recherche, aux conseils, aux témoignages et à la formation adaptés à leur réalité.",
    imageUrl: "./public/b-1.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/narcisse-assiou-4b853a264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Kossiwa SAMA",
    title: "Senior Internal Audit",
    projectType: "Site de reservation et de ressources",
    description: "« LMA » est un projet qui accompagne les entrepreneurs africains dans les domaines de la gouvernance, des risques, de la finance, de la tech et de l’audit. Elle propose des solutions adaptées pour renforcer leur performance et impact économique",
    imageUrl: "./public/b-4.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kossiwa-sama-cia-486ab292/",
  },
  {
    name: "Kokouvi anani MENSAH ",
    title: "Formateure Auto-Ecole",
    projectType: "Site Vitrine Professionnel ",
    description: "« AUTO ÉCOLE AGRÉÉE LA CAPITALE » est un centre de formation dédié à l’apprentissage de la conduite, offrant un encadrement rigoureux, des méthodes modernes et un accompagnement personnalisé pour garantir la réussite de chaque apprenant.",
    imageUrl: "./public/b-6.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/code-la-capitale-7b6501395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Arsène",
    title: "Artiste Pluridisciplinaire",
    projectType: "Platforme de galerie Numérique",
    description: "« @Le cauris » est un projet qui vise a promouvoir, communiquer et faire connaître les œuvres africaines au monde entier. De la musique à la danse, en passant par l'artisanat et les arts visuels, nous mettons en avant la richesse de l'expression artistique africaine.",
    imageUrl: "./public/b-0.jpg",
    linkedinUrl: "https://www.facebook.com/share/16UtVBHnnL/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

interface BeneficiaryCardProps {
  beneficiary: Beneficiary;
  index: number;
}

const BeneficiaryCard = ({ beneficiary, index }: BeneficiaryCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl card-shadow p-6 flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300"
    >
      <div>
        <div className="flex items-center mb-4">
          <img
            src={beneficiary.imageUrl}
            alt={`Photo de ${beneficiary.name}`}
            className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-[hsl(var(--accent))]"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/100x100/1001F4/FEE101?text=${beneficiary.name
                .split(" ")
                .map((n: string) => n[0])
                .join(".")}`;
            }}
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {beneficiary.name}
            </h3>
            <p className="text-sm text-[hsl(var(--primary))] font-medium mt-0.5">
              {beneficiary.title}
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-base mb-4 flex-grow">
          <span className="font-semibold text-gray-800">Projet : </span>
          {beneficiary.description}
        </p>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[hsl(var(--accent-light))] text-[hsl(var(--primary))]">
          {beneficiary.projectType}
        </span>

        <a
          href={beneficiary.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Profil LinkedIn de ${beneficiary.name}`}
          className="text-gray-400 hover:text-[hsl(var(--primary))] transition-colors duration-200"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </motion.div>
  );
};

const BeneficiariesSection = () => {
  return (
    <section id="beneficiaries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[hsl(var(--primary))] font-bold text-sm tracking-widest uppercase mb-2">
            <span className="w-12 h-0.5 bg-[hsl(var(--accent))] mr-3 inline-block"></span>
            Les Beneficier de programme P5SOG
            <span className="w-12 h-0.5 bg-[hsl(var(--accent))] ml-3 inline-block"></span>
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Découvrez les Bénéficiaires du P5SOG
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Six personnes ambitieuses ont été sélectionnées pour bénéficier de
            ce programme d'accompagnement immersif et sur mesure dans leur
            transformation numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficiariesData.map((beneficiary, index) => (
            <BeneficiaryCard
              key={index}
              beneficiary={beneficiary}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiariesSection;
