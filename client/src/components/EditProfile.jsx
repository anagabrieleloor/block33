import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "../API";
import { fetchUserProfile } from "../API";


export default function EditProfile({user,user_id, updatedUserData}) {
    // const [username, setUsername] = useState(user.username || "");
    // const [password, setPassword] = useState(user.password || "");
    // const [first_name, setFirst_name] = useState(user.first_name || "");
    // const [last_name, setLast_name] = useState(user.last_name || "");
    // const [gender, setGender] = useState(user.gender || "");
    // const [location, setLocation] = useState(user.location || "");
    // const [education, setEducation] = useState(user.education || "");
    // const [work, setWork] = useState(user.work || "");
    // const [photos, setPhotos] = useState(user.photos || "");
    // const [about_me, setAbout_me] = useState(user.about_me || "");
    // const [song, setSong] = useState(user.song || "");
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [education, setEducation] = useState("");
    const [work, setWork] = useState("");
    const [photos, setPhotos] = useState("");
    const [about_me, setAbout_me] = useState("");
    const [song, setSong] = useState("");

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    
    



    useEffect(() => {
        async function fetchUserData() {
          try {
            const userData = await fetchUserProfile(1);
            console.log("Fetched user data:", userData);
            // setUser(userData);
            setUsername(userData.username || "");
            setPassword(userData.password || "");
            setFirst_name(userData.first_name || "");
            setLast_name(userData.last_name || "");
            setGender(userData.gender || "");
            setLocation(userData.location || "");
            setEducation(userData.education || "");
            setWork(userData.work || "");
            setPhotos(userData.photos || "");
            setAbout_me(userData.about_me || "");
            setSong(userData.song || "");

          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
    
        fetchUserData();
      }, [user_id]);


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const updatedUserData = {
                username,
                password,
                first_name,
                last_name,
                gender,
                location,
                education,
                work,
                photos,
                about_me,
                song
            }; 


            const response = await updateProfile(1, user_id, updatedUserData);
            console.log("prof updated qt", response);
            // navigate("/users/me");
            // const updatedProfile = [...users, updatedUserData];
            // setUsers(updatedUsers);

            // setUsername("");
            // setPassword("");
            // setFirst_name("");
            // setLast_name("");
            // setGender("");
            // setLocation("");
            // setEducation("");
            // setWork("");
            // setPhotos("");
            // setAbout_me("");
            // setSong("");

            // navigate("/users");
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
                value={username}
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <p>password:</p>
            <input
                value={password}
                type="text"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <p>first name:</p>
            <input
                value={first_name}
                type="text"
                name="first name"
                placeholder="first name"
                onChange={(e) => setFirst_name(e.target.value)}
            />
            <p>last name:</p>
            <input
                value={last_name}
                type="text"
                name="last name"
                placeholder="laste name"
                onChange={(e) => setLast_name(e.target.value)}
            />
            <p>gender:</p>
            <input
                value={gender}
                type="text"
                name="gender"
                placeholder="gender"
                onChange={(e) => setGender(e.target.value)}
            />
            <p>location:</p>
            <input
                value={location}
                type="text"
                name="location"
                placeholder="location"
                onChange={(e) => setLocation(e.target.value)}
            />
            <p>education:</p>
            <input
                value={education}
                type="text"
                name="education"
                placeholder="education"
                onChange={(e) => setEducation(e.target.value)}
            />
            <p>work</p>
            <input
                value={work}
                type="text"
                name="work"
                placeholder="work"
                onChange={(e) => setWork(e.target.value)}
            />
            <p>photos:</p>
            <input
                value={photos}
                type="text"
                name="photos"
                placeholder="photos"
                onChange={(e) => setPhotos(e.target.value)}
            />
            <p>about me:</p>
            <input
                value={about_me}
                type="text"
                name="about me"
                placeholder="about me"
                onChange={(e) => setAbout_me(e.target.value)}
            />
            <p>song:</p>
            <input
                value={song}
                type="text"
                name="song"
                placeholder="song"
                onChange={(e) => setSong(e.target.value)}
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

 	