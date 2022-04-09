import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'components/services/FilmsApi';

export default function useFetchHomePage() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    getTrendingFilms()
      .then(res => {
        setData(res.results);
        setStatus('resolved');
      })
      .catch(error => setStatus('rejected'));
  }, []);
    
    return { data, status };
};
