import { useState, useEffect } from "react";
import { fetchMatches } from "../API";


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
            <div key={match.user_id}>
              <h4>{match.user_id}</h4>
              <p>{match.first_name}</p>
              <hr />
            </div>
          ))}
        </div>
      );
    }