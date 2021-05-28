import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './RestaurantList.css';

function RestaurantList() {

    const history = useHistory();
    const dispatch = useDispatch();

    const restaurantList = useSelector(store => store.restaurantList);

    useEffect(() => {
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
                    {restaurantList.map(restaurant => {
                        return (
                        <>
                        <tr>
                            <td>{restaurant.restaurant_name}</td>
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