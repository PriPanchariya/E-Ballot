import React from "react";
import DashboardHead from "../../components/DashboardHead";
import Sidebar from "../../components/Sidebar";





function CreateElection() {
  return(
    <>
    <section className="main-sec">
      <Sidebar />
      <div className="main-container">
        <DashboardHead />
        <div class="row" style={{ marginTop:'20px' }}>
    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-success">
          <h4 class="card-title">CHANGE PHASE</h4>
        </div>
        <div class="card-body">
          <div class="alert">
            <span id="currentPhaseAdmin"> </span>
          </div>
          <button type="submit"  class="btn btn-success" onclick="App.changeState()" >Change Phase</button>
        </div>
      </div>
    </div>
  </div>
        
      </div>
    </section>
  </>
  );
}

export default CreateElection;

