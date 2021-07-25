import { Container, Navbar, Nav, NavDropdown, NavItem, NavLink } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="text-primary">Shepherd </Navbar.Brand>
        <Navbar.Toggle />
        <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}