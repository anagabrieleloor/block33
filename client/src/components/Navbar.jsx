import {Routes, Route, Link} from "react-router-dom";

export default function Navbar() {
return (



    <div id = "navbar">
        <h1>⤜♡→cariño</h1>

        
        <div id="navbar-links">
        <Link to ="/">home</Link>
        <Link to ="/users/me/:user_id">my profile</Link>
        <Link to ="/users">users</Link>
        <Link to ="/messages">messages</Link>
        <Link to ="/swipes">swipe</Link>
        <Link to ="/users/:user_id/matches">matches</Link>
        <Link to ="/users/edit_profile/:user_id">edit profile</Link>
        </div>
        
    </div>
)
}