import axios from 'axios';

const API_KEY = '2bcb7fdd81c3309c5e646690433e3287';  
const SEARCH_URL = 'https://api.themoviedb.org/3/movie';


const currentFilmInfoReviews = (currentId) => {
        const searchParameters = new URLSearchParams({
            api_key: API_KEY
        });

        try {
            return axios.get(`${SEARCH_URL}/${currentId}/reviews?${searchParameters}`);
        }
        
        catch (error) {
            throw new Error(error.message);
        }
};
    
export default currentFilmInfoReviews


