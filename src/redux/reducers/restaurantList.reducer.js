const restaurantList = (state = [], action) => {

    if (action.type === 'SET_RESTAURANT_LIST') {
        
        return action.payload;
    }
    return state;
}

export default restaurantList;