import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
}

export const CategoryCard = ({ title, icon, onClick, isActive, className }: CategoryCardProps) => {
  return (
    <Card 
      className={cn(
        "flex-shrink-0 w-48 h-64 rounded-[3rem] cursor-pointer transition-all duration-300 hover:scale-105",
        "flex flex-col items-center justify-center gap-6 border-none shadow-lg",
        isActive ? "bg-slate-400" : "bg-neutral-200",
        "hover:shadow-xl",
        className
      )}
      onClick={onClick}
    >
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center text-black">{title}</h3>
    </Card>
  );
};