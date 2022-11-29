
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
// import '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'


function Header({ dark, updateDark }) {



    return (
        <header>
            
            <Navbar bg={`${dark ? "dark" : "light"}`} variant={`${dark ? "dark" : ""}`} expand="lg" className='col-12'>
                <Container>             
                    <Navbar.Brand href="/"><img src="Geek.png" alt="Geek" width="30"
                        height="30"
                        className="d-inline-block align-top bg-light rounded"
                    /> Y-Elmouss</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-center">
                            <Nav.Link href="/" className='active'>Home</Nav.Link>
                            <Nav.Link href="About" className='active'>About</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="justify-content-end">
                        <div className={`fw-light ${dark ? "text-light" : "text-dark"}`}>                         
                            <i class={`${dark ? "fa-regular fa-moon text-light" : "fa-regular fa-sun text-dark"}`} onClick={() => updateDark(!dark)}></i>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </header>
    );
}


export default Header;