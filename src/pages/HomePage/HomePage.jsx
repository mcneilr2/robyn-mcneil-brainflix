import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import data from '../../data/video-details.json';
import './HomePage.scss'
import Header from '../../components/Header/Header'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoDetails from '../../components/VideoDetails/VideoDetails'
import CommentsForm from '../../components/CommentsForm/CommentsForm'
import CommentsList from '../../components/CommentsList/CommentsList'
import NextVideosList from '../../components/NextVideosList/NextVideoList'


function HomePage() {

  const [activeVideo, setActiveVideo] = useState(data[0])

  return (
    <>
    <VideoPlayer activeVideo = {activeVideo}  />
    <section className = "main-content--desktop">
      <article className = "current-video__section">
        <VideoDetails activeVideo = {activeVideo} />
        <CommentsForm activeVideo={activeVideo} />
        <CommentsList activeVideo={activeVideo} />
      </article>
      <NextVideosList activeVideo={activeVideo} data={data} changeActiveVideo = {setActiveVideo} />
    </section>
    </>
  )
}

export default HomePage
