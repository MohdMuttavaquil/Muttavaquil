"use client"
import React from 'react'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/utils/Scroll'

const Contact = () => {

  const [result, setResult] = useState("")
  const [ref, inView ] = useInView(0.5)

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "00ee7571-ad79-4d7a-86a2-12684ca3a2f5")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <div id='contact' ref={ref} className={`${inView ? "fadeIn opacity-100" : "opacity-0"} w-[80%] flex mx-auto flex-col my-[7rem]`}>

      <div className='flex flex-col items-center'>
        <p className='text-xl text-center'>Connact with me</p>
        <p className='text-[2rem] text-center'>Get In Touch</p>
      </div>

      <form onSubmit={onSubmit} className='mx-auto items-center mt-6 px-3 py-4 bg-[#1E1E1E] rounded-xl inline-block border-2 border-[#444444]'>

        <div className='flex gap-4'>
          <input type='text' placeholder='Enter Your Name' name='name' required className='bg-[#FFFFFF0D]  border-2 border-[#444444] rounded-lg outline-none px-4 py-2' />
          <input type='text' placeholder='Enter Your Email' name='email' required className='bg-[#FFFFFF0D]  border-2 border-[#444444] rounded-lg outline-none px-4 py-2' />
        </div>

        <textarea rows='6' placeholder='Enter Massege' name='massege' required className='bg-[#FFFFFF0D]  border-2 border-[#444444] rounded-lg outline-none w-[32rem] px-4 py-2 mt-6' />

        <div className='flex flex-col items-center'>
          <button type='submit' className='flex gap-1 bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] px-3 py-1 rounded-lg text-white cursor-pointer mt-6'>Submit Now <ArrowRight className="w-5 h-5 pt-1" /> </button>

          <p className='mt-4 text-lg'>{result}</p>
          
        </div>


      </form>

    </div>
  )
}

export default Contact