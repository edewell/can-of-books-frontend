import { React } from 'react'
import { useAuth0 } from "@auth0/auth0-react"

 /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
  const LoginButton = (props) => {
    const {loginWithRedirect} = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Log In</button>
  }

  export default LoginButton;

