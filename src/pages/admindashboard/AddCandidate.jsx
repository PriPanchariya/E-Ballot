import React from "react";
import DashboardHead from "../../components/DashboardHead";
import AddCandidateForm from "../../components/AddCandidateForm";
import Sidebar from "../../components/Sidebar";

function AddCandidate() {
  return (
    <section className="addCandidate-sec">
      <Sidebar />
      <div className="addCandidate-container">

        <DashboardHead />
        <AddCandidateForm />
      </div>
    </section>
  );

}

export default AddCandidate;
