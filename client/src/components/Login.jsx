import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../API";



export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await login(username, password);
        console.log("ur in!!!!", response);
        navigate("/users/me/:user_id");

    } catch (err) {
      console.error("try again bb", err);
    }
  }
  

  return (
    <div className="login-card">
      <form onSubmit={loginUser}>
        <h3>log in</h3>
        <label>username:</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label>password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
        <div>
          <button className="btn draw-border" type="submit">Submit</button>
        </div>
      </form>
      <div>
       
        {/* <Authenticate token={token} setToken={setToken}/> */}
      </div>
    </div>
  );
}