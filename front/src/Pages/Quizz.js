import Quiz from "../Components/Quiz";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Quizz() {
    return (
      <div className="home-section">
        <Navbar />
        <Quiz />
        <Footer />
      </div>
    );
  }
  
  export default Quizz;