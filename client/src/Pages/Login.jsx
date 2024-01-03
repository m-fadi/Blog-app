import { useState } from "react";
import Register from "./Register";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"

//---------------------------------------------------------------//
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    
    const data = {
        
        password,
        email,
    };

    const navigate=useNavigate()
    const handleLogin = async () => {
        try{
             await signInWithEmailAndPassword(getAuth(), email, password);
             navigate('articles');
            //  const response = await axios.post("/api/login", data);
            //  console.log({ response });
            //  setUser(response.user);
            //  console.log(response);
        }catch(err){setError(err)}
       
    };
    return (
        <div className="login">
            <h1> Login</h1>
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                name="email"
                placeholder="E-Mail"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}> Login </button>
            <Link to="/register" element={<Register />}>
                <h6>You don't have an account ? Register</h6>{" "}
            </Link>
        </div>
    );
}

export default Login;
