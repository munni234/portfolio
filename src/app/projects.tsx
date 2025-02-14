import React from 'react'
import Image from 'next/image';
import restaurnt from "@/app/public/pexels-pixabay-262978.jpg";
import calculator from "@/app/public/annie-spratt-r_m-JKJVto0-unsplash.jpg";
import resume from "@/app/public/resume-genius-9si2noVCVH8-unsplash.jpg"
const Projects = () => {
  return (
    <>
   <section className="text-gray-400 body-font  bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full lg:pl-[600px] sm:pl-[300px] md:pl-[200px] mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Projects
        </h1>
        <p>Explore all Projects</p>
        <div className="h-1 w-20 bg-indigo-500 rounded" />
      </div>
     
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg text-[23px]">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={restaurnt}
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-400 text-xl font-medium title-font">
            Restaurant Website
          </h3>
          <h2 className="text-2xl text-white font-medium title-font mb-4">
            Foodtuck
          </h2>
          <p className="leading-relaxed  text-xl">
         with starter and all categories
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg text-[25px]">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={restaurnt}
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-400 text-xl font-medium title-font">
            portfolio
          </h3>
          <h2 className="text-2xl text-white font-medium title-font mb-4">
            Protfolio with core css
          </h2>
          <p className="leading-relaxed text-xl line-clamp-2">
            Here i am evincing my skills and projects and you also have to read the section of about and then if you want you can contact me
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={calculator}
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-400 text-xl font-medium title-font">
            calculator
          </h3>
          <h2 className="text-2xl text-white font-medium title-font mb-4">
          Calculate numbers and perform airthmetic basic operations
          </h2>
          <p className="leading-relaxed text-xl">
           use my calculator and please also drop your feedback
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={resume}
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-400 text-xl font-medium title-font">
            Resume builder
          </h3>
          <h2 className="text-2xl text-white font-medium title-font mb-4">
            you can create your own resume and share it with your friends 
          </h2>
          <p className="leading-relaxed text-xl line-clamp-2">
      Here is static resume you can also get idea and write your resume
          </p>
        </div>
      </div>
 
    </div>
  </div>
</section>


    </>
  )
}

export default Projects;