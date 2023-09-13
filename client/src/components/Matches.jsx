import { useState, useEffect } from "react";
import { fetchMatches } from "../API";
import { Link } from "react-router-dom";


export default function Matches() {
    const [matches, setMatches] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getAllMatches() {
            const response = await fetchMatches(1);
            console.log(response);

            setMatches(response);
        }
        getAllMatches();
    }, []);
    
    return (
        <div className="message-card">
          <h3>matches:</h3>
          {matches.map((match) => (
            <div key={match.user2_id}>
              <h4>{match.user2_first_name}</h4>
              <Link to={`/users/${match.user2_id}`}>
              <img src={match.user2_photos} id="user-profile-image" />
              </Link>
              <hr />
            </div>
          ))}
        </div>
      );
    }