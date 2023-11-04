import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSave, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "../Styles/User.css";
import "../Styles/ExperienceBar.css";

function User() {
  const { user } = useUser();

  return (
    <div
      className="user-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="content-section">
        <div className="profile-section">
          <h1 className="legal-siteTitle">
            <Link to="/">
              LearnMaster <span className="legal-siteSign"></span>
            </Link>
          </h1>

          <div className="profile-container">
            <h2 className="profile-title">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />{" "}
              Profile
            </h2>

            {user ? (
              <div className="profile-content">
                <div className="experience-bar">
                  <div
                    className="experience-fill"
                    style={{ width: `${(user.level / 10) * 100}%` }}
                  ></div>
                </div>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Level:</strong> {user.level}
                </p>
              </div>
            ) : (
              <p className="error-message">User information not found.</p>
            )}

            {/* Добавленные кнопки */}
            <Link to="/Saved">
              <button style={{ marginTop: 20, marginRight: 20 }}>
                <FontAwesomeIcon icon={faSave} /> Save
              </button>
            </Link>
            <Link to="/Calendarr">
              <button>
                <FontAwesomeIcon icon={faCalendar} /> Calendar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="legal-footer">{/* Footer content */}</div>
    </div>
  );
}

export default User;
