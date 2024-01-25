import React, { useState } from "react";
import Login from "./Login";
import "../userlogin/SignUp.css";
import "./SignUp.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {});
        })
        .catch((err) => {
          setFlag(err.message);
        });

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className="container">
      {login ? (
        <div className="from-ui">
          <h2 className="heading">Create Account</h2>
          <h3 style={{ marginRight: "355px" }}>Register</h3>
          <form className="signup-form" onSubmit={handleFormSubmit}>
            <div className="name">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="email">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="password">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="phone">
              <label>Phone No.</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              Already registered log in?
            </p>
            {flag && (
              <p>I got it you are in a hurry! But every Field is important!</p>
            )}
          </form>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Registration;
