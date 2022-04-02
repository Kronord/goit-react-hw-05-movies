import { getMovieReviews } from 'components/services/FilmsApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() { 
    const [data, setData] = useState(null);
    const { movieId } = useParams();
    // const [status, setStatus] = useState();

    useEffect(() => {
        getMovieReviews(movieId).then(res => {
            setData(res.results);
            console.log(res);
        })
    }, [movieId]);

    console.log(data);

    return (
        <ul>
            {data && data.map(el => {
                return (
                    <li>
                        <h4>{el.author}</h4>
                        <p>{el.content}</p>
                    </li>
                );
            })}
        </ul>
    );
};