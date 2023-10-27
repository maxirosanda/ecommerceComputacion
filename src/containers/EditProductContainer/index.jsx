import { useContext } from "react"
import './index.css'
import { ProductsContext } from "../../contexts/productContext"
import EditProduct from "../../components/EditProduct"
const Index = () =>{

    const [products,handleUpdateProduct,,handleDeleteProduct] = useContext(ProductsContext)
    const productsSeller = products.map(product => {
        if(product.idSeller == "9HRkBkT8hsZmyyNlVOL8") return product
    })
    console.log(productsSeller)
    return (
        <div className="EditProductsContainer">
            {productsSeller.length == 0 ?
            <h1>cargando productos...</h1>
            :
            productsSeller.map((product, index) => <EditProduct key={index} product={product} handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={handleUpdateProduct} />)}
        </div>
    )
}

export default Index