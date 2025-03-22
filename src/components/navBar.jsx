import { Link } from "react-router-dom";
const NavBarElement = () => {
    return (
        <div className="navBar">
            <Link to={"/"}><button className="ribbonButton">Home</button></Link>
            <Link to={"/WorkSheet"}><button className="ribbonButton">WorkSheet Maker</button></Link>
            <Link to={"/LectureSuggester"}><button className="ribbonButton">Lecture Suggester</button></Link>
            <Link><button className="ribbonButton">Progress Till Now</button></Link>
            <Link><button className="ribbonButton">Future Goals</button></Link>
            <Link><button className="ribbonButton">About Us</button></Link>
        </div>
    )
}

export default NavBarElement;