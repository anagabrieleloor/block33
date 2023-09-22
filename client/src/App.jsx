import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AllMessages from "./components/AllMessages";
// import UserProfile from "./MyProfile";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllUserProfiles from "./components/AllUserProfiles";
import MyProfile from "./components/MyProfile";
import Swipe from "./components/Swipe";
import Register from "./components/Register";
import Matches from "./components/Matches";
import EditProfile from "./components/EditProfile";
import NewMessage from "./components/NewMessage";
import DeleteMessage from "./components/DeleteMessage";
import EditMessage from "./components/EditMessage";
import SingleProfile from "./components/SingleProfile";
import MessageThread from "./components/MessageThread";
import SignOut from "./components/SignOut";
import ReplyMessage from "./components/ReplyMessage";


function App() {
  const [token, setToken] = useState(null);
  const [user_id, setUserId ] =useState(null);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setUserId(localStorage.getItem('user_id'));
  
}, [])

  return (
    <div className="App">
      <Navbar token={token} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<AllUserProfiles />} />
      <Route path="/users/:user_id/messages" element={<AllMessages token={token} user_id={user_id} />} />
      <Route path="/users/me/:user_id" element={<MyProfile token={token} user_id={user_id} />} />
      {/* <Route path="/users/:user_id" element={<SingleProfile />} /> */}
      <Route path="/swipes" element={<Swipe token={token} user_id={user_id} />} />
      <Route path='/users/signup' element={<Register setToken={setToken} />} />
      <Route path='/users/:user_id/matches' element={<Matches token={token} user_id={user_id} />} />
      <Route path='/users/edit_profile/:user_id' element={<EditProfile token={token} user_id={user_id} />} />
      <Route path="/messages/new" element={<NewMessage />} />
      <Route path="/messages/new" element={<ReplyMessage token={token} user_id={user_id} sender_id={user_id} />} />
      <Route path="/messages/delete/:message_id" element={<DeleteMessage />} />
      <Route path="/messages/edit/:message_id" element={<EditMessage />} />
      <Route path="/messages/thread/:thread_id" element={<MessageThread token={token} user_id={user_id} />} />
      <Route path="/users/signout" element={<SignOut token={token} setToken={setToken} />} />
      <Route path="users/:user_id" element={<SingleProfile token={token} user_id={user_id} sender_id={user_id} />} />
      
       

      </Routes>
    </div>
  )
}

function Home() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
    
}, [])
  return (
    <div id="home">
      <h2>&hearts; welcome &hearts;</h2>
      {/* <Register /> */}
      <Login token={token} setToken={setToken} />
      
      {/* <Register /> */}
      
    </div>
  )
}

export default App
