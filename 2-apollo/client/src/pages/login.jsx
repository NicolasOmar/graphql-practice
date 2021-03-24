import React from "react";
import { gql, useMutation } from "@apollo/client";
import { LoginForm, Loading } from "../components";
import { isLoggedInVar } from '../cache';

export const LOGIN_USER = gql`
  mutation Login($email: String!) {
    login(email: $email) {
      id
      token
    }
  }
`;

export default function Login() {
  const [login, { loading, error }] = useMutation(
    LOGIN_USER,
    {
      onCompleted({ login }) {
        if (login) {
          localStorage.setItem('token', login.token);
          localStorage.setItem('userId', login.id);
          isLoggedInVar(true)
        }
      }
    }
  );

  if (loading) return <Loading />;
  if (error) return <p>An error occurred</p>;

  return <LoginForm login={login} />;
}
