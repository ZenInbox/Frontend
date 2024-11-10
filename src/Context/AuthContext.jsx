import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const baseURL = import.meta.env.VITE_APP_MODE === "development" ? "https://backend-ejt0.onrender.com" : "http://localhost:5000";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
    } catch (error) {
      console.log(error);
    }
  };

  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/gmail.send');
  provider.addScope('openid');
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

  const loginWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const credential = GoogleAuthProvider.credentialFromResult(userCredential);
      const accessToken = credential.accessToken;

      const idToken = await user.getIdToken(true); 

      localStorage.setItem('gmailAccessToken', accessToken);
      localStorage.setItem('gmailIdToken', idToken); 

      const response = await axios.post(`${baseURL}/api/user/fetchuser`, { uid: user.uid });
      if (!response.data.exists) {
        await axios.post(`${baseURL}/api/user/signup`, {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      }

      await fetchUser(user.uid);
      
      console.log('User signed in and access token retrieved:', accessToken);
      console.log('User signed in and ID token retrieved:', idToken);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setIsLoggedIn(false);
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





