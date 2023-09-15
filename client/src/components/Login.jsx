import { useState } from "react";
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
      
      setToken(response.user.token);
        console.log("ur in!!!!", response);
        // console.log("token maybe:", response.user.token)
        navigate("/users/1");


    } catch (err) {
      console.error("try again bb", err);
    }
  }


  

  return (
    <div className="login-container">
    <div className="login-card">
      <form onSubmit={loginUser}>
        <h3>log in</h3>
        <p>username:</p>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <p>password:</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
        <div>
          
        </div>
      </form>
      <div>
       
        {/* <Authenticate token={token} setToken={setToken}/> */}
      </div>
    </div>
    <button className="btn draw-border" type="submit">Submit</button>
    </div>
  );
}