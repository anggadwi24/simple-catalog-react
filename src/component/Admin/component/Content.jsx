import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () => {
    return (
     
        <Container fluid className='h-100 my-5'>
            <Row className='h-100 justify-content-center'>
                <Col xl="2" lg="2" md="2" xs="5" sm="5" className='border me-2 p-3' style={{backgroundColor:'#c5aa9e',borderRadius:'10px'}}>
                    <Link to="/pyg2022/product" style={{textDecoration:'none'}}>
                        <img src={process.env.PUBLIC_URL + './assets/img/product.png'} alt="" className='img-fluid mx-auto d-block my-2' width={100} />
                        <h4 className='text-center text-light  mt-4 mt-md-0'>PRODUCT</h4>
                     </Link>
                </Col>
                <Col xl="2" lg="2" md="2" xs="5" sm="5" className='border ms-3 p-3' style={{backgroundColor:'#9d7f72',borderRadius:'10px'}}>
                    <Link to="/pyg2022/category" style={{textDecoration:'none'}}>
                       <img src={process.env.PUBLIC_URL + './assets/img/cat.png'} alt="" className='img-fluid mx-auto d-block my-2' width={100} />
                       <h4 className='text-center text-light mt-4 mt-md-0'>CATEGORY</h4>
                    </Link>
                </Col>

            </Row>
        </Container>
       
    
    )
}

export default Content;