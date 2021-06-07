import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* fetchRandomTask() {
    try {
        const randomSelection = yield axios.get('/api/restaurant/')
        yield put({ type: 'SET_RANDOM', payload: randomSelection.data})
        console.log('Random restaurant is: ', randomSelection.data);
    } catch (error) {
        console.log('Error with task fetching request', error);
        
    }
}

function* randomTaskSaga() {
    yield takeLatest('FETCH_RANDOM_TASK', fetchRandomTask);
  }

export default randomTaskSaga;