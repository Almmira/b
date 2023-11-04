import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <button
          className="navbar-links"
          style={{ border: "none", background: "none" }}
          onClick={() => navigate("/")}
        >
          LearnMaster
        </button>
      </h1>

      {}

      <ul className="navbar-items">
        <li>
          <button
            className="navbar-links"
            style={{ border: "none", background: "none" }}
            onClick={() => navigate("/Saved")}
          >
            Saved
          </button>
        </li>

        <li>
          <button
            className="navbar-links"
            style={{ border: "none", background: "none" }}
            onClick={() => navigate("/TextAi")}
          >
            TextAI
          </button>
        </li>

        <li>
          <button
            className="navbar-links"
            style={{ border: "none", background: "none" }}
            onClick={() => navigate("/Blockchain")}
          >
            Inspiration
          </button>
        </li>

        <li>
          <button
            className="navbar-btn"
            style={{ border: "none", outline: "none" }} // Убраны границы и контур кнопки профиля
            onClick={() => navigate("/Profile")}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </li>
      </ul>

      {/* Mobile Nav */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <button
              className="navbar-links"
              style={{ border: "none", background: "none" }}
              onClick={() => navigate("/Saved")}
            >
              Saved
            </button>
          </li>

          <li>
            <button
              className="navbar-links"
              style={{ border: "none", background: "none" }}
              onClick={() => navigate("/TextAi")}
            >
              TextAI
            </button>
          </li>

          <li>
            <button
              className="navbar-links"
              style={{ border: "none", background: "none" }}
              onClick={() => navigate("/Blockchain")}
            >
              Inspiration
            </button>
          </li>

          <li>
            <button
              className="navbar-links"
              style={{ border: "none", outline: "none" }} // Убраны границы и контур кнопки профиля
              onClick={() => navigate("/Profile")}
            >
              Profile
            </button>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
