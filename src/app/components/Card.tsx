// components/Card.tsx
import React from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface PlantCardProps {
  name: string;
  price: string;
  image: string;
  onOrderClick: () => void;   // Add this
}

const Card: React.FC<PlantCardProps> = ({ name, price, image, onOrderClick }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Popular
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-emerald-700 mb-4">{price}</p>

        <button
          onClick={onOrderClick}   // Trigger modal
          className="group w-full bg-gradient-to-r from-emerald-700 to-green-800 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:from-emerald-800 hover:to-green-900 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="w-5 h-5 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Card;