import {useContext,createContext, useState} from "react"
import { productItem } from "../../models/ProductModel"


interface ProductProviderType{
  children: any
}

export interface ProductContextType{
  product: productItem
  products:  productItem[]
  featured: productItem[]
  showcaseTop: productItem[]
  showcaseBottom: productItem[]
  getFeatured: (take?: number) => void
  getShowcaseTop: (take?: number) => void
  getShowcaseBottom: (take?: number) => void
  get: (articleNumber?: string) => void
  getAll:  () => void
  
  
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => {return useContext(ProductContext)}



 const ProductProvider: React.FC<ProductProviderType> = ({children}) => {

    const empty_Product: productItem = {
      tag: '',
      articleNumber: '',
      desription:'',
      name: '',
      productName: "",
      category: "",
      price: 0,
      imageName: ""
    }
   

    const [product, setProduct] = useState<productItem>(empty_Product) // Get a product
    const [products , setProducts] = useState<productItem[]>([]) // Get all Products
    const [featured , setFeatured] = useState<productItem[]>([]) // get featured products
    const [showcaseTop , setShowcaseTop] = useState<productItem[]>([]) // get showcase products
    const [showcaseBottom , setShowcaseBottom] = useState<productItem[]>([]) // get showcase products
   

    const baseurl: string = "http://localhost:5000/api/products"


    const get = async (articleNumber?: string ) => { // fetch by ArticleNUmber

      if(articleNumber !== undefined){
        const res = await fetch (`${baseurl}/details/${articleNumber}`)
        setProduct(await res.json())
      }
      else{
        prompt('error, contact admin')
      }
      console.log('null')
     
    }

    const getAll = async () => {
      
        const res = await fetch(baseurl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
    
      let url = `${baseurl}/featured`

      if(take !== 0 )
      url += `/${take}`
      

      const res = await fetch(url)
      setFeatured(await res.json())
  }

  const getShowcaseTop = async (take: number = 0) => {
    
    let url = `${baseurl}/showcaseTop`

    if(take !== 0 )
    url += `/${take}`
    

    const res = await fetch(url)
    setShowcaseTop(await res.json())
}

const getShowcaseBottom = async (take: number = 0) => {
    
  let url = `${baseurl}/showcaseBottom`

  if(take !== 0 )
  url += `/${take}`
  

  const res = await fetch(url)
  setShowcaseBottom(await res.json())
}







    return <ProductContext.Provider value={{product, products, featured,  get, getAll, getFeatured, showcaseTop, getShowcaseTop, showcaseBottom, getShowcaseBottom}}>
      {children}
    </ProductContext.Provider>

}

export default ProductProvider