import { useEffect } from "react";
//import "../css/info.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Moreinfo(){
    let navigate = useNavigate();
    let location = useLocation();
    let data  = location.state
    useEffect(()=>{
        console.log(data)
    },[data])
    let getdata=()=>{
        navigate("/history/")
    }
    let home=()=>{
        navigate("/home/")
    }
    let back=()=>{
        navigate("/fetch/")
    }

    return(
        <div className="info">
            <h1>STOCK INFORMATION</h1>
            <p>STOCK_NAME <span>{data.STOCK_NAME}</span></p>
            <p>PRICE<span>{data.PRICE}</span></p>
            <p>DECISON<span>{data.DECISON}</span></p>
            <div className="btn">
            <button onClick={getdata} >PREVIOUS HISTORY</button>
            <button onClick={back}>BACK</button>
            <button onClick={home}>HOME</button>
            </div>
        </div>
    );
}
export default Moreinfo;