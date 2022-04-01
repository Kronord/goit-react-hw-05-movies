// import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/services/FilmsApi';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
      getMovieDetails(movieId).then(res => {
          setData(res);
          setStatus('resolved');
      }).catch(error => setStatus('rejected'));
  }, [movieId]);

  if (status === 'idle') {
    return <h1>Welcome</h1>;
    };

  if (status === 'resolved') {
    return (
      <div>
        <h2>{data.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt="poster"
            />
            <p>Popularity: {data.popularity}</p>
            <h3>Overview</h3>
            <p>{data.overview}</p>
            <h3>Genres</h3>
            <p>{data.genres.map(el => el.name).join(', ')}</p>
      </div>
    );
    };

    if (status === 'rejected') { 
        return <h1>Sorry, we don`t found this movie</h1>
    };
}
