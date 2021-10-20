import React from 'react';
// import './BestBooks.css'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class BestBooks extends React.Component {
 componentDidMount = () => {
   if(this.props.auth0.isAuthen) {
     this.props.auth0.getIdTokenClaims()
     .then(res => {
       const jwt = res.__raw; const config = {
         headers: {"Authorization" : `Bearer ${jwt}`},
         method: 'get',
         baseURL: "http:localhost:3000/",
         url: '/test'
       }
       axios(config).then(axiosResults => console.log(axiosResults.data)).catch(err => console.error(err))
     })
     .catch(err => console.error(err));
   }
 }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default withAuth0(BestBooks);
