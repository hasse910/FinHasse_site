
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Inteligência Financeira</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">FinHasse: </span>
            <span className="gradient-text">Inteligência Financeira</span>
            <span className="text-white"> para o Sucesso do seu Negócio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Simplificamos a gestão financeira da sua empresa de <span className="gradient-text">Tecnologia</span> com serviços de BPO e consultoria 
            para que você possa focar no que realmente importa: <span className="text-primary font-semibold">o crescimento</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              Solicitar Análise Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-primary transition-colors duration-300 px-8 py-4 text-lg border border-gray-600 hover:border-primary rounded-lg"
            >
              Conhecer Serviços
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-charcoal-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-400">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">14+</div>
              <div className="text-gray-400">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-400">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
