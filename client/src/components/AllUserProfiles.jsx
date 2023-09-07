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

  


//   return (
//     <div>
//       {users.map((user) => ( 
        
//         <div key={user.user_id}>
//           <h4>{user.first_name}</h4>
//           <p>
//             <img src={user.photos} alt={`${user.first_name}'s Profile`} id="user-profile-image" />
//           </p>
//           <p>age: {user.age}</p>
//           <p>location: {user.location}</p>
//           <p>about me: {user.about_me}</p>
//           {/* Play Spotify song */}
//           {user.song && (
//             <button onClick={() => playSpotifySong(user.song)}>
//               Play Spotify Song
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
return (
  <div className="container">
    {users.map((user) => ( 
      <div className="card" key={user.user_id}> 
        <img src={user.photos} alt={`${user.first_name}'s Profile`} id="user-profile-image" />
        <p className="card__name">{user.first_name}</p>
        <div className="grid-container">
          <div className="grid-child-posts">
            <p>age: {user.age}</p>
          </div>
          <div className="grid-child-followers">
            <p>location: {user.location}</p><br />
          </div>
        
        </div>
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fa fa-codepen"></i></a></li>
        </ul>
        <button className="btn draw-border">Like</button>
        <button className="btn draw-border">Pass</button>
      </div>
    ))}
  </div>
)};
