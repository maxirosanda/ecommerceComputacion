import './index.css'


const Index = ({cart:{id,title,description,price,quantity,stock},updateCartItemQuantity,handleRemoveFromCart}) =>{



    return(
        <div className="Products">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Precio: {price}</span>
            <input type="number" min={1} max={stock} defaultValue={quantity} onChange={(e)=> updateCartItemQuantity("9HRkBkT8hsZmyyNlVOL8",id,e.target.value)} />
            <button onClick={() => handleRemoveFromCart("9HRkBkT8hsZmyyNlVOL8",id)}>Borrar</button>
        </div>
    )
}

export default Index