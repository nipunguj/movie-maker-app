import React from 'react';
import SingleMovie from '../components/SingleMovie';

const movies =[
    {name:'John Wick', genre:'Action', year:'2019'},
    {name:'Hulchul', genre:'Comedy', year:'2004'}
]
const Movies = () => {
    return ( 
         <div className='movies'>
            {movies.map((movie)=>{
                return <SingleMovie
                movieName={movie.name}
                movieGenre={movie.genre}
                movieYear={movie.year} />
            })}
         </div>
     );
}
 
export default Movies;