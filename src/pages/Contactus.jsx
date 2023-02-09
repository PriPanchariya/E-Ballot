import React from "react";
import Navbar from "../components/Navbar";


const ContactUs = () => {
  return (
    <>
      
      <section className="home-sec">
      <Navbar />
    <div
        className="contact-us"
        style={{height:'100vh',
          background:
            "linear-gradient( 234deg, rgba(227, 242, 253, 1) 18%, rgba(205, 231, 252, 1) 48%, rgba(144, 202, 249, 1) 100%)",
        }}
      >
        
        <div className="contact" >
        </div>

        <form>
        <h1 style={{ color: '#394873' }}>Contact Us</h1>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      </section>
    </>
  );
};

export default ContactUs;
