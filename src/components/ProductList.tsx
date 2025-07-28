import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  sku: string;
  brand?: string;
}

interface ProductListProps {
  title: string;
  products: Product[];
  onBack: () => void;
}

export const ProductList = ({ title, products, onBack }: ProductListProps) => {
  const { toast } = useToast();

  const copyToClipboard = (sku: string) => {
    navigator.clipboard.writeText(sku);
    toast({
      title: "SKU copiado!",
      description: `${sku} foi copiado para a área de transferência.`,
    });
  };

  return (
    <div className="min-h-screen bg-app-bg p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={onBack}
            className="text-text-primary text-lg mr-4 hover:opacity-70"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold text-text-primary">SKU Rápido</h1>
        </div>

        {/* Category Circle */}
        <Card className="w-80 h-80 rounded-full bg-product-circle shadow-lg flex flex-col items-center justify-center mx-auto mb-8 border-none">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-8">{title}</h2>
          
          <div className="w-full px-8 space-y-4 max-h-48 overflow-y-auto">
            {products.map((product) => (
              <div key={product.id} className="text-center">
                {product.brand && (
                  <div className="text-lg font-semibold text-text-primary mb-2">• {product.brand}</div>
                )}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-text-primary font-medium">{product.name}</span>
                  <button
                    onClick={() => copyToClipboard(product.sku)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                    title="Copiar SKU"
                  >
                    <Copy size={14} className="text-gray-600" />
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-3">{product.sku}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Scroll indicators */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};