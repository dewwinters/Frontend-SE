import React, { useState } from "react";
import "./SignUp.css";
import amazon_logo from "../../Assets/amazon_logo_black.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    age: "",
    gender: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    age: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setError({
      ...error,
      [id]: "",
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
    setError({
      ...error,
      gender: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let newError = {
      name: "",
      email: "",
      password: "",
      repassword: "",
      age: "",
      gender: "",
    };

    if (formData.name.trim() === "") {
      newError.name = "Please enter your name.";
      isValid = false;
    }
    if (formData.email.trim() === "") {
      newError.email = "Please enter your email.";
      isValid = false;
    }
    if (formData.password.trim() === "") {
      newError.password = "Please enter your password.";
      isValid = false;
    } else if (formData.password.length < 6) {
      newError.password = "Password must be at least 6 characters long.";
      isValid = false;
    }
    if (formData.repassword.trim() === "") {
      newError.repassword = "Please re-enter your password.";
      isValid = false;
    } else if (formData.password !== formData.repassword) {
      newError.repassword = "Passwords do not match.";
      isValid = false;
    }

    if (formData.age.trim() === "") {
      newError.age = "Please enter your age.";
      isValid = false;
    } else if (!/^\d+$/.test(formData.age) || +formData.age < 0 || +formData.age > 99) {
      newError.age = "Age must be a number between 0 and 99.";
      isValid = false;
    }

    if (formData.gender.trim() === "") {
      newError.gender = "Please select your gender.";
      isValid = false;
    }

    setError(newError);

    if (isValid) {
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
          {error.name && <p className="error-message">{error.name}</p>}

          <label htmlFor="email">Mobile number or email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            placeholder="Enter your email or mobile number"
            required
            onChange={handleInputChange}
          />
          {error.email && <p className="error-message">{error.email}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            placeholder="At least 6 characters"
            required
            onChange={handleInputChange}
          />
          {error.password && <p className="error-message">{error.password}</p>}

          <label htmlFor="repassword">Re-enter password</label>
          <input
            type="password"
            id="repassword"
            value={formData.repassword}
            placeholder="Re-enter your password"
            required
            onChange={handleInputChange}
          />
          {error.repassword && <p className="error-message">{error.repassword}</p>}

          <label htmlFor="age">Your age</label>
          <input
            type="text"
            id="age"
            value={formData.age}
            placeholder="Enter your age"
            required
            onChange={handleInputChange}
          />
          {error.age && <p className="error-message">{error.age}</p>}

          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleRadioChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleRadioChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleRadioChange}
              />
              Other
            </label>
          </div>
          {error.gender && <p className="error-message">{error.gender}</p>}

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
