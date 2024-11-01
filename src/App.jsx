import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import VideoDetails from './components/VideoDetails/VideoDetails'
import HomePage from './pages/HomePage/Homepage'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
