import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ProductCard = (props) => {

   


    return (
        <Fragment>
            <Card.Body>
                    <Row  >
                        <Col xl="3" sm="4" xs="12">
                            <h3 className='mt-0 mb-md-0 mb-3 text-md-start text-center d-block d-sm-none' style={{fontSize:'24px',fontWeight:600,lineHeight:'20px'}}>{props.name}</h3>

                            <img src={props.image} alt=""  className="img-fluid mx-auto d-block mb-3 mb-md-0"/>
                        </Col>
                        <Col xl="9" sm="8" xs="12" >
                            <h5 className='mt-0 mb-md-0 mb-1 text-md-start text-center d-none d-sm-block' style={{fontSize:'18px',fontWeight:600,lineHeight:'20px'}}>{props.name}</h5>
                            <Row>
                                <Col xl="10" sm="11" lg="11" md="11" xs="12">
                                    <p style={{fontSize:'15px'}} className="mb-0">{props.description}</p>
                                </Col>
                                <Col xl="2" xs="12" sm="1" >
                                    <h6 className='mt-3 mt-md-3 text-md-start text-center '>{props.price}</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

            </Card.Body>
           
        </Fragment>
        
    )
}

export default ProductCard;