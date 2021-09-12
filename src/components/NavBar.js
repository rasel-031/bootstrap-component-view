import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">BootStarp NabBar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#link1">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#link2">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="#link3">Link 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#separated link">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              &nbsp;
              <Button variant="primary">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
