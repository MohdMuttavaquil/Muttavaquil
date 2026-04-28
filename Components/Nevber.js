import React from 'react'
import Link from 'next/link'
import { Inter, Pacifico } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const Nevber = () => {
  return (

    <nav className='fixed top-0 w-full z-50 bg-black pt-5'>
      <div className='w-[80%] mx-auto h-[4rem] flex justify-between items-center'>

        <div className={`logo text-2xl ${pacifico.className} bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] bg-clip-text text-transparent`}>
          PORTFOLIO
        </div>

        <ul className='flex gap-6 mt-2'>

          <li className={`cursor-pointer hover:font-bold text-sm ${inter.className}`}><Link href="#about">ABOUT</Link></li>
          <li className={`cursor-pointer hover:font-bold text-sm ${inter.className}`}><Link href="#skills">SKILLS</Link></li>
          <li className={`cursor-pointer hover:font-bold text-sm ${inter.className}`}><Link href="#projects">PROJECTS</Link></li>
          <li className={`cursor-pointer hover:font-bold text-sm ${inter.className}`}><Link href="#education">EDUCATION</Link></li>

        </ul>

        <div>
          <Link href="#contact">
            <button className='bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] px-3 py-1 rounded-lg text-white cursor-pointer'>
              Contact Me
            </button>
          </Link>
        </div>

      </div>

    </nav>

  )
}

export default Nevber