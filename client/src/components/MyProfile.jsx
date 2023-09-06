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
        const APIResponse = await fetchUserProfile(user_id);
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
    <div>
      {error && <p>{error}</p>}
      {user && (
        <figure>
          <p>name: {user.username}</p>
          <p>age: {user.age}</p>
          <p>about me: {user.about_me}</p>
        </figure>
      )}
    </div>
  );
}
