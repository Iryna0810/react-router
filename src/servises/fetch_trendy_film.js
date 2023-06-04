import axios from 'axios';

const API_KEY = '2bcb7fdd81c3309c5e646690433e3287';  
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const baseSearchParameters = {
    api_key: API_KEY,
}

     export const trendingFilms = (currentPage) => {
        const searchParameters = new URLSearchParams({
            page: Number(currentPage),
            // per_page: 20,
            ...baseSearchParameters,
        });

        try {
            return axios.get(`${BASE_URL}?${searchParameters}`);
        }
        
        catch (error) {
            throw new Error(error.message);
        }
};

     