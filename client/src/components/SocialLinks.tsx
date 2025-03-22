import { Facebook, Instagram, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
      </a>
      <a
        href="https://facebook.com/megatechos"
        target="_blank"
        rel="noreferrer"
        className="bg-[#1877F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="Facebook"
      >
        <Facebook />
      </a>
      <a
        href="https://instagram.com/megatechos"
        target="_blank"
        rel="noreferrer"
        className="bg-[#E4405F] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="Instagram"
      >
        <Instagram />
      </a>
      <a
        href="https://goo.gl/maps/123456789"
        target="_blank"
        rel="noreferrer"
        className="bg-[#4285F4] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="Google Maps"
      >
        <MapPin />
      </a>
    </div>
  );
};

export default SocialLinks;
