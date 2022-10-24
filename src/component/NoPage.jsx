import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';

const NoPage = () => {
    return (
        <Container fluid  >
            <Helmet>
            <style>{'body { background-color: #887672; }'}</style>

            </Helmet>
        <Row  className='px-4 pt-5 my-0 text-center text-light justify-content-center' >
            <Col xl="4" xs="12" sm="12" style={{position:'fixed',top:'100px',bottom:0}} >
                <h1 className='mt-4' style={{fontSize:'70px'}}>404</h1>
                <h3>NOT FOUND</h3>
               
            </Col>
            
        </Row>
       
       
    </Container>
    )
}

export default NoPage;