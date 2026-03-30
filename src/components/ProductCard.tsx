import React from 'react';
import { Heart, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  labels: string[];
  isVeg?: boolean;
  isReadyForPickup?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  tags,
  labels,
  isVeg,
  isReadyForPickup,
}) => {
  return (
    <motion.div 
      layout
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-[#E5E5E5] mb-6"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Top Left Tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isVeg && (
            <div className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00B159]" />
              <span className="text-[10px] font-bold tracking-widest text-[#1A1A1A]">VEG</span>
            </div>
          )}
          {isReadyForPickup && (
            <div className="bg-[#4A3728]/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
              <span className="text-[10px] font-bold tracking-widest text-white">READY FOR PICKUP</span>
            </div>
          )}
        </div>

        {/* Heart Icon */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm text-[#1A1A1A] hover:text-red-500 transition-colors">
          <Heart size={20} />
        </button>

        {/* Bottom Left Tag */}
        <div className="absolute bottom-4 left-4">
          {tags.map((tag) => (
            <div key={tag} className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
              <span className="text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase">{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">{name}</h3>
        <p className="text-[#8E8E8E] text-base mb-6">{description}</p>

        {/* Quality Labels */}
        <div className="flex flex-wrap gap-2 mb-8">
          {labels.map((label) => (
            <div key={label} className="bg-[#F2F1EE] px-4 py-1.5 rounded-lg">
              <span className="text-[10px] font-bold tracking-widest text-[#5A5A5A] uppercase">{label}</span>
            </div>
          ))}
        </div>

        <div className="h-[1px] bg-[#F2F1EE] w-full mb-6" />

        {/* Price and Add Button */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#8E8E8E] uppercase block mb-1">Price</span>
            <span className="text-3xl font-bold text-[#1A1A1A]">₹{price}</span>
          </div>
          <button className="bg-[#4A3728] text-white px-8 py-3 rounded-2xl font-bold text-xs tracking-widest flex items-center gap-2 hover:bg-[#3A2B1F] transition-colors shadow-lg shadow-[#4A3728]/20">
            ADD
          </button>
        </div>
      </div>
    </motion.div>
  );
};
