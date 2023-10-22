import React, { useEffect, useState } from "react"
import './index.css'
import Product from "../Product"

const Index = () =>{

    const [products,setProducts] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch("../../../products.json")
            const data = await response.json()
            setProducts([...data])
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="ProductsContainer">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    )
}

export default Index