import { useState } from "react";
import { Coffee, Settings, Zap } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductList } from "@/components/ProductList";
import { categories } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    if (category) {
      return (
        <ProductList 
          title={category.name}
          products={category.products}
          onBack={handleBack}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-app-bg">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center mb-16">
          {/* Logo Circle */}
          <div className="w-32 h-32 bg-category-beige rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span className="text-6xl font-bold text-text-primary italic">N</span>
          </div>
          
          <h1 className="text-5xl font-bold text-text-primary mb-4">SKU Rápido</h1>
          <p className="text-xl text-text-primary italic mb-8">" Nós Inovamos "</p>
          
          {/* Team Photos */}
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-text-primary">DESPERTE O QUE HÁ DE MELHOR EM VOCÊ.</span>
            <div className="w-6 h-6 bg-icon-bg flex items-center justify-center">
              <span className="text-white text-xs font-bold italic">N</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="w-full max-w-4xl">
          <div className="flex gap-6 overflow-x-auto pb-4 justify-center">
            <CategoryCard
              title="Acessórios"
              icon={<Settings className="w-8 h-8 text-white" />}
              onClick={() => handleCategorySelect("acessorios")}
            />
            <CategoryCard
              title="Máquinas"
              icon={<Zap className="w-8 h-8 text-white" />}
              onClick={() => handleCategorySelect("maquinas")}
            />
            <CategoryCard
              title="Cafés"
              icon={<Coffee className="w-8 h-8 text-white" />}
              onClick={() => handleCategorySelect("cafes")}
              isActive={true}
            />
          </div>
          
          <div className="text-center mt-6">
            <span className="text-text-primary text-lg">scroll ——————→</span>
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-right w-full max-w-4xl">
          <p className="text-white text-sm">By: Brenda Hortencio</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
