import React from "react";
import DashboardHead from "../../components/DashboardHead";
import UserSidebar from "../../components/UserSidebar";


function Vote() {
  return (
    <>
      <section className="main-sec">
        <UserSidebar />
        <div className="main-container">
          <DashboardHead />
          <div id="content" style={{ marginTop:'20px' }}>
          <table class="table">
            <thead>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Party</th>
              <th scope="col">Votes</th>
            </thead>
            <tbody id="contestantsResults">
  
            </tbody>
            <hr/>
            <p id="accountAddress" class="text-center"></p>
          </table>
  
          <form onsubmit="App.castVote(); return false;">
            <div class="form-group">
              <label for="contestantSelect">Select Contestant</label>
              <select class="select-control" id="contestantSelect"></select>
            </div>
            <button type="submit" class="btn btn-primary">Cast your vote</button>
          </form>
      </div>
          
       
        </div>
      </section>
    </>
  );
}

export default Vote;
