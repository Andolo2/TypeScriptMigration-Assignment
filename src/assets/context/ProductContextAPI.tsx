
import React, { createContext, useContext, useState } from 'react'

import {iProductProviderProps} from '../../models/productAPImodel'
import {Product, ProductRequest} from '../../models/productAPImodel'



export interface IProductContext{

    product : Product
    setProduct : React.Dispatch<React.SetStateAction<Product>>
    productRequest : ProductRequest
    setProductRequest : React.Dispatch<React.SetStateAction<ProductRequest>>
    products : Product[]
    create : (e: React.FormEvent) => void
    get: (articleNumber: string) => void
    getAll: () => void
    update: (e: React.FormEvent) => void 
    remove: (articleNumber: string) => void
   

}


export const ProductAPIContext = createContext <IProductContext | null > (null)
export const useProductAPIContext = () => {return useContext(ProductAPIContext)}

const ProductAPIProvider = ({children} : iProductProviderProps) => {
  const baseUrl = 'http://localhost:5000/api/products'


  const product_default: Product = { tag: '',articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: ''}
  const productRequest_default: ProductRequest = {tag: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: ''}
  


  const [product, setProduct] = useState<Product>(product_default)
  const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
  const [products, setProducts] = useState<Product[]>([])

  const create = async (e: React.FormEvent) => {

    e.preventDefault()
    const result = await fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productRequest)
    })
    if(result.status === 201)
      setProductRequest(productRequest_default)
      console.log('product created');

  }

  const get = async (articleNumber: string) => {

    const result = await fetch(`${baseUrl} / ${articleNumber} `)
        if(result.status === 200)
          setProduct(await result.json())
          
  }

  const getAll = async () => {
    
    const result = await fetch(`${baseUrl} `)
    if(result.status === 200)
      setProducts(await result.json())
      
     

  }

  const update = async (e: React.FormEvent) => {
  
    e.preventDefault();
    

    const result = await fetch(`${baseUrl}/${product.articleNumber}`, {
      method: 'put',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(product)
      
      
      
  })
  if(result.status === 200){
    
    
    setProduct(await result.json())
   
  }
  else{

  }

  }
    


  const remove = async (articleNumber: string) => {
    
    const result = await fetch(`${baseUrl}/${articleNumber}`, {
        method: 'delete',
        
    })
    
    if(result.status === 204){
      setProduct(product_default)
    }
    else if(result.status === 404){
     
    }
     
  }

  return (
    <ProductAPIContext.Provider value={{product, setProduct, productRequest, setProductRequest,  products, create, get, getAll, update, remove}}>
      {
        children
      }
      
      </ProductAPIContext.Provider>
  )
}

export default ProductAPIProvider 