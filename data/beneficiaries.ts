import type { Beneficiary } from './beneficiary'

export const beneficiaries: Beneficiary[] = [
    { 
        id: 1, name: 'Prénom Nom 1', 
        role: 'Commerçant - Mode', 
        project: 'Boutique en ligne', 
        description: 'Site vitrine + catalogue produits.', 
        image: '/images/ben1.jpg' 
    },
    { 
        id: 2, name: 'Prénom Nom 2', 
        role: 'Prestataire - Services', 
        project: 'Site de réservation', 
        description: 'Système de réservation simple.', 
        image: '/images/ben2.jpg' 
    },
    { 
        id: 3, name: 'Prénom Nom 3', 
        role: 'Artisan', project: 'Portfolio', 
        description: 'Portfolio interactif pour présenter réalisations.', 
        image: '/images/ben3.jpg' 
    },
    { 
        id: 4, name: 'Prénom Nom 4', 
        role: 'Restauration', project: 'Menu & commandes', 
        description: 'Menu digital + formulaire de commande.', 
        image: '/images/ben4.jpg' 
    },
    { 
        id: 5, name: 'Prénom Nom 5', 
        role: 'Coach / Consultant', 
        project: 'Landing conversion', 
        description: 'Landing orientée conversion pour capter des leads.', 
        image: '/images/ben5.jpg' 
    },
    { 
        id: 5, name: 'Prénom Nom 5', 
        role: 'Coach / Consultant', 
        project: 'Landing conversion', 
        description: 'Landing orientée conversion pour capter des leads.', 
        image: '/images/ben5.jpg' 
    }
]