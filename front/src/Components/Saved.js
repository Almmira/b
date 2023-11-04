// Saved.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Saved.css";
import uvedomlenie from "./uvedomlenie";

function Saved() {
  const [savedQuizzes, setSavedQuizzes] = useState(
    JSON.parse(localStorage.getItem("savedQuizzes")) || []
  );
  const [quizName, setQuizName] = useState("");
  const [activeQuiz, setActiveQuiz] = useState(null);

  const navigate = useNavigate();

  const toggleQuiz = (quizName) => {
    if (activeQuiz === quizName) {
      setActiveQuiz(null);
    } else {
      setActiveQuiz(quizName);
    }
  };

  const handleQuiz = (questions) => {
    console.log(savedQuizzes);
    navigate("/Quizz2", { state: { questions: questions } });
  };

  const deleteQuiz = (quizName) => {
    const updatedQuizzes = savedQuizzes.filter(
      (quiz) => quiz.name !== quizName
    );
    setSavedQuizzes(updatedQuizzes);
    localStorage.setItem("savedQuizzes", JSON.stringify(updatedQuizzes));
  };

  return (
    <div>
      <h1 style={{ marginTop: 30, textAlign: "center" }}>Saved Quizzes:</h1>

      <div
        style={{
          margin: "30px 50px 60px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridAutoRows: "200px",
        }}
      >
        {/*<input
                type="text"
                placeholder="Введите название квиза"
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
            />
            <button
                onClick={() => {
                    if (quizName) {
                        const newQuiz = savedQuizzes.find((quiz) => quiz.name === quizName);
                        if (!newQuiz) {
                            alert("Квиз с таким именем не найден.");
                            return;
                        }
                        setActiveQuiz(quizName);
                    } else {
                        alert("Пожалуйста, введите имя квиза.");
                    }
                }}
            >
                Show
            </button>*/}
        {savedQuizzes.map((quiz, index) => (
          <div key={index} className="quiz-card">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h1 style={{ marginTop: 30, marginBottom: 30 }}>{quiz.name}</h1>
              <button
                style={{ marginRight: 10, marginBottom: 20 }}
                onClick={() => handleQuiz(quiz.questions)}
              >
                Take the test
              </button>
              <button onClick={() => deleteQuiz(quiz.name)}>Delete</button>
            </div>
            {/*{activeQuiz === quiz.name && (
                        <div>
                            <h3>Quiz: {quiz.name}</h3>
                            <h4>Answer:</h4>
                            {quiz.questions.map((question, qIndex) => (
                                <div key={qIndex}>
                                    <p>Question {question.text}</p>
                                    <p>Answer {quiz.answers[qIndex]}</p>
                                </div>
                            ))}
                        </div>
                    )}*/}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Saved;
