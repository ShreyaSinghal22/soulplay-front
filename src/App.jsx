
import Sidebar from './components/sidebar'
import NavBar from './components/navbar'
import Player from './components/player'
import Display from './components/Display'

function App() {

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
        <Player />
    </div>
  )
}

export default App
