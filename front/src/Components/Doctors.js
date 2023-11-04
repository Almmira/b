import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import { useNavigate } from "react-router-dom";
import "../Styles/text.css";

function Doctors() {
  const navigate = useNavigate(); // <-- Add this

  // Define state variables to store input value and uploaded file
  const [inputValue, setInputValue] = useState("");
  const [testOutput, setTestOutput] = useState("");

  // Event handler for input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuiz = () => {
    navigate("/Quizz", { state: { text: inputValue } });
  };

  // Event handler for form submission (you can customize this as needed)
  const handleSubmit = (e, action) => {
    e.preventDefault();
    // You can add your logic for handling the form submission here
    console.log("Input Value:", inputValue);
    console.log("Action:", action); // Log the action (Create FlashCard or Create Quiz)
    setTestOutput(inputValue); // Set the test output to the input value
  };

  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Text</span>
        </h3>

        <p className="dt-description">Write a text for creating quizzes</p>
      </div>

      <div className="form-container">
        <form style={{ marginBottom: 10, padding: 10 }}>
          <textarea
            style={{ marginTop: 10, marginBottom: 40, textAlign: "center" }}
            placeholder="Write Text here..."
            value={inputValue}
            onChange={handleInputChange}
            rows="5" // You can adjust the number of rows as needed
            cols="50" // You can adjust the number of columns as needed
          />
          <Link to="/FlashCard">
            <button style={{ marginBottom: 20 }}>Create FlashCard</button>{" "}
            {/* Use Link for navigation */}
          </Link>
          <button onClick={handleQuiz}>Create Quiz</button>
        </form>
      </div>
      <div className="test-output-container">
        {/*<h2>Test Output:</h2>*/}
        {/*<p>{testOutput}</p> /!* Display the test output *!/*/}
      </div>
    </div>
  );
}

export default Doctors;
