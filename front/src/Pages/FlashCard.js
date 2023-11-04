import BookAppointment from "../Components/BookAppointment";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function FlashCard() {
    return (
      <div className="home-section">
        <Navbar />
        <BookAppointment />
        <Footer />
      </div>
    );
  }
  
  export default FlashCard;