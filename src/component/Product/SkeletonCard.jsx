import React,{Fragment} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const SkeletonCard = () => {
    return (
        <Fragment>

           
        {Array(5)
            .fill()
            .map((item, index) => (
                <Row className='position-relative justify-content-center mb-2' key={index}>
                    
                <Col xl="4" sm="8" xs="11" style={{zIndex:2}} >
                    <Card  className="py-2 px-2 shadow">
                          <h3 className="px-3">  <Skeleton height={40} width={`100%`} /></h3>
                      
                          {Array(2)
                        .fill()
                        .map((item, index) => (
                        <Card.Body key={index}>
                            <Row  >
                                <Col xl="3" sm="4" xs="12">
                                <Skeleton height={120} width={`100%`} />
                                </Col>
                                <Col xl="9" sm="8" xs="12" >
                                    <h5 className='mt-0 mb-md-0 mb-1 text-md-start text-center' style={{fontSize:'18px',fontWeight:600,lineHeight:'20px'}}> <Skeleton height={40} width={`100%`} /></h5>
                                    
                                    <Skeleton height={80} width={`100%`} />
                                      
                                </Col>
                            </Row>

                        </Card.Body>
                        ))}
                    </Card>
                </Col>
            </Row>
         ))}
            </Fragment>
    );
  };
  export default SkeletonCard;
