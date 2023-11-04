import User from "../Components/User";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Calendar from "../Components/Calendar";
import Timer from "../Components/Timer";
import Saved from "../Components/Saved";
function TextAI() {
    return (
      <div className="home-section">
        <Navbar />
        <User />
        <Timer />
        <Footer />
      </div>
    );
  }
  
  export default TextAI;