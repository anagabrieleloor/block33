import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateProfile } from "../API";
import { fetchUserProfile } from "../API";


export default function EditProfile({token, user_id}) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    
    
    



    useEffect(() => {
        async function fetchUserData() {
          try {
            const userData = await fetchUserProfile(user_id, token);
            console.log("Fetched user data:", userData);
            setUser(userData);

          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
    
        fetchUserData();
      }, [user_id, token]);


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const updatedUserData = {
                username: user.username,
                password: user.password,
                first_name: user.first_name,
                last_name: user.last_name,
                gender: user.gender,
                location: user.location,
                education: user.education,
                work: user.work,
                photos: user.photos,
                about_me: user.about_me,
                song: user.song,
            }; 


            const response = await updateProfile(user_id, updatedUserData);
            console.log("prof updated qt", response);
            window.location.reload();

        } catch (error) {
            console.error("ooopsie prof updates a no-go", error);
            setError("waaaah failed to update profile");
        }
    }


    return (
        <div className="container">
        <div className="update-card">
        {user && (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            
          <>
            <img src={user.photos} alt={`${user.first_name}'s Profile`} id="user-profile-image" />
            <p className="card__name">update your profile, {user.first_name}</p>
            <p>username:</p>
            <input
                value={user.username}
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <p>password:</p>
            <input
                value={user.password}
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <p>first name:</p>
            <input
                value={user.first_name}
                type="text"
                name="first name"
                placeholder="first name"
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
            <p>last name:</p>
            <input
                value={user.last_name}
                type="text"
                name="last name"
                placeholder="laste name"
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
            <p>gender:</p>
            <input
                value={user.gender}
                type="text"
                name="gender"
                placeholder="gender"
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
            <p>location:</p>
            <input
                value={user.location}
                type="text"
                name="location"
                placeholder="location"
                onChange={(e) => setUser({ ...user, location: e.target.value })}
            />
            <p>education:</p>
            <input
                value={user.education}
                type="text"
                name="education"
                placeholder="education"
                onChange={(e) => setUser({ ...user, education: e.target.value })}
            />
            <p>work</p>
            <input
                value={user.work}
                type="text"
                name="work"
                placeholder="work"
                onChange={(e) => setUser({ ...user, work: e.target.value })}
            />
            <p>photos:</p>
            <input
                value={user.photos}
                type="text"
                name="photos"
                placeholder="photos"
                onChange={(e) => setUser({ ...user, photos: e.target.value })}
            />
            <p>about me:</p>
            <input
                value={user.about_me}
                type="text"
                name="about me"
                placeholder="about me"
                onChange={(e) => setUser({ ...user, about_me: e.target.value })}
            />
            <p>song:</p>
            <input
                value={user.song}
                type="text"
                name="song"
                placeholder="song"
                onChange={(e) => setUser({ ...user, song: e.target.value })}
            />

            {/* <button className="btn draw-border" onClick={() => navigate("/users/:users")}>submit</button> */}
            <button className="btn draw-border">submit</button>
            </>
            
        </form>
        )}
        </div>
        </div>
    );
    
}

