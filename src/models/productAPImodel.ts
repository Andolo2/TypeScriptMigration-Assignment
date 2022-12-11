export interface Product {
    
   
    _id: string
    articleNumber: string
    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string

}

export interface ProductRequest {

    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string


}


export interface iProductProviderProps {
	children: any

}