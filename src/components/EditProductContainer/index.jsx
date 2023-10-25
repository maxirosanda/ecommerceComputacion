import { useContext } from "react"
import './index.css'
import Product from "../Product"
import { ProductsContext } from "../../contexts/productContext"
import EditProduct from "../EditProduct"
const Index = () =>{

    const [products,setProducts] = useContext(ProductsContext)

    return (
        <div className="EditProductsContainer">
            {products.length == 0 ?
            <h1>cargando productos...</h1>
            :
            products.map((product, index) => <EditProduct key={index} product={product} />)}
        </div>
    )
}

export default Index