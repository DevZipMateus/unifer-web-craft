import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-steel-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-2 rounded">
                  <img src={logo} alt="AA Unifer Logo" className="h-10 w-auto" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AA Unifer</h3>
                  <p className="text-sm text-white/80">
                    Gestão de Obras e Serviços de Engenharia
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Especialistas em caldeirarias navais e industriais, fabricação,
                pinturas industriais, montagens e manutenções com 5 anos de experiência.
              </p>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white/60" />
                  <span className="text-white/80">(11) 94762-3412</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/60" />
                  <span className="text-white/80">andreia.unifer@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-white/60 mt-1" />
                  <span className="text-white/80">
                    Rua Marcos Görresen, 807<br />
                    Rocio Pequeno<br />
                    São Francisco do Sul - SC
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Nossos serviços</h4>
              <ul className="space-y-2 text-white/80">
                <li>• Caldeirarias navais e industriais</li>
                <li>• Fabricação de estruturas metálicas</li>
                <li>• Pinturas industriais</li>
                <li>• Montagens e manutenções</li>
                <li>• Serviços navais</li>
                <li>• Obras portuárias</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-white/60 text-sm">
                © 2024 AA Unifer Prestação de Serviços de Reformas Instalações e Construções Ltda.
                Todos os direitos reservados.
              </p>
              <p className="text-white/60 text-sm">
                CNPJ: 57.995.319/0001-11
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;