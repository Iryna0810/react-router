import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import SharedLayout from './SharedLayout/SharedLayout'
import Movies from "pages/Movies";
import MovieDetails from '../pages/MovieDetails'
import Reviews from '../components/Reviews/Reviews'
import Cast from '../components/Cast/Cast'
import '../styles.css'

export const App = () => {
  return ( 
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/:movieId' element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='movies' element={<Movies/>} />
        <Route path='movies/:movieId'
          element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      </Routes>
  );
};


