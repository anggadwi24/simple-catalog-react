import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product/Product';

const Home = () =>{
 
   
    return(
        <Container fluid  >
            <Row style={{backgroundColor:'#887672',paddingBottom:'3rem'}} className='px-4 pt-5 my-0 text-center text-light justify-content-center' >
                <Col xl="4" xs="12" sm="12" >
                    <h2 className='mt-4' style={{fontSize:'28px'}}>PICKYOURGIFT.CO</h2>
                    <h6 style={{fontWeight:'normal',lineHeight:'25px'}} className="mt-3"  >CREATE YOUR OWN PERSONALIZE GIFT HERE! CHOOSE ITEMS & MADE BY  ORDER | WHATSAPP (+62)85163698017 | INSTAGRAM @PICKYOURGIFT.CO</h6>
                </Col>
                
            </Row>
            <Row className='position-relative justify-content-center'>
                <Col xl="12" sm="8" style={{backgroundColor:'#887672',top:'-1px',left:0,height:'71px',zIndex:'1',position:'absolute'}} >
                    
                </Col>
            </Row>
            <Product/>
           
        </Container>
       
    )
}

export default Home;