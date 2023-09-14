import {Routes, Route, Link} from "react-router-dom";

export default function Navbar() {
return (



    <div id = "navbar">
        <h1>⤜♡→cariño</h1>

        
        <div id="navbar-links">
        <Link to ="/">home</Link>
        <Link to ="/users/1">my profile</Link>
        <Link to ="/users">users</Link>
        <Link to ="/messages">messages</Link>
        <Link to ="/swipes">swipe</Link>
        <Link to ="/users/:user_id/matches">matches</Link>
        <Link to ="/users/edit_profile/">edit profile</Link>
        </div>
        
    </div>
)
}