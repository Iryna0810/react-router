import { LiStyled } from '../styled'
// import '../styles.css'
const IMG_URL = `https://image.tmdb.org/t/p/original`

export const FilmGalleryItem = ({ film }) => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal)
//   }


  const { id, overview, title, backdrop_path } = film;

  return (
    <>
      {/* {showModal && (<Modal onCloseModal={toggleModal}>
        <Item src={largeImageURL} alt=""></Item>
      </Modal>)} */}

      <li key={id} className="gallery-item">
              <div>
                  <img src={`${IMG_URL}/${backdrop_path}`} alt={title} />
                  <p>{title}</p>
                  <p>{ overview}</p>
        </div>
      </li>
    </>
  )
}
