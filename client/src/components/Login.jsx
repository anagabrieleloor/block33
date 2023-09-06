import { useState } from "react";
// import Authenticate from "./Authenticate";
import { useNavigate } from "react-router-dom";
import { login } from "../API";



export default function Login({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await login(username, password);
  
      if (response && response.success) {
        setToken(response.data.token);
        console.log(response.data.message);
        navigate("/users");
      } else if (response && response.error) {
        console.error(response.error);
      } else {
        console.error("Unexpected response from the server");
      }
    } catch (err) {
      console.error(err);
    }
  }
  

  return (
    <div id="login">
      <form onSubmit={loginUser}>
        <h3>log in</h3>
        <label>Username:</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
       
        {/* <Authenticate token={token} setToken={setToken}/> */}
      </div>
    </div>
  );
}