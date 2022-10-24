import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar style={{backgroundColor:'#dbcac2'}} variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                src={process.env.PUBLIC_URL + 'assets/img/logo.jpg'}
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
                alt="React Bootstrap logo"
                />
                 PICKYOURGIFT.CO
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="/pyg2022"  className='active'>Home</Nav.Link>
              
              <NavDropdown title="Product" id="basic-nav-dropdown">
                <NavDropdown.Item href="/pyg2022/product">Product</NavDropdown.Item>
                <NavDropdown.Item href="/pyg2022/category">
                    Category
                </NavDropdown.Item>
               
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;