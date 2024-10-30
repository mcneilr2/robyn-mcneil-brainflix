import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
