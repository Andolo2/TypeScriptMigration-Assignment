import React, { useEffect } from 'react'

import {IProductContext, ProductAPIContext} from '../../assets/context/ProductContextAPI'
import { Product } from '../../models/productAPImodel'

const  ProductList = () =>  {

    const {products, getAll, remove} = React.useContext(ProductAPIContext) as IProductContext

     useEffect(() => {
        getAll()
        
    },[])
 
    const removeProduct = (articleNumber:string) => {
      remove(articleNumber)
     
    }
 
  return (
    <>
        
        <h3 className='display-6 mb-4'>List of products</h3>

        {
            products.map((product: Product)  => (<div onClick={() => removeProduct(product.articleNumber)} key={product.id}>{product.category}{product.name}{product.description}{product.price}{product.rating}{product.imageName}</div>))
            
        }

    </>
  )
}

export default ProductList