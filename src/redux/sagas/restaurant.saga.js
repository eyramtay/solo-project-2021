import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewRestaurants(action) {
    try {
        yield axios.post('/api/addRestaurant', action.payload);
    } catch {
        console.log('Error adding restaurant...');
    }
}

function* restaurantSaga() {
    yield takeLatest('ADD_RESTAURANT', addNewRestaurants);
}

export default restaurantSaga;