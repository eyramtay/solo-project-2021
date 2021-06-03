import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllRestaurants() {
    // generator function to fetch all restaurants from database
    try {
        const clickedRestaurant = yield axios.get('/api/restaurant');
        console.log('In fetchAllRestaurants - response from GET request', clickedRestaurant.data);
        yield put({ type: 'SET_RESTAURANTS', payload: clickedRestaurant.data });
    
    } catch {
        console.log('Error GETTING restaurants...');
    }
}

function* fetchAllRestaurantsSaga() {
    yield takeLatest('FETCH_RESTAURANTS', fetchAllRestaurants)
}

export default fetchAllRestaurantsSaga;