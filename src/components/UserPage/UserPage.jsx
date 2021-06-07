import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory()

  function moveToAddPage() {
    history.push('/addRestaurant')
        console.log('Going to the addRestaurant page...');
  }

  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
    </div>

    <div className="container">
      <h3>What is "Let's Eat!" is about...</h3><br />

      <p><i><b>Let’s Eat!</b> (working title) - </i>is an application that allows you to enter in 
        an array of your favorite restaurants and then from there you're able to 
        click a button that will randomly select a restaurant & suggest where to eat! 
      </p><br /><br />
        
        <p>It’s always hard to decide. <i>Let’s Eat!</i> is designed to make decision-making on 
          what to eat a little easier!</p><br /><br />

      <Button variant="contained" color="primary" onClick={moveToAddPage}>Let's Get Started!</Button>

    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
