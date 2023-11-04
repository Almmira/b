import React from "react";
import { Link } from "react-router-dom";
import DinoImage from "../Assets/DinoImage.jpg";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>NotFound</h1>
      <img src={DinoImage} alt="Dinosaur" />
      <p>The requested URL was not found on this server.</p>
      <p>The requested URL was not found on this server.</p>
      <Link to="/" className="button">
        Go back to the main page{" "}
      </Link>
      <style>
        {` 
          .button { 
            background-color: #1A8EFD; 
            color: white; 
            padding: 12px 24px; 
            border-radius: 12px; 
            border: none; 
            font-size: 18px; 
            font-family: 'Poppins', sans-serif; 
            text-align: center; 
            text-decoration: none; 
            display: inline-block; 
            margin: 16px 2px; 
            cursor: pointer; 
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
            transition-duration: 0.4s; 
          } 
 
          .button:hover { 
            background-color: #0a70d1; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
          } 
        `}
      </style>
    </div>
  );
}

export default NotFound;
