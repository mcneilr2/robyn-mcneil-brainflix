import { useState } from 'react'
import data from './assets/data/video-details.json'
import './App.scss'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  function changeActiveVideo(id){
    setActiveVideoId(id)
  }

  const [activeVideoId, setActiveVideoId] = useState(data[0].id)

  return (
    <>
    <Header />
    <VideoPlayer activeVideoId={activeVideoId} data={data} />
    </>
  )
}

export default App
