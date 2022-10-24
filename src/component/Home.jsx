import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Home = () =>{
    const styleCard = {
        color:'#b0796d',
        borderRadius:'10px',
    }
    const styleCardCol ={
        zIndex:2
    }
    const styleCardText = {
        textAlign:'center',
        marginTop:'0.8rem',
    }

   
    return(
        <Container fluid  >
            <Row style={{backgroundColor:'#887672',paddingBottom:'5rem'}} className='px-4 pt-5 my-0 text-center text-light' >
                <Col xl="12" >
                    <h2 className='mt-4' style={{fontSize:'28px'}}>PICKYOURGIFT.CO</h2>
                    <h6 style={{fontWeight:'normal',lineHeight:'25px'}} className="mt-3"  >CREATE YOUR OWN PERSONALIZE GIFT HERE! CHOOSE ITEMS & MADE BY  ORDER | WHATSAPP (+62)85163698017 | INSTAGRAM @PICKYOURGIFT.CO</h6>
                </Col>
                
            </Row>
            <Row className='position-relative justify-content-center'>
                <Col xl="12" sm="8" style={{backgroundColor:'#887672',top:'-1px',left:0,height:'71px',zIndex:'1',position:'absolute'}} >
                    
                </Col>
                <Col xl="7" sm="8" xs="11" style={styleCardCol}>
                    <Card style={styleCard}  className="py-2">
                        <h3 style={styleCardText} >CATEGORY</h3>
                        <Card.Body>
                            <Row>
                                <Col xl="2" sm="2" xs="2">
                                    <img src="https://img.qrfy.com/img/medium/f7056f3a-dbab-403a-b836-052bdc14f0b6.webp" alt=""  className="img-fluid"/>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       
    )
}

export default Home;