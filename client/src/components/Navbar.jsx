import {Routes, Route, Link} from "react-router-dom";

export default function Navbar() {
return (



    <div id = "navbar">
        <h1>cariño</h1>

        
        <div id="navbar-links">
        <Link to ="/">Home</Link>
        <Link to ="/users/:session_id">my profile</Link>
        <Link to ="/users">users</Link>
        <Link to ="/messages">messages</Link>
        <Link to ="/swipes">swipe</Link>
        <Link to ="/users/:user_id/matches">matches</Link>
        </div>
        
    </div>
)
}