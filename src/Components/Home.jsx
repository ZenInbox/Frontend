import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import BackgroundDots from './Utils/BackgroundDots';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import Features from "./Features";
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const { loginWithGoogle, logout, isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = async() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      await handleLogin();
    }
  };

  const handleLogin = async () => {
    await loginWithGoogle();
    toast.success("Logged in Successfully!!!")
    navigate("/dashboard");
  };
  

  return (
    <> 
    <ToastContainer/>

    <div id="home" className="relative h-screen bg-gradient-to-b from-white to-hoverColor">
      {/* Background Dots */}
      <BackgroundDots className="absolute inset-0 w-full h-full z-0" />
      <ToastContainer/>
      {/* Hero Section */}
      <div className="relative h-screen grid grid-cols-1 lg:grid-cols-12 items-center justify-center text-center px-4 rounded-lg">
        <div className="z-10 col-span-1 lg:col-span-8 lg:col-start-3 mt-24 sm:m-6">
          <h1 className="text-slate-700 h-[100px] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-hoverButtonColor bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
              ZenInBox
            </span>
          </h1>
          <p className="text-center md:text-lg lg:text-lg text-gray-500 px-4 md:px-8 lg:px-12">
            Send custom emails with our AI-powered platform, offering real-time analytics and ease. Tailor your messages effortlessly and track performance to optimize engagement and achieve better results.
          </p>
          <div className="flex justify-center mt-16 gap-4">
            <button onClick={handleGetStarted} className="bg-primary hover:bg-hoverButtonColor text-white font-bold py-2 px-6 rounded-full">
              {isLoggedIn ? "Go to Dashboard" : "Get Started"}
            </button>
            <button className="bg-white hover:bg-hoverColor text-primary font-bold py-2 px-6 rounded-full border border-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      
      <About />

      <Features />

      <Team />

      <Contact />

      <Footer />
    </div>


    </>
  );
}
