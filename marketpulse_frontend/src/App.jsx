
//import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header";
import Main_pg from './components/Main_pg';
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Main_pg/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
