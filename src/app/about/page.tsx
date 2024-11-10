import Link from "next/link"; 
import Image from "next/image";


export default function about() {
  return (
    <div className="flex flex-col justify-center mt-20 items-center">
      <Image
        src="/secp.png"
        alt="Introduction"
        width={800}
        height={1000}
      />
    
      <div className="flex justify-left items-center text-2xl pt-20 rounded-lg  bg-gray-600 py-5 px-5">
        
          <p>I have a vast experience of working in different organizational setups including private firms, multinational & Government Organization. My objective is to obtain career job which commensurate with my qualification and working experience to explore new opportunities.

Shabana Haider Ali
FCMA, PSC SHAIDERA LTD & SHAIDERA LLC
</p> 

<ul>
<ol>Contact:                           +923330369992, +923212840554</ol>
<ol>Email:                             info@shaidera.co.uk, shaidera@yahoo.com</ol>
<ol>Website:                           https://shaidera.co.uk/</ol>

  </ul>      
      </div>
    </div>
  );
}