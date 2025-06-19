
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@finhasse.com.br',
      link: 'mailto:contato@finhasse.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(48) 99605-3770',
      link: 'https://api.whatsapp.com/send?phone=5548996053770&text=Oi,Achei%20o%20site%20de%20voc%C3%AAs.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5ea./'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Florianópolis, SC - Brasil',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Otimizar suas <span className="text-primary">Finanças?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preencha o formulário e um dos nossos especialistas entrará em contato para 
            uma análise gratuita da situação financeira da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-charcoal-800 border-charcoal-600 animate-slide-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Solicitar Análise Gratuita
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-charcoal-700 border-charcoal-600 text-white placeholder-gray-400 focus:border-primary"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-charcoal-700 border-charcoal-600 text-white placeholder-gray-400 focus:border-primary"
                    placeholder="seu.email@empresa.com.br"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-charcoal-700 border-charcoal-600 text-white placeholder-gray-400 focus:border-primary"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-charcoal-700 border-charcoal-600 text-white placeholder-gray-400 focus:border-primary resize-none"
                    placeholder="Conte-nos sobre sua empresa e seus desafios financeiros..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Entre em Contato
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nossa equipe de especialistas está pronta para ajudar sua empresa a 
                alcançar a excelência financeira. Entre em contato conosco hoje mesmo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-charcoal-800 border-charcoal-600 hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <a 
                          href={info.link}
                          className="text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Box */}
            <Card className="bg-gradient-to-r from-primary/20 to-blue-500/20 border-primary/30">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Análise Gratuita
                </h4>
                <p className="text-gray-300 mb-4">
                  Receba uma avaliação completa da situação financeira da sua empresa, 
                  sem custo e sem compromisso.
                </p>
                <div className="text-primary font-semibold">
                  💼 100% Confidencial • 📊 Relatório Detalhado • ⚡ Resposta em 24h
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
