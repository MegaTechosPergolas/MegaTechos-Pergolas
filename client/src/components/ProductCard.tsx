import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProductCard = ({ image, title, description, link }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-heading font-medium mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link}>
          <a className="text-primary hover:text-primary-dark font-medium flex items-center">
            <span>Más información</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
