"use client"
import { useInView } from '@/utils/Scroll'
import { styleVibe, msgly, getFood, dmic } from '@/Data/dta'
import ProjectCard from '@/Components/ProjectCard'

const Project = () => {

  const [ref1, inView1] = useInView(0.5)
  const [ref2, inView2] = useInView(0.5)
  const [ref3, inView3] = useInView(0.75)
  const [ref4, inView4] = useInView(0.5)


  return (

    <div id='projects' className='md:w-[80%] w-[94%] mx-auto my-[5rem]'>

      <h2 className='text-[2rem] text-center my-[2rem]'>PROJECTS</h2>

      <div className='md:flex flex-wrap w-full justify-evenly'>

        <div ref={ref1} className={` ${inView1 ? "card1 opacity-100" : "opacity-0"}  md:w-[40%]`}>
          <ProjectCard data={styleVibe} />
        </div>

        <div ref={ref4} className={` ${inView4 ? "card4 opacity-100" : "opacity-0"} md:w-[40%]`}>
          <ProjectCard data={msgly} />
        </div>

        <div ref={ref2} className={` ${inView2 ? "card3 opacity-100" : "opacity-0"} md:w-[40%]`}>
          <ProjectCard data={dmic} />
        </div>

        <div ref={ref3} className={` ${inView3 ? "card3 opacity-100" : "opacity-0"} md:w-[40%] md:flex hidden`}>
          <ProjectCard data={getFood} />
        </div>

      </div>

    </div>

  )
}

export default Project