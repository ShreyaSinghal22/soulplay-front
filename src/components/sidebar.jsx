import React from 'react'
import { assets } from '../assets/frontend-assets/assets.js';
import '../index.css';

const Sidebar = () => {
  return (
    /* h-screen ensures it takes the full vertical space */
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-gray-400 bg-[#121212] hidden lg:flex'>
      
      {/* TOP SECTION: Home & Search */}
      <div className=' h-[15%] rounded-lg flex flex-col justify-around bg-[#242424]'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer hover:text-white transition'>
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer hover:text-white transition'>
          <img className="w-6" src={assets.search_icon} alt="Search" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* BOTTOM SECTION: Library */}
      <div className='bg-[#121212] h-[85%] rounded-lg'>
        <div className=' flex p-4 justify-between items-center '>
          <div className='flex items-center gap-3 p-2'>
            <img className="w-8" src={assets.stack_icon} alt="Library" />
            <p className="font-semibold hover:text-white transition text-gray-400">Your Library</p>
          </div>

          <div className='flex items-center gap-3 p-2.5'>
            <img className="w-5 cursor-pointer opacity-70 hover:opacity-100" src={assets.arrow_icon} alt="" />
            <img className="w-5 cursor-pointer opacity-70 hover:opacity-100" src={assets.plus_icon} alt="" />
          </div>
        </div>

        {/* Playlist Card */}
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1'>
          <h1 className='text-[16px] text-white '>Create your first playlist</h1>
          <p className='font-normal text-sm text-gray-300'>It's easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-black text-[14px] font-bold rounded-full mt-4 hover:scale-105 transition-transform'>
            Create Playlist
          </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-2'>
          <h1 className='text-[16px] text-white '>Let's find some podcasts for you.</h1>
          <p className='font-normal text-sm text-gray-300'>We will keep you updated on new Eps</p>
          <button className='px-4 py-1.5 bg-white text-black text-[14px] font-bold rounded-full mt-4 hover:scale-105 transition-transform'>
            Browse Podcasts
          </button>
        </div>
      </div>

    </div>
  )
}

export default Sidebar;