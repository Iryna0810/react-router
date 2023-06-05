import { Link, Container, Header, List } from 'components/styled'
import { Outlet } from 'react-router-dom'
import "../styles.css"

const SharedLayout = () => {
    return <Container>
        <Header>
            <List>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </List>
        </Header>
        <Outlet />
    </Container>
};

export default SharedLayout