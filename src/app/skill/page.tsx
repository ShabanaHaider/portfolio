 
import Image from "next/image";


export default function about() {
  return (
    <div className="flex bg-white flex-col justify-center mt-20 items-center z-10">
      <Image
        src="/skill.png"
        alt="Skills"
        width={800}
        height={1000}
      />
    
      
    </div>
  );
}