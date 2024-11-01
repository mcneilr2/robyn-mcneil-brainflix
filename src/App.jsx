import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import VideoDetails from './components/VideoDetails/VideoDetails'
import HomePage from './pages/HomePage/Homepage'
import UploadPage from './pages/UploadPage/UploadPage'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
