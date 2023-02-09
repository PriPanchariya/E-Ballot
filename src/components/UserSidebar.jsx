import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();
  const [isBarHidden, setIsBarHidden] = useState(false);

  // for responsive sidebar
  const hideSidebar = () => {
    setIsBarHidden((prevState) => !prevState);
  };

  return (
    <header className="sidebar-container">
      <div
        className="sidebar-overlay"
        style={
          isBarHidden ? { transform: "translateX(-162px)", width: "0px" } : {}
        }
      ></div>
      <div
        className="sidebar"
        style={isBarHidden ? { transform: "translateX(-162px)" } : {}}
      >
        <div className="sidebar-heading">
          <h2>User</h2>
        </div>
        <div>
          <ul className="sidebar-list">
            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
            <li onClick={() => navigate("/register")}>
              Register
            </li>
            <li onClick={() => navigate("/vote")}>
              Vote
            </li>
            <li onClick={() => navigate("/userelectiondetails")}>
              Election Details
            </li>
            
            <li onClick={() => navigate("/usercandidatedetails")}>
              Candidate Details
            </li>
           
            <button className="sidebar-btn" onClick={hideSidebar}>
              <AiOutlineDoubleRight />
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Sidebar;
