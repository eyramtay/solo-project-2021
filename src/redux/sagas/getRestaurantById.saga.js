import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getRestaurantById(action) {
    try {
        const restaurantClick = yield axios.get(`/api/restaurant/${action.payload}`);
        console.log(`In getRestaurantById - response from GET request:`, restaurantClick.data);
        // dispatch to reducer to hold state of restaurant clicked
        yield put({ type: 'SET_CLICK', payload: restaurantClick.data })
    } catch (error) {
        console.log('Error adding restaurant...', error);
    }
}

// function* getRestaurantById() {
//     yield takeLatest('ADD_RESTAURANT', addNewRestaurants);
// }

export default getRestaurantById;