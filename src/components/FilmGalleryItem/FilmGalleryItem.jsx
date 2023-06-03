import { LiStyled } from '../styled'
// import '../styles.css'

export const FilmGalleryItem = ({ film }) => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal)
//   }


  const { id, webformatURL, largeImageURL } = film;

  return (
    <>
      {/* {showModal && (<Modal onCloseModal={toggleModal}>
        <Item src={largeImageURL} alt=""></Item>
      </Modal>)} */}

      <li key={id} className="gallery-item">
        <div></div>
      </li>
    </>
  )
}
