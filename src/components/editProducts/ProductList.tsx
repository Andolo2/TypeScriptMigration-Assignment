import React, { useEffect } from 'react'

import {IProductContext, ProductAPIContext} from '../../assets/context/ProductContextAPI'
import { Product } from '../../models/productAPImodel'
import UpdateForm from './UpdateForm'

const  ProductList:React.FC = () =>  {

    const {products, getAll, remove,setProduct, update} = React.useContext(ProductAPIContext) as IProductContext

     useEffect(() => {
        getAll()
        
    },[])

    
 
    const removeProduct = (articleNumber:string) => {
      remove(articleNumber) 
     
    }


  
 
  return (
    <>
    <h3 className='product-header'>list of products</h3>
    <div className="ProductList">
        
       

        {
            products.map((product: Product)  => ( <div
             
              key={product.articleNumber}>
                
              <div className='edit-card'  key={product.articleNumber}>
              {<div className=''>{`Name: ${product.name}`}</div>}
              {<div className=''>{`Category: ${product.category}`}</div>}
              {<div className=''>{`Description: ${product.description}`}</div>}
              {<div className=''>{`Price: ${product.price}`}</div>}
              {<div className=''>{`Rating: ${product.rating}`}</div>}
              {<div className=''>{`Tag: ${product.tag}`}</div>}
              <img src={product.imageName} />
              <button onClick={() => removeProduct(product.articleNumber)}  type='submit' className='btn btn-danger py-2 mt-3'>Delete Product</button>
              
              <form method='puty' onSubmit={update} className="d-grid mb-5">
            <h3 className='display-6 mb-4'>Update Product</h3>
                <input  defaultValue={product.articleNumber} placeholder='ID...'  ></input>
               <input defaultValue={product.name} placeholder={product.name} onChange={(e) => setProduct({...product,name: e.target.value}) }></input>
               <input defaultValue={product.category}  onChange={(e) => setProduct({...product,category: e.target.value}) }></input>
               <input defaultValue={product.description} onChange={(e) => setProduct({...product,description: e.target.value}) }></input>
               <input defaultValue={product.imageName} onChange={(e) => setProduct({...product,imageName: e.target.value}) }></input>
               <input defaultValue={product.price} onChange={(e) => setProduct({...product,price: +e.target.value}) }></input>
               <input defaultValue={product.rating}  onChange={(e) => setProduct({...product,rating: +e.target.value}) }></input>
               <input defaultValue={product.tag}  onChange={(e) => setProduct({...product,tag: e.target.value}) }></input>
               <button  type='submit' className='btn btn-success py-2 mt-3'>Update Product</button>
        </form>
             
              
              </div> 
              
            </div>))
            
        }

  </div>
  </>
  )
  
}

export default ProductList