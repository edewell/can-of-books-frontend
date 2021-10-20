import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <Auth0Provider 
  domain="dev-1zgmazj3.us.auth0.com"
  clientId="HzeUdnH6c5d0soZnoueuvWIoYbUBDUq5"
  redirectURL="http://localhost:3000"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
)