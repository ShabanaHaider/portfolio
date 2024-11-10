
import React from 'react';
import Link from 'next/link';


export const Navbar = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="flex w-full justify-center bg-black h-20">
        {/* Left side (ABOUT) */}
        <div className="flex justify-center text-2xl items-center font-bold w-1/3 text-white">
          <Link href="/about" passHref><p>ABOUT</p>    </Link>
        </div>
        
        {/* Right side (Navigation links) */}
        <div className="flex justify-end w-2/3 font-bold text-2xl mr-32 items-center gap-6 text-white">
        <Link href="/education" passHref><p>EDUCATION</p>    </Link>
        <Link href="/experience" passHref><p>WORK EXPERIENCE</p>    </Link>
        <Link href="/projects" passHref><p>PROJECTS</p>    </Link>
        <Link href="/skill" passHref><p>SKILLS</p>    </Link>
          
        </div>
      </nav>

      
    </div>
  );
};
