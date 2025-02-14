import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-400 bg-gray-800 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <h4 className='text-2xl text-orange-300 lg:text-4xl'>{"Portfolio"}</h4>
     
  <div className="max-w-7xl mx-auto  px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-2xl">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
       
      </div>

  </div>
</footer>

    </div>
  )
}

export default Footer;