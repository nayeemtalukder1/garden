// components/Shop.tsx
'use client'
import React, { useState } from 'react';
import Card from './Card';
import OrderModal from './OrderModal';

const plants = [
  { name: "Money Plant", price: "৳850", image: "/plants/money-plant.jpg" },
  { name: "Snake Plant", price: "৳650", image: "/plants/snake-plant.jpg" },
  { name: "Aloe Vera", price: "৳450", image: "/plants/aloe-vera.jpg" },
  { name: "Peace Lily", price: "৳950", image: "/plants/peace-lily.jpg" },
  { name: "ZZ Plant", price: "৳1,200", image: "/plants/zz-plant.jpg" },
  { name: "Monstera Deliciosa", price: "৳2,800", image: "/plants/monstera.jpg" },
  { name: "Rubber Plant", price: "৳1,050", image: "/plants/rubber-plant.jpg" },
  { name: "Bamboo Palm", price: "৳1,450", image: "/plants/bamboo-palm.jpg" },
];

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<any>(null);

  const handleOrderClick = (plant: any) => {
    setSelectedPlant(plant);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
              Our Premium Plants
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh, healthy indoor & outdoor plants delivered all over Bangladesh –
              <span className="font-bold text-emerald-700"> Dhaka, Chittagong, Sylhet, Khulna & 64 districts!</span>
            </p>
            <div className="mt-4 flex justify-center gap-4 flex-wrap">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                Free Delivery in Dhaka
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Cash on Delivery
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                7-Day Replacement
              </span>
            </div>
          </div>

          {/* Plants Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {plants.map((plant, index) => (
              <div
                key={index}
                className="w-full max-w-sm transform transition-all duration-500 hover:-translate-y-3 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card
                  name={plant.name}
                  price={plant.price}
                  image={plant.image}
                  onOrderClick={() => handleOrderClick(plant)}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-700 text-lg mb-6">
              More than <span className="font-bold text-emerald-700 text-2xl">150+ varieties</span> in stock!
            </p>
            <button className="
              bg-gradient-to-r from-emerald-700 to-green-800 
              hover:from-emerald-800 hover:to-green-900 
              text-white font-bold px-10 py-5 rounded-full text-xl 
              shadow-2xl hover:shadow-emerald-500/50 
              transition-all duration-300 transform hover:scale-105
            ">
              View All 150+ Plants
            </button>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {selectedPlant && (
        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          plant={selectedPlant}
        />
      )}
    </>
  );
};

export default Shop;