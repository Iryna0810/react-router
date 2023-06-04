import { useEffect, useState } from 'react'
import {trendingFilms} from 'servises/fetch_film.js'
import { Vortex } from 'react-loader-spinner';
import {FilmGalleryItem} from '../components/FilmGalleryItem/FilmGalleryItem'



const Home = () => {
    const [films, setFilms] = useState([]);
    const [currentFilm, setCurrentFilm] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
     useEffect(() => {
        // if (!searchImages || currentPage === 1) return;
        setIsLoading(true);
        trendingFilms()
            .then(({ data }) => {
                console.log(data.results)
                setFilms(data.results);
                
                // currentFilm([...data.results])
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
                console.log(films)
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    return (
    <div className="ImageGallery">
        {isLoading && <Vortex
                    visible={true}
                    height="280"
                    width="280"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />}
                
                {error && <div>Something went wrong. Try again later</div>}
                
                {films && films.map((film) =>
                    <FilmGalleryItem className='ImageGalleryItem' key={film.id} film={film} />)}
    </div>)
}

export default Home