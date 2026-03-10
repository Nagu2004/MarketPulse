import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Chatbot from './components/Chatbot'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App
