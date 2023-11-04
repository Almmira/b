import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";
import { faBook, faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>LearnMaster</span>
        </h3>
        <p className="info-description">Study with AI for Exam Preparation</p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="AI generated test"
          description="Master Learn creates tests and provides answers, allowing you to
          instantly evaluate your performance. Test yourself anytime, anywhere and get immediate feedback."
          icon={faMobile} // Replace with your desired icon component or source
        />

        <InformationCard
          title="Calendar/Pomodoro"
          description="Plan your study schedule efficiently with our integrated lesson calendar, deadlines
          and important events. Never miss a task or test with our built-in deadlines and reminders
          feature."
          icon={faDesktop} // Replace with your desired icon component or source
        />

        <InformationCard
          title="Flash Card Generation"
          description="Automatically create flashcards from your study material to simplify the
          process of active memorization."
          icon={faBook} // Replace with your desired icon component or source
        />
      </div>
    </div>
  );
}

export default Info;
