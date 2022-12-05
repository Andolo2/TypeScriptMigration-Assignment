import React, {useState, useEffect} from 'react'
import {featuredContext, featuredNineContext, productContext, showcaseContext} from  './assets/context/context'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import './App.min.css';

import HomeView from './views/HomeView'
import { ShoppingCartProvider } from './assets/context/shoppingCartContext';
import ContactView from './views/ContactView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import ProductView from './views/ProductView';
import EditProductView from './views/EditProductView';
import ProductProvider from './assets/context/ProductContext';
import ProductAPIProvider from './assets/context/ProductContextAPI';

const App: React.FC = () => {


  /*
    useEffect(() => {
  
      const fetchEightProducts = async () => {
        // You can await here
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
        setProducts( await result.json())
      }
      fetchEightProducts();
  
      
       const fetchTwoProducts = async () => {
        // You can await here
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=2')
        setTwoFeatured(  await result.json())
        
      }
      fetchTwoProducts(); 
  
      const fetchNineProducts = async () => {
        // You can await here
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=9')
        setNineCards(  await result.json())
        
      }
      fetchNineProducts(); 
  
       const showcaseProducts = async () => {
        // You can await here
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=1')
        setShowcase(  await result.json())
        
      }
      showcaseProducts(); 
  
      
   
      
      
    },[setProducts, setTwoFeatured, setNineCards, setShowcase] )

    */


  return (
    <React.StrictMode>
    <BrowserRouter>
    
        <ShoppingCartProvider>
          <ProductAPIProvider>
          <ProductProvider>
            <Routes>
                <Route path='/' element={<HomeView  />}  />
                <Route path='ContactView' element={<ContactView />} />
                <Route path='ProductView' element={<ProductView />} /> 
                <Route path='/ProductView/:id' element={<ProductDetailsView />} />
                <Route path='*' element={<NotFoundView />} />
                <Route path='EditProductView' element={<EditProductView />} />
            </Routes>
          </ProductProvider>
          </ProductAPIProvider>
        </ShoppingCartProvider>
    
  </BrowserRouter>
  </React.StrictMode>
  
  );
}

export default App;
