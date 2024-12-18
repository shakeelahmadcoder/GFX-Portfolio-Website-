import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
// import Blog from './components/Pages/Blog'
import Portfolio from './components/Pages/Portfolio'
import Testimonials from './components/Pages/Testimonials'
import Resume from './components/Pages/Resume'
import Services from './components/Pages/Services'

const App = () => {
  const [isOpneSidebar, setIsOpneSidebar] = useState(false)
  const handleOpenSidebar = () => {
    setIsOpneSidebar(!isOpneSidebar)
  }

  return (
    <Router>
      <div className="min-h-screen flex relative">
        {/* Hamburger Button */}
        {!isOpneSidebar ? (
          <button
            className="absolute md:hidden top-3 left-60 z-50 text-white text-4xl font-bold"
            onClick={handleOpenSidebar}
          >
            X
          </button>
        ) : (
          <button
            className="absolute md:hidden top-3 right-3 z-50 text-white text-4xl font-bold"
            onClick={handleOpenSidebar}
          >
           &#9776;
          </button>
        )}

        {/* Sidebar */}
        <div
          className={`${
            !isOpneSidebar ? 'translate-x-0' : '-translate-x-full'
          } bg-black h-screen w-[70%] md:w-[20%] p-5 fixed md:relative transform transition-transform duration-300 z-40`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="bg-[#242424] text-white w-full md:w-[80%] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
