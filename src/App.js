import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import KssInfo from './components/KssInfo'
import KssCarousel from './components/KssCarousel'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<KssInfo />} />
          <Route path="/products" element={<KssCarousel />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App