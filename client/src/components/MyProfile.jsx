import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../API";

export default function UserProfile() {
  const { user_id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function getSingleUser() {
      try {
        const APIResponse = await fetchUserProfile(1);
        if (APIResponse) {
          setUser(APIResponse);
        } else {
          setError("Failed to fetch user profile");
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching user profile");
      }
    }
    getSingleUser();
  }, [user_id]);

  return (
    <div className="container">
      hello
      {error && <p>{error}</p>}
      {user && (
        <div className="card">
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
        <button className="btn draw-border">edit</button>
        <button className="btn draw-border">delete</button>
        </div>
      )}
    </div>
  );
}

//  <div className="container">

//   <div className="card" key={user.user_id}> 
//     <img src={user.photos} alt={`${user.first_name}'s Profile`} id="user-profile-image" />
//     <p className="card__name">{user.first_name}</p>
//     <div className="grid-container">
//       <div className="grid-child-posts">
//         <p>age: {user.age}</p>
//       </div>
//       <div className="grid-child-followers">
//         <p>location: {user.location}</p><br />
//       </div>
    
//     </div>
//     <ul className="social-icons">
//       <li><a href="#"><i className="fa fa-instagram"></i></a></li>
//       <li><a href="#"><i className="fa fa-twitter"></i></a></li>
//       <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
//       <li><a href="#"><i className="fa fa-codepen"></i></a></li>
//     </ul>
//     <button className="btn draw-border">Like</button>
//     <button className="btn draw-border">Pass</button>
//   </div>

// </div>
// )}; 
