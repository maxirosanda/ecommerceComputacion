import { useContext } from "react"
import './index.css'
import { ProductsContext } from "../../contexts/productContext"
import EditProduct from "../EditProduct"
const Index = () =>{

    const [products,handleUpdateProduct,,handleDeleteProduct] = useContext(ProductsContext)

    return (
        <div className="EditProductsContainer">
            {products.length == 0 ?
            <h1>cargando productos...</h1>
            :
            products.map((product, index) => <EditProduct key={index} product={product} handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={handleUpdateProduct} />)}
        </div>
    )
}

export default Index