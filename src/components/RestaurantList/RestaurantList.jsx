import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function RestaurantList() {

    const history = useHistory();
    const dispatch = useDispatch();

    const restaurantList = useSelector(store => store.restaurantList);

    useEffect(() => {
        dispatch({ type: 'FETCH_RESTAURANTS' });
    }, []);

    return (
        <section>
            <h2>All Restaurants</h2>
            <ul>
                {restaurantList.map(restaurant => {
                    return (
                        <>
                        <li>{restaurant.restaurant_name}</li>
                        </>
                    )
                })}
            </ul>
        </section>
    )

}

export default RestaurantList;