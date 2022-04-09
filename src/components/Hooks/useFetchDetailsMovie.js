import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/services/FilmsApi';
import { useParams } from 'react-router-dom';

export default function useFetchDetailsMovie() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    getMovieDetails(movieId)
      .then(res => {
        setData(res);
        setStatus('resolved');
      })
      .catch(error => setStatus('rejected'));
  }, [movieId]);
    
    return { data, status };
};
