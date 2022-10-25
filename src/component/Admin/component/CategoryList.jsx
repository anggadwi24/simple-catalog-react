import React, {useEffect,useState} from 'react';

import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import {Container,Row,Col,Button,Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash ,faPlus} from '@fortawesome/fontawesome-free-solid'
import {slice} from 'lodash';
import { Link } from 'react-router-dom';





const CategoryList = () => {    
    const [cat, setCat] = useState([]);
    const [del,setDel] = useState(false);
    const [resp,setResp] = useState([]);
    const [code,setCode] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(5);
    const initialPosts = slice(cat, 0, index);

    const loadMore = () => {
        setLoading(true);
        setIndex(index + 5)
      
        if (index >= cat.length) {
          setIsCompleted(true)
        } else {
          setIsCompleted(false)
        }
        setLoading(false);
      }
    const getData = ()=> {
        setLoading(true);
        axios.get('https://pyg.juastudio.com/public/api/category')
        .then((result)=>{
            
            setCat(result.data.record);
          
           setLoading(false);
        })
    }
    const deleteCategory = (slug) => {
       
        axios.get('https://pyg.juastudio.com/public/api/category/delete/'+slug)
        .then((result)=>{
            
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
                    <h3>Category</h3>
                </Col>
                <Col xl="6" lg="6" sm="6" xs="6"  className="p-3 text-dark text-end" >
                    <Link className="btn btn-outline-light " to={'/pyg2022/category/add'}>
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

                   
                   
               
                {loading && 
                Array(5)
                    .fill()
                    .map((item, index) => (
                    <Col key={index} xl="8" lg="8" sm="10" xs="10" style={{backgroundColor:'#d1ab9a',borderRadius:'10px'}} className="p-3 text-light mb-3" >
                        <Row>
                            <Col xl="8" xs="8" md="8">  <Skeleton height={50}/>  <Skeleton height={20}/></Col>
                            <Col xl="4" xs="4" md="4" className='text-end'>   <Skeleton height={70}/></Col>
                        </Row>
                     </Col>
                ))
                } 

                {!loading && 
                   initialPosts.map((cat) => {
                        return (
                            <Col key={cat.slug} xl="8" lg="8" sm="10" xs="10" style={{backgroundColor:'#d1ab9a',borderRadius:'10px'}} className="p-3 text-light mb-3" >
                            <Row>
                                <Col xl="8" xs="8" md="8"><h3>{cat.name}</h3><span className='text-muted'>Category</span></Col>
                                <Col xl="4" xs="4" md="4" className='text-end'>
                                    <Link style={{fontSize:'20px',textDecoration:'none'}} className="mt-4 mx-2 text-white" to={'/pyg2022/category/edit/'+cat.slug}><FontAwesomeIcon icon={faEdit} /></Link>
                                    <span style={{fontSize:'20px'}} className="mt-4 mx-2" onClick={() => deleteCategory(cat.slug)}><FontAwesomeIcon icon={faTrash} /></span>
        
                                
                                </Col>
        
                            </Row>
                        </Col> 
                        )
                     
                   })
                }
               
               {!isCompleted && cat.length >= index &&
                    <div className="col-10 text-center">  <Button variant="outline-light " className='w-100' onClick={loadMore}>See More</Button>{' '}   </div>

                }
            </Row>
        </Container>
        
    )
}

export default CategoryList;