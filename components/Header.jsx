import { Container, Navbar, NavDropdown, NavItem, NavLink } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="text-primary">Shepherd </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        {/* <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
            <Nav.Link href="/login" className="justify-content-end">Log In</Nav.Link>
            <Nav.Link href="/login" className="justify-content-end">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse className="justify-content-end">
          <NavLink href="/signup">
            Sign Up
          </NavLink>
          <NavLink href="/login">
            Log In
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}