import { createContext, useState,useEffect } from 'react'
import {getDoc,doc,updateDoc, arrayUnion, getDocs, collection} from "firebase/firestore";
import db from '../firebase'

export const CartContext = createContext([])

const CartProvider = ({children}) =>{

    const [cart,setCart] = useState([])

    const getCart = async (idBuyer) =>{
      const querySnapshotUser = await getDoc(doc(db, "users",idBuyer))
      const cartData = querySnapshotUser.data().cart
      const querySnapshotProducts = await getDocs(collection(db,"products"))
      const productsData = querySnapshotProducts.docs.map(doc => ({id:doc.id,...doc.data()}))
      const newCart = cartData.map((item)=>{
        const product = productsData.find(product => product.id == item.idProduct)
        if(product){
            if(item.quantity <= product.stock){
                return item
            }
        }
      }).filter(Boolean)
      console.log(newCart)
      setCart(newCart)
      
    }

    useEffect(()=>{
      getCart("9HRkBkT8hsZmyyNlVOL8")
  },[])


  const handleAddToCart = async (idBuyer, idProduct, quantity, stock) => {
    try {
        const docRef = doc(db, "users", idBuyer);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const user = docSnap.data();
            const cartItemIndex = user.cart.findIndex(item => item.idProduct === idProduct);

            if (cartItemIndex !== -1) {
                const newQuantity = parseInt(user.cart[cartItemIndex].quantity) + parseInt(quantity);

                if (newQuantity > stock) {
                    console.log("No se puede agregar más del stock disponible.");
                    return;
                }

                user.cart[cartItemIndex].quantity = newQuantity;
            } else {
                const nuevoCart = arrayUnion({ idProduct, quantity });
                user.cart = [...user.cart, ...nuevoCart.wu];
            }

            await updateDoc(docRef, { cart: user.cart });
            getCart("9HRkBkT8hsZmyyNlVOL8");
            console.log("Producto agregado al carrito exitosamente");
        } else {
            console.log("No se encontró el documento.");
            return null;
        }
    } catch (error) {
        console.error("Error al consultar el carrito:", error);
        return null;
    }
}
      const updateCartItemQuantity = async (idBuyer, idProduct, newQuantity) => {
        try {
            const docRef = doc(db, "users", idBuyer);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                const user = docSnap.data();
                const cartItemIndex = user.cart.findIndex(item => item.idProduct === idProduct);
    
                if (cartItemIndex !== -1) {
                    user.cart[cartItemIndex].quantity = newQuantity;
                    await updateDoc(docRef, { cart: user.cart });
                    getCart("9HRkBkT8hsZmyyNlVOL8");
                    console.log("Cantidad de producto actualizada exitosamente");
                } else {
                    console.log("No se encontró el producto en el carrito.");
                }
            } else {
                console.log("No se encontró el documento.");
            }
        } catch (error) {
            console.error("Error al actualizar la cantidad del producto:", error);
        }
    }

    const handleRemoveFromCart = async (idBuyer, idProduct) => {
      try {
          const docRef = doc(db, "users", idBuyer);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
              const user = docSnap.data();
              const cartItemIndex = user.cart.findIndex(item => item.idProduct === idProduct);
  
              if (cartItemIndex !== -1) {
                  user.cart.splice(cartItemIndex, 1); // Elimina el elemento del carrito
                  await updateDoc(docRef, { cart: user.cart });
                  getCart("9HRkBkT8hsZmyyNlVOL8");
                  console.log("Producto eliminado del carrito exitosamente");
              } else {
                  console.log("El producto no está en el carrito.");
              }
          } else {
              console.log("No se encontró el documento.");
              return null;
          }
      } catch (error) {
          console.error("Error al eliminar el producto del carrito:", error);
          return null;
      }
  }
  
    return  <CartContext.Provider value={[handleAddToCart,cart,updateCartItemQuantity,handleRemoveFromCart]}>
                {children}
            </CartContext.Provider>

}
export default CartProvider