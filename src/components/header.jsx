
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return (

        <header>
            <Navbar bg="dark" variant="dark" expand="lg" className='col-12'>
                <Container>
                    <Navbar.Brand href="#home"><img src="Geek.png" alt="Geek" width="30"
                        height="30"
                        className="d-inline-block align-top bg-light rounded"
                    /> Y-Elmouss</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-center">
                            <Nav.Link href="#home" className='active'>Home</Nav.Link>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Team</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Resume
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in : <a href="/">Y-E Servers</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;