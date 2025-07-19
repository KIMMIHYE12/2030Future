import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffcanvasMenu() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
            <span className='menu_toggle'>Menu</span>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement='end'
            data-bs-theme='dark'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link as={Link} to='/menu'>
                  Startseite
                </Nav.Link>
                <Nav.Link as={Link} to='/projekt'>
                  Projekt
                </Nav.Link>
                <Nav.Link as={Link} to='/kontakt'>
                  Kontakt
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasMenu;
