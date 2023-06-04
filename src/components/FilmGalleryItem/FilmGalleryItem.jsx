import { LiStyled } from '../styled'
import '../styles.css'
const IMG_URL = `https://image.tmdb.org/t/p/original`

const FilmGalleryItem = ({ film }) => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal)
//   }


  const { id, overview, title, backdrop_path } = film;

  return (
      <li key={id} className="ImageGalleryItem">
              <div>
                  <img className='ImageGalleryItem-image' src={`${IMG_URL}/${backdrop_path}`} alt={title} />
                  <h3>{title}</h3>
        <p>{overview}</p>
      </div>
      </li>)}

export default FilmGalleryItem
