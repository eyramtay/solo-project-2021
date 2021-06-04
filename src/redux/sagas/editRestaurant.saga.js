import { takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';

function* editRestaurant(action) {
    try {
        yield axios.put(`/api/restaurant/${action.id}`, { restaurant_name: action.restaurant_name,
            cuisine: action.cuisine, restaurant_url: action.restaurant_url,
           restaurant_bio: action.restaurant_bio });
    } catch (error) {
        console.log('PUT request failed:', error);
    }
}

function* editRestaurantSaga() {
    yield takeLatest('EDIT_RESTAURANT', editRestaurant);
}

export default editRestaurantSaga;