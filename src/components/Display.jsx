import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { useRef , useEffect } from 'react';
import { albumsData } from '../assets/frontend-assets/assets';


const Display = () => {

const displayRef = useRef();
const location = useLocation();
const isAlbum = location.pathname.includes('/album/');  //or location.pathname.includes('/album/') or location.pathname === '/album/:id'
//on the albumitem page the console is showing true on the screen while on any other page its giving false.
const albumId = isAlbum ? location.pathname.slice(-1) : ""; // gets the last character of the path as id if on album page else empty string
const bgColor = albumsData[Number(albumId)].bgColor;

useEffect(() => {
  if(isAlbum){
    displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`; 
  } else{
    displayRef.current.style.background = '#121212'; 
  }
});


  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bgv-[#121212] text-white overflow-auto lg:w-[75] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome />} />
            <Route path='/album/:id' element={<DisplayAlbum />} />
        </Routes>
    </div>
  )
}

export default Display