import React, { useState } from "react"; 

const App = () => { 

  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [submittedData, setSubmittedData] = useState(null); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setSubmittedData({ name, email }); 
  }; 

  return ( 
    <div> 
      <h1>Submit Your Details</h1> 
      <form onSubmit={handleSubmit}> 
        <input  
          type="text"  value={name}  
          onChange={(e) => setName(e.target.value)}  
          placeholder="Enter your name"  
        />
        <input  
          type="email"  value={email}  
          onChange={(e) => setEmail(e.target.value)}  
          placeholder="Enter your email"  
        /> 
        <button type="submit">Submit</button> 
      </form> 
      {submittedData && ( 
        <div> 
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p> 
          <p>Email: {submittedData.email}</p> 
        </div> 
      )} 
    </div> 
  ); 
}; 
export default App;