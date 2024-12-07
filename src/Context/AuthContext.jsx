import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const baseURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
      if (user) {
        console.log(user.uid)
        setIsLoggedIn(true);
        fetchUser(user.uid);
      } else {
        setCurrentUser(null);
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  const fetchUser = async (uid) => {
    try {
      const response = await axios.post(`${baseURL}/api/user/fetchuser`, { uid });
      setCurrentUser(response.data.user);
      console.log("Fetched user:", response.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/gmail.send");
  provider.addScope("openid");
  provider.addScope("https://www.googleapis.com/auth/userinfo.email");
  provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

  const loginWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      if (!user) {
        throw new Error("Google authentication failed.");
      }

      const credential = GoogleAuthProvider.credentialFromResult(userCredential);
      const accessToken = credential?.accessToken;
      const idToken = await user.getIdToken(true);

      if (!accessToken || !idToken) {
        throw new Error("Failed to retrieve tokens from Google.");
      }

      const expiryTime = Date.now() + 3600 * 1000;
      localStorage.setItem("gmailAccessToken", accessToken);
      localStorage.setItem("tokenExpiryTime", expiryTime.toString());

      console.log( {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      })

      const response = await axios.post(`${baseURL}/api/user/fetchuser`, { uid: user.uid });
      if (!response.data.exists) {
        await axios.post(`${baseURL}/api/user/signup`, {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      }

      await fetchUser(user.uid);

      console.log("User signed in successfully.");
    } catch (error) {
      console.error("Login failed:", error.message || error);
      alert("An error occurred during login. Please try again.");
    }
  };

  useEffect(() => {
    const checkTokenExpiry = () => {
      const expiryTime = localStorage.getItem("tokenExpiryTime");
      if (expiryTime && Date.now() >= parseInt(expiryTime, 10)) {
        logout();
        toast.error("Your session has expired. Please log in again.");
      }
    };

    const interval = setInterval(checkTokenExpiry, 1000);
    return () => clearInterval(interval);
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("gmailAccessToken");
      localStorage.removeItem("gmailIdToken");
      localStorage.removeItem("tokenExpiryTime");
      setCurrentUser(null);
      setIsLoggedIn(false);
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const authContextValue = {
    currentUser,
    isLoggedIn,
    fetchUser,
    setCurrentUser,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};



