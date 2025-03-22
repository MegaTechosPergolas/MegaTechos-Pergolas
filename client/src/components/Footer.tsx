import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-heading font-bold text-xl mb-4">MegaTechos & Pérgolas</h4>
            <p className="text-gray-300 mb-4">
              Soluciones profesionales en aluminio, vidrio y cerrajería con más de 15 años de experiencia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a 
                href="https://facebook.com/megatechos" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a 
                href="https://instagram.com/megatechos" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Inicio</div>
                </Link>
              </li>
              <li>
                <Link href="/productos">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Productos</div>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Servicios</div>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contacto</div>
                </Link>
              </li>
              <li>
                <Link href="/catalogo">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Catálogo</div>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/productos#ventaneria">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Ventanería</div>
                </Link>
              </li>
              <li>
                <Link href="/productos#cubiertas">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Cubiertas</div>
                </Link>
              </li>
              <li>
                <Link href="/productos#pasamaneria">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Pasamanería</div>
                </Link>
              </li>
              <li>
                <Link href="/productos#cortinas">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Cortinas de Baño</div>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-orange-500" size={18} />
                <span className="text-gray-300">Av. Principal 1234, Ciudad</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-orange-500" size={18} />
                <span className="text-gray-300">(+123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-orange-500" size={18} />
                <span className="text-gray-300">info@megatechos.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MegaTechos & Pérgolas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
