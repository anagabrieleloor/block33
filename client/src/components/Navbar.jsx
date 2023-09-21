import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar({ token, setToken }) {
    return (
        <div id="navbar">
            <h1>⤜♡→cariño</h1>
            <div id="navbar-links">
                <Link to="/">♡ home</Link>
                
                {/* <Link to="/users/edit_profile">♡ edit profile</Link> */}

                {token ? (
                    <>
                    <Link to="/users/me/:user_id">♡ my profile</Link>
                <Link to="/users">♡ users</Link>
                <Link to="/users/:user_id/messages">♡ messages</Link>
                <Link to="/swipes">♡ swipe</Link>
                <Link to="/users/:user_id/matches">♡ matches</Link>
                        <Link to="/users/signout">♡ sign out</Link>
                    </>
                ) : (
                    // <Link to="/users/login">log in</Link>
                    <></>
                )}
            </div>
        </div>
    );
}
