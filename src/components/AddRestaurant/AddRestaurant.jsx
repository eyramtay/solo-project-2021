import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
            <h2>Welcome, {user.username}!</h2><br />
            <input onChange={newPlace} type="text" placeholder="Enter Restaurant" /><br />
            <input onChange={newCuisine} type="text" placeholder="Enter Restaurant's Cuisine" /><br />
            <input onChange={newURL} type="text" placeholder="Enter Restaurant's Website" /><br /><br />

            <button onClick={addNewEntry}>Add</button> <br /><br />
            <button onClick={letsRandomize}>Let's Randomize!</button>
        </>
    )

}

export default AddRestaurant;