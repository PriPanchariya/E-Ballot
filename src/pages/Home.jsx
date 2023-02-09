import Navbar from "../components/Navbar";
import Evote from "../asstes/images/evote.png";
import { useNavigate } from "react-router";


function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-sec">
      <Navbar />
      <div className="home-container">
        <div className="img-container">
          <img src={Evote} alt="e-vote" />
        </div>
        <div className="main-container">
          <div>
            <h1>vote!</h1>
            <p>Let Your Voice Be Heard</p>
          </div>
          <div className="btn-sec">
            <button type="button" className="btn btn-user" onClick={() => navigate("/signup")}>
              User SignUp
            </button>
            <button type="button" className="btn btn-admin" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
