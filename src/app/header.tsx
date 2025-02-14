import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-gray-800 flex h-[90px]  pt-9 pl-3 w-auto justify-around sticky top-0 '>
     <h4 className='text-2xl text-orange-300 lg:text-4xl'>{"Portfolio"}</h4>
     <div className='flex gap-2  text-white   sm:gap-2  lg:text-2xl sm:text-xl md:text-xl lg:gap-10 '>
    
      <p className='hover:text-orange-300 cursor-pointer'>  <Link href="/">Home  </Link> </p>
      <p className='hover:text-orange-300 cursor-pointer'> 
      <Link href="/" >Projects </Link>
       </p>
       <p className='hover:text-orange-300 cursor-pointer'> 
        <Link href="/contact" >contact </Link>
        </p>
        <p className='hover:text-orange-300 cursor-pointer'> 
        <Link href="/about" >{"About"} </Link>
         </p>
     </div>
    </div>
  )
}

export default Header;  





