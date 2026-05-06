"use client"
import React from 'react'

const ProjectCard = ({ data}) => {

  return (
    <div className={`border-2 border-amber-800 projects my-4 rounded-xl cursor-pointer`}>

      <img src={data.url} className='h-[13rem] w-[96%] mt-2 mx-auto rounded-xl'></img>

      <div className='w-[90%] my-2 mx-auto'>

        <p className='text-[1.5rem] font-semibold'>{data.name}</p>
        <p className=''>{data.disc}</p>


        <div className='flex flex-wrap mb-4'>
          {data.tech.map((item, index) => <button key={index} className='px-3 py-1 bg-[#222222] mt-2 mx-2 rounded-lg'>{item}</button>)}
        </div>

        <div className='Link mt-2 mb-8 flex gap-4 ml-[1rem] '>
          {data.link.map((item, index) => <a key={index} className='text-blue-600' href={item.href} target='_blank'>{item.name}</a>)}
        </div>

      </div>


    </div>
  )
}

export default ProjectCard
