import { createContext, useEffect, useState } from 'react'
import { collection, getDocs,doc,getDoc,updateDoc,addDoc,deleteDoc } from "firebase/firestore"
import db from '../firebase'
export const ProductsContext = createContext([])

const ProductsProvider = ({children}) =>{

    const [products,setProducts] = useState([])
   
    const getProducts = async () =>{
        const querySnapshot = await getDocs(collection(db, "products"))
        setProducts(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
    }

    const handleCreateProduct = async (product) =>{
        try {
            await addDoc(collection(db, "products"), product)
            getProducts()
            console.log('Documento agregado correctamente')
          } catch (error) {
            console.error('Error al agregar el documento:', error)
          }
    }

    const handleDeleteProduct = async (id) =>{
        try {
            await deleteDoc(doc(db, "products",id))
            getProducts()
            console.log('Documento eliminado correctamente')
          } catch (error) {
            console.error('Error al eliminar el documento:', error)
          }
    }
    const handleUpdateProduct = async (id,newProduct) => {
        try {
                const docRef = doc(db, "products", id)
                const docSnap = await getDoc(docRef)
            
                if (docSnap.exists) {
                    await updateDoc(docRef, newProduct)
                    getProducts()
                    console.log("Documento actualizado correctamente.");
                } 
                else {
                console.error("El documento no existe.");
                }
          } catch (error) {
            console.error("Error:", error);
          }
       
        }

    useEffect(()=>{
        getProducts()
    },[])

    return  <ProductsContext.Provider value={[products,handleUpdateProduct,handleCreateProduct,handleDeleteProduct]}>
                {children}
            </ProductsContext.Provider>

}
export default ProductsProvider