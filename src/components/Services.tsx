import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Ship, Hammer, Paintbrush, Settings, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Fabricação industrial",
      description: "Fabricação de estruturas metálicas, caldeiraria e componentes industriais sob medida com alta qualidade e precisão.",
      features: ["Estruturas metálicas", "Componentes sob medida", "Caldeiraria especializada"]
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Serviços navais",
      description: "Fabricação e manutenção de balsas, rebocadores e embarcações com expertise técnica especializada.",
      features: ["Fabricação de balsas", "Manutenção de rebocadores", "Reparos navais"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Montagens e manutenções",
      description: "Serviços completos de montagem e manutenção preventiva e corretiva de equipamentos industriais.",
      features: ["Montagem industrial", "Manutenção preventiva", "Manutenção corretiva"]
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Pinturas industriais",
      description: "Aplicação de tintas e revestimentos especiais para proteção contra corrosão e intempéries.",
      features: ["Pintura anticorrosiva", "Revestimentos especiais", "Proteção industrial"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Obras portuárias",
      description: "Apoio especializado em obras portuárias, construção e manutenção de pontes e piers.",
      features: ["Construção portuária", "Manutenção de pontes", "Estruturas de piers"]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Caldeiraria naval",
      description: "Serviços especializados em caldeiraria naval com técnicas avançadas e materiais de qualidade.",
      features: ["Caldeiraria especializada", "Reparos navais", "Estruturas marítimas"]
    }
  ];

  return (
    <section id="servicos" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossos serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas em caldeirarias navais e industriais,
              sempre com foco na qualidade, prazo e satisfação do cliente.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border/50 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-card rounded-xl p-8 shadow-medium border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e receba uma consulta gratuita para seu projeto.
              Nossa equipe está pronta para desenvolver a solução ideal para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("https://wa.me/5511947623412", "_blank")}
                size="lg"
                className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-soft"
              >
                Solicitar orçamento
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = "mailto:andreia.unifer@gmail.com"}
                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Enviar e-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;