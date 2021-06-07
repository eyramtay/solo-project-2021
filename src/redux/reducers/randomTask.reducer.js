const randomTaskReducer = ( state = {}, action) => {
    switch ( action.type) {
        case 'SET_RANDOM':
            return action.payload;
        default:
            return state;
    }
}

export default randomTaskReducer;