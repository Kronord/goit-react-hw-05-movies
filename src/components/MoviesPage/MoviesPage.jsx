import { useState } from 'react';
import { searchFilms } from 'components/services/FilmsApi';
import { Link } from 'react-router-dom';

export default function MoviesPage() {
  const [data, setData] = useState();
  const [film, setFilm] = useState('');
  const [status, setStatus] = useState('idle');

  const handleChange = ev => setFilm(ev.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    searchFilms(film).then(res => {
      setData(res.results);
      setStatus('resolved');
    });
  };

  if (status === 'idle') {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={film} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }

  if (status === 'resolved') {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={film} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>

        <ul>
          {data.map(el => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`}>{el.name ?? el.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
