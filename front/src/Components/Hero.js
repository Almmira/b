import React, { useEffect, useState } from "react";
import Doctor from "../Assets/Exploring-the-Future-of-Artificial-Intelligence-in-Education.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faCalendarCheck,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">LearnMaster - AI Exam Preparation</p>
          <h2 className="text-title">Revolutionize the Way You Learn</h2>
          <p className="text-descritpion">
            You can integrate the power of Blockchain and AI technologies into
            your daily routine for a smarter and more efficient lifestyle.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon
              icon={faIdCard}
              style={{ color: "#ffffff", marginRight: 10 }}
            />{" "}
            Register
          </button>

          <button
            className="text-appointment-btn"
            type="button"
            style={{ marginTop: 20 }}
            onClick={() => {
              window.location.href =
                "https://www.investopedia.com/terms/b/blockchain.asp";
            }}
          >
            How to use Blockchain?
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p></p>
              <p>Automatic content generation </p>
            </div>

            <div className="text-stats-container">
              <p></p>
              <p>Active recall</p>
            </div>

            <div className="text-stats-container">
              <p></p>
              <p>All in one</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
