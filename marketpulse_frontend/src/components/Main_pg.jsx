import History from "./History";
import Home from "./Home";
import Moreinfo from "./Moreinfo";
import Fetch from "./Fetch";
import { Route, Routes } from 'react-router-dom';

function Main_pg(){
    return(
        <div className="main">
            <Routes>
            <Route path="/home/" element={<Home/>}/>
            <Route path="/history/" element={<History/>}></Route>
            <Route path="/fetch/" element={<Fetch/>} />
            <Route path="/info/" element={<Moreinfo/>} />
            </Routes>
        </div>
    );
}
export default Main_pg;