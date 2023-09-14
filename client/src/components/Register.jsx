import { useState } from "react";
import { registerUser } from "../API";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [education, setEducation] = useState("");
    const [work, setWork] = useState("");
    const [photos, setPhotos] = useState("");
    const [about_me, setAboutMe] = useState("");
    const [song, setSong] = useState("");
    // const navigate = useNavigate();



    async function signUp(e) {
        e.preventDefault();
        console.log('username:', username);
        console.log('password:', password);
        console.log('first_name:', first_name);
        console.log('last_name:', last_name);
        console.log('gender:', gender);
        console.log('location:', location);
        console.log('education:', education);
        console.log('work:', work);
        console.log('photos:', photos);
        console.log('about_me:', about_me);
        console.log('song:', song);
        
        try {
            const response = await registerUser(username, password, first_name, last_name, gender, location, education, work, photos, about_me, song);
            // setToken(response.user.token);
            console.log("response:", response);
            setUsername("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setGender("");
            setLocation("");
            setEducation("");
            setWork("");
            setPhotos("");
            setAboutMe("");
            setSong("");
           
    

            // navigate("/users");
            console.log("Response:", response);

        } catch (error) {
            console.error("try again bb", error);
        }
    }

    // const signUp = async (e) => {
    //     e.preventDefault();
    //     console.log(username, password);
    //     const response = await registerUser(username, password);
    //     // setToken(register.data.token);
    //     console.log(response);
    //     setUsername("");
    //     setPassword("");
    //     console.log("response:", response)
       
    // }

    return (
      
        
        <div className="update-card">
            <form onSubmit={signUp}>
                <h3>sign up</h3>
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
                <p>first name:</p>
            <input
                value={first_name}
                type="text"
                name="first name"
                placeholder="first name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <p>last name:</p>
            <input
                value={last_name}
                type="text"
                name="last name"
                placeholder="laste name"
                onChange={(e) => setLastName(e.target.value)}
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
                onChange={(e) => setAboutMe(e.target.value)}
            />
            <p>song:</p>
            <input
                value={song}
                type="text"
                name="song"
                placeholder="song"
                onChange={(e) => setSong(e.target.value)}
            />
                {/* <label>first name:</label>
                <input
                    type="first name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <label>last name:</label>
                <input
                    type="last name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <label>gender:</label>
                <input
                    type="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <br />
                <label>location:</label>
                <input
                    type="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <br />
                <label>work:</label>
                <input
                    type="work"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                />
                <br />
                <label>photos:</label>
                <input
                    type="photos"
                    value={photos}
                    onChange={(e) => setPhotos(e.target.value)}
                />
                <br />
                <label>about me:</label>
                <input
                    type="about me"
                    value={aboutme}
                    onChange={(e) => setAboutMe(e.target.value)}
                />
                <br />
                <label>song:</label>
                <input
                    type="song"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                />
                <br /> */}
                <button className="btn draw-border" type="submit">Submit</button>
                
            </form>
            <Link to ="/">back to login</Link>
        </div>
        
    );
    
}