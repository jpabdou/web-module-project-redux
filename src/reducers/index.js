import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';

import movieReducer from './movieReducer';
const rootReducer = combineReducers({movies: movieReducer, favorites: favoriteReducer})

export default rootReducer;
