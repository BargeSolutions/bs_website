import { 
  Nav,
  Navbar,
} from 'react-bootstrap';


function NavigationBar() {
    return(
      <Navbar collapseOnSelect bg="dark" variant='dark' expand="lg" >
      <Navbar.Brand href="/">
        Barge Solutions
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="#Tugs">Tugs</Nav.Link>
            <Nav.Link href="/user">New User</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Login">Login</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar;