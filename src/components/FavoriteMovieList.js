import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={()=>{props.removeFavorite(movie.id)}}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = state => {
    return({
        favorites: state.favorites.favorites,
        displayFavorites: state.favorites.displayFavorites
    })
}


export default connect(mapStateToProps,{removeFavorite})(FavoriteMovieList);
