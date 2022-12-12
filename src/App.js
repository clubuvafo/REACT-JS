import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Club UVAFO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#novedades">Novedades</Nav.Link>
            <NavDropdown title="Institución" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#deportes">
                Deportes
              </NavDropdown.Item>
              <NavDropdown.Item href="#asociarse">
                ¡Asociate ahora!
              </NavDropdown.Item>
              <NavDropdown.Item href="#pptoparticipativo">
                Ppto. Participativo 2022
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contacto">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.instagram.com/clubuvafo/">
              Instagram
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://www.youtube.com/@ClubUVAFO">
              Youtube
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;