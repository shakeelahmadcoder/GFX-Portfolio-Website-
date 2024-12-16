import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Blog from './components/Pages/Blog'
import Portfolio from './components/Pages/Portfolio'
import Testimonials from './components/Pages/Testimonials'
import Resume from './components/Pages/Resume'
import Services from './components/Pages/Services'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from 'react-icons/io5'
import { FaWindowClose } from 'react-icons/fa'

const App = () => {
  const [isOpneSidebar, setIsOpneSidebar] = useState(false)
  const toggleSide = () => {
    setIsOpneSidebar(!isOpneSidebar)
  }
  return (
    <Router>
      <div className='min-h-screen flex relative'>
        {!isOpneSidebar ? (
          <button className='absolute z-50 text-white right-2 top-2' onClick={toggleSide}>
            <TiThMenu className='w-8 h-8' />
          </button>
        ) : (
          <button className='absolute z-50 text-white left-36 top-2' onClick={toggleSide}>
            <FaWindowClose className='w-8 h-8 font-bold' />
          </button>

        )}
        {/* Sidebar */}
        <div
          className={`bg-black text-white p-5 fixed h-full z-40 top-0 transition-transform duration-300 ${isOpneSidebar ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <Sidebar />
        </div>


        <div className='bg-gray-500  text-white w-[100%] md:w-[80%] ml-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default App