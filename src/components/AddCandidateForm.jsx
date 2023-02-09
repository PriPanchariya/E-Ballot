// 

import React, { useState } from "react";

const AddCandidateForm = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    party: "",
    age: "",
    qualification: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setCandidate({
      ...candidate,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!candidate.name) {
      newErrors.name = "Name is required";
    }
    if (!candidate.party) {
      newErrors.party = "Party is required";
    }
    if (!candidate.age) {
      newErrors.age = "Age is required";
    }
    if (!candidate.qualification) {
      newErrors.qualification = "Qualification is required";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Valid form submission:", candidate);
      // Perform API call or other logic to add the candidate
    }
  };

  return (
    <>
    <div >
    <center> <h1 style={{ marginTop:'20px' }}>Add Candidates</h1></center>


      <form onSubmit={handleSubmit} style={{ backgroundColor: "#d2e9fc", boxShadow:'2px 2px 8px rgb(196, 206, 232)', marginTop:'30px'}}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={candidate.name}
          />
          {errors.name && <p style={{ color:'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="party">Party:</label>
          <input
            type="text"
            id="party"
            name="party"
            onChange={handleChange}
            value={candidate.party}
          />
          {errors.party && <p style={{ color:'red' }}>{errors.party}</p>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            value={candidate.age}
          />
          {errors.age && <p style={{ color:'red' }}>{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            onChange={handleChange}
            value={candidate.qualification}
          />
          {errors.qualification && <p style={{ color:'red' }}>{errors.qualification}</p>}
        </div>

        <button type="submit" >Submit</button>
      </form>
    </div>
    </>
  );
};



export default AddCandidateForm;


