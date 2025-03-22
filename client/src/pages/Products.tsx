import { useEffect } from "react";
import { useLocation } from "wouter";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";
import { 
  ventaneriaProducts, 
  cubiertasProducts, 
  pasamaneriaProducts, 
  cortinasProducts 
} from "@/lib/data";

const Products = () => {
  const [location] = useLocation();

  // Scroll to section based on hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth"
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Descubra nuestra amplia gama de productos en aluminio, vidrio y cerrajería, diseñados para satisfacer las necesidades de nuestros clientes.
          </p>
          
          {/* Ventanería */}
          <div className="mb-16" id="ventaneria">
            <h3 className="text-2xl font-heading font-semibold mb-8 pb-2 border-b-2 border-blue-100">Ventanería</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ventaneriaProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  link="/contacto"
                />
              ))}
            </div>
          </div>
          
          {/* Cubiertas */}
          <div className="mb-16" id="cubiertas">
            <h3 className="text-2xl font-heading font-semibold mb-8 pb-2 border-b-2 border-blue-100">Cubiertas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cubiertasProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  link="/contacto"
                />
              ))}
            </div>
          </div>
          
          {/* Pasamanería */}
          <div className="mb-16" id="pasamaneria">
            <h3 className="text-2xl font-heading font-semibold mb-8 pb-2 border-b-2 border-blue-100">Pasamanería</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pasamaneriaProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  link="/contacto"
                />
              ))}
            </div>
          </div>
          
          {/* Cortinas de Baño */}
          <div id="cortinas">
            <h3 className="text-2xl font-heading font-semibold mb-8 pb-2 border-b-2 border-blue-100">Cortinas de Baño</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cortinasProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  link="/contacto"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
    </div>
  );
};

export default Products;
