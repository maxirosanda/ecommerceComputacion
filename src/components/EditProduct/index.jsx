import { useEffect, useState } from "react"
import './index.css'

const Index = ({product:{id,title,description,price,stock}}) =>{

        const [newTitle,setNewTitle] = useState("")
        const [newDescription,setNewDescription] = useState(description)
        const [newPrice,setNewPrice] = useState(price)
        const [newStock,setNewStock] = useState(stock)
        useEffect(()=>{
            console.log(newTitle,newDescription,newPrice,newStock)
        },[title])
       return ( <div className="EditProducts">
            <label>
                Nombre: <input type="text"   onChange={(e)=>setNewTitle(e.target.value)} />
            </label>
            <label>
                Descripcion: <textarea type="text"  value={description}  onChange={(e)=>setNewDescription(e.target.value)} />
            </label>
            <label>
                Precio: <input type="number" min={0} defaultValue={price} onChange={(e)=>setNewPrice(e.target.value)} />
            </label>
            <label>
                Stock: <input type="number" min={0}  defaultValue={stock} onChange={(e)=>setNewStock(e.target.value)} />
            </label>
            <button>eliminar</button>
            <button>Actualizar</button>
        </div>
    )
}

export default Index