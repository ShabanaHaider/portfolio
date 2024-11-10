import Link from "next/link"; 
import Image from "next/image";


export default function about() {
  return (
    <div className="flex flex-col justify-center mt-20 items-center">
      <Image
        src="/skills.png"
        alt="Skills"
        width={800}
        height={1000}
      />
    
      
    </div>
  );
}