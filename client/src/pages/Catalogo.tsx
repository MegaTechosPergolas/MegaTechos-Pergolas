import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ventaneriaProducts, cubiertasProducts, pasamaneriaProducts, cortinasProducts } from "@/lib/data";
import { Download, ChevronRight } from "lucide-react";

interface CatalogItem {
  image: string;
  title: string;
  description: string;
  link?: string;
  price?: string;
  dimensions?: string;
  materials?: string[];
  colors?: string[];
}

const CatalogItemCard = ({ item }: { item: CatalogItem }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-heading">{item.title}</CardTitle>
        {item.price && <div className="text-primary font-semibold">{item.price}</div>}
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{item.description}</CardDescription>
        
        {showDetails && (
          <div className="mt-4 space-y-3">
            {item.dimensions && (
              <div>
                <span className="font-semibold">Dimensiones:</span> {item.dimensions}
              </div>
            )}
            
            {item.materials && item.materials.length > 0 && (
              <div>
                <span className="font-semibold">Materiales:</span>
                <ul className="list-disc list-inside ml-2 mt-1">
                  {item.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {item.colors && item.colors.length > 0 && (
              <div>
                <span className="font-semibold">Colores disponibles:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.colors.map((color, index) => (
                    <div 
                      key={index}
                      className="w-6 h-6 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Ver menos" : "Ver detalles"}
          <ChevronRight 
            className={`ml-1 h-4 w-4 transition-transform ${showDetails ? "rotate-90" : ""}`}
          />
        </Button>
        
        {item.link && (
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Ficha técnica
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

// Enriquecer los datos de los productos con información de catálogo
const prepareItems = (items: any[]): CatalogItem[] => {
  return items.map(item => ({
    ...item,
    price: item.price || "Precio a consultar",
    dimensions: item.dimensions || "Medidas personalizables",
    materials: item.materials || ["Aluminio de alta calidad", "Vidrio templado (donde aplica)"],
    colors: item.colors || ["#FFFFFF", "#000000", "#C0C0C0", "#7B3F00"]
  }));
};

const Catalogo = () => {
  const ventaneria = prepareItems(ventaneriaProducts);
  const cubiertas = prepareItems(cubiertasProducts);
  const pasamaneria = prepareItems(pasamaneriaProducts);
  const cortinas = prepareItems(cortinasProducts);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Catálogo de Productos</h1>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Explore nuestro catálogo completo de productos con especificaciones técnicas, 
            opciones de personalización y precios. Solicite presupuestos personalizados para 
            cualquier producto.
          </p>
        </div>

        <Tabs defaultValue="ventaneria" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="ventaneria">Ventanería</TabsTrigger>
              <TabsTrigger value="cubiertas">Cubiertas</TabsTrigger>
              <TabsTrigger value="pasamaneria">Pasamanería</TabsTrigger>
              <TabsTrigger value="cortinas">Cortinas de Baño</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ventaneria">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ventaneria.map((item, index) => (
                <CatalogItemCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cubiertas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cubiertas.map((item, index) => (
                <CatalogItemCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pasamaneria">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pasamaneria.map((item, index) => (
                <CatalogItemCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cortinas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cortinas.map((item, index) => (
                <CatalogItemCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4">¿No encuentra lo que busca?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-6">
            Ofrecemos soluciones personalizadas para sus necesidades específicas. 
            Contacte con nosotros para un presupuesto detallado.
          </p>
          <div onClick={() => window.location.href = '/contacto'}>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalogo;