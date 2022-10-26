import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import {Container,Row,Col,Button,Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash ,faPlus} from '@fortawesome/fontawesome-free-solid'
import {slice} from 'lodash';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [pro, setPro] = useState([]);
    const [del,setDel] = useState(false);
    const [resp,setResp] = useState([]);
    const [code,setCode] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(6);
    const initialPosts = slice(pro, 0, index);
    const loadMore = () => {
        setLoading(true);
        setIndex(index + 6)
      
        if (index >= pro.length) {
          setIsCompleted(true)
        } else {
          setIsCompleted(false)
        }
        setLoading(false);
      }
    const getData = ()=> {
        setLoading(true);
        axios.get('https://pyg.juastudio.com/public/api/product/all')
        .then((result)=>{
            
            setPro(result.data.record);
          
           setLoading(false);
        })
    }
    const deleteProduct = (slug) => {
       
        axios.get('https://pyg.juastudio.com/public/api/product/delete/'+slug)
        .then((result)=>{
            console.log(result.data);
           if(result.data.statusCode === 200){
                getData();
                setDel(true);
                setResp(result.data.msg);
                setCode(result.data.statusCode);
           }else{
                setDel(true);
                setResp(result.data.msg);
                setCode(result.data.statusCode);

           }
        })
    }
    useEffect(() => {
        getData();
     }, []);

    return (
        <Container className='mt-5 mb-5'>
            <Row className='justify-content-center'>
                <Col xl="6" lg="6" sm="4" xs="4"  className="p-3 text-dark text-left" >
                    <h3>Product</h3>
                </Col>
                <Col xl="6" lg="6" sm="6" xs="6"  className="p-3 text-dark text-end" >
                    <Link className="btn btn-outline-light " to={'/pyg2022/product/add'}>
                         <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </Col>
                {del &&
                <Col xl="10" xs="10">
                    {code === 200 && 
                    <Alert variant='success'>
                        {resp}
                    
                    </Alert>
                    }{code !== 200 && 
                    <Alert variant='danger'>
                        {resp}
                    
                    </Alert>
                    }
                    
                    
                    </Col>
                }

            </Row>
            
            <Row className='justify-content-center'>
             {loading && 
                Array(6)
                    .fill()
                    .map((item, index) => (
                      <Col key={index} xl="4" md="5" sm="5" xs="5" className='p-3 m-2' style={{backgroundColor:'#d1ab9a',borderRadius:'10px'}}>
                        <Row>
                            <Col xl="4" md="12" sm="12">  <Skeleton height={20}/>  <Skeleton height={80}/></Col>
                            < Col xl="8" md="12" sm="12" className="">  <Skeleton height={50}/></Col>
                        </Row>
                     </Col>
                ))
                } 
                
                {!loading && 
                   initialPosts.map((pro) => {
                        return (
                        <Col key={pro.slug} xl="4" md="5" sm="5" xs="5" className='p-3 m-2' style={{backgroundColor:'#d1ab9a',borderRadius:'10px'}}>
                            <Row>
                                <Col xl="4" md="12" sm="12">
                                <h3 className='mt-0 mb-md-0 mb-3 text-md-start text-center d-block d-sm-none' style={{fontSize:'24px',fontWeight:600,lineHeight:'20px'}}>{pro.name}</h3>
                                    <img src={pro.image} alt="" className='img-fluid mb-2 mx-auto d-block' style={{maxHeight:'250px'}}/>
                                </Col>
                                <Col xl="8" md="12" sm="12" className="">
                                    <h5 className='mt-0 mb-md-0 mb-1 text-md-start text-center d-none d-sm-block' style={{fontSize:'18px',fontWeight:600,lineHeight:'20px'}}>{pro.name}</h5>
                                    <div className='d-flex justify-content-between'>
                                        <span className='text-muted text-start'>{pro.category}</span>
                                        <span className='text-muted text-end'>{pro.price}</span>
                                    </div>
                                
                                    <p>{pro.description.length > 80 && pro.description.substring(0,80)}...</p>

                                </Col>
                                <Col md="12" className='text-end text-light'>
                                    <Link style={{fontSize:'20px',textDecoration:'none'}} className="mt-4 mx-2 text-white" to={'/pyg2022/product/edit/'+pro.slug}><FontAwesomeIcon icon={faEdit} /></Link>
                                    <span style={{fontSize:'20px'}} className="mt-4 mx-2" onClick={() => deleteProduct(pro.slug)}><FontAwesomeIcon icon={faTrash} /></span>
                                </Col>
                            </Row>
                        </Col>
                        )
                            
                   })
                 }
                 {!isCompleted && pro.length >= index &&
                    <div className="col-10 text-center">  <Button variant="outline-light " className='w-100' onClick={loadMore}>See More</Button>{' '}   </div>

                }
            </Row>
        </Container>
    )
}

export default ProductList;