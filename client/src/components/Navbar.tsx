import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

// Hook personalizado para trabajar con rutas basadas en hash
const useHashBasedLocation = () => {
  const getCurrentLocation = () => {
    return window.location.hash.replace("#", "") || "/";
  };
  
  const [currentPath, setCurrentPath] = useState(getCurrentLocation());
  
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getCurrentLocation());
    };
    
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Inicializar
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  
  return currentPath;
};

const Navbar = () => {
  const location = useHashBasedLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/productos", label: "Productos" },
    { path: "/servicios", label: "Servicios" },
    { path: "/catalogo", label: "Catálogo" },
    { path: "/contacto", label: "Contacto" }
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-white w-full transition-shadow duration-300",
      isScrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-heading font-bold text-2xl text-primary">
            <Link href="/">
              MegaTechos & Pérgolas
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div className={cn(
                  "font-heading font-medium px-2 py-4 text-text-primary hover:text-primary transition-colors cursor-pointer",
                  location === link.path ? "text-primary border-b-3 border-primary" : ""
                )}>
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <div 
                    className={cn(
                      "font-heading font-medium py-2 text-text-primary hover:text-primary transition-colors cursor-pointer",
                      location === link.path ? "text-primary" : ""
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
