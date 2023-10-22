import React, { useState,useContext } from "react"
import './index.css'
import { Link } from "react-router-dom"
import { CartContext } from "../../contextCart"

const Index = ({product:{id,name,description,price,stock}}) =>{
    const [cart,setCart] = useContext(CartContext)
    const [quantity,setQuantity] = useState(1)

    const handleAddToCart = () =>{
        setCart([...cart,{
            id,
            name,
            description,
            price,
            quantity
        }])
    }
    return(
        <div className="Products">
            <h2>{name}</h2>
            <p>{description}</p>
            <span>Precio: {price}</span>
            <input type="number" min={1} max={stock} defaultValue={1} onChange={(e)=> setQuantity(e.target.value)}/>
            <Link className="Link" to={`/product/${id}`}>Comprar</Link>
            <button onClick={handleAddToCart}>Carrito</button>
        </div>
    )
}

export default Index