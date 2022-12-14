import React from 'react'
import { ProductContextType, useProductContext } from '../../assets/context/ProductContext'
import ProductList from '../../components/EditProducts/ProductList'


const  EditProductSec: React.FC = ()  => {

  const productContext = useProductContext() as ProductContextType
  return (
    <div className='container'>
    <div className='display-container'>
      <div className='d-grid mb-3'>
        <div>{productContext.product.name}</div>
        <img src={productContext.product.imageName} />
        <div>{productContext.product.articleNumber}</div>
        <ProductList />
      </div>
    </div>
    </div>
  )
}

export default EditProductSec