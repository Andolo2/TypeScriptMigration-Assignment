
import NavBarSec from '../sections/NavBarSec'
import ProductPageSec from '../sections/ProductPage/ProductPageSec'
import React, {useState, useContext} from 'react'
import Footer from '../sections/FooterSec'
import { ProductContextType, useProductContext } from '../assets/context/ProductContext'



const  ProductPage: React.FC = () => {
  
const {products, getAll} = useProductContext() as ProductContextType

 
  
  return (
    <div>
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>
      <ProductPageSec items={products} title={''}/>
      <Footer />
      </div>
  )
}

export default ProductPage