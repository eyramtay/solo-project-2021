import { put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllRestaurants() {
    // generator function to fetch all restaurants from database
    try {
        const response = yield axios.get('/api/addRestaurant');
        console.log('In fetchAllRestaurants - response from GET request', response.data);
        yield put({ type: 'SET_RESTAURANT_LIST', payload: response.data });
    
    } catch {
        console.log('Error GETTING restaurants...');
    }
}

export default fetchAllRestaurants;