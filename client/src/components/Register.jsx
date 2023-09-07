import { useState } from "react";
import { registerUser } from "../API";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [firstname, setFirstName] = useState("");
    // const [lastname, setLastName] = useState("");
    // const [gender, setGender] = useState("");
    // const [location, setLocation] = useState("");
    // const [education, setEducation] = useState("");
    // const [work, setWork] = useState("");
    // const [photos, setPhotos] = useState("");
    // const [aboutMe, setAboutMe] = useState("");
    // const [song, setSong] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await registerUser({username, password});
            console.log("thx for signing up", response);
            setUsername("");
            setPassword("");
            // setFirstName("");

            navigate("/users");

        } catch (error) {
            console.error("try again bb", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>sign up</h3>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}