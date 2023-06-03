    import axios from 'axios';

    const API_KEY = '2bcb7fdd81c3309c5e646690433e3287';  
    const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';

    const baseSearchParameters = {
        
        api_key: API_KEY,
        page: 1,
        // image_type: 'photo',
        // orientation: 'horizontal',
        // safesearch:'true',
    };

    export const trendingFilms = () => {

        const searchParameters = new URLSearchParams({
            // q: searchImages,
            // page: Number(currentPage),
            per_page: 20,
            ...baseSearchParameters,
        });

        try {
            return axios.get(`${BASE_URL}/?${searchParameters}`);
        }
        
        catch (error) {
            throw new Error(error.message);
        }
};
    


