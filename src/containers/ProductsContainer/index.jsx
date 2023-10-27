import { useContext } from "react"
import './index.css'
import Product from "../../components/Product"
import { ProductsContext } from "../../contexts/productContext"
import { CartContext } from "../../contexts/CartContext"
import { FavoritesContext } from "../../contexts/FavoritesContext"

const Index = () =>{

    const [products] = useContext(ProductsContext)
    const [handleAddToCart,cart,,] = useContext(CartContext)
    const [handleAddToFavorites,favorites] = useContext(FavoritesContext)
    
    return (
        <div className="ProductsContainer">
            {products.length == 0 ?
            <h1>cargando productos...</h1>
            :
            products.map((product, index) => <Product key={index} product={product} cart={cart} handleAddToCart={handleAddToCart} handleAddToFavorites={handleAddToFavorites} />)}
        </div>
    )
}

export default Index