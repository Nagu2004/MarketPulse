
//import './App.css'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header.jsx";
import Main_pg from './components/Main_pg';


function App() {

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
