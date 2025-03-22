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
                  <a className="text-gray-300 hover:text-white transition-colors">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/productos">
                  <a className="text-gray-300 hover:text-white transition-colors">Productos</a>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <a className="text-gray-300 hover:text-white transition-colors">Servicios</a>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <a className="text-gray-300 hover:text-white transition-colors">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/productos#ventaneria">
                  <a className="text-gray-300 hover:text-white transition-colors">Ventanería</a>
                </Link>
              </li>
              <li>
                <Link href="/productos#cubiertas">
                  <a className="text-gray-300 hover:text-white transition-colors">Cubiertas</a>
                </Link>
              </li>
              <li>
                <Link href="/productos#pasamaneria">
                  <a className="text-gray-300 hover:text-white transition-colors">Pasamanería</a>
                </Link>
              </li>
              <li>
                <Link href="/productos#cortinas">
                  <a className="text-gray-300 hover:text-white transition-colors">Cortinas de Baño</a>
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
