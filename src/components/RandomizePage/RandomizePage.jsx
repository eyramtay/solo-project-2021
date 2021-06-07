import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RandomizeForm from '../RandomizeForm/RandomizeForm';

function RandomizePage() {
    // const user = useSelector((store) => store.user);

    const history = useHistory();
    const dispatch = useDispatch();
    const randomSelection = useSelector(store => store.randomTaskReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_RANDOM_TASK' });
        
    }, []);

    console.log('Getting random restaurant...', randomSelection);
    // const restaurant = useSelector((store) => store.)
    
    const handleTask = () => {
        dispatch({type: 'FETCH_RANDOM_TASK' })
        
    } 
    
    return (
        <>
        <h2>Randomize Page Under Construction</h2>

            <div key={randomSelection.id}>
              {/* <p>Boludo <hr /><br /></p>
              <p><a href="https://www.boludo.com/" target="_blank">Let's EAT!</a></p> */}
              <p>Random restaurant here: {randomSelection.cuisine}</p>

              <RandomizeForm />
              
            </div>

            {/* <button onClick={handleTask}>What's on the menu?</button> */}
        </>
    )
}


export default RandomizePage;