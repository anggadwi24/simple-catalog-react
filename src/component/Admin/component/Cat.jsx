import React, {Fragment, useEffect,useState} from 'react';
import axios from 'axios';


const Cat = () => {
    const [cat, setCat] = useState([]);
   
    useEffect(() => {
       
        axios.get('https://pyg.juastudio.com/public/api/category')
        .then((result)=>{
         
            setCat(result.data.record);
           
          
        })
      }, []);
     
        return(
            <Fragment>
           
                  {
                    
                    cat.map((post, index) => {
                        return (
                        
                            <option key={post.slug} value={post.slug}>{post.name}</option>
                          
                        );
                      })
               
                }
                
            </Fragment>
            
           
        )
}

export default Cat;