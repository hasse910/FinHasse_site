
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-primary">fin</span>hasse
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Inteligência financeira para o sucesso do seu negócio. 
              Simplificamos a gestão financeira para que você possa focar no crescimento.
            </p>
            <div className="text-sm text-gray-500">
              CNPJ: 00.000.000/0001-00<br />
              Registro CRC: SP-000000/O-0
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">BPO Financeiro</span>
              </li>
              <li>
                <span className="text-gray-400">Consultoria Financeira</span>
              </li>
              <li>
                <span className="text-gray-400">Gestão de KPIs</span>
              </li>
              <li>
                <span className="text-gray-400">Análise de Fluxo de Caixa</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-charcoal-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} finhasse. Todos os direitos reservados.
          </div>
          <div className="text-gray-400 text-sm">
            Desenvolvido com 💚 para impulsionar seu negócio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
