// import { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {


    /* TODO: render information about logged in user */
    const {user, isAuthen, isLoading} = useAuth0();
    if (isLoading) {
      return <div>Loading....</div>
    }
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      isAuthen && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    )
}


export default Profile;
