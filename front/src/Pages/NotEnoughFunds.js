import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Not from "../Components/Not";

function NotEnoughFunds() {
  return (
    <div className="not-enough-funds">
        <Navbar />
        <Not />
        <Footer />
      </div>
  );
}

export default NotEnoughFunds;
