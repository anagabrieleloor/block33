import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AllMessages from "./components/AllMessages";
// import UserProfile from "./MyProfile";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUserProfiles from "./components/AllUserProfiles";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<AllUserProfiles />} />
      <Route path="/messages" element={<AllMessages />} />
        {/* <Route path="/user" element={<UserProfile />} /> */}

      </Routes>
    </div>
  )
}

function Home() {
  const [token, setToken] = useState(null);
  return (
    <div id="home">
      <h2>&hearts; welcome &hearts;</h2>
      {/* <Register /> */}
      <Login token={token} setToken={setToken} />
      {/* <Link to ="/signup">new? sign up</Link> */}
      
    </div>
  )
}

export default App
