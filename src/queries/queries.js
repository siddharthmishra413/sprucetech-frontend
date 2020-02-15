import { gql } from 'apollo-boost';

export const LOGIN_USER = gql`
  mutation($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      _id
      firstName
      lastName
      userRole {
        role
      }
      token
      tokenExpiration
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $password: String!
    $title: String!
    $companyName: String!
    $companyAddress: String!
    $telephone: Float!
  ) {
    signup(
      userInput: {
        firstName: $firstName
        lastName: $lastName
        userName: $userName
        password: $password
        title: $title
        companyName: $companyName
        companyAddress: $companyAddress
        telephone: $telephone
      }
    ) {
      firstName
    }
  }
`;

export const FORGOT_USER = gql`
  mutation($userName: String!) {
    forgotPassword(userName: $userName) {
      message
      link
    }
  }
`;

export const TOKEN_VERIFICATION = gql`
  query($refreshTokenForPassword: String!) {
    tokenVerification(refreshTokenForPassword: $refreshTokenForPassword) {
      userName
      userId
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation($refreshToken: String!, $userId: ID!, $newPassword: String!) {
    passwordReset(refreshToken: $refreshToken, userId: $userId, newPassword: $newPassword) {
      message
    }
  }
`;

export const GET_USER = gql`
  query {
    users {
      firstName
      lastName
      userName
      title
      companyName
      companyAddress
      telephone
      userRole {
        role
      }
      createdAt
      updatedAt
    }
  }
`;
