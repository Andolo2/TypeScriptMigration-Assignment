
import NavBarSec from '../sections/NavBarSec'
import ProductPageSec from '../sections/ProductPage/ProductPageSec'
import React, {useState, useContext, useEffect} from 'react'
import Footer from '../sections/FooterSec'
import { ProductContextType, useProductContext } from '../assets/context/ProductContext'



const  ProductPage: React.FC = () => {
  
const {products, getAll} = useProductContext() as ProductContextType
const productContext = useProductContext() as ProductContextType

useEffect(() => {
  productContext.getFeatured(1)
  
 
}, [])
  

document.title = ' Product View || fixxo.';
  return (
    <div>
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>
      <ProductPageSec items={productContext.featured} title={''}/>
      <Footer />
      </div>
  )
}

export default ProductPage