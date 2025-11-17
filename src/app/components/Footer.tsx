'use client';

import { Phone, Mail, MapPin, MessageCircle, Facebook, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-xl border-t border-white/10">
      {/* Optional: subtle animated background (you can keep your metaballs here) */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-transparent to-black/80" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Left: Logo & Description */}
          <div className="space-y-6 text-white">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Leaf className="w-8 h-8 text-white group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                GreenLife BD
              </h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Trusted plant supplier in Bangladesh since 2020. Fresh indoor & outdoor plants delivered to your doorstep with love.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/88019500606055"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600/20 backdrop-blur-md border border-green-500/30 rounded-2xl hover:bg-green-600/40 transition-all hover:scale-110 group"
              >
                <MessageCircle className="w-6 h-6 text-green-400 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </a>
              <a
                href="https://facebook.com/greenlifebd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl hover:bg-blue-600/40 transition-all hover:scale-110 group"
              >
                <Facebook className="w-6 h-6 text-blue-400 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </a>
            </div>
          </div>

          {/* Center: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white">Contact Us</h4>
            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-emerald-500/20 rounded-xl">
                  <MapPin className="w-5 h-5 text-emerald-400 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                </div>
                <div>
                  <p className="text-sm leading-relaxed">
                    House 24, Road 12<br />
                    Sector 10, Uttara<br />
                    Dhaka 1230, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-emerald-500/20 rounded-xl">
                  <Phone className="w-5 h-5 text-emerald-400 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">01969-148410</p>
                  <p className="font-medium">01728-527229</p>
                  <p className="text-emerald-400">WhatsApp Available</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-emerald-500/20 rounded-xl">
                  <Mail className="w-5 h-5 text-emerald-400 group-hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                </div>
                <p className="text-sm">hello@greenlifebd.com</p>
              </div>
            </div>
          </div>

          {/* Right: Location Preview */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-5">Our Nursery Location</h4>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.527!2d90.390000!3d23.870000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5e9c9d3d2f5%3A0x1f8b8e8d8e8d8e8d!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1731840000000"
                width="100%"
                height="240"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=GreenLife+Nursery+Uttara+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-gray-800 text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 <span className="text-emerald-400 font-semibold">GreenLife BD</span> • All Rights Reserved • Made with love in Bangladesh
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Delivering freshness to every corner of Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}