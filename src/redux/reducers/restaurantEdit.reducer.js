const restaurantEdit = (state = {}, action) => {
    console.log('In restaurantEdit reducer - action is:', action);
    switch (action.type) {
        case 'SET_RESTAURANT_EDIT':
            return { id: action.id, restaurant_name: action.restaurant_name,
                cuisine: action.cuisine, 
                restaurant_url: action.restaurant_url, 
                restaurant_bio: action.restaurant_bio  };
        case 'EDIT_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            }
        default:
            return state;
    }
}

export default restaurantEdit;