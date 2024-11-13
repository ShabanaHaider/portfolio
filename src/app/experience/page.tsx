
import Image from "next/image";


export default function about() {
  return (
    <div className="flex flex-col bg-white justify-center mt-20 items-center">
      <Image
        src="/experience.png"
        alt="Experience"
        width={800}
        height={1000}
      />
    
      
    </div>
  );
}