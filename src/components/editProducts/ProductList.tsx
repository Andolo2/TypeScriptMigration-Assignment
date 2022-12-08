import React, { useEffect } from 'react'

import {IProductContext, ProductAPIContext} from '../../assets/context/ProductContextAPI'
import { Product } from '../../models/productAPImodel'

const  ProductList:React.FC = () =>  {

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
            products.map((product: Product)  => ( <div
               onClick={() => removeProduct(product.articleNumber)}
               key={product.id}>
                
              <div className='d-grid mb-3'  key={product.articleNumber}>
              {<div className=''>{`Name: ${product.name}`}</div>}
              {<div className=''>{`Category: ${product.category}`}</div>}
              {<div className=''>{`Description: ${product.description}`}</div>}
              {<div className=''>{`Price: ${product.price}`}</div>}
              {<div className=''>{`Rating: ${product.rating}`}</div>}
              <img src={product.imageName} />
              </div> 
              
            </div>))
            
        }

    </>
  )
}

export default ProductList