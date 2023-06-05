import { useState, useEffect } from "react";
import searchFilm from 'servises/fetch_movie';
import { Searchbar } from "components/SearchBar/SearchBar";
import FilmGallery from '../components/FilmGallery/FilmGallery'
import "../styles.css"

const Movies = () => {
    const [searchFilms, setSearchFilms] = useState('');
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!searchFilms) return;
        setIsLoading(true);
        setFilms([]);
        searchFilm(searchFilms)
            .then(({ data }) => {
                setFilms(data.results);
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
