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
<<<<<<< HEAD
      <Home/>
=======
      <BrowserRouter>
      <Footer/>

      </BrowserRouter>
>>>>>>> e61944b6a3def9a38eba2b1aa96165c10ac41643
    </div>
  )
}

export default App
