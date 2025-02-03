"use client";

import { useMutation } from "@apollo/client";
import { gql } from "graphql-tag";
import client from "../lib/apolloClient"; // Import Apollo Client
import { useState } from "react";

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      refreshToken
      user {
        id
        email
        isActive
      }
      accountErrors {
        field
        message
        code
      }
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    client, // Pass the Apollo Client instance
    onCompleted: (data) => {
      if (data.tokenCreate.token) {
        // Store JWT token in localStorage or cookies
        localStorage.setItem("authToken", data.tokenCreate.token);
        setMessage("Login successful!");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ variables: { email, password } });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Login;
