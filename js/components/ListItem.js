import React from 'react';

const ListItem = ({movie}) => {
    return (
            <div className='movie-details'>
                <img src={movie.Poster} alt={movie.Title}/>
                Title: {movie.Title} Production Year: {movie.Year}
            </ div>
    );
};

export default ListItem;