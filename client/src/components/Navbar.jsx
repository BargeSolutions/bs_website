import { 
  Nav,
  Navbar,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'


function NavigationBar() {
    return(
      <Navbar collapseOnSelect bg="dark" variant='dark' expand="lg" >
      <Navbar.Brand as={Link} to="/">Barge Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/tugs">Tugs</Nav.Link>
            <Nav.Link as={NavLink} to="/user">New user</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Login">Login</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar;