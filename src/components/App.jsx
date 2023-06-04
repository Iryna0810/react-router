import { NavLink, Route, Routes } from "react-router-dom";
import { List, LiStyled } from "./styled";
import Home from '../pages/Home'
import SharedLayout from './SharedLayout/SharedLayout'
import Movies from "pages/Movies";
import '../styles.css'

export const App = () => {
  return ( 
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies/>} />
        {/* <Route path='/movies/:movieId' element={<div>Movies</div>} /> */}
         {/* <Route path='/movies' element={<div>Movies</div>} />
        <Route path='/movies' element={<div>Movies</div>} /> */}
      </Route>
      </Routes>
  );
};

