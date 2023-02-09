import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/dashboard/CandidateDetails";
import Home from "./pages/Home";

import "./App.css";
import AddCandidate from "./pages/admindashboard/AddCandidate";
import CreateElection from "./pages/admindashboard/CreateElection";
import CandidateDetails from "./pages/admindashboard/CandidateDetails";
import ElectionDetails from "./pages/admindashboard/ElectionDetails";
import Dashboard from "./pages/userdashboard/Dashboard";
import Register from "./pages/userdashboard/Register";
import UserCandidateDetails from "./pages/userdashboard/CandidateDetails";
import UserElectionDetails from "./pages/userdashboard/ElectionDetails";
import Vote from "./pages/userdashboard/Vote";

import Login from "./pages/Login";
import SignupPage from "./pages/SignupPage.jsx";
import ContactUs from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<SignupPage />} />{" "}
          <Route path="/contactus" element={<ContactUs />} />{" "}
          <Route path="/aboutus" element={<AboutUs />} />{" "}
          <Route path="/electiondetails" element={<ElectionDetails />} />{" "}
          <Route path="/addcandidate" element={<AddCandidate />} />{" "}
          <Route path="/createelection" element={<CreateElection />} />{" "}
          <Route path="/candidatedetails" element={<CandidateDetails />} />{" "}
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          <Route
            path="/usercandidatedetails"
            element={<UserCandidateDetails />}
          />{" "}
          <Route path="/vote" element={<Vote />} />{" "}
          <Route path="/userelectiondetails" element={<UserElectionDetails />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
