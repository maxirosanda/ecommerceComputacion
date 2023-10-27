import { createContext, useState,useEffect } from 'react'
import {getDoc,doc,updateDoc, arrayUnion, getDocs, collection} from "firebase/firestore";
import db from '../firebase'

export const FavoritesContext = createContext([])

const FavoritesProvider = ({children}) =>{

    const [favorites,setFavorites] = useState([])

    const getFavorites = async (idBuyer) =>{
      const querySnapshot = await getDoc(doc(db, "users",idBuyer))
      setFavorites(querySnapshot.data().favorites)
    }

    useEffect(()=>{
      getFavorites("9HRkBkT8hsZmyyNlVOL8")
  },[])


  const handleAddToFavorites = async (idBuyer, idProduct) => {
    try {
        const docRef = doc(db, "users", idBuyer);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const user = docSnap.data();
            const favoriteItemIndex = user.favorites.findIndex(id => id === idProduct);

            if (favoriteItemIndex == -1) {
                const nuevoFavorites = arrayUnion(idProduct);
                user.favorites = [...user.favorites, ...nuevoFavorites.wu]
                await updateDoc(docRef, { favorites: user.favorites });
                getFavorites("9HRkBkT8hsZmyyNlVOL8");
                console.log("Producto agregado a favoritos");
            } else {
                console.log("ya esta en favoritos")
            }

        } else {
            console.log("No se encontró el documento.");
            return null;
        }
    } catch (error) {
        console.error("Error al consultar favoritos:", error);
        return null;
    }
}

    const handleRemoveFromFavorites = async (idBuyer, idProduct) => {
      try {
          const docRef = doc(db, "users", idBuyer);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
              const user = docSnap.data();
              const favoritesIndex = user.favorites.findIndex(id=> id === idProduct);
  
              if (favoritesIndex !== -1) {
                  user.favorites.splice(favoritesIndex, 1); // Elimina el elemento de favoritos
                  await updateDoc(docRef, { favorites: user.favorites });
                  getFavorites("9HRkBkT8hsZmyyNlVOL8");
                  console.log("El producto fue eliminado de favoritos");
              } else {
                  console.log("El producto no esta en favoritos");
              }
          } else {
              console.log("No se encontró el documento.");
              return null;
          }
      } catch (error) {
          console.error("Error al eliminar el producto de favoritos:", error);
          return null;
      }
  }
  
    return  <FavoritesContext.Provider value={[handleAddToFavorites,favorites,handleRemoveFromFavorites ]}>
                {children}
            </FavoritesContext.Provider>

}
export default FavoritesProvider