import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from '../components/Loader/Loader'
import { LinkPage, List } from 'components/styled'
import currentFilmInfo from 'servises/fetch_movie_current';
import currentFilmInfoReviews from 'servises/fetch_movie_current_reviews'

import "../styles.css"

const IMG_URL = `https://image.tmdb.org/t/p/original`

const MovieDetails = () => {
    const { movieId } = useParams();
    const [films, setFilms] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [currentFilm, setCurrentFilm] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setFilms([]);
        currentFilmInfo(movieId)
            .then(({ data }) => {
                console.log(data)
                setFilms(data);
                setCurrentFilm(data)
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
            })
    }, [movieId])

        // useEffect(() => {
        // setIsLoading(true);
        // setFilms([]);
        // // setCurrentPage(1);
        // currentFilmInfoCast(movieId)
        //     .then(({ data }) => {
        //         console.log(data)
        //         setCast(data);
        //         // setCurrentFilm(data)
        //     })
        //     .catch((error) => setError(error))
        //     .finally(() => {
        //         setIsLoading(false)
        //     })
        // }, [movieId])
    
        useEffect(() => {
        setIsLoading(true);
        setFilms([]);
        currentFilmInfoReviews(movieId)
            .then(({ data }) => {
                console.log(data)
                setReviews(data);
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
            })
        }, [movieId])
    
   

    return (
        <div>MovieDetails - {movieId}
            {isLoading && <Loader/>} 
            {error && <div>Something went wrong. Try again later</div>}
                
            <div key={movieId} className="ImageGalleryItem">
                
                <div>
                    <img
                        src={`${IMG_URL}/${films.backdrop_path}`}
                        alt={films.title} />
                    <h3>{films.title}</h3>
                    <p>{films.overview}</p>
                </div>
            </div>
                  <List>
        <li>
            <LinkPage to="cast" key={movieId}>Cast</LinkPage>
        </li>
        <li>
          <LinkPage to="reviews">Reviews</LinkPage>
        </li>
      </List>
      <Outlet />
        </div>
    )
}
    

export default MovieDetails
