import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Validación manual antes de enviar
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;

    let regex = true;

    if (!emailValidation.test(email)) {
      setEmailMessage("Email must have a valid format");
      regex = false;
    }

    if (!passwordValidation.test(password)) {
      setPasswordMessage(
        "Password must contain lowecase, uppercase, digit and special character"
      );
      regex = false;
    }

    if (!regex) return; // Bloquea el submit si hay errores
    try {
      const request = await axios({
        method: "post",
        url: "https://ringtomic.onrender.com/users/register",
        data: { name, email, password },
      });
      setMessage(request.data.msg);
      if (request.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <main className="signup">
        <h1>Sign Up</h1>
        <form
          className="signup__form"
          onSubmit={handleSignUp}
          autoComplete="on"
        >
          <div className="signup__field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div className="signup__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            {emailMessage && (
              <span className="signup__message">{emailMessage}</span>
            )}
          </div>
          <div className="signup__field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            {passwordMessage && (
              <span className="signup__message">{passwordMessage}</span>
            )}
          </div>
          <button className="signup__submit" type="submit">
            Sign Up
          </button>
        </form>
        {message && <span className="signup__message">{message}</span>}
        <p className="signup__login">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </main>
    </>
  );
};

export default SignUp;
