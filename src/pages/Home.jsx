import { useEffect, useState } from 'react'
import {trendingFilms} from 'servises/fetch_film.js'
import { Vortex } from 'react-loader-spinner';
import FilmGalleryItem from '../components/FilmGalleryItem/FilmGalleryItem'
import { Button} from 'components/styled';
import "../styles.css"



const Home = () => {
    const [films, setFilms] = useState([]);
    const [currentFilm, setCurrentFilm] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
     useEffect(() => {
        // if (!searchImages || currentPage === 1) return;
        setIsLoading(true);
        trendingFilms(currentPage)
            .then(({ data }) => {
                console.log(data.results)
                setFilms(data.results);
                setCurrentFilm(data.results)
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
                console.log(films)
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [currentPage]);
    
        const handleMoreLoad = () => {
            setCurrentPage(prev => prev + 1)
            console.log(currentPage);
    }

   
    return (
    <div className="FilmGallery">
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
                    <FilmGalleryItem className='FilmGalleryItem' key={film.id} film={film} />)}
            {currentFilm.length > 0 && <Button onClick={handleMoreLoad}>Load More</Button>}
        </div>)
}

export default Home