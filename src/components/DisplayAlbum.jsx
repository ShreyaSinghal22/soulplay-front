import React from 'react'
import NavBar from './navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/frontend-assets/assets';
import {assets} from '../assets/frontend-assets/assets';
import { useContext } from 'react';
import { PlayerContext } from '../Context.jsx/PlayerContext.jsx';   
import Songitem from './songitem.jsx';
import Albumitem from './Albumitem.jsx';


const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);

  return (
    <>
        <NavBar/>
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4 className=''>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img className='inline-block w-12' src={assets.logo_icon} alt="" />
                    <b> Soulplay</b>
                    {' '}• 2025 • 10 songs, 38 min 45 sec
                    • 1,234,567 likes
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] font-semibold'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr/>
        {
            songsData.map((item,index)=>(
                <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 items-center pl-2 py-4 hover:bg-[#ffffff26] rounded cursor-pointer'>
                    <p className='text-white'><b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                    <img className='inline mr-5 w-10' src={item.image} alt="" />
                    {item.name}
                    </p>
                    <p className=' text-[#a7a7a7] text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] text-[#a7a7a7] hidden sm:block'>Aug 20, 2025</p>
                    <p className='m-auto text-center text-[#a7a7a7]  text-[15px]'>{item.duration}
                    </p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum;