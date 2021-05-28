import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RestaurantList from '../RestaurantList/RestaurantList';

import './AddRestaurant.css';

function AddRestaurant() {

    const user = useSelector((store) => store.user);

// States for input
const [restaurant, setRestaurant] = useState('');
const [cuisine, setCuisine] = useState('');
const [foodURL, setFoodURL] = useState('');

const history = useHistory();
const dispatch = useDispatch();


useEffect(() => {
    dispatch({ type: 'FETCH_RESTAURANTS' });
}, []);

    // Object handling the data from the inputs
    let newRestaurant = {
        restaurant_name: restaurant,
        cuisine: cuisine,
        restaurant_url: foodURL,
    }

    // Adds new restaurant to the database
    function addNewEntry(event) {
        event.preventDefault();
        console.log(newRestaurant);
        dispatch({ type: 'ADD_RESTAURANT', payload: newRestaurant })

        // After dispatching - clear state of inputs
        
    }



    function letsRandomize() {
        history.push('/randomize')
        console.log('Going to the randomizer page...');
    }

    const newPlace = (event) => {
        setRestaurant(event.target.value);
    }

    const newCuisine = (event) => {
        setCuisine(event.target.value);
    }

    const newURL = (event) => {
        setFoodURL(event.target.value);
    }

    return (
        <>
        <div className="inputTable">
            <h2>Welcome, {user.username}!</h2><br />
            <p>What are you craving? <br /><br />Down below, enter in as many restaurants as you wish & hit
                 the <i>Let's Randomize</i> button once your list is done!</p><br />
            <h4>Restaurant Name:</h4>
            <input onChange={newPlace} type="text" placeholder="Restaurant Name" /><br /><br />
            <h4>Restaurant's Cuisine:</h4>
            <input onChange={newCuisine} type="text" placeholder="Restaurant's Cuisine" /><br /><br />
            <h4>Restaurant's Website:</h4>
            <input onChange={newURL} type="text" placeholder="Restaurant's Website" /><br /><br /><br />

            <button onClick={addNewEntry}>Add</button> <br /><br />
        </div><br /><br />
            <RestaurantList /><br /><br /><br /><br />
        <div className="randomButton">
            <button onClick={letsRandomize}>Let's Randomize!</button> <br /><br />
        </div>
        </>
    )

}

export default AddRestaurant;