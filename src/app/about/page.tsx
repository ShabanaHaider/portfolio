 
import Image from "next/image";




export default function about() {
  return (
    <div className="flex flex-col justify-center bg-[#e8c389] mt-20 items-center">
      <Image
        src="/secp.png"
        alt="Introduction"
        width={800}
        height={1200}
      />
    
      <div className="flex justify-left items-center rounded-lg md:text-sm lg:text-2xl pt-20  bg-black py-5 px-5">
        
          <p>I have a vast experience of working in different organizational setups including private firms, multinational & Government Organization. My objective is to obtain career job which commensurate with my qualification and working experience to explore new opportunities.

Shabana Haider Ali
FCMA, PSC SHAIDERA LTD & SHAIDERA LLC
</p> 


<ul>
<ol>Contact: +92,333,036,9992, +92,321,284,0554</ol>
<ol>Email: <a href="mailto:shaidera@yahoo.com" className="text-gray-500 hover:underline">shaidera@yahoo.com</a></ol>
<ol>Website: https://shaidera.co.uk</ol>

{/* <ol>Website: <a href="https://shaidera.co.uk" className="text-gray-500 hover:underline">https://shaidera.co.uk</a></ol> */}
</ul>



      </div>
    </div>


  );
}



