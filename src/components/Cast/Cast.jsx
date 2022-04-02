import { getMovieCredits } from "components/services/FilmsApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Cast() { 
    const [data, setData] = useState(null);
    const { movieId } = useParams();
    // const [status, setStatus] = useState();

    useEffect(() => {
        getMovieCredits(movieId).then(res => {
            setData(res.cast);
        })
    }, [movieId]);

    console.log(data);

    return (
        <ul>
            {data && data.map(el => {
                return (
                  <li>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                      alt="profile"
                        />
                        <p>{el.name}</p>
                  </li>
                );
            })}
        </ul>
    );
};