import { useContext } from "react"
import './index.css'
import Product from "../../components/Product"
import { ProductsContext } from "../../contexts/productContext"
import { CartContext } from "../../contexts/CartContext"

const Index = () =>{

    const [products] = useContext(ProductsContext)
    const [handleAddToCart,cart] = useContext(CartContext)

    return (
        <div className="ProductsContainer">
            {products.length == 0 ?
            <h1>cargando productos...</h1>
            :
            products.map((product, index) => <Product key={index} product={product} handleAddToCart={handleAddToCart} />)}
        </div>
    )
}

export default Index