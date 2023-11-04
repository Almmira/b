import Doctors from "../Components/Doctors";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";
function TextAI() {
    return (
      <div className="home-section">
        <Navbar />
        <Hero2 />
        <Doctors />
        <Footer />
      </div>
    );
  }
  
  export default TextAI;