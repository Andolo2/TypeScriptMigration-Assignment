
 import React, { useEffect } from 'react'
import { productContext } from '../../assets/context/context'
import { IProductContext, ProductContexProvider } from '../../assets/context/ProductContextAPI'
//import {IProductContext, ProductContexProvider } from '../../assets/context/ProductContext'
import { Product } from '../../models/productAPImodel'

const  ProductList = () => {

    const {products, getAll} = React.useContext(ProductContexProvider) as IProductContext





    useEffect(() => {

        getAll()
    }, [getAll])

  return (

    <>
    <h4> Product List title</h4>
    
    {
        products.map((product: Product) => (<div key={product.articleNumber}></div>) ) 
    }
    </>
   
  )
}

export default ProductList 