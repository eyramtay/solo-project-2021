import { all, takeEvery } from 'redux-saga/effects';
// import { takeEvery } from 'redux-saga/effects';

import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchAllRestaurantsSaga from './fetchAllRestaurants.saga';
import postRestaurantSaga from './postRestaurant.saga';
import getRestaurantByIdSaga from './getRestaurantById.saga';
import editRestaurantSaga from './editRestaurant.saga';

import randomTaskSaga from './randomRestaurant.saga';


// function* rootSaga() {
//   yield takeEvery('FETCH_RESTAURANTS', fetchAllRestaurants);
//   yield takeEvery('SET_RESTAURANT_CLICK', getRestaurantById);
//   yield takeEvery('POST_RESTAURANT', postRestaurant);
//   yield takeEvery('EDIT_RESTAURANT', editRestaurant);
//   yield takeEvery('')
// }


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga


// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    getRestaurantByIdSaga(),
    fetchAllRestaurantsSaga(),
    postRestaurantSaga(),
    editRestaurantSaga(),
    randomTaskSaga(),
  ]);
}
