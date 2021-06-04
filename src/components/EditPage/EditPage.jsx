import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function EditPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const restaurant = useSelector(store => store.restaurantEdit);

    const handleSubmit = () => {
        console.log('Clicked handle submit');

        // dispatch to store to send PUT request
        dispatch({ 
            type: 'EDIT_RESTAURANT',
            id: restaurant.id, 
            restaurant_name: restaurant.restaurant_name, 
            cuisine: restaurant.cuisine, 
            restaurant_url: restaurant.restaurant_url, 
            restaurant_bio: restaurant.restaurant_bio,
        })
        // after form submit, take user back to the details page
        history.push(`/details/${params.id}`);
    }
    // dispatch reducer for state of restaurant name
    const handleNameChange = (event) => {
        dispatch({ 
            type: 'EDIT_ONCHANGE',
            payload: { property: 'restaurant_name', value: event.target.value }
         });
    }
    // dispatch reducer for state of restaurant name
    const handleCuisineChange = (event) => {
        dispatch({ 
            type: 'EDIT_ONCHANGE',
            payload: { property: 'cuisine', value: event.target.value }
         });
    }
    // dispatch reducer for state of restaurant name
    const handleURLChange = (event) => {
        dispatch({ 
            type: 'EDIT_ONCHANGE',
            payload: { property: 'restaurant_url', value: event.target.value }
         });
    }
    // dispatch reducer for state of restaurant name
    const handleBioChange = (event) => {
        dispatch({ 
            type: 'EDIT_ONCHANGE',
            payload: { property: 'restaurant_bio', value: event.target.value }
         });
    }

    return (
        <div>
            {/* Form to Edit Restaurant info */}
            <form onSubmit={handleSubmit}>
                <input 
                    value={restaurant.restaurant_name}
                    onChange={(event) => handleNameChange(event)} /> <br />
                <input
                    value={restaurant.cuisine}
                    onChange={(event) => handleCuisineChange(event)} /> <br />
                <input
                    value={restaurant.restaurant_url}
                    onChange={(event) => handleURLChange(event)} /> <br />
                <input
                    value={restaurant.restaurant_bio}
                    onChange={(event) => handleBioChange(event)} /> <br />

                <button onClick={() => history.push(`/details/${params.id}`)}>
                    Cancel
                </button>
                <button type='submit'>Save</button>

            </form>
        </div>
    )

}

export default EditPage;