import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, Navigate } from "react-router-dom";
import Splash from "./pages/Splash";
import Homepage from "./pages/Homepage";

function App() {
  // Define a state variable to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check user's authentication status
  const checkAuthentication = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/users", {
        withCredentials: true, // Include cookies in the request
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
  };

  useEffect(() => {
    // Check the user's authentication status when the component mounts
    checkAuthentication();
  }, []);

  return (
    <>
      {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
      ) : (
        <Routes>
          <Route path="/splash" element={<Splash />} />
        </Routes>
      )}
    </>
  );
}

export default App;
