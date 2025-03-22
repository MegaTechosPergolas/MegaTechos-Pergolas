import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Contact = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Estamos a su disposición para resolver cualquier duda y proporcionarle la mejor solución para sus necesidades.
          </p>
          
          {/* Alerta para sitio estático GitHub Pages */}
          <Alert className="mb-8 bg-amber-50 border-amber-300">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertTitle className="text-amber-800">Sitio Estático (GitHub Pages)</AlertTitle>
            <AlertDescription className="text-amber-700">
              Esta es una versión estática del sitio web alojada en GitHub Pages. El formulario de contacto es solo demostrativo.
              Para contactarnos realmente, utilice el correo electrónico, teléfono o WhatsApp indicados en esta página.
            </AlertDescription>
          </Alert>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">Dirección</h4>
                    <p className="text-gray-600">Av. Principal 1234, Ciudad</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">Teléfono</h4>
                    <p className="text-gray-600">(+123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">Email</h4>
                    <p className="text-gray-600">info@megatechos.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1">Horario de Atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-heading font-semibold mb-4">Síguenos en Redes Sociales</h3>
                <SocialLinks />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Formulario de Contacto (Demo)</h3>
              <ContactForm />
              
              <div className="mt-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">Nuestra Ubicación</h3>
                <div className="w-full h-72 rounded-lg overflow-hidden">
                  <iframe 
                    title="Mapa de ubicación"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.462011230284!2d-74.07200492584107!3d4.698457695889654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af4599b0c6d%3A0xb3a20a68c85a8a0!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1664568221273!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
    </div>
  );
};

export default Contact;
