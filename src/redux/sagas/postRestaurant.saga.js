import axios from 'axios';

function* postRestaurant(action) {
    try {
        yield axios.post('/api/restaurant', /*action.payload); */ { restaurant_name: action.restaurant_name,
             cuisine: action.cuisine, restaurant_url: action.restaurant_url,
            restaurant_bio: action.restaurant_bio });
    } catch (error) {
        console.log('Error POST-ing restaurant', error);
    }
}

export default postRestaurant;