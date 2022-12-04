import {useContext,createContext, useState} from "react"
import { productItem } from "../../models/ProductModel"


interface ProductProviderType{
  children: any
}

export interface ProductContextType{
  product: productItem
  products:  productItem[]
  featured: productItem[]
  getFeatured: (take?: number) => void
  get: (articleNumber?: string) => void
  getAll:  (take?: number) => void
  
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => {return useContext(ProductContext)}



 const ProductProvider: React.FC<ProductProviderType> = ({children}) => {

    const empty_Product: productItem = {
      articleNumber: '',
      name: '',
      productName: "",
      category: "",
      price: 0,
      imageName: ""
    }
   

    const [product, setProduct] = useState<productItem>(empty_Product) // Get a product
    const [products , setProducts] = useState<productItem[]>([]) // Get all Products
    const [featured , setFeatured] = useState<productItem[]>([]) // 
   

    const baseurl: string = "http://localhost:5000/api/products"


    const get = async (articleNumber?: string ) => {

      if(articleNumber !== undefined){
        const res = await fetch (baseurl + `/${articleNumber}`)
        setProduct(await res.json())
      }
      else{
        prompt('error, contact admin')
      }
      console.log('null')
     
    }

    const getAll = async (take: number = 0) => {
        let url = baseurl
        if(take !== 0 )
        url = baseurl + `?take=${take}`

        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 1) => {
    
      let url = baseurl + `?tag=featured`
      if(take !== 0 )
      url = baseurl + `?take=${take}`
      console.log('test')

      const res = await fetch(url)
      setFeatured(await res.json())
  }


    return <ProductContext.Provider value={{product, products, featured,  get, getAll, getFeatured}}>
      {children}
    </ProductContext.Provider>

}

export default ProductProvider