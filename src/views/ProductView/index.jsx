import React,{useState,useEffect} from "react"
import './index.css'
import { useParams } from "react-router-dom"
import Product from "../../components/Product"

const Index = () =>{

    const {id} = useParams()

    const [product,setProduct] = useState({})

    const fetchData = async () => {
        try {
            const response = await fetch("../../../products.json")
            const data = await response.json()
            const element = data.find(element => element.id == id)
            setProduct({...element})
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    
    useEffect(()=>{
        console.log("producto montado")
        fetchData()
        return () => console.log("producto desmontado")
    },[])

    return(
        <div>
            <Product product={product} />
        </div>
    )
}

export default Index