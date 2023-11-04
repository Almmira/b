import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              LearnMaster <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
              Study with AI for Exam Preparation.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Let's do it</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/TextAi"}>TextAI</Link>
            </li>
            <li>
              <Link to={"/Saved"}>Saved</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@learnmaster.com">
                support@learnmaster.com
              </a>
            </li>

            <li>
              <a href="tel:+123 456 7890">+123 456 7890</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2023 LearnMaster. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
