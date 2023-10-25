import React, { useEffect, useState } from "react"
import './index.css'
import Product from "../Product"

const Index = () =>{

    const [products,setProducts] = useState([])

    const fetchData = async () => {
        setTimeout(async () => {
            try {
                const response = await fetch("../../../products.json")
                const data = await response.json()
                setProducts([...data])
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }, 1000); // Retrasa la ejecución por 1 segundo (1000 milisegundos)
    }

    useEffect(()=>{  
        fetchData()
        console.log("montado Productos")
        return(()=> console.log("desmontado Productos"))
    },[])

    return (
        <div className="ProductsContainer">
            {products.length == 0 ?
            <h1>cargando productos...</h1>
            :
            products.map((product, index) => <Product key={index} product={product} />)}
        </div>
    )
}

export default Index