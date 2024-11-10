import Link from "next/link";
export default function projects() {
  return (

    
    

    <div>

    <div className="flex justify-center items-center text-4xl my-12">
    <h1> Iam learning Artificial Intelligence, Web 3.0 & Metaverse at Governor House Karachi</h1>
    </div>
      

      <div className="flex justify-center width:80% mt-10  text-3xl">
        <div className="flex gap-10 font-bold text-black text-2xl"> 
          <p>HTML</p>
          <p>TAILWIND CSS</p>
          <p>CUSTOM CSS</p>
          <p>NEXT JS</p>
          <p>TYPESCRIPT</p>
        </div>
        </div>
  
  <div className="flex">
    <div className="flex w-1/4 mt-40 mb-10">
      
        <img
          src="./project1.png"
          alt="PROJECT OF PAKWHEELS WEBSITE"
          width={500}
          height={1000}
          className="cursor-pointer"
          
        />
      
    </div>

    <div className="flex w-1/4 mt-40 mb-10">
      
      <img
        src="./project2.png"
        alt="STATIC INTERACTIVE RESUME"
        width={500}
        height={1000}
        className="cursor-pointer"
      />
    
  </div>

  <div className="flex w-1/4 mt-40 mb-10">
      
        <img
          src="./project3.png"
          alt="DYNAMIC RESUME"
          width={500}
          height={1000}
          className="cursor-pointer"
        />
      
    </div>
    <div className="flex w-1/4 mt-40 mb-10">
      
      <img
        src="./project4.png"
        alt="PRACTICE OF GRID"
        width={500}
        height={1000}
        className="cursor-pointer"
      />
    
  </div>

</div>
    
    </div> 

  );
}




   

 
