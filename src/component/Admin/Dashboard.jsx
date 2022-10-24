import React, { Fragment } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
import { Helmet } from 'react-helmet';
const Dashboard = () => {
    return (
        <Fragment>
            <Helmet>
                <style>{'body { background-color: #e3d1c9; }'}</style>
            </Helmet>
            <Header/>
            <Content/>
            <Footer></Footer>
        </Fragment>
    )
}

export default Dashboard;