import React from 'react';
// import AU from "../asstes/images/au.jpg";
import Navbar from "../components/Navbar";



function AboutUs() {
  return (
    <section className="home-sec">
      <Navbar />
    <div className="about-us-container" style={{}}>
        <img src="https://cdn.dribbble.com/users/698689/screenshots/5508690/media/f228d786c965daf8c28930721f774ed3.gif" alt="Our team in action" style={{ width:'15%',height:'15%',marginTop:'10px' }} />
        
      <h1 className="about-us-title">About Us</h1>
      <hr className="about-us-hr"/>
      <p className="about-us-description">
        We are a team of tech enthusiasts who believe in the power of technology to shape the future of voting. Our mission is to make the voting process more accessible, transparent, and secure through the use of blockchain technology.
      </p>
      <p className="about-us-description">
        Our online voting platform provides a secure and efficient way for people to cast their votes, regardless of their location. With end-to-end encryption and the use of smart contracts, we aim to eliminate fraud and ensure the integrity of the voting process.
      </p>
      <p className="about-us-description">
        We believe in empowering people to have a voice in shaping their future, and we are dedicated to making it easier for everyone to exercise their right to vote.
      </p>
    </div>
    </section>
  );
}

export default AboutUs;

// style={{
//     backgroundImage: `url(${AU})`, backgroundPosition: 'center', height:'100vh',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover'

// }}
