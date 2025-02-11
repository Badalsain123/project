import React, { useState } from "react"; 
const App = () => { 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const toggleLogin = () => { 
    setIsLoggedIn(!isLoggedIn); 
  }; 
  return ( 
    <div> 
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1> 
      <button onClick={toggleLogin}>{isLoggedIn ?"Logout":"Login"}</button> 
      <p>{isLoggedIn ? "You are logged in." : "You are logged out."}</p> 
    </div> 
  ); 
}; 
export default App;