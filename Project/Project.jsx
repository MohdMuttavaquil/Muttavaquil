"use client"
import { useInView } from '@/utils/Scroll'

const Project = () => {

  const [ ref1, inView1 ] =  useInView(0.5)
  const [ ref2, inView2 ] =  useInView(0.5)
  const [ ref3, inView3 ] =  useInView(0.75)


  return (

    <div id='projects' className='w-[80%] mx-auto my-[5rem]'>

      <h2 className='text-[2rem] text-center my-[2rem]'>PROJECTS</h2>

      <div className='flex flex-wrap w-full justify-evenly'>

        <div ref={ref1} className={`${inView1? "card1 opacity-100" : "opacity-0"}  border-2 border-amber-800 projects my-4 w-[35%] rounded-xl cursor-pointer`}>

          <img src='./getFood.avif' className='h-[13rem] w-[96%] mt-2 mx-auto rounded-xl'></img>

          <div className='projectInfo w-[90%] my-2 mx-auto'>

            <p className='text-[1.5rem] font-semibold'>Food Delivery App</p>
            <p className=''>Food Delivery App order meals online with secure payments and cash on delivery, add items to cart and sign in with user authentication. </p>

            <div className='flex flex-wrap'>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>React.js</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>TailwindCSS</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>Node.js</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>Mongoodb</button>
            </div>

            <div className='Link mt-2 mb-4 flex gap-4 ml-[1rem] '>
                <a className='text-blue-600' href='https://getfood-frontrnd.onrender.com/' target='_blank'>Live Demo</a>
                <a className='text-blue-600' href='https://github.com/MohdMuttavaquil/GetFood' target='_blank'>GitHub Repo</a>
            </div>

          </div>

        </div>

        <div ref={ref1} className={`${inView1? "card4 opacity-100" : "opacity-0"}  border-2 border-amber-800 projects my-4 w-[35%] rounded-xl cursor-pointer`}>

          <img src='./collage.avif' className='h-[13rem] w-[96%] mt-2 mx-auto rounded-xl'></img>

          <div className='projectInfo w-[90%] my-2 mx-auto'>

            <p className='text-[1.5rem] font-semibold'>Collage Website</p>
            <p className=''>Developed a college management system featuring course and facilities information, online fee payment and admission registration with user authentication. </p>


            <div className='flex flex-wrap mb-4'>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>React.js</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>TailwindCSS</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>Node.js</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>Mongoodb</button>
            </div>

            <div className='Link mt-2 mb-4 flex gap-4 ml-[1rem] '>
                <a className='text-blue-600' href='https://college-website-liard.vercel.app/' target='_blank'>Live Demo</a>
                <a className='text-blue-600' href='https://github.com/MohdMuttavaquil/college-Website' target='_blank'>GitHub Repo</a>
            </div>

          </div>

        </div>

        <div ref={ref2} className={`${inView2? "card3 opacity-100" : "opacity-0"}  border-2 border-amber-800 projects my-4 w-[35%] rounded-xl cursor-pointer`}>
          <img src='./weather.avif' className='h-[13rem] w-[96%] mt-2 mx-auto rounded-xl'></img>

         <div className='projectInfo w-[90%] my-2 mx-auto'>

            <p className='text-[1.5rem] font-semibold'>Weather App</p>
            <p className=''>Built a weather application that provides real time weather data, air quality index, wind speed and wind direction using live API integration.</p>
            <div className='flex flex-wrap mb-4'>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>HTML</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>CSS</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>JavaScript</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>APIs</button>
            </div>

            <div className='Link mt-2 mb-4 flex gap-4 ml-[1rem] '>
                <a className='text-blue-600' href='https://github.com/MohdMuttavaquil/Weather-app' target='_blank'>GitHub Repo</a>
            </div>

          </div>

        </div>

        <div ref={ref3} className={`${inView3? "card3 opacity-100" : "opacity-0"}  border-2 border-amber-800 projects my-4 w-[35%] rounded-xl cursor-pointer`}>
          <img src='./calculator.png' className='h-[13rem] w-[96%] mt-2 mx-auto rounded-xl'></img>

          <div className='projectInfo w-[90%] my-2 mx-auto'>

            <p className='text-[1.5rem] font-semibold'>Simple Calculator</p>
            <p className=''>Developed a basic calculator application capable of performing simple arithmetic operations such as addition, multiplication, subtraction, and division.</p>
            <div className='flex flex-wrap mb-4'>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>HTML</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>CSS</button>
              <button className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>JavsScript</button>
            </div>

            <div className='Link mt-2 mb-4 flex gap-4 ml-[1rem] '>
                <a className='text-blue-600' href='https://github.com/MohdMuttavaquil/Calculator' target='_blank'>GitHub Repo</a>
            </div>

          </div>
        </div>

      </div>

    </div>

  )
}

export default Project