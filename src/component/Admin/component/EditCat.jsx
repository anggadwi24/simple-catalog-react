import React, { Component } from 'react';
import {Container,Col,Row,Alert,Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


const api = 'https://pyg.juastudio.com/public/api/category/';

class EditCat extends Component{
    
    constructor(props){
      
        super(props);
        this.state = {
            name:props.name,
            slug:props.slug,
            response:'',
            display:'none',
            statusCode:201,
            loading:false,
            params:props.slug
           
            
        }
    }
   
    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }
   

    EditCategory =  () => {
        axios.post(api+'update/'+this.state.slug,{
            name:this.state.name
        }).then(json => {
            if(json.data.statusCode === 200){
                
                this.setState({
                   
                    response:json.data.msg,
                    display:'block',
                    slug:json.data.slug,
                    statusCode:json.data.statusCode,
                    params:json.data.slug
                })
               
              
            }else{
                this.setState({
                    response:json.data.msg,
                    display:'block',
                    slug:json.data.slug,
                    statusCode:json.data.statusCode,
                    params:json.data.slug
                })
            }
            window.history.pushState('page2', 'Title', '/pyg2022/category/edit/'+json.data.slug);
           
          
        })
    }
    render() {
       
        return(
            <Container className='mt-5 mb-5'>
                <Row className='justify-content-center mb-2'>
                    <Col xs="10" xl="8" md="8">
                        <Link to="/pyg2022/category" className='text-dark'>Back</Link>
                    </Col>
                    <Col xs="10" xl="8" md="8">
                        <h1>Edit Category</h1>
                    </Col>
                    <Col xs="10" xl="8" md="6">
                        
                        {this.state.display === 'block' && this.state.statusCode === 200 && 
                            <Alert variant="success" >
                            <Alert.Heading>Success</Alert.Heading>
                            <p>
                                {this.state.response}
                            </p>
                          </Alert>
                        }{this.state.display === 'block' &&  this.state.statusCode !== 200 &&
                            <Alert variant="danger" >
                            <Alert.Heading>Warning</Alert.Heading>
                            <p>
                                {this.state.response}
                            </p>
                          </Alert>
                        }
                    </Col>
                </Row>
                <Form className='form'>
                    <Row className='justify-content-center'>
                        <Col md="8" xs="10">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name of category" />
                        </Form.Group>
                        </Col>
                        <Col md="8" xs="10" className='text-end'>
                            <Button type="button" onClick={this.EditCategory} variant="outline-success">Edit Category</Button>
                        </Col>
                    </Row>
                    
                </Form>
            </Container>
        )
    }
}

export default EditCat;