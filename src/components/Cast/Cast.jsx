import {  useEffect, useState } from "react";
import currentFilmInfoCast from 'servises/fetch_movie_current cast'
import Loader from '../Loader/Loader'
import { useLocation } from "react-router-dom";
import "../styles.css"

const IMG_URL = `https://image.tmdb.org/t/p/original`

const Cast = ({key}) => {
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [movieId, setMovieId] = useState('');
    
    const location = useLocation();
    console.log(location.state);
    
    // const getLocalStorage = () => {
    //     const parseContacts = JSON.parse(window.localStorage.getItem('movieIdKey'));
    //     if (parseContacts) { setMovieId(parseContacts) };
    // }
   
    useEffect(() => {
        setMovieId(location.state);
    },[location.state])

    useEffect(() => {
        // getLocalStorage();
        
        setIsLoading(true);
        if (movieId) {
            currentFilmInfoCast(movieId)
                .then(({ data }) => {
                    setCast(data.cast);
                })
                .catch((error) => setError(error))
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [movieId])
    
    return (
        <div>
            {isLoading && <Loader />}
            {error && <div>Something went wrong. Try again later</div>}        
            <ul className="FilmGallery">
                {movieId && cast.map(({ name, title, profile_path, character }) =>
                (<div key={name}>
                    <h3>Actor: {name}</h3>
                    <h5>Character: {character}</h5>
                    <img src={`${IMG_URL}/${profile_path}`}
                        alt={title}
                        width='150px'></img>
                </div>)
                )}
            </ul>
        </div>)
};

export default Cast