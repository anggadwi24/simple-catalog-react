import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProductCard from './ProductCard';


const CategoryCard = (props) => {
    const pro = props.product;
    console.log(props.product)
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
    
    
    return (
        <Fragment>
             {pro.length > 0 &&  
             <Row className='position-relative justify-content-center mb-2'>
                <Col xl="4" sm="8" xs="11" style={styleCardCol} >
                    <Card style={styleCard}  className="py-2 px-2 shadow">
                        <h3 style={styleCardText} className="mb-4" >{props.name}</h3>
                        {
                              pro.map((post, index) => {
                                return (
                                
                                    <ProductCard key={post.slug} slug={post.slug} name={post.name} image={post.image} description={post.description} price={post.price} ></ProductCard>
                                  
                                );
                              })
                        }
                        {pro.length > 1 && <hr/>}
                        
                    </Card>
                </Col>
            </Row>
            }
        </Fragment>
       
       
      
    )
}

export default CategoryCard;