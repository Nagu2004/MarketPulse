
//import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main_pg from './components/Main_pg'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header.jsx";
import Main_pg from './components/Main_pg';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Header/>
<<<<<<< HEAD
=======
      <Main_pg/>
>>>>>>> 77eb6c08f0dc4384fff86648de733beea421c94d
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
