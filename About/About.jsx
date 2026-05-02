"use client"
import { useInView } from '@/utils/Scroll'
import Link from 'next/link'
import { frontend, backend } from '@/Data/dta'
import { Download, Mail } from 'lucide-react'

const About = () => {

  const [ref1, inView1] = useInView(0.5)
  const [ref2, inView2] = useInView(0.7)

  return (
    <div className='w-[80%] mx-auto'>

      {/*About section*/}
      <div id='about' className={`fadeIn my-[8rem] flex justify-around`}>

        <div className={`info md:w-[50%] w-full`}>

          {/* About me section */}

          <p className='text-[1rem]'>Hello it's me </p>
          <h1 className='bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] bg-clip-text text-transparent text-[2rem] inline-block mt-1'>MOHD MUTTAVAQUIL</h1>
          <h2 className='text-[2rem]'>Full Stack Web Developer</h2>

          <h2 className='text-[1rem] mt-2 w-[90%]'> Hi, I’m Mohd Muttavaquil, a passionate Full Stack Web Developer with hands-on experience in building modern, scalable web applications.
            I completed my Computer Science undergraduate degree in 2024 from Gurukul Kangri University, Haridwar.
            I am highly motivated to grow my career in web development, continuously improve my skills, and explore exciting opportunities where I can contribute, learn, and build impactful products.</h2>

          <div className="flex gap-6 mt-4">

            <Link href="#contact">
              <button className='flex gap-2 bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] px-3 py-1 rounded-lg text-white cursor-pointer'>
                <Mail className="w-5 h-5 pt-1" /> Contact Me
              </button>
            </Link>

            <Link href="./resume.pdf" target="_blank">
              <button className='flex gap-1.5 bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] px-3 py-1 rounded-lg text-white cursor-pointer'>
                <Download className="w-5 h-5 pt-1" /> Resume
              </button>
            </Link>
          </div>


           {/* GitHub & Linked section */}

          <div className='flex gap-6 mt-6'>
            <a href='https://github.com/MohdMuttavaquil' target='_blank'><i className="devicon-github-original-wordmark text-[3rem] rounded-full"></i> </a>
            <a href='https://www.linkedin.com/in/mohd-muttavaquil/' target='_blank'>
              <img className='h-[3rem] rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
            </a>
          </div>

        </div>

        {/* Profile photo section */}

        <img src='./profile.jpeg' className={`shadow h-[25rem] w-[35%] md:flex hidden rounded-full bg-red-400`}></img>

      </div>

      {/*Skills Section */}

      <h2 className='text-[2rem] text-center my-[2rem]'>Technical Skills</h2>

      <div id='skills' className={`my-[2rem] w-[80%] flex mx-auto justify-evenly`}>

        <div ref={ref1} id="frontend" className={`${inView1 ? "card3 opacity-100" : "opacity-0"} border-2 border-[#444444] hover:border-4 rounded-xl lg:w-[45%]`} >

          <p className='font-semibold text-center text-xl mt-6'>Frontend</p>

          <div className='flex flex-wrap justify-around mt-2 mb-6 px-2 '>
            {frontend.map((i, index) => <div className='flex gap-1 bg-[#222222] rounded-2xl justify-center items-center px-3 py-1 my-2' key={index}>
              <i className={`${i.url} text-[2.5rem]`}> </i>
              <p className='font-semibold'>{i.name}</p>
            </div>)}
          </div>

        </div>

        <div ref={ref2} id="backend" className={`${inView2 ? "card3 opacity-100" : "opacity-0"} border-2 border-[#444444] hover:border-4 rounded-xl lg:w-[45%]`} >

          <p className='font-semibold text-center text-xl mt-6'>Backend</p>

          <div className='flex flex-wrap justify-around mt-2 mb-6 px-2'>
            {backend.map((i, index) => <div className='flex gap-1 bg-[#222222] rounded-2xl justify-center items-center px-3 py-1 my-2' key={index}>
              <i className={`${i.url} text-[2.5rem]`}> </i>
              <p className='font-semibold'>{i.name}</p>
            </div>)}
          </div>


        </div>

      </div>

    </div>
  )
}

export default About