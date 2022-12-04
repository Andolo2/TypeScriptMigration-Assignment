
import React from 'react'
import ProdCards from '../components/product-cards/ProductCards'
import { productItem } from '../models/ProductModel'


interface ProductCardInterface {
  title: string
  items: productItem[]
}


const ProdSection: React.FC<ProductCardInterface> = ({title, items = []}) => {
  


  return (
    <section className="product-grid">
    <div className="product-header">
       <h2>{title}</h2>
   </div>
   <div className='container'>
    <div className='product-rows'>
      {
         //items && items.map((product ) => <ProdCards key={product.articleNumber}  item={product}/>)
         items.map(product => <ProdCards key={product.articleNumber} item={product} />)
        
      }

    </div>

  </div>
    </section>
  )
}



export default ProdSection