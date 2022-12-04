
import React from 'react'

import { IProductContext, ProductContexProvider } from '../../assets/context/ProductContextAPI'

const  UpdateProducts = () => {

  const {product, setProduct, update} = React.useContext(ProductContexProvider) as IProductContext


  return (
    console.log('remove')
/*  <form onSubmit={update} className = "d-grid mb-3">
	
    <input type="hidden" className='form-controll'value={product.articleNumber} onChange={(e) =>  setProduct ({...product, articleNumber: Number(e.target.value)})}></input>
    <input value={product.name} onChange={(e) =>  setProduct ({...product, name: e.target.value})}></input>
    <input value={product.description} onChange={(e) =>  setProduct ({...product, description: e.target.value})}></input>
    <input value={product.category} onChange={(e) =>  setProduct ({...product, category: e.target.value})}></input>
    <input value={product.imageName} onChange={(e) =>  setProduct ({...product, imageName: e.target.value})}></input>
    <input value={product.price} onChange={(e) =>  setProduct ({...product, price:  Number(e.target.value)})}></input>
    <input value={product.rating} onChange={(e) =>  setProduct ({...product, rating: Number(e.target.value)})}></input> 
    <button className='btn btn-success py-2 mt-3' type='submit'>Submit</button>
  
  </form>  
  */
  )
  
	



}

export default UpdateProducts

/*    <input value={productRequest.price} onChange={(e) =>  setProductRequest ({...productRequest, price: e.target.value})}></input>
    <input value={productRequest.rating} onChange={(e) =>  setProductRequest ({...productRequest, rating: e.target.value})}></input> */