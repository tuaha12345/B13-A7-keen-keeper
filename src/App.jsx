import { useState } from 'react'

import './App.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
    </>
  )
}

export default App
