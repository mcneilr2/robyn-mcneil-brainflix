import { useState } from 'react'
import data from './assets/data/video-details.json'
import './App.scss'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoDetails from './components/VideoDetails/VideoDetails'
import CommentsForm from './components/CommentsForm/CommentsForm'
import CommentsList from './components/CommentsList/CommentsList'
import NextVideosList from './components/NextVideosList/NextVideoList'


function App() {
  function changeActiveVideoId(id){
    setActiveVideoId(id)
  }

  const [activeVideoId, setActiveVideoId] = useState(data[0].id)

  return (
    <>
    <Header />
    <main className = "current-video__section">
      <VideoPlayer activeVideoId={activeVideoId} data={data}  />
      <VideoDetails activeVideoId={activeVideoId} data={data} />
      <CommentsForm activeVideoId={activeVideoId} data={data} />
      <CommentsList activeVideoId={activeVideoId} data={data} />
    </main>
    <NextVideosList activeVideoId={activeVideoId} data={data} changeActiveVideoId = {changeActiveVideoId} />
    </>
  )
}

export default App
