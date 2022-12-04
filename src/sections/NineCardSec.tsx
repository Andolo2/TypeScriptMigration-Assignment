import React, {useState} from 'react'
import NineCard from '../components/nineCards/NineCard'
import { productItem } from '../models/ProductModel'

interface ProductCardInterface {
    title: string
    items: productItem[]
  }
  

const NineCardSec: React.FC<ProductCardInterface> = ({title, items = []}) => {
    return(
        <section className="nine-cards">
            <div className="container">
            <div className='NineCardHeader'>
                <h4>Latest Product</h4>
                <h4>Latest Product</h4>
                <h4>Latest Product</h4>
                
            </div>
            <div className="card-rows">
             {
                   
                   //items.map(product => <NineCardSec key={product.articleNumber} item={product} />)
                  
             }
              
           
            </div>
            </div>
        </section>
        
    )
}

export default NineCardSec