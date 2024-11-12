import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-black
     via-gray-600 to-white">
      {/* Shabana's Image */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src="/Shabanapic.png"
          alt="Shabana"
          width={600}  // Set width
          height={600} // Set height
          className="rounded-full border-4 border-white"
          
        />
      </div>
      
      {/* Portfolio Title */}
      <div className="flex justify-center text-white font-extrabold text-4xl pt-20 my-24 z-10">
       <h1> Portfolio of Shabana Haider Ali</h1>
      </div>
    </div>
  );
}





  

  