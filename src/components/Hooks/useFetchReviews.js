import { getMovieReviews } from 'components/services/FilmsApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function useFetchReviews() {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    getMovieReviews(movieId)
      .then(res => {
        setData(res.results);
        console.log(res);
        data.length > 0 ? setStatus('resolved') : setStatus('rejected');
      })
      .catch(error => setStatus('rejected'));
  }, [data.length, movieId]);
    
    return { data, status };
};
