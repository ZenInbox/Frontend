import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext);

export const EmailProvider = ({ children }) => {

  const baseURL = import.meta.env.VITE_APP_MODE === "production" ? "https://backend-ejt0.onrender.com" : "http://localhost:5000";

  const EmailContextValue = {
  
  };

  return (
    <EmailContext.Provider value={EmailContextValue}>
      {children}
    </EmailContext.Provider>
  );
};





