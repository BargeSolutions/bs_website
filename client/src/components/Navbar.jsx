import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavigationBar() {
    return(
<>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/assets/L_BargeSolutions.gif"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
    )
}

export default NavigationBar;