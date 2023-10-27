import { useContext } from "react"
import './index.css'
import FavoriteItem from "../../components/FavoriteItem"
import { FavoritesContext } from "../../contexts/FavoritesContext"
import { ProductsContext } from "../../contexts/productContext"
const Index = () =>{

    const [products] = useContext(ProductsContext)
    const [,favorites,handleRemoveFromFavorites] = useContext(FavoritesContext)
 return (
        <div className="EditProductsContainer">
            {
                
                favorites.map((elementFavorite,index )=> {
                    
                    const matchedProduct = products.find(elementProduct => elementFavorite === elementProduct.id);
        
                    if (matchedProduct) {
                        return <FavoriteItem key={index} favorite={matchedProduct} handleRemoveFromFavorites={handleRemoveFromFavorites}/>;
                    }
                    handleRemoveFromFavorites("9HRkBkT8hsZmyyNlVOL8",elementFavorite)
                    return null;
                    
                    
                })
    
            }
          
        </div>
    )
}

export default Index