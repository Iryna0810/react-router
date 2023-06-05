import { useEffect, useState } from "react";
import Loader from '../Loader/Loader'
import currentFilmInfoReviews from 'servises/fetch_movie_current_reviews'
import '../styles.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [movieId, setMovieId] = useState('');

    const getLocalStorage = () => {
        const parseContacts = JSON.parse(window.localStorage.getItem('movieIdKey'));
        if (parseContacts) { setMovieId(parseContacts) };
    }

    useEffect(() => {
        getLocalStorage();
        setIsLoading(true);
        if (movieId) {
            currentFilmInfoReviews(movieId)
                .then(({ data }) => {
                    console.log(data.results)
                    setReviews(data.results);
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
            <ul>
                {movieId && reviews.map(({ author, content }) =>
                (<div key={author} className="FilmGallery">
                    <h3>Author: {author}</h3>
                    <p>Review: {content}</p>

                </div>))}
            </ul>
        </div>
    )
};

export default Reviews