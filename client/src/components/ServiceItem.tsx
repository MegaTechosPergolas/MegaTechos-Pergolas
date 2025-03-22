import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceItemProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition?: "left" | "right";
}

const ServiceItem = ({
  title,
  description,
  features,
  image,
  imagePosition = "right",
}: ServiceItemProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
      <div className={imagePosition === "left" ? "order-1 md:order-1" : "order-2 md:order-2"}>
        <img 
          src={image} 
          alt={title} 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      <div className={imagePosition === "left" ? "order-2 md:order-2" : "order-1 md:order-1"}>
        <h3 className="text-2xl font-heading font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/contacto">
          <Button className="bg-primary hover:bg-primary-dark text-white">
            Solicitar servicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
