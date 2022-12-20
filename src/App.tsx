import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
