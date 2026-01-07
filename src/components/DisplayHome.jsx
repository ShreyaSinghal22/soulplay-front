import React from 'react'
import Navbar from './navbar.jsx';
import Albumitem from './Albumitem';
import { albumsData } from '../assets/frontend-assets/assets.js';

const DisplayHome = () => {
  return (
    <>
        <Navbar/>
        <div className='mb-4'>
            <h1 className='my-4 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto'>
                {albumsData.map((item,index)=>(
                <Albumitem key={index} id={item.id} image={item.image} name={item.name} desc={item.desc} />
               ))} 
            </div>
        </div>
    </>
  )
}

export default DisplayHome;