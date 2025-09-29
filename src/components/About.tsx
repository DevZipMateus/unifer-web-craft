import { Shield, Clock, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a AA Unifer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Com 5 anos de experiência no mercado, a AA Unifer se consolidou como referência
              em serviços especializados de caldeirarias navais e industriais.
            </p>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nossa história e experiência
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Localizada na Rua Marcos Gorrersen 807, Rocio Pequeno, em São Francisco do Sul - SC,
                a AA Unifer atua fornecendo produtos e serviços com excelência há 5 anos no mercado.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nossa filosofia e objetivo principal é atingir as expectativas do cliente com
                qualidade, custo e prazo de entrega adequados. Nossa especialidade sempre esteve
                voltada para serviços de caldeirarias navais e industriais, fabricação,
                pinturas industriais, montagens e manutenções.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos com dedicação para oferecer soluções completas e personalizadas,
                sempre priorizando a segurança e a qualidade em todos os nossos projetos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-soft border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">
                  Qualidade garantida
                </h4>
                <p className="text-muted-foreground">
                  Utilizamos os melhores materiais e técnicas para garantir
                  a durabilidade e segurança de nossos serviços.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-soft border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">
                  Prazo cumprido
                </h4>
                <p className="text-muted-foreground">
                  Respeitamos rigorosamente os prazos acordados,
                  garantindo que seu projeto seja entregue no tempo certo.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Anos de experiência</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Projetos realizados</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Clientes satisfeitos</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
              <p className="text-muted-foreground">Suporte disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;