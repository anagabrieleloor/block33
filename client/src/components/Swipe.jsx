import React, { useState, useEffect } from 'react';
import { fetchUsers } from "../API";
import { createSwipe } from '../API/swipes';

export default function Swipe({user_id, token}) {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState(null);

  const swiped = (direction) => {
    setLastDirection(direction);

    

    // Update the current user index
    setCurrentIndex(currentIndex + 1);
  }
  

  useEffect(() => {
    async function getAllUsers() {
      const response = await fetchUsers();
      setUsers(response);
    }
    getAllUsers();
  }, []);

  const currentUser = users[currentIndex];


  
  async function handleSwipe(direction) {
    if (direction === 'like') {
        await createSwipe(user_id, currentUser.user_id, true, false);
    } else if (direction === 'pass') {
        await createSwipe(user_id, currentUser.user_id, false, true);
    }

    // Handle updating the UI or moving to the next profile here
    swiped(direction);
}
  return (
    <div>
      <h1>Swipe</h1>
      {currentUser && (
        <div className="containter">
          {console.log('profile: ', currentUser.first_name)}
          <div className="card" key={currentUser.user_id}>
            <img src={currentUser.photos} alt={`${currentUser.first_name}'s Profile`} id="user-profile-image" />
            <p className="card__name">{currentUser.first_name}</p>
            <div className="grid-child-posts">
              <p>age: {currentUser.age}</p>
            </div>
            <div className="grid-child-followers">
              <p>location: {currentUser.location}</p>
              <p>work: {currentUser.work}</p>
              <p>education: {currentUser.education}</p>
              <p>{currentUser.about_me}</p>
            </div>
            <button className="btn draw-border" onClick={() => handleSwipe('like')}>Like</button>
            <button className="btn draw-border" onClick={() => handleSwipe('pass')}>Pass</button>
          </div>
        </div>
      )}
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}
