import React, { useState } from "react";
import Home from "../home/Home";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Import your Firebase configuration

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  async function handleLogin(e) {
    e.preventDefault();

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else {
      try {
        // Use Firebase signInWithEmailAndPassword method
        await signInWithEmailAndPassword(auth, emaillog, passwordlog);
        setHome(false); // Set the home state to false to show the Home component
        setFlag(false);
      } catch (error) {
        // Handle login errors here
        setFlag(true);
        console.error("Error logging in:", error.message);
      }
    }
  }

  return (
    <div>
      {home ? (
        <div className="from-ui">
          <h2 className="heading">Log In</h2>
          <form onSubmit={handleLogin}>
            <h3>LogIn</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={emaillog}
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={passwordlog}
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Login
            </button>

            {flag && <p>Fill correct Info else keep trying.</p>}
          </form>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
