import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, fetch user data from Firebase
        setUserEmail(user.email);
        setUserId(user.uid);
        setUserName(user.name);
      } else {
        // User is signed out, handle appropriately (e.g., redirect to login)
        setUserEmail("");
        setUserId("");
      }
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);
  const handleLogOut = () => {
    window.location.reload();
  };
  return (
    <div className="cart-page">
      <h3>Profile</h3>
      {userEmail && <p>Email: {userEmail}</p>}
      {userId && <p>User ID: {userId}</p>}
      {userName && <p>User Name: {userName}</p>}
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
};

export default Profile;
