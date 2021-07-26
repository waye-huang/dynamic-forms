import { Container, Navbar, NavDropdown, NavItem, NavLink } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="text-primary">Shepherd </Navbar.Brand>
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