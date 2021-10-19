import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Auth0provider} from "auth0/auth0-react"

ReactDOM.render(
  <Auth0provider 
  domain="dev-1zgmazj3.us.auth0.com"
  clientId="HzeUdnH6c5d0soZnoueuvWIoYbUBDUq5"
  redirectURL="http://localhost:3000"
  >
    <App />
  </Auth0provider>,
  document.getElementById("root")
)