import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postRestaurant(action) {
    try {
        yield axios.post('/api/restaurant', action.payload); /*{ restaurant_name: action.restaurant_name,
             cuisine: action.cuisine, restaurant_url: action.restaurant_url,
            restaurant_bio: action.restaurant_bio }); */
        yield put({ type: 'FETCH_RESTAURANTS' });
    } catch (error) {
        console.log('Error POST-ing restaurant', error);
    }
}

function* postRestaurantSaga() {
    yield takeLatest('POST_RESTAURANT', postRestaurant);
}

export default postRestaurantSaga;