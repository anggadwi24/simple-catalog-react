import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './component/Home';
import NoPage from './component/NoPage';
import Dashboard from './component/Admin/Dashboard';
import Category from './component/Admin/Category';
import Product from './component/Admin/Product';
import TambahProduct from './component/Admin/TambahProduct';
import TambahCategory from './component/Admin/TambahCategory';
import EditCategory from './component/Admin/EditCategory';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter forceRefresh={true}  >
      <Routes  >
        
          <Route exact  path="/"  element={<Home />} />
          <Route exact  path="/pyg2022"  element={<Dashboard />} />
          <Route exact  path="/pyg2022/category"  element={<Category />} />
          <Route exact  path="/pyg2022/category/add"  element={<TambahCategory />} />
          <Route exact  path="/pyg2022/category/edit/:slug"  element={<EditCategory />} />
          <Route exact  path="/pyg2022/product"  element={<Product />} />
          <Route exact  path="/pyg2022/product/add"  element={<TambahProduct />} />





       
       

          <Route exact path="*" element={<NoPage />} />

        
       
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
