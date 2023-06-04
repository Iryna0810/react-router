import {NavLink} from 'react-router-dom'
const SharedLayout = () => {
     
    
    return <> 
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
    </>
    
}
export default SharedLayout