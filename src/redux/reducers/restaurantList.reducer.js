const restaurantList = (state = [], action) => {

    switch (action.type) {
        case 'SET_RESTAURANTS':
            return action.payload;
        default:
            return state;
    }

    // if (action.type === 'SET_RESTAURANTS') {
    //     // The action payload is a new array from the server
    //     // It has ALL the information in it - no need to spread
    //     // & add to previous state
    //     return action.payload;
    // }
    // return state;
}

export default restaurantList;