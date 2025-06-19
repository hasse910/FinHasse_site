
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada estratégia é desenvolvida com o objetivo de gerar impacto real no seu negócio.'
    },
    {
      icon: Users,
      title: 'Parceria Estratégica',
      description: 'Não somos apenas fornecedores, somos parceiros comprometidos com o seu sucesso.'
    },
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Nossa equipe possui certificações e experiência comprovada no mercado financeiro.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Utilizamos as mais modernas ferramentas e metodologias do setor.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-charcoal-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quem <span className="text-primary">Somos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h3 className="text-3xl font-semibold text-white mb-6">
              Sua Parceira em <span className="text-primary">Inteligência Financeira</span> e Crescimento no Setor Tech
            </h3>

             <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                A <strong className="text-primary">FinHasse</strong> é a parceira financeira estratégica para 
                empresas de tecnologia e startups. Nascemos da união entre finanças e desenvolvimento, para que 
                empresas de tecnologia, startups e serviços tenham acesso a uma inteligência financeira de excelência. 
                Somos especialistas em transformar a complexidade financeira em soluções simples e eficazes, falando a sua 
                língua e entendendo seus desafios de forma nativa.
              </p>
              
              <p>
                Nossa missão é ser o parceiro estratégico que libera o potencial de 
                crescimento do seu negócio. Combinamos experiência sólida no mercado financeiro
                com tecnologia de ponta e um atendimento verdadeiramente personalizado. Nosso atendimento é pautado pela 
                metodologia <strong className="text-white">Customer First</strong>, pois entendemos que cada cliente é único e nossas 
                soluções refletem essa individualidade.
              </p>
              
              <p>
                Transformamos dados em crescimento, analisando as métricas que definem o sucesso do seu negócio. Para simplificar sua rotina e guiar suas decisões financeiras, oferecemos nosso próprio aplicativo, uma alternativa eficiente a softwares caros.
              </p>
            </div>

            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-primary font-semibold text-lg mb-2">Nossa Promessa:</p>
              <p className="text-gray-300">
                "Transformar a gestão financeira da sua empresa em uma vantagem competitiva 
                que impulsiona o crescimento sustentável."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-charcoal-800 border-charcoal-600 hover:border-primary/50 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
