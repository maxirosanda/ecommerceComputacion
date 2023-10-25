import {useState } from "react"
import './index.css'

const Index = ({product:{id,title,description,price,stock},handleDeleteProduct,handleUpdateProduct}) =>{

        const [newTitle,setNewTitle] = useState(title)
        const [newDescription,setNewDescription] = useState(description)
        const [newPrice,setNewPrice] = useState(price)
        const [newStock,setNewStock] = useState(stock)
        

       return ( <div className="EditProducts">
            <label>
                Nombre: <input type="text"  value={newTitle}  onChange={(e) => setNewTitle(e.target.value)} />
            </label>
            <label>
                Descripcion: <textarea type="text"  value={newDescription}  onChange={(e)=>setNewDescription(e.target.value)} />
            </label>
            <label>
                Precio: <input type="number" min={0} value={newPrice} onChange={(e)=>setNewPrice(e.target.value)} />
            </label>
            <label>
                Stock: <input type="number" min={0}  value={newStock} onChange={(e)=>setNewStock(e.target.value)} />
            </label>
            <button onClick={()=>handleUpdateProduct(id,{title:newTitle,description:newDescription,price:newPrice,stock:newStock})}>Actualizar</button>
            <button onClick={()=>handleDeleteProduct(id)}>Borrar</button>
        </div>
    )
}

export default Index