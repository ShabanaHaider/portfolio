import React from 'react';
import Image from 'next/image';


export const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url('/Shabanapic.png')] bg-left lg:bg-[15%] bg-cover flex items-center justify-center relative"
      style={{ backgroundSize: "35%" }}
    >
         
      
      {/* Circle Image */}
      <div className="absolute top-20 left-1/3 transform -translate-x-2/4">
        <img
          src="/Shabanapic.png"
          alt="Shabana"
          className="w-81 h-81 rounded-full border-4 border-white"
        />
      </div> 

      {/* Text Content */}
      <div className="flex justify-end ml-auto items-center text-white font-extrabold lg:text-4xl">
               Portfolio of Shabana Ali      </div>
    </div>
      
  );
};

  

  