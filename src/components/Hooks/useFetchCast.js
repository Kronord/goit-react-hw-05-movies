import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../services/FilmsApi';

export default function useFetchCast() { 
    const [data, setData] = useState(null);
    const { movieId } = useParams();
    const [status, setStatus] = useState('idle');
    
    useEffect(() => {
    setStatus('pending');
    getMovieCredits(movieId).then(res => {
      setData(res.cast);
      setStatus('resolved');
    }).catch(error => setStatus('rejected'));
    }, [movieId]);
    
    return { data, status };
};