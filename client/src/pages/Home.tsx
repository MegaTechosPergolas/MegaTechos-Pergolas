import Carousel from "@/components/Carousel";
import { Target, Eye } from "lucide-react";
import { carouselSlides } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <section className="w-full">
        <Carousel slides={carouselSlides} />
      </section>
      
      {/* Quiénes Somos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Quiénes Somos</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Nuestro equipo" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                MegaTechos & Pérgolas es una empresa especializada en soluciones de aluminio, vidrio y cerrajería con más de 15 años de experiencia en el mercado. Nuestro compromiso es ofrecer productos de alta calidad y durabilidad, con diseños innovadores que se adaptan a las necesidades específicas de cada cliente.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Contamos con un equipo de profesionales altamente capacitados y utilizamos materiales de primera calidad para garantizar la satisfacción total de nuestros clientes. Nos destacamos por nuestra atención personalizada y nuestro servicio post-venta.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Misión y Visión Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-center mb-4">Misión</h3>
              <p className="text-gray-600">
                Proporcionar soluciones innovadoras en aluminio, vidrio y cerrajería que mejoren la calidad de vida de nuestros clientes, garantizando la excelencia en el servicio, la calidad de nuestros productos y el compromiso con el medio ambiente.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-center mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser la empresa líder en soluciones de aluminio, vidrio y cerrajería, reconocida por la innovación, la calidad y el servicio personalizado, expandiendo nuestra presencia en el mercado nacional y contribuyendo al desarrollo sostenible de nuestro entorno.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
    </div>
  );
};

export default Home;
