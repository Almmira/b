import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import { useUser } from "./UserContext";

function RegistrationForm() {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!username.trim()) {
      errors.username = "Username is required";
    } else if (username.trim().length < 6) {
      errors.username = "Username must be at least 6 characters";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Обновите информацию о пользователе после успешной регистрации
    updateUser({ username, email, level: 1 }); // Здесь level можно установить по вашему желанию

    toast.success("Registration Successful!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => {
        setIsSubmitted(true);

        // Переход на страницу "Profile" после успешной регистрации
        navigate("/Profile");
      },
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          LearnMaster <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Register</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {formErrors.username && (
              <p className="error-message">{formErrors.username}</p>
            )}
          </label>

          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.email && (
              <p className="error-message">{formErrors.email}</p>
            )}
          </label>

          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {formErrors.password && (
              <p className="error-message">{formErrors.password}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Register
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Registration successful! You can now log in.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>2023 LearnMaster.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default RegistrationForm;
