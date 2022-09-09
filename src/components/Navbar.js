import {Link} from "react-router-dom"

export default function Navbar(){
    return <div className="navbar">
            <Link to="/" className="navbarHome">Home</Link>
            <Link to="/english" className="navbarEnglish">English Pokedex</Link>
            <Link to="/japanese" className="navbarJapanese">Japanese Pokedex</Link>
    </div>
};