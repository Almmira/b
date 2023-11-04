import User from "../Components/User";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Calendar from "../Components/Calendar";
import Timer from "../Components/Timer";
import Saved from "../Components/Saved";
import Chein from "../Components/Chein";
function Savedd() {
  return (
    <div className="home-section">
      <Navbar />
      <Chein />
      <Saved />
      <Footer />
    </div>
  );
}

export default Savedd;
