import { useState } from 'react'
import data from './assets/data/video-details.json'
import './App.scss'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoDetails from './components/VideoDetails/VideoDetails'
import CommentsForm from './components/CommentsForm/CommentsForm'

function App() {
  function changeActiveVideo(id){
    setActiveVideoId(id)
  }

  const [activeVideoId, setActiveVideoId] = useState(data[0].id)

  return (
    <>
    <Header />
    <article className = "current-video__section">
      <VideoPlayer activeVideoId={activeVideoId} data={data} />
      <VideoDetails activeVideoId={activeVideoId} data={data} />
      {/* <CommentsForm activeVideoId={activeVideoId} data={data} /> */}
    </article>
    </>
  )
}

export default App
