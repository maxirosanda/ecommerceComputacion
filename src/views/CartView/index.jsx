import { useEffect, useState,useContext} from "react"
import './index.css'
import { CartContext } from "../../contexts/CartContext"

const Index = () =>{
    const [cart,setCart] = useContext(CartContext)
    
    useEffect(()=>{
        console.log(cart)
    })
    return(
        <h2>carrito</h2>
    )
}

export default Index