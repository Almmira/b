import React from "react";
import LearnMasterImage from "../Assets/logo__LearMaster__Applications_for_studying_for_exams_using_AI.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img
          src={LearnMasterImage}
          alt="LearnMaster"
          className="about-image1"
        />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Join LearnMaster</span>
        </h3>
        <p className="about-description">
          Join the revolution today and experience a smarter, more efficient way
          to prepare for exams and lessons. With LearnMaster, you'll not only
          save time but also unlock your true learning potential. Embrace the
          future of education, where studying becomes a breeze and success is
          within reach.
        </p>

        <h4 className="about-text-title">ADvantages of using our Dapp</h4>

        <SolutionStep
          title="Decentralization and security
          "
          description="Thanks to blockchain technology's decentralization, information is stored in a distributed manner, making it reliable and protected from hackers."
        />

        <SolutionStep
          title="Transparency and reliability"
          description="All data is in our blockchain system. You can completely trust the information you see in our app."
        />

        <SolutionStep
          title="Improving efficiency and sustainability"
          description="We strive to make the exam preparation process more efficient and easier. Blockchain allows you to remove intermediaries and simplify your information exchange. Moreover, our system is resistant to failures and guarantees reliable storage of your data and successes."
        />
      </div>
    </div>
  );
}

export default About;
