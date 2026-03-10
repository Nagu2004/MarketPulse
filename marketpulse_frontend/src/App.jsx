import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main_p from './components/Main_pg'
import { BrowserRouter } from 'react-router-dom'
import Chatbot from './components/Chatbot'



function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Main_p/>
      <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App
