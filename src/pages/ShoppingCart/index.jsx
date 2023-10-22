import React, { useEffect, useState,useContext} from "react"
import './index.css'
import { CartContext } from "../../contextCart"

const Index = () =>{
    const [cart,setCart] = useContext(CartContext)

    useEffect(()=>{
        console.log(cart)
    },[])
    
    return(
        <h2>carrito</h2>
    )
}

export default Index