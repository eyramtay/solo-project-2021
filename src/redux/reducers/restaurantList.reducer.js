const restaurantList = (state = [], action) => {

    if (action.type === 'SET_RESTAURANT_LIST') {
        // The action payload is a new array from the server
        // It has ALL the information in it - no need to spread
        // & add to previous state
        return action.payload;
    }
    return state;
}

export default restaurantList;