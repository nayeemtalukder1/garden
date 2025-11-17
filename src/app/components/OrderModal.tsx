// components/OrderModal.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  plant: {
    name: string;
    price: string;
    image: string;
  };
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, plant }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app: send to WhatsApp / backend / email
    const message = `New Order!\n\nPlant: ${plant.name}\nPrice: ${plant.price}\n\nCustomer:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}`;

    const whatsappUrl = `https://wa.me/88017XXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    alert('Thank you! We received your order. We will contact you soon!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Complete Your Order</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* Left: Product Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-emerald-700">Your Selected Plant</h3>
            <div className="bg-gray-50 rounded-xl p-4 flex gap-4">
              <Image
                src={plant.image}
                alt={plant.name}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <div>
                <h4 className="text-lg font-bold">{plant.name}</h4>
                <p className="text-2xl font-bold text-emerald-700 mt-2">{plant.price}</p>
                <p className="text-sm text-gray-600 mt-2">Free delivery in Dhaka • COD Available</p>
              </div>
            </div>
          </div>

          {/* Right: Customer Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number (01XXXXXXXXX)"
                required
                pattern="01[0-9]{9}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                placeholder="Full Delivery Address (House, Road, Area, Thana, District)"
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-700 to-green-800 text-white font-bold py-4 rounded-xl text-lg hover:from-emerald-800 hover:to-green-900 transition-all shadow-lg"
              >
                Send Order via WhatsApp
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              We will contact you within 10 minutes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;