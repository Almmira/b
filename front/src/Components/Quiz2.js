// Quiz.js
import React, {useEffect, useState} from "react";
import "../Styles/Quiz.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Quiz2() {
    const location = useLocation();
    const questions = location.state ? location.state.questions : "";

    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [showResults, setShowResults] = useState(false);

    const optionClicked = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const calculateScore = () => {
        return answers.reduce((score, answer, index) => {
            const question = questions[index];
            if (
                question &&
                question.options &&
                question.options[answer] &&
                question.options[answer].isCorrect
            ) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    const totalScore = calculateScore();

    return (
        <div className="App">
            <h1 style={{ textAlign : "center", marginTop : 100 }}>Test</h1>

            {questions.map((question, questionIndex) => (
                <div key={questionIndex} className="question-card" style={ { marginBottom : 20 } }>
                    <h2>Question {questionIndex + 1}</h2>
                    <h3 className="question-text">{question.text}</h3>

                    <ul>
                        {question.options.map((option, optionIndex) => {
                            const isAnswered = answers[questionIndex] !== null;
                            const isCorrect = option.isCorrect;
                            const isSelected = answers[questionIndex] === optionIndex;

                            let style = {};
                            if (isAnswered) {
                                style = isSelected
                                    ? isCorrect
                                        ? { backgroundColor: "green" }
                                        : { backgroundColor: "red" }
                                    : isCorrect
                                        ? { backgroundColor: "green" }
                                        : {};
                            }

                            return (
                                <li
                                    key={option.id}
                                    style={style}
                                    onClick={() => optionClicked(questionIndex, optionIndex)}
                                >
                                    {option.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}

            <div style={{ textAlign : "center"}}>
                <button onClick={() => setShowResults(true)} style={{ marginTop : 40, marginRight: 20, marginBottom : 20 }}
                >Show Results</button>
            </div>
            {showResults && (
                <div className="results">
                    <h2>Your Score</h2>
                    <p>
                        You got {totalScore} out of {questions.length} questions correct!
                    </p>
                </div>
            )}
        </div>
    );
}

export default Quiz2;
