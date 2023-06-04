import { useEffect, useState } from "react";
import currentFilmInfoCast from 'servises/fetch_movie_current cast'
import Loader from '../Loader/Loader'
import "../styles.css"

const Cast = (movieId) => {
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

     useEffect(() => {
        setIsLoading(true);
        setCast([]);
        currentFilmInfoCast(movieId)
            .then(({ data }) => {
                console.log(data)
                setCast(data);
                // setCurrentFilm(data)
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
            })
     }, [movieId])
    
    return (
        <div>Cast
        {isLoading && <Loader />}
            {error && <div>Something went wrong. Try again later</div>}
            
    </div>)
}

export default Cast