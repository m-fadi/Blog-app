import {useState} from 'react'
import Register from './Register'
import { Link } from 'react-router-dom'
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  return (
      <div className='login'>
          <h1> Login</h1>
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

          <button> Login</button>
          <Link to="/register" element={<Register />}>
              <h6>You don't have an account ? Register</h6>{" "}
          </Link>
      </div>
  );
}

export default Login