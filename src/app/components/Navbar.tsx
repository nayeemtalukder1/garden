// components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function + auto close mobile menu
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Leaf className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
              </div>
              <div>
                <h1 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                  GreenLife BD
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Fresh Plants • Dhaka & Nationwide</p>
              </div>
            </button>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              <button
                onClick={() => scrollToSection('about')}
                className="text-green-600 cursor-pointer hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                Why Choose Us?
              </button>
              <button
                onClick={() => scrollToSection('shop')}
                className="text-green-600 cursor-pointer hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-green-600 cursor-pointer hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                Contact
              </button>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* WhatsApp Button - Desktop */}
              <a
                href="https://wa.me/8801969148410"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden md:flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                <span>Order on WhatsApp</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Smooth Animation */}
        <div
          className={`lg:hidden fixed inset-x-0 top-20 overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-white/98 backdrop-blur-2xl shadow-2xl border-t border-gray-100">
            <div className="container mx-auto px-6 py-8 space-y-8">
              <nav className="flex flex-col gap-6 text-lg font-medium">
                <button onClick={() => scrollToSection('hero')} className="text-left text-gray-800 hover:text-emerald-600 transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-800 hover:text-emerald-600 transition-colors">
                  About Us
                </button>
                <button onClick={() => scrollToSection('shop')} className="text-left text-gray-800 hover:text-emerald-600 transition-colors">
                  All Plants
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-800 hover:text-emerald-600 transition-colors">
                  Contact
                </button>
              </nav>

              <div className="pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/88019500606055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-5 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  Order via WhatsApp
                </a>
              </div>

              <div className="text-center text-sm text-gray-500 font-medium">
                Delivering to <strong className="text-emerald-600">Dhaka • Chittagong • Sylhet • All Bangladesh</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content isn't hidden under fixed navbar */}
      <div className="h-20" />
    </>
  );
}