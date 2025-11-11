import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    
    <footer className="py-8 sm:py-10 bg-[hsl(var(--primary-light))] border-t-4 border-[hsl(var(--primary))]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        
       
        <p className="text-sm text-gray-700 mb-4 sm:mb-0">
          © {currentYear} — Programme P5SOG.
          <span className="block sm:inline-block sm:ml-2 mt-1 sm:mt-0 font-medium">
            Initiative par <strong className="text-[hsl(var(--primary))]">Justin MONDJI</strong>.
          </span>
        </p>

     
        <div className="flex items-center space-x-4">
          
    
          <a
            href="https://www.linkedin.com/in/justin-mondji-976b1a303/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn de Justin MONDJI"
            className="w-8 h-8 rounded-full bg-white text-[hsl(var(--primary))] flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-gray-900 transition-all duration-300 shadow-md"
          >
            <Linkedin size={18} />
          </a>
          
     
          <a 
            href="https://justin-mondji.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-[hsl(var(--primary))] font-medium hover:underline"
          >
            Portfolio Développeur
          </a>

        </div>
      </div>
    </footer>
  )
}