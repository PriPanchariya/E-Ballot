import Card from "../../components/Card";
import DashboardHead from "../../components/DashboardHead";
// import MainCard from "../../components/MainCard";
import UserSidebar from "../../components/UserSidebar";

function UserCandidateDetails() {
  return (
    <>
      <section className="main-sec">
        <UserSidebar />
        <div className="main-container">
          <DashboardHead />
          <div class="row">
            <div class="column">
              <div class="cards">
                <Card title={"Candidate 1"} 
                 party={"Congress"} 
                 age={"45"} 
                 qualification={"BBA"} />
              </div>
            
            <div class="cards">
                <Card title={"Candidate 2"} 
                 party={"Raprapa"} 
                 age={"32"} 
                 qualification={"BBS"} />
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserCandidateDetails;
