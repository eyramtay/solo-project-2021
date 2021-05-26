import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>

    <div className="container">
      <p>Brief description of what "Let's Eat!" is about...</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Error rerum eum commodi aliquid ipsam voluptatem voluptates aspernatur? 
        Optio officiis ipsa excepturi quas provident autem eveniet! 
        Perferendis vero illo aliquid cupiditate?</p>

      <Button>Let's Get Started!</Button>

    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
