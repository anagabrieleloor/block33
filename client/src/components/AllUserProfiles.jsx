import { useState, useEffect } from "react";
import { fetchUsers } from "../API";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Link} from "react-router-dom";


export default function AllUserProfiles() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  // const [searchParam, setSearchParam] = useState("");
  const playSpotifySong = (songUrl) => {
    const audio = new Audio(songUrl);
    audio.play();
  };

  useEffect(() => {
    async function getAllUsers() {
      const response = await fetchUsers();
      console.log(response);

      setUsers(response);
      }
    getAllUsers();
  }, []);

  


  return (
    <div>
      {users.map((user) => ( 
        
        <div key={user.user_id}>
          <h4>{user.first_name}</h4>
          <p>
            <img src={user.photos} alt={`${user.first_name}'s Profile`} id="user-profile-image" />
          </p>
          <p>age: {user.age}</p>
          <p>location: {user.location}</p>
          <p>about me: {user.about_me}</p>
          {/* Play Spotify song */}
          {user.song && (
            <button onClick={() => playSpotifySong(user.song)}>
              Play Spotify Song
            </button>
          )}
        </div>
      ))}
    </div>
  );
}