import { useState, useEffect } from "react";
import searchFilm from 'servises/fetch_movie';
import { Searchbar } from "components/SearchBar/SearchBar";
// import {FilmGalleryItem} from '../components/FilmGalleryItem/FilmGalleryItem'
import FilmGallery from '../components/FilmGallery/FilmGallery'
import "../styles.css"


const Movies = () => {

const [searchFilms, setSearchFilms] = useState('');

    const [films, setFilms] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [currentFilm, setCurrentFilm] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        if (!searchFilms) return;
        setIsLoading(true);
        setFilms([]);
        // setCurrentPage(1);
        searchFilm(searchFilms)
            .then(({ data }) => {
                console.log(data.results)
                setFilms(data.results);
                setCurrentFilm(data.results)
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
            })
    }, [searchFilms])

        
 const handleSearch = (searchFilms) => {
   setSearchFilms(searchFilms);
  }
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '3fr',
        gridGap: '16px',
        paddingBottom: '24px',
        height: '100vh',
        // fontSize: '20px',
        color: '#010101'
       
      }}
    >
      <Searchbar handleSearch={handleSearch} />
      <FilmGallery films={films}
              loading={isLoading}
              error={error}
          />
    </div>
  );
}

export default Movies
