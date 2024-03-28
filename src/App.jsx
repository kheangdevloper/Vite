import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/page/Home'
import About from '../src/page/About'
import Books from '../src/page/Books'
import Contact from '../src/page/Contact'
import Course from '../src/page/Course'
import Services from '../src/page/Services'
import Videos from '../src/page/Videos'
import Headers from '../src/components/Headers'
import Footer from '../src/components/Footers'

function App() {
  return (
    <div>
      <Headers/>
     
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/videos' element={<Videos/>}/>
       
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
