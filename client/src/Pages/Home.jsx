import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/products");
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          Build amazing web applications with React and modern technologies.
        </p>
        <button className="btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;