import React, { Component } from 'react';
import {Container,Col,Row,Alert,Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cat from './Cat';

const api = 'https://pyg.juastudio.com/public/api/product/store';
let selectedOptionId = '';
class AddProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            category:selectedOptionId,
            image:'',
            setImage:false,
            price:'',
            description :'',
            cat:'',
            response:'',
            display:'none',
            statusCode:201,
        };
        this.AddProduct = this.AddProduct.bind(this);
    }
    changeHandler = (event) => {
        this.setState({image:event.target.files[0],setImage:true})
    
	};
    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }
    dropdownChanged(e){
        this.setState({category: e.target.value});
      }
   
 
      AddProduct =  (e) => {
       
        e.preventDefault();
    
       
       
        var data = new FormData();
        data.append('name', this.state.name);
        data.append('category',this.state.category);
        data.append('description', this.state.description);
        data.append('price', this.state.price);
        data.append('file', this.state.image);
        var config = {
            method: 'post',
            url: api,
            headers: { "Content-Type": "multipart/form-data" },
            data : data
          };
          
          axios(config)
          .then(json => {
            if(json.data.statusCode === 200){
                this.setState({
                    name:'',
                    category:'',
                    image:'',
                    setImage:false,
                    price:'',
                    description :'',
                    response:json.data.msg,
                    display:'block',
                    statusCode:json.data.statusCode,
                })
            }else{
                this.setState({
                    response:json.data.msg,
                    display:'block',
                    statusCode:json.data.statusCode,
                })
            }
        })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
     
        return(
            <Container className='mt-5 mb-5'>
                <Row className='justify-content-center mb-2'>
                    <Col xs="10" xl="8" md="8">
                        <Link to="/pyg2022/product" className='text-dark'>Back</Link>
                    </Col>
                    <Col xs="10" xl="8" md="8">
                        <h1>Add Product</h1>
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
                <Form className='form' onSubmit={this.AddProduct}  >
                    <Row className='justify-content-center'>
                        <Col md="8" xs="10">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Category</Form.Label>
                            <Form.Select id="disabledSelect" name="kategori" value={this.state.category}  onChange={this.dropdownChanged.bind(this)} >
                            {this.state.category !== '0' && <option value="">Choose category</option>}
                            <Cat/>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name of product" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description of product" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" value={this.state.price} onChange={this.handleChange} placeholder="Price of product" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" name="file"  value ={""} onChange={this.changeHandler} placeholder="Image of product" />
                        </Form.Group>
                        </Col>
                        <Col md="8" xs="10" className='text-end'>
                            <Button type="submit" variant="outline-success"  >Add</Button>
                        </Col>
                    </Row>
                    
                </Form>
            </Container>
        )
    }
}

export default AddProduct;