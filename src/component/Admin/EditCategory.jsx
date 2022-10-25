import React, { Fragment,useEffect,useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EditCat from './component/EditCat';
import Footer from './component/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import axios from 'axios';

const EditCategory = () => {
    const { slug } = useParams();
    const [status,setStatus] = useState([]);
    const [name,setName] = useState([]);
    const [msg,setMsg] = useState([]);

    const [loading,setLoading] = useState(false);

    useEffect(() => {
            setLoading(false);
            axios.get('https://pyg.juastudio.com/public/api/category/detail/'+slug)
            .then((result)=>{
                setLoading(true);
                  if(result.data.statusCode === 200){
                    setStatus(true);
                    setName(result.data.record.name);
                    setMsg(result.data.msg);
                  }else{
                    setStatus(false);
                    setMsg(result.data.msg);

                  }
             
            })

     }, [slug]);
  

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
            {loading && status && 
                 <EditCat name={name} slug={slug}/>
            }
            {loading && !status && 
                 <Container className='mt-5 mb-5'>
                 <Row className='justify-content-center mb-2'>
                    <Col xs="10" xl="10">
                        <h1 className='text-center'>404</h1>
                        <h4 className='text-center'> NOT FOUND</h4>
                        <h6 className='text-center text-uppercase'>{msg}</h6>
                        
                    </Col>
                   
                </Row>
                </Container>
            }
            <Footer></Footer>
        </Fragment>
    )
}

export default EditCategory;