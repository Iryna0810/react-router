import FilmGalleryItem from '../FilmGalleryItem/FilmGalleryItem';
// import { useEffect, useState } from 'react';
// import { List } from 'components/styled';
import { Vortex } from 'react-loader-spinner';


const FilmGallery = ({ films, error, loading }) => {
    
     return (
    <ul className="ImageGallery">
        {loading && <Vortex
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
            {/* {currentFilm.length > 0 && <Button onClick={handleMoreLoad}>Load More</Button>} */}
        </ul>)


    
    

}

export default FilmGallery