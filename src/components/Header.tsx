
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-700 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <span className="text-primary">Fin</span>Hasse
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2"
            >
              Falar com Consultor
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-charcoal-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 w-fit"
              >
                Falar com Consultor
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
