import React, { Fragment } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import { Helmet } from 'react-helmet';
import AddProduct from './component/AddProduct';

const Product = () => {
    
    return (
        <Fragment>
        <Helmet>
            <style>{'body { background-color: #e3d1c9; }'}</style>
        </Helmet>
        <Header/>
        <AddProduct/>
        <Footer></Footer>
    </Fragment>
    )
}

export default Product;