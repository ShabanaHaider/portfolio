import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5 } from "react-icons/fa";

export default function Grid() {
    return (
        <div>
            {/* Header Section */}
            <div className="flex justify-center items-center text-4xl my-12">
                <h1> I am learning Artificial Intelligence, Web 3.0 & Metaverse at Governor House Karachi</h1>
            </div>

            {/* Skills Section */}
            <div className="flex justify-center w-4/5 mt-10 md:text-2xl text-4xl">
                <div className="flex gap-10 font-bold text-black text-4xl"> 
                    <p><FaHtml5 /></p>                      
                    <p>TAILWIND CSS</p>
                    <p>CUSTOM CSS</p>
                    <p>NEXT JS</p>
                    <p>TYPESCRIPT</p>
                </div>
            </div>

            {/* Image Grid Section */}
            <div className="mt-20">
                <div className="grid grid-cols-2 grid-rows-2 gap-10 pt-5">
                    {/* Image 1 */}
                    <div className="flex flex-col justify-center items-center">
                        <Link href="https://minihackathon-p.vercel.app/" passHref>
                        <Image
                            src="/project1.png"
                            alt="Pak Wheels website"
                            width={800}
                            height={800}
                            className="cursor-pointer transition-transform duration-200 ease-in-out transform active:scale-95 active:translate-y-1"
                        />
                        </Link>
                    </div>

                    {/* Image 2 */}
                    <div className="flex flex-col justify-center items-center">
                        <Link href="https://milestone1resume.vercel.app/" passHref>
                        <Image
                            src="/project2.png"
                            alt="Static Interactive Resume"
                            width={800}
                            height={800}
                            className="cursor-pointer transition-transform duration-200 ease-in-out transform active:scale-95 active:translate-y-1"
                        />
                        </Link>
                    </div>

                    {/* Image 3 */}
                    <div className="flex flex-col justify-center items-center">
                        <Link href="https://milestone3-ten-psi.vercel.app/" passHref>
                        <Image
                            src="/project3.png"
                            alt="Dynamic resume builder"
                            width={800}
                            height={800}
                            className="cursor-pointer transition-transform duration-200 ease-in-out transform active:scale-95 active:translate-y-1"
                        />
                        </Link>
                    </div>

                    {/* Image 4 */}
                    <div className="flex flex-col justify-center items-center">
                        <Link href="/project4.png" passHref>
                        <Image
                            src="/project4.png"
                            alt="class 5 assignment"
                            width={800}
                            height={800}
                            className="cursor-pointer transition-transform duration-200 ease-in-out transform active:scale-95 active:translate-y-1"
                        />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


