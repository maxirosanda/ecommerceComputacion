import { createContext, useEffect, useState } from 'react'
import { collection, getDocs,doc,getDoc,updateDoc,addDoc,deleteDoc,arrayUnion } from "firebase/firestore"
import db from '../firebase'
export const ProductsContext = createContext([])

const ProductsProvider = ({children}) =>{

    const [products,setProducts] = useState([])
   
    const getProducts = async () =>{
        const querySnapshot = await getDocs(collection(db, "products"))
        setProducts(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
    }

    const handleCreateProduct = async (product,idSeller) =>{
        try {
            const docRef = doc(db, "users",idSeller)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
              const docRefProduct = await addDoc(collection(db, "products"), {...product,idSeller})
              const docSnapshotProduct = await getDoc(docRefProduct)
              const idProduct = docSnapshotProduct.id;
              const user = docSnap.data()
              const nuevoSoldProductIds= arrayUnion(idProduct)
              user.soldProductIds = [...user.soldProductIds, ... nuevoSoldProductIds.wu]
              console.log(user.soldProductIds)
              await updateDoc(docRef, { soldProductIds: user.soldProductIds })
              getProducts()
              console.log('Documento agregado correctamente')
          } else {
              console.log("No se encontró el documento.");
              return null;
          }
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