
import Sidebar from './components/sidebar'
import NavBar from './components/navbar'
import Player from './components/player'
import Display from './components/Display'
import React, { useContext } from 'react'
import { PlayerContext } from './Context.jsx/PlayerContext.jsx'


function App() {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
