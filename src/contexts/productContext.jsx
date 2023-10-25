import { createContext, useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import db from '../firebase'
export const ProductsContext = createContext([])

const ProductsProvider = ({children}) =>{

    const [products,setProducts] = useState([])
   
    const getProducts = async () =>{
        const querySnapshot = await getDocs(collection(db, "products"))
        setProducts(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
    }

    useEffect(()=>{
        getProducts()
    },[])

    return  <ProductsContext.Provider value={[products,setProducts]}>
                {children}
            </ProductsContext.Provider>

}
export default ProductsProvider