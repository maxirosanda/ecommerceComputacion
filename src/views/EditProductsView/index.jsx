import EditProductsContainer from "../../containers/EditProductContainer"
import CreateProduct from "../../components/CreateProducts"
const Index = () => {
    return  <>
            <h1>Agregar un Producto</h1>
            <CreateProduct/>
            <h1>Edicion de Productos</h1>
            <EditProductsContainer/>
            </>
}

export default Index