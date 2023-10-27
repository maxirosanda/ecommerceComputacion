import { useEffect, useState,useContext } from "react"
import './index.css'
import { ProductsContext } from "../../contexts/productContext"

const Index = () =>{

        const [title,setTitle] = useState("")
        const [description,setDescription] = useState("")
        const [price,setPrice] = useState(0)
        const [stock,setStock] = useState(0)
        const [,,handleCreateProduct] = useContext(ProductsContext)

        const handleSubmit = (e) => {
            e.preventDefault()
        
            handleCreateProduct({ title, description, price, stock },"9HRkBkT8hsZmyyNlVOL8")

            setTitle("")
            setDescription("")
            setPrice(0)
            setStock(0)

          }

       return ( <div className="CreateProducts">
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre: <input type="text"  value={title} placeholder="Ingrese nombre del producto"  onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    Descripcion: <textarea type="text"  placeholder="Ingrese descripcion del producto" value={description}  onChange={(e)=>setDescription(e.target.value)} required />
                </label>
                <label>
                    Precio: <input type="number" min={0} value={price} onChange={(e)=>setPrice(e.target.value)} required />
                </label>
                <label>
                    Stock: <input type="number" min={0}  value={stock} onChange={(e)=>setStock(e.target.value)} required />
                </label>
                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    )
}

export default Index