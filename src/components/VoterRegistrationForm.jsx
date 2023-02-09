import React, { useState } from 'react';

const VoterRegistrationForm = () => {
  const [citizenshipNumber, setCitizenshipNumber] = useState('');
  const [publicAddress, setPublicAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(citizenshipNumber, publicAddress);
  };

  return (
    <>
    {/* <center> <h1>Voter Registration</h1></center> */}

    <form onSubmit={handleSubmit} style={{ backgroundColor: '#d2e9fc', padding: '20px', marginTop:'150px', boxShadow:'2px 2px 8px rgb(196, 206, 232)',border:'border: 1px solid rgb(51, 53, 75)',width:'100%',opacity:'0.7'}}>
      <h2 style={{ color:'#212529' }}>Voter Registration Form</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <input
          type="text"
          placeholder="Citizenship Number"
          value={citizenshipNumber}
          onChange={(e) => setCitizenshipNumber(e.target.value)}
          style={{ margin: '10px 0', padding: '10px', fontSize: '16px',color:'#212529' }}
          required/>
        <input
          type="text"
          placeholder="Public Address"
          value={publicAddress}
          onChange={(e) => setPublicAddress(e.target.value)}
          style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
          required/>
        <button type="submit" style={{ backgroundColor: 'Green', padding: '10px 20px', fontSize: '16px' }}>
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default VoterRegistrationForm;
