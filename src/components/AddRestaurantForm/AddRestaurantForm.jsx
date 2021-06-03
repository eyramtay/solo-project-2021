import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RestaurantList from '../RestaurantList/RestaurantList';

import './AddRestaurant.css';

function AddRestaurantForm() {

    const user = useSelector((store) => store.user);

// States for input
const [restaurantName, setRestaurantName] = useState('');
const [cuisineType, setCuisineType] = useState('');
const [foodURL, setFoodURL] = useState('');
const [restaurantBio, setRestaurantBio] = useState('');

const dispatch = useDispatch();
const history = useHistory();



// Object handling the data from the inputs
// let newRestaurant = {
//     restaurant_name: restaurantName,
//     cuisine: cuisine,
//     restaurant_url: foodURL,
//     restaurant_bio: restaurant_bio,
// }

// Adds new restaurant to the database
function handleSubmit(event) {
    event.preventDefault();
    console.log('Added new restaurant');
    dispatch({ type: 'POST_RESTAURANT', payload: {restaurant_name: restaurantName,
    cuisine: cuisineType, restaurant_url: foodURL, restaurant_bio: restaurantBio} })
    
    // After dispatching - clear state of inputs
    setRestaurantName('');
    setCuisineType('');
    setFoodURL('');
    setRestaurantBio('');
}

useEffect(() => {
    // Hook to grab restaurants
    dispatch({ type: 'FETCH_RESTAURANTS' });
}, []);


    function letsRandomize() {
        history.push('/randomize')
        console.log('Going to the randomizer page...');
    }

    // const newPlace = (event) => {
    //     setRestaurantName(event.target.value);
    // }

    // const newCuisine = (event) => {
    //     setCuisineType(event.target.value);
    // }

    // const newURL = (event) => {
    //     setFoodURL(event.target.value);
    // }

    const newBio = (event) => {
        setRestaurantBio(event.target.value);
    }

    return (
        <>
        <div className="inputTable">
            <h2>Welcome, {user.username}!</h2><br />
            <p>What are you craving? <br /><br />Down below, enter in as many restaurants as you wish & hit
                 the <i>Let's Randomize</i> button once your list is done!</p><br />
            <h4>Restaurant Name:</h4>
            {/* form for submitting newly added restaurants */}
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => setRestaurantName(event.target.value)} 
                    value={restaurantName} 
                    type="text" 
                    placeholder="Restaurant Name" 
                    /><br /><br />

            <h4>Restaurant's Cuisine:</h4>
                <input onChange={(event) => setCuisineType(event.target.value)} 
                value={cuisineType}
                type="text" 
                placeholder="Restaurant's Cuisine" 
                /><br /><br />

            <h4>Restaurant's Website:</h4>
                <input onChange={(event) => setFoodURL(event.target.value)} 
                value={foodURL}
                type="text" 
                placeholder="Restaurant's Website" 
                /><br /><br /><br />

            <h4>Description of Restaurant:</h4>
                <textarea onChange={(event) => setRestaurantBio(event.target.value)}
                value={restaurantBio}
                type="text"
                placeholder="Restaurant Bio"
                /><br /><br /><br />

            <div>
                {/* "Cancel" button routes user to Restaurant List page */}
                <button onClick={() => history.push('/restaurantList')}>Cancel</button>
                    &nbsp;&nbsp;
                <button type="submit" onClick={handleSubmit}>Add</button> <br /><br />
            </div>
            </form>
        </div><br /><br />
            <RestaurantList /><br /><br /><br /><br />
        <div className="randomButton">
            <button onClick={letsRandomize}>Let's Randomize!</button> <br /><br />
        </div>
        </>
    )

}

export default AddRestaurantForm;