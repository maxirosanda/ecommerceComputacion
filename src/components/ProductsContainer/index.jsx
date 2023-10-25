import { useContext } from "react"
import './index.css'
import Product from "../Product"
import { ProductsContext } from "../../contexts/productContext"

const Index = () =>{

    const [products] = useContext(ProductsContext)

    return (
        <div className="ProductsContainer">
            {products.length == 0 ?
            <h1>cargando productos...</h1>
            :
            products.map((product, index) => <Product key={index} product={product} />)}
        </div>
    )
}

export default Index