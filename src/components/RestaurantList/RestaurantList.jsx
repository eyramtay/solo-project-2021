import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './RestaurantList.css';

// -- MATERIAL UI --



function RestaurantList() {

    // const list = new MDCList(document.querySelector('.mdc-list'));
    // const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));

    const history = useHistory();
    const dispatch = useDispatch();
    // Restaurant list
    const restaurantList = useSelector(store => store.restaurantList);

    const handleDetailView = (id) => {
        dispatch({ type: 'SET_RESTAURANT_CLICK', payload: id });
        history.push(`details/${id}`)
    }

    useEffect(() => {
        // on page load - fetches restaurants from database
        dispatch({ type: 'FETCH_RESTAURANTS' });
    }, []);

    return (
        <div>
            <h2>All Restaurants:</h2>
            {restaurantList.map(restaurant => {
            return (
            <>
            <div id="menu-outer">
                <div class="table">

            <ul id="horizontal-list">
                <li
                key={restaurant.id}>
                    {restaurant.restaurant_name}&nbsp;&nbsp;
                    <button onClick={() => handleDetailView(restaurant.id)}>View</button>
                </li>
                
            </ul>
                </div>
            </div>
            </>
            )
            })}
        </div>

        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>All Restaurants</th>
        //                 <th>Actions</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {restaurantList.map(restaurant => {
        //                 return (
        //                 <>
        //                 <tr>
        //                     <td onClick={() => handleDetailView(restaurant.id)}>
        //                         {restaurant.restaurant_name}</td>
        //                     <td><button>Edit</button></td>
        //                     <td><button>Delete</button></td>
        //                 </tr>
        //                 </>
        //                 )
        //             })}
        //         </tbody>
        //     </table>
        // </div>
    )

}

export default RestaurantList;