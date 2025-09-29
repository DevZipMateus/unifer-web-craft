import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AA Unifer Prestação de Serviços de Reformas Instalações e Construções Ltda
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Especialistas em caldeirarias navais e industriais com 5 anos de experiência.
            Oferecemos soluções completas em fabricação, pinturas industriais, montagens e manutenções
            com foco na qualidade, prazo e custo-benefício para nossos clientes.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("servicos")}
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white hover:text-primary backdrop-blur-sm transition-smooth shadow-medium"
            >
              Nossos serviços
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/5511947623412", "_blank")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Quick info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Localização</h3>
              <p className="text-white/80 text-sm">
                São Francisco do Sul - SC
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Funcionamento</h3>
              <p className="text-white/80 text-sm">
                09:00 às 11:00<br />
                13:00 às 18:00
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Phone className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="font-semibold text-white mb-2">Contato</h3>
              <p className="text-white/80 text-sm">
                (11) 94762-3412
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;