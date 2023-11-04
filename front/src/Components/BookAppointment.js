import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";
import "../Styles/info-card.css";

const flashcards = [
  {
    question: "Question 1",
    answer: "Answer to question 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Question 2",
    answer: "Answer to question 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more flashcards as needed
];

function BookAppointment() {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const showNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsCardFlipped(false);
    }
  };

  const showPreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsCardFlipped(false);
    }
  };

  return (
    <div className="ba-section">
      <h1 className="flashcard-title">FlashCard</h1>
      <div className="flashcard-container">
        <div className="arrow-buttons" onClick={showPreviousCard}>
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
        </div>
        <div className={`info-card ${isCardFlipped ? "flipped" : ""}`} onClick={flipCard}>
          <div className="card-front">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <p>{flashcards[currentCardIndex].question}</p>
          </div>
          <div className="card-back">
            <p>{flashcards[currentCardIndex].answer}</p>
          </div>
        </div>
        <div className="arrow-buttons" onClick={showNextCard}>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;