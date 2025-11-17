import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import MetaballsBackground from './MetaballsBackground';

const poppins = Poppins({ weight: '600', subsets: ['latin'] });

const Hero = () => {
  return (
    <div
      className={`
        relative overflow-hidden flex flex-col lg:flex-row 
        justify-center lg:justify-around 
        items-center 
        gap-8 lg:gap-12 
        px-4 sm:px-6 lg:px-8 
        py-8 lg:py-12 
        ${poppins.className}
      `}
    >
      <MetaballsBackground />
      {/* Left Content */}
      <div className="text-white flex flex-col justify-center gap-5 sm:gap-6 max-w-lg text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Plants will make <span className='bg-gradient-to-r from-green-600 via-emerald-500 to-green-700
    bg-[length:200%_200%]
    animate-gradient
    text-transparent bg-clip-text'>your life better</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white">
          Choose beautiful plants for your home and offices. <br></br>Add freshness to your life.
        </p>
        <button
          className="
            w-fit mx-auto lg:mx-0 
            bg-gradient-to-r from-[#009E60] to-[#00D46A] 
            px-5 py-2.5 sm:px-6 sm:py-3 
            rounded-xl text-white font-semibold 
            shadow-lg transition-all duration-200 
            hover:scale-105 active:scale-95
          "
        >
          Explore
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-end w-full lg:w-auto">
        <div className="animate-bounce">
          <Image
            src="/alovera_hero.png"
            alt="Aloe Vera Plant"
            width={500}
            height={500}
            className="
              object-contain 
              w-[200px] h-[200px] 
              xs:w-[250px] xs:h-[250px] 
              sm:w-[300px] sm:h-[300px] 
              md:w-[400px] md:h-[400px] 
              lg:w-[500px] lg:h-[500px]
            "
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;