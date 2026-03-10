
function Header(){
    return(
        <div className="header">
            <h1 className="logo">
                <span className="rupee">₹</span> MarketPulse
            </h1>
            <div className="money-icons">
                <span>$</span>
                <span>₹</span>
                <span>€</span>
                <span>₿</span>
            </div>
        </div>
    );
}

export default Header;