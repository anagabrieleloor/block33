import { useState, useEffect } from "react";
import { fetchMatches } from "../API";
import { Link } from "react-router-dom";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllMatches() {
      const response = await fetchMatches(1);
      console.log(response);
      setMatches(response);
    }
    getAllMatches();
  }, []);

  const matchesToDisplay = searchParam
    ? matches.filter((match) =>
        match.user2_first_name.toLowerCase().includes(searchParam)
      )
    : matches;

  return (
    <div className="match-container">
    <div className="match-card">
      <h3 className="chat-banner">matches:</h3>
     
      {matchesToDisplay.map((displayMatch) => (
        <div key={displayMatch.user2_id}>
          <h4>{displayMatch.user2_first_name}</h4>
          <Link to={`/users/${displayMatch.user2_id}`}>
            <img src={displayMatch.user2_photos} id="user-profile-image" />
          </Link>
          <hr />
        </div>
      ))}
    </div>
    <label>
    ♡{" "}
        <input
          type="text"
          placeholder="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
        />
      </label>
    </div>
  );
}
