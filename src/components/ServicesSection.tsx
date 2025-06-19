
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, TrendingUp, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: 'BPO Financeiro',
      description: 'Terceirize suas rotinas financeiras, desde contas a pagar e receber até conciliação bancária, com total segurança e eficiência.',
      features: ['Contas a Pagar/Receber', 'Conciliação Bancária', 'Controle de Fluxo de Caixa', 'Relatórios Gerenciais']
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Financeira',
      description: 'Análise de fluxo de caixa, planejamento estratégico e insights para decisões mais inteligentes e lucrativas.',
      features: ['Análise de Fluxo de Caixa', 'Planejamento Estratégico', 'Reestruturação Financeira', 'Otimização de Custos']
    },
    {
      icon: BarChart3,
      title: 'Gestão de KPIs',
      description: 'Implementamos dashboards e relatórios para você acompanhar a saúde financeira do seu negócio em tempo real.',
      features: ['Dashboards Personalizados', 'KPIs Financeiros', 'Relatórios Executivos', 'Monitoramento em Tempo Real']
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossas Soluções para <span className="text-primary">sua Empresa</span>
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços financeiros desenhados especificamente 
            para pequenas e médias empresas que buscam crescimento sustentável.
          </p> */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços financeiros desenhados especificamente 
            para empresas de Tecnologia, Startups e Serviços que buscam crescimento sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-charcoal-800 border-charcoal-600 hover:border-primary/50 transition-all duration-300 hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
