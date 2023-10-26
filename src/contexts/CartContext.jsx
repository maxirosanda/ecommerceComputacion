import { createContext, useState,useEffect } from 'react'
import {getDoc,doc,updateDoc, arrayUnion} from "firebase/firestore";
import db from '../firebase'

export const CartContext = createContext([])

const CartProvider = ({children}) =>{

    const [carts,setCarts] = useState([])

    const getCarts = async (idBuyer) =>{
      const querySnapshot = await getDoc(doc(db, "users",idBuyer))
      setCarts(querySnapshot.data().cart)
    }
    useEffect(()=>{
      getCarts("9HRkBkT8hsZmyyNlVOL8")
  },[])


    const handleAddToCart = async (idBuyer,idProduct,quantity) => {
        
        try {
          const docRef = doc(db, "users", idBuyer)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const nuevoCart = arrayUnion({ idProduct, quantity })
            await updateDoc(docRef, {
                cart: nuevoCart
              })
            console.log("producto agregado al carrito exitosamente")
          } else {
            console.log("No se encontró el documento.")
            return null
          }
        } catch (error) {
          console.error("Error al consultar el carrito:", error)
          return null
        }
      }
      
    return  <CartContext.Provider value={[carts,handleAddToCart]}>
                {children}
            </CartContext.Provider>

}
export default CartProvider