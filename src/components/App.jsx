import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <nav>
        <NavLink>Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>}/>
      </Routes>
    </div>
  );
};
