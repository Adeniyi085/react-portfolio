import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-purple-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tobi Adegelu</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Fullstack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Frontend Developer specialize in designing responsive web applications and satisfying Clients need 
                using the most recent technologies.
            </p>
            <div>
            <button className='text-white px-6 border-2 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600'> View Work 
            <span className='hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/> 
            </span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Home
 