export interface Product {
    
   
    
    articleNumber: string
    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string
    tag: string

}

export interface ProductRequest {

    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string
    tag: string


}


export interface iProductProviderProps {
	children: any

}