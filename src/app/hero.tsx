"use client"
import React from 'react'
import girl from "@/app/public/muhammad-ruqi-yaddin-hxLv1jqP0_o-unsplash.jpg";
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = ()   => {
  return (
    <>
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto h-full flex px-5 py-24 pt-[200px] md:flex-row  flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Hello, Im Faiza Abbasi
        <br className="hidden lg:inline-block" />
        Web developer
      </h1>
      <div className='text-orange-300 text-[24px] font-bold'>
      <Typewriter
    options={{
      strings: ['Frontend Developer', 'Backened Developer',"react Developer", "nextjs developer"],
      autoStart: true,
      loop: true,
      delay: 75,
    }}
  />
</div>



      <p className="mb-8 leading-relaxed text-[22px]">
   I am a web developer and a <span className='text-orange-300 text-[22px]'>UI/UX developer</span>     I am in learning phase and i  have  verve to learn new technologies.
    
        <span>if you want to know about me click on the below about button</span>
      </p>
      <div className="flex justify-center mt-[80px]" >
        <Link className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" 
      href="/">
          Projects
        </Link>
        <Link className="ml-[50px] inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-orange-300 rounded text-lg"
        href="/">
          Skills
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover object-center rounded-[40%] "
        alt="hero"
        src={girl}
      />
    </div>
  </div>
</section>
   
    </>
  )
}

export default Hero;