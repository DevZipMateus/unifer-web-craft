import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender suas necessidades. Entre em contato conosco
              e solicite seu orçamento sem compromisso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div className="space-y-6">
              <Card className="shadow-soft border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-card-foreground">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    Telefone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Ligue para nós durante nosso horário de funcionamento
                  </p>
                  <Button
                    onClick={() => window.open("https://wa.me/5511947623412", "_blank")}
                    className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
                  >
                    (11) 94762-3412
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-card-foreground">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Envie sua mensagem e retornaremos em breve
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = "mailto:andreia.unifer@gmail.com"}
                    className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    andreia.unifer@gmail.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-card-foreground">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    Horário de funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span>09:00 às 11:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span></span>
                      <span>13:00 às 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fins de semana:</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Address and company info */}
            <div className="space-y-6">
              <Card className="shadow-soft border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-card-foreground">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Rua Marcos Görresen, 807<br />
                    Rocio Pequeno<br />
                    São Francisco do Sul - SC
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://maps.google.com/?q=Rua+Marcos+Görresen+807+Rocio+Pequeno+São+Francisco+do+Sul+SC", "_blank")}
                    className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    Ver no Google Maps
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border/50">
                <CardHeader>
                  <CardTitle className="text-card-foreground">
                    Dados da empresa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <div>
                    <span className="font-medium text-card-foreground">Razão Social:</span><br />
                    AA Unifer Prestação de Serviços de Reformas Instalações e Construções Ltda
                  </div>
                  <div>
                    <span className="font-medium text-card-foreground">CNPJ:</span><br />
                    57.995.319/0001-11
                  </div>
                  <div>
                    <span className="font-medium text-card-foreground">Especialidade:</span><br />
                    Caldeirarias Navais e Industriais
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="gradient-primary text-primary-foreground shadow-medium">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">
                    Solicite seu orçamento agora!
                  </h3>
                  <p className="mb-4 text-primary-foreground/90">
                    Atendimento rápido e personalizado para seu projeto
                  </p>
                  <Button
                    onClick={() => window.open("https://wa.me/5511947623412", "_blank")}
                    className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-medium w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;