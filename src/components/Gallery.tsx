import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const galleryImages = [
  "apoio_tecnico_de_obra_de_fundacoes_com_equipamentos_de_circulacao_reversa_.jpg",
  "calandragem_de_tubulacoes_em_obras.jpg",
  "centralizador_.jpg",
  "chapas_para_confeccao_de_pecas_.jpg",
  "confeccao_da_tela_da_moega_com_vergalhoes_mecanico_.jpg",
  "confeccao_de_centralizador_.jpg",
  "confeccao_de_equipamentos_.jpg",
  "confeccao_de_escada_e_guarda_corpo_e_pinturas_da_empresa_de_fertilizantes_.jpg",
  "confeccao_de_estrutura_mecanica_.jpg",
  "confeccao_de_jaqueta_estabilizadora_de_camisas_metalicas_.jpg",
  "confeccao_de_moega_dosadora.jpg",
  "confeccao_de_moega_dosadora_.jpg",
  "confeccao_e_pintura_industrial_.jpg",
  "confeccoes_dos_silos_.jpg",
  "equipamento_fabricado_em_teste.jpg",
  "fabricacao_de_equipamentos_.jpg",
  "guindaste_em_atividades_em_obras_portuarias_de_fundacao_.jpg",
  "haste_para_fundacao_de_coluna_de_perfuracao_com_equipamento_de_circulacao_reversa_.jpg",
  "manutencao_de_equipamentos_de_fertilizantes.jpg",
  "modulos_finalizados_.jpg",
  "montagem_de_centralizador_.jpg",
  "montagem_de_modulos_flutuantes.jpg",
  "montagem_e_instalacao_de_moega_dosadora_.jpg",
  "pintura_industrial_de_pecas_da_esteira_da_moega.jpg",
  "protecao_de_esteira_transportadora_.jpg",
  "silos_para_obras_de_fundacoes_prediais_.jpg",
  "transporte_de_pecas_da_jaqueta_.jpg",
  "troca_de_fundo_de_balsa_flutuante.jpg",
  "tubulacoes_para_confeccao_de_jaqueta_para_estabilizacao_de_camisas_metalicas_.jpg",
];

const Gallery = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Trabalhos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos realizados em caldeiraria naval e industrial
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                          <CardContent className="p-0">
                            <img
                              src={`/galeria/${image}`}
                              alt={`Trabalho ${index + 1}`}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-[90vw] max-h-[90vh] w-fit h-fit p-0 bg-black/90">
                        <div className="flex items-center justify-center w-full h-full min-h-[50vh]">
                          <img
                            src={`/galeria/${image}`}
                            alt={`Trabalho ${index + 1}`}
                            className="max-w-[85vw] max-h-[85vh] w-auto h-auto object-contain"
                            style={{ maxWidth: '85vw', maxHeight: '85vh' }}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;