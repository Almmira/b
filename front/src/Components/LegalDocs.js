import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          LearnMaster <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to LearnMaster, your premier platform for AI-powered exam
          preparation. Our mission is to provide comprehensive study resources
          and interactive learning experiences. By using our platform, you agree
          to the terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is important to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and study-related information.
          We ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using LearnMaster, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with our
          learning resources, and the responsibilities of both parties. It's
          essential to understand these terms to ensure a productive learning
          experience for all users.
        </p>

        {/* Include additional sections and content as needed */}
      </div>

      <div className="legal-footer">
        <p>© 2023 LearnMaster. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
