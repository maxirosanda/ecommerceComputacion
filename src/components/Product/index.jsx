import { useState } from "react"
import './index.css'
import { Link } from "react-router-dom"


const Index = ({product:{id,title,description,price,stock},handleAddToCart}) =>{
    
    const [quantity,setQuantity] = useState(1)

  
    return(
        <div className="Products">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Precio: {price}</span>
            <input type="number" min={1} max={stock} value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
            <Link className="Link" to={`/product/${id}`}>Comprar</Link>
            <button onClick={()=>handleAddToCart("9HRkBkT8hsZmyyNlVOL8",id,quantity,stock)}>Carrito</button>
        </div>
    )
}

export default Index