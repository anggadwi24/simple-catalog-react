import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TambahCat from './component/TambahCat';
import Footer from './component/Footer';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';


const TambahCategory = () => {
    return (
        <Fragment>
            <Helmet>
                <style>{'body { background-color: #e3d1c9; }'}</style>
            </Helmet>
            <Navbar style={{backgroundColor:'#dbcac2'}} variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        src='https://pyg.juastudio.com/upload/product/logo.jpg'
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
                    
                    <NavDropdown title="Product" className='active' id="basic-nav-dropdown">
                        <NavDropdown.Item href="/pyg2022/product">Product</NavDropdown.Item>
                        <NavDropdown.Item href="/pyg2022/category">
                            Category
                        </NavDropdown.Item>
                    
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <TambahCat/>
            <Footer></Footer>
        </Fragment>
    )
}

export default TambahCategory;