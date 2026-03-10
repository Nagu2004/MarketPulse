
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';

function Main_p(){
    return(
        <div className="main">
            <Routes>
            <Route path="/home/" element={<Home/>}></Route>
            </Routes>
        </div>
    );
}
export default Main_p;