import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const partnerInfo = {
  name: "Optix",
  logoUrl: "public/lg-sans fond.png",
};

const PartnershipSection = () => {
  return (
    <section id="partnership" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[hsl(var(--primary))] font-bold text-sm tracking-widest uppercase mb-2">
            <span className="w-12 h-0.5 bg-[hsl(var(--accent))] mr-3 inline-block"></span>
            Partenariat Stratégique
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Un partenariat pour un impact plus fort
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl card-shadow bg-[hsl(var(--primary-light))] border-t-8 border-[hsl(var(--primary))]"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img
                src={partnerInfo.logoUrl}
                alt={`Logo du partenaire ${partnerInfo.name}`}
                className="max-h-16 w-auto opacity-90"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x50/FFFFFF/1001F4?text=OPTIX+LOGO";
                }}
              />
            </div>

            <p className="text-lg sm:text-xl text-gray-800 mb-6 font-medium max-w-3xl">
              Ce programme est soutenu par **{partnerInfo.name}**, une
              entreprise technologique engagée dans le développement et la
              transformation digitale en Afrique.
            </p>

            <div className="w-20 h-0.5 bg-[hsl(var(--accent))] my-4"></div>

            <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl">
              Ensemble, nous partageons une vision commune : accélérer la
              digitalisation des entreprises africaines grâce à des solutions
              concrètes, durables et centrées sur l’humain.
            </p>

            <div className="flex items-start bg-white p-4 sm:p-6 rounded-xl card-shadow border border-gray-100">
              <HeartHandshake
                size={32}
                className="text-[hsl(var(--primary))] min-w-[32px] mt-1 mr-4"
              />
              <p className="text-base text-gray-800 font-semibold italic">
                Grâce à ce partenariat, nous garantissons un accompagnement
                complet — de la conception à la mise en ligne — avec une
                approche orientée qualité, innovation et impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipSection;
