import React from "react";
import DashboardHead from "../../components/DashboardHead";
import UserSidebar from "../../components/UserSidebar";
import VoterRegistrationForm from "../../components/VoterRegistrationForm";


function Register() {
  return (
    <>
      <section className="main-sec">
        <UserSidebar />
        <div className="main-container">
          <DashboardHead />
          <VoterRegistrationForm />

          
        </div>
      </section>
    </>
  );
}

export default Register;
