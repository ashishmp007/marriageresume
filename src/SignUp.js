// SignUp.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #141e30, #243b55);
`;

const SignUpForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const SignUpTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const SignUpInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignInLink = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #333;
`;

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSignUp}>
        <SignUpTitle>Sign Up</SignUpTitle>
        <SignUpInput type="text" placeholder="Username" required />
        <SignUpInput type="email" placeholder="Email" required />
        <SignUpInput type="password" placeholder="Password" required />
        <SignUpInput type="password" placeholder="Confirm Password" required />
        <SignUpButton type="submit">Sign Up</SignUpButton>
        <SignInLink>
          Already have an account? <Link to="/SignIn">Sign In</Link>
        </SignInLink>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
