import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://mp-zerodha.onrender.com/api/auth/login",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          window.location.href = "https://mp-zerodha-37xs.vercel.app";
        }, 1000);
      }
    } catch (error) {
      console.log("ERROR:", error.response?.data);
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleOnChange}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleOnChange}
            />
          </div>

          <button type="submit">Login</button>

          <span className="auth-footer">
            Don't have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
