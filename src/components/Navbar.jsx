import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="custom">
      <div className="custom-container">
        <ul className="custom-list">
          <li className="custom-links">
            <Link className="custom-h1" data-name="home" to="/">
              Home
            </Link>
          </li>
          <li className="custom-links">
           
            <Link className="custom-h1" data-name="About" 
                to="/about">
             About
             </Link>
          </li>
          <li className="custom-links">
            <Link className="custom-h1" data-name="service" to="/service">
              Service
            </Link>
          </li>
          <li className="custom-links">
            <Link className="custom-h1" data-name="contact" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
  
      </div>
      <div className="nav-menu-burger">
          <label className="bar" for="check">
            <input type="checkbox" id="check"></input>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>
        </div>
    </nav>
  );
}

export default Navbar;
