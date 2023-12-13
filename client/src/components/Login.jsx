import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../API";

export default function Login({ token, setToken, displayLogin, setDisplayLogin, user_id }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await login(username, password);
      setToken(response.user.token);
      console.log("You have successfully logged in", response);
      navigate(`/users/me/user_id`);
    } catch (err) {
      console.error("Error logging in", err);
    }
  }
  const handleCloseClick = () => {
    setDisplayLogin(false);
  };

  return (
    <div className={`login-container ${displayLogin ? "show" : "hide"}`}>
      <div className="login-card">
      <button data-dismiss="modal" className="close" onClick={handleCloseClick}>&times;</button>
      <h3>Log in</h3>
        <form onSubmit={loginUser}>
          
          <p>Username:</p>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <p>Password:</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button className="btn draw-border" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
