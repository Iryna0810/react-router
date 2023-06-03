import { NavLink, Route, Routes } from "react-router-dom";
import { List, LiStyled } from "./styled";
import Home from './Home/Home'
import '../styles.css'

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/movies'>Movies</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movies' element={<div>Movies</div>} />
        <Route path='/movies/:movieId' element={<div>Movies</div>} />
        {/* <Route path='/movies' element={<div>Movies</div>} />
        <Route path='/movies' element={<div>Movies</div>} /> */}
      </Routes>
    </div>
  );
};

