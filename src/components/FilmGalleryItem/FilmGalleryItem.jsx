import { Link } from 'react-router-dom';
import '../styles.css'
const IMG_URL = `https://image.tmdb.org/t/p/original`

const FilmGalleryItem = ({ film }) => {
  const { id, overview, title, backdrop_path } = film;

  return (
      <li key={id} className="ImageGalleryItem">
              <div>
        
        <Link to={`${id}`}>
          <img
          className='ImageGalleryItem-image'
          src={`${IMG_URL}/${backdrop_path}`}
            alt={title} />
        </Link>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
      </li>)}

export default FilmGalleryItem
