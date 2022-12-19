
 import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import NavBarSec from '../sections/NavBarSec'
import FooterSec from '../sections/FooterSec'
import Footer from '../sections/FooterSec'
import { ProductContextType, useProductContext } from '../assets/context/ProductContext'

const ProductDetailsView: React.FC = () => {

    const {id} = useParams<string>()
   const productContext = useProductContext() as ProductContextType



    useEffect(() => {
      productContext.get(id)

    },[])
    

    document.title = ' Product Details || fixxo.';
  return (
    
    <>
        <NavBarSec link={''} icon={''} quantity={0} />
        <div>{productContext.product.name}</div>
        <img src={productContext.product.imageName} />
        <div>{productContext.product.articleNumber}</div>
        <Footer />
    </>
    
  )
}

export default ProductDetailsView 