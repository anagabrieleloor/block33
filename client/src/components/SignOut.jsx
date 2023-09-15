import { useEffect } from "react";
import { logOut } from "../API";
import { useNavigate } from "react-router-dom";

export default function SignOut({token, setToken}) {
    const navigate = useNavigate();
    useEffect(() => {
        logOut();
        setToken(null);
        navigate('/');
    }, []);
}