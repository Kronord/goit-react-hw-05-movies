import { searchFilms } from 'components/services/FilmsApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useFetchMoviesPage(searchParams) {
  const [data, setData] = useState();
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    if (location.search !== '') {
      setStatus('pending');
      searchFilms(searchParams.get('query'))
        .then(res => {
          setData(res.results);
          setStatus('resolved');
        })
        .catch(error => setStatus('rejected'));
    }
  }, [location.search, searchParams]);
    
    return { data, status, location };
};


