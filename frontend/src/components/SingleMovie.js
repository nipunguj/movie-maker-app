import React from 'react';

const SingleMovie = props => {
    const {movieName, movieGenre, movieYear} = props;
    return ( 
        <div className='card'>
            <div className='container'>
                <h2>{movieName}</h2>
                <h4>{movieGenre} - {movieYear}</h4>
            </div>

        </div>
     );
}
 
export default SingleMovie;