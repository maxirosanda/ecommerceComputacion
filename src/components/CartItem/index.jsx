import { useState } from 'react'
import './index.css'


const Index = ({cart:{title,description,price,quantity,stock}}) =>{

    const [newQuantity,setNewQuantity] = useState(quantity)

    return(
        <div className="Products">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Precio: {price}</span>
            <input type="number" min={1} max={stock} value={newQuantity} onChange={(e)=> setNewQuantity(e.target.value)} />
        </div>
    )
}

export default Index