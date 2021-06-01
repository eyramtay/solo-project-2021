import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './RestaurantList.css';

function RestaurantList() {

    const history = useHistory();
    const dispatch = useDispatch();
    // Restaurant list
    const restaurants = useSelector(store => store.restaurants);

    const handleDetailView = (id) => {
        history.push(`details/${id}`)
        dispatch({ type: 'SET_RESTAURANT_CLICK', payload: id });
    }

    useEffect(() => {
        // on page load - fetches restaurants from database
        dispatch({ type: 'FETCH_RESTAURANTS' });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>All Restaurants</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map(restaurant => {
                        return (
                        <>
                        <tr>
                            <td onClick={() => handleDetailView(restaurant.id)}>
                                {restaurant.restaurant_name}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default RestaurantList;