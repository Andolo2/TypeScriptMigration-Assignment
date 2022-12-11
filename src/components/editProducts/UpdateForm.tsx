import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  {IProductContext ,ProductAPIContext } from '../../assets/context/ProductContextAPI'


const  UpdateForm: React.FC = () => {
    const articleNumber = useParams()
    const {product, setProduct, update, get} = React.useContext(ProductAPIContext) as IProductContext

     useEffect(() => {
   
    
      
    }, [get, articleNumber])  
    

    return (
        <form method='puty' onSubmit={update} className="d-grid mb-5">
            <h3 className='display-6 mb-4'>Update Product</h3>
                <input type='hidden' value={product.articleNumber} onChange={(e) => setProduct({...product,articleNumber: e.target.value}) }></input>
               <input placeholder='name...' value={product.name} onChange={(e) => setProduct({...product,name: e.target.value}) }></input>
               <input placeholder='Categorty...' value={product.category} onChange={(e) => setProduct({...product,category: e.target.value}) }></input>
               <input placeholder='description...' value={product.description} onChange={(e) => setProduct({...product,description: e.target.value}) }></input>
               <input placeholder='imageName...' value={product.imageName} onChange={(e) => setProduct({...product,imageName: e.target.value}) }></input>
               <input placeholder='price...' value={product.price || '' } onChange={(e) => setProduct({...product,price: +e.target.value}) }></input>
               <input placeholder='rating...'  value={product.rating || ''} onChange={(e) => setProduct({...product,rating: +e.target.value}) }></input>
               <button  type='submit' className='btn btn-success py-2 mt-3'>Update Product</button>
        </form>
    )
}

export default UpdateForm