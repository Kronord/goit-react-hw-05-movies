import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'components/services/FilmsApi';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getTrendingFilms().then(res => setData(res.results));
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <ul>{data && data.map(el => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`}>{el.name ?? el.title}</Link>
              </li>
            );
        }) }</ul>
        </>
    );
}
