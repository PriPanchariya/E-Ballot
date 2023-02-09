import { useNavigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function Navbar() {
  const navigate = useNavigate();
  const navRef = useRef();

  //for responsive navbar
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="nav-heading">
          <h2 onClick={() => navigate("/")}>E-Ballot</h2>
        </div>
        <div>
          <ul ref={navRef} className="nav-list">
            <li onClick={() => navigate("/")}>Home</li>
            {/* <li onClick={() => navigate("/services")}>Services</li> */}
            <li onClick={() => navigate("/aboutus")}>About us</li>
            <li onClick={() => navigate("/contactus")}>Contact us</li>
            <button className="nav-btn nav-btn-close" onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
