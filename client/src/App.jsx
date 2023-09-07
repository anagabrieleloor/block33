import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AllMessages from "./components/AllMessages";
// import UserProfile from "./MyProfile";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUserProfiles from "./components/AllUserProfiles";
import MyProfile from "./components/MyProfile";
import Swipe from "./components/Swipe";
import Register from "./components/Register";
import Matches from "./components/Matches";


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<AllUserProfiles />} />
      <Route path="/messages" element={<AllMessages />} />
      <Route path="/users/:user_id" element={<MyProfile />} />
      <Route path="/swipes" element={<Swipe />} />
      <Route path='/users/signup' element={<Register />} />
      <Route path='/users/:user_id/matches' element={<Matches />} />
       

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
      <Link to ="/users/signup">new? sign up</Link>
      {/* <Register /> */}
      
    </div>
  )
}

export default App
