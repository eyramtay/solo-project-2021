import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getRestaurants() {
    try {
        const response = yield axios.get('/api/addRestaurant');

        yield put({ type: 'SET_RESTAURANT_LIST', payload: response.data })
    
    } catch {
        console.log('Error GETTING restaurants...');
    }
}

export default getRestaurants;