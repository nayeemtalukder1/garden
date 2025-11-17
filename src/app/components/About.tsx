import React from 'react';
import { Leaf, Truck, HeartHandshake, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Why Thousands Trust Us Every Day
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We have completed <span className="text-emerald-700 font-bold">4000+ successful deliveries</span> across Bangladesh
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white transition-all duration-300 mb-5">
              <Truck className="w-8 h-8 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">On-Time Delivery</h3>
            <p className="text-gray-600">We always deliver your plants safely and on time — Dhaka, Chittagong, or anywhere in BD.</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white transition-all duration-300 mb-5">
              <Leaf className="w-8 h-8 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Care Guide</h3>
            <p className="text-gray-600">Every plant comes with easy Bangla & English care instructions.</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white transition-all duration-300 mb-5">
              <HeartHandshake className="w-8 h-8 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Check-Up Visit</h3>
            <p className="text-gray-600">We visit your home/office after delivery to ensure your plant is happy.</p>
          </div>

          {/* Feature 4 */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white transition-all duration-300 mb-5">
              <ShieldCheck className="w-8 h-8 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Money Back</h3>
            <p className="text-gray-600">Not happy? Full refund within 7 days — no questions asked.</p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-emerald-700">
            Your plants. Our responsibility. Always.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;