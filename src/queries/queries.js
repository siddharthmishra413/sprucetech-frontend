import { gql } from 'apollo-boost';

export const LOGIN_USER = gql`
mutation($userName: String!, $password: String!) {
  login(userName: $userName, password: $password){
    _id
    firstName
    lastName
    userRole
    token
    tokenExpiration
  }
}`;

export const SIGNUP_USER = gql`
mutation($firstName: String!, $lastName: String!, $userName: String!, $password: String!, $title: String!, $companyName: String!,
  $companyAddress: String!,  $telephone: Float!, $userRole: String ){
    signup(firstName: $firstName, lastName: $lastName, userName: $userName, password: $password, title: $title, companyName: $companyName, companyAddress: $companyAddress, telephone: $telephone, userRole: $userRole){
      firstName
  }
}`;


