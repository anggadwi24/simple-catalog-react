import React, {Fragment, useEffect,useState} from 'react';
import CategoryCard from './CategoryCard';
import axios from 'axios';
import SkeletonCard from './SkeletonCard';

const Product = () => {
    const [cat, setCat] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://pyg.juastudio.com/public/api/product/category')
        .then((result)=>{
         
            setCat(result.data.record);
           
           setLoading(false);
        })
      }, []);
     
        return(
            <Fragment>
                
                {loading && <SkeletonCard/>}
                {!loading &&
                  
                    
                    cat.map((post, index) => {
                        return (
                        
                            <CategoryCard key={post.slug} slug={post.slug} name={post.name} product={post.product}></CategoryCard>
                          
                        );
                      })
               
                }
                
            </Fragment>
            
           
        )
}

export default Product;