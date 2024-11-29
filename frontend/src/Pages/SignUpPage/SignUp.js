import React, { useState } from "react";
import "./SignUp.css";
import amazon_logo from "../../Assets/amazon_logo_black.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="signup-container">
      <img src={amazon_logo} alt="Amazon Logo" className="signup-logo" />
      <div className="signup-box">
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            placeholder="First and last name"
            required
            onChange={handleInputChange}
          />

          <label htmlFor="email">Mobile number or email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            placeholder="Enter your email or mobile number"
            required
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            placeholder="At least 6 characters"
            required
            onChange={handleInputChange}
          />

          <label htmlFor="repassword">Re-enter password</label>
          <input
            type="password"
            id="repassword"
            value={formData.repassword}
            placeholder="Re-enter your password"
            required
            onChange={handleInputChange}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="signup-button">
            Continue
          </button>

          <p className="agreement-text">
            By creating an account, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and{" "}
            <a href="#">Privacy Notice</a>.
          </p>
        </form>

        <p className="signin-prompt">
          Already have an account?{" "}
          <a href="/signin" className="signin-link">
            Sign in
          </a>
        </p>
      </div>
      <footer>
        <div className="footer-links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </div>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default SignUp;
