// Used to store the restaurant clicked
const restaurantClicked = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLICK':
            return action.payload;
        case 'RESET_CLICK':
            return state;
        default:
            return state;
    }

    // if (action.type === 'SET_RESTAURANT_LIST') {
    //     // The action payload is a new array from the server
    //     // It has ALL the information in it - no need to spread
    //     // & add to previous state
    //     return action.payload;
    // }
    // return state;
}

export default restaurantClicked;