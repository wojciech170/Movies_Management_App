import React from 'react';

const ListItem = ({movie}) => {
    return (
            <>
                <img src={movie.Poster} alt={movie.Title}/>
                Title: {movie.Title} Production Year: {movie.Year}
            </>
    );
};

export default ListItem;