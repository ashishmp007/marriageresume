// SignIn.js
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
const encryptedToken='abcdefghijklmnopqrstuvwxyz';


const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    console.log("my username=>", username);
    console.log("mypassword=>", password);
    e.preventDefault();
    if (username == "ashish" && password == "12345") {
      localStorage.setItem("token",encryptedToken);

      navigate("/dashboard");
    } else {
      alert("please enter correct username and password");
    }
  };
  const authenticate = () => {};

  return (
    <SignInContainer>
      <SignInForm>
        <SignInTitle>Sign In</SignInTitle>
        <SignInInput
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <SignInInput
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
        <SignUpLink>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </SignUpLink>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;
const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #141e30, #243b55);
`;

const SignInForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const SignInTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const SignInInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignUpLink = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #333;
`;
