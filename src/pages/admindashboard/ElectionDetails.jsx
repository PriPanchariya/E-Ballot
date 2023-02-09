import React from "react";
import DashboardHead from "../../components/DashboardHead";
import Sidebar from "../../components/Sidebar";

function ElectionDetails() {
  return(
    <>
    <section className="main-sec">
      <Sidebar />
      <div className="main-container">
        <DashboardHead />
        
      </div>
    </section>
  </>
  );
}

export default ElectionDetails;
