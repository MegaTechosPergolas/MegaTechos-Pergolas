import { Separator } from "@/components/ui/separator";
import ServiceItem from "@/components/ServiceItem";
import { mantCubiertasFeatures, mantVidriosFeatures } from "@/lib/data";

const Services = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de instalación, reparación y mantenimiento para garantizar la durabilidad y funcionalidad de nuestros productos.
          </p>
          
          {/* Mantenimiento de Cubiertas */}
          <ServiceItem
            title="Mantenimiento de Cubiertas"
            description="Nuestro servicio de mantenimiento de cubiertas garantiza la durabilidad y funcionalidad de sus techos, pérgolas y domos. Realizamos:"
            features={mantCubiertasFeatures}
            image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            imagePosition="right"
          />
          
          {/* Mantenimiento de Vidrios */}
          <ServiceItem
            title="Mantenimiento de Vidrios"
            description="Nuestro equipo de profesionales ofrece un servicio completo de mantenimiento para todos sus productos de vidrio:"
            features={mantVidriosFeatures}
            image="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            imagePosition="left"
          />
        </div>
      </section>
      
      <Separator />
    </div>
  );
};

export default Services;
