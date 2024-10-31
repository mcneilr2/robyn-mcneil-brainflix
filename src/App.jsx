import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import VideoDetails from './components/VideoDetails/VideoDetails'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/videos/:videoId" element={<VideoDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
