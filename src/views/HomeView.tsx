import React, {useEffect} from 'react'
import NavBarSec from '../sections/NavBarSec'
import JumboSec from '../sections/JumboSec'
import ProdCard from '../sections/productCardSec'
import WinterCard from '../sections/WinterClearSec' 
import AdCards from '../sections/AdCardsSec'
 import SpecCard from '../sections/SpecialitySec'
import SaleCardsSec1 from '../sections/SaleCardsSec1'
import SaleCardsSec2 from '../sections/SaleCardSec2'
 import DividerSec from '../sections/DividerSec'
import NineCardSec from '../sections/NineCardSec'
 import CircleLinksSec from '../sections/CircleLinksSec'

 import FooterSec from '../sections/FooterSec'

import { ProductContextType, useProductContext } from '../assets/context/ProductContext'





const HomeView: React.FC = ()  => {



const productContext = useProductContext() as ProductContextType


  useEffect(() => {
    productContext.getFeatured(8)
    
   
  }, [])

  useEffect(() => {
    productContext.getShowcaseTop(3)
    
   
  }, [])

  useEffect(() => {
    productContext.getShowcaseBottom(3)
    
   
  }, [])

  useEffect(() => {
    productContext.getLatestProduct(9)
    
   
  }, [])



  return (
    
    
    <div>
    
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>
        <JumboSec></JumboSec>
         <WinterCard></WinterCard>
      <ProdCard title='Featured Products' items={productContext.featured}/> 
      <AdCards></AdCards>
      <SpecCard></SpecCard>
      <SaleCardsSec1  items={productContext.showcaseTop} title={''}/>
      <SaleCardsSec2  items={productContext.showcaseBottom} title={''}/>
      <DividerSec></DividerSec>
      <NineCardSec items={productContext.latestProduct} title={''}/>
      <CircleLinksSec />
      <FooterSec /> 

      
      
     
      
      
      
      </div>
  )
  
}

export default HomeView