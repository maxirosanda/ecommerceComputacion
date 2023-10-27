import { useEffect, useState } from "react"
import './index.css'
import { Link } from "react-router-dom"


const Index = ({product:{id,title,description,price,stock},handleAddToCart,cart}) =>{
    
    const [quantity,setQuantity] = useState(1)
    const stock_available = stock - cart.find((item)=> item.idProduct == id ).quantity 

    return(
        <div className="Products">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Precio: {price}</span>
            {stock_available ?
            <input type="number" min={1} max={stock_available} value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
            : <span>Ya esta en tu carrito</span>
            }
            <Link className="Link" to={`/product/${id}`}>Comprar</Link>
            <button onClick={()=>handleAddToCart("9HRkBkT8hsZmyyNlVOL8",id,quantity,stock)}>Carrito</button>
        </div>
    )
}

export default Index