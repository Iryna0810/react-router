import Loader from 'components/Loader/Loader';
import FilmGalleryItem from '../FilmGalleryItem/FilmGalleryItem';


const FilmGallery = ({ films, error, loading }) => {

    return (
        <ul className="FilmGallery">
            {loading && <Loader />}
            {error && <div>Something went wrong. Try again later</div>}
            {films && films.map((film) => <FilmGalleryItem className='FilmGalleryItem' key={film.id} film={film} />)}
        </ul>)
};

export default FilmGallery