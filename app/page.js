"use client"
import About from "@/About/About";
import Education from "@/About/Education";
import Project from "@/Project/Project";
import { Inter } from "next/font/google";
import Contact from "@/About/Contact";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"]
});


export default function Home() {

  return (

    <div className={`pt-[4rem] ${inter.className}`}> 
      <About />
      <Project />
      <Education />
      <Contact />

      <ToastContainer />
    </div>
  );
}
