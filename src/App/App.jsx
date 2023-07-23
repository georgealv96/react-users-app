import Home from '../Home/Home'
import ByAge from '../ByAge/ByAge'
import ByCountry from '../ByCountry/ByCountry'
import ByName from '../ByName/ByName'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/name">BY NAME</Link>
        <Link to="/country"> BY COUNTRY</Link>
        <Link to="/age">BY AGE</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/name" element={<ByName />} />
          <Route path="/country" element={<ByCountry />} />
          <Route path="/age" element={<ByAge />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
