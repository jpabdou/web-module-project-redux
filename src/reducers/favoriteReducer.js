import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions.js';


const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVE_FAVORITE:
            const result= state.favorites.filter(item=>(action.payload !== item.id))
            return {
                ...state,
                favorites: result
            }
        case ADD_FAVORITE:
            const search= state.favorites.filter(item=>(action.payload.id === item.id))
            if (!search.length) {
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            } else {
                return state
            }

        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
}

export default favoriteReducer;
