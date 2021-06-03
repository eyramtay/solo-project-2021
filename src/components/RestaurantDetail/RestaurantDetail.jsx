import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


function RestaurantDetail() {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    // reducer holds the restaurant clicked
    const restaurantClickedDetail = useSelector(store => store.restaurantClicked);

    const handleBackButton = () => {
        // on click - brings user back to the restaurantList page view
        history.push('/restaurantList');
        
        // Resets state of restaurant clicked
        dispatch({ type: 'RESET_CLICK' });
    }

    // handle function for edit button
    const handleEditButton = (restaurant) => {
        // brings user to edit view
        history.push(`/editrestaurant/${restaurant.id}`)
        // dispatch store to set state of restaurant to edit
        dispatch({ type: 'SET_RESTAURANT_EDIT', id: restaurant.id, 
        restaurant_name: restaurant.restaurant_name, 
        cuisine: restaurant.cuisine, 
        restaurant_url: restaurant.restaurant_url, 
        restaurant_bio: restaurant.restaurant_bio })
    }

    // this hook allows the page view to show through a refresh
    useEffect(() => {
        dispatch({ type: 'SET_RESTAURANT_CLICK', payload: params.id });

    }, [])

    return (
        <div>
            {restaurantClickedDetail.map(restaurant => {
                return <div key={restaurant.id}>
                    {/* Restaurant Details */}
                    <h2>{restaurant.restaurant_name}</h2>
                    <h4>{restaurant.cuisine}</h4>
                    <p>{restaurant.restaurant_bio}</p>
                
                {/* Back button */}
                <button onClick={handleBackButton}>Back</button> <br />
                {/* Edit button */}
                <button onClick={() => handleEditButton(restaurant)}>Edit Restaurant</button>
            </div>
        })}
    </div>
    );
}

export default RestaurantDetail;