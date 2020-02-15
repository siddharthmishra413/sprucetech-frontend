import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/api'
});

const authLink = new ApolloLink((operation, forward) => {
  let data = JSON.parse(localStorage.getItem('userData'));
  let token = null;
  if (data) token = data.token;
  operation.setContext({
    headers: {
      api_token: token ? token : ''
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App client={client} />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
