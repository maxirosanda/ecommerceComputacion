import './index.css'


const Index = ({cart:{id,title,description,price,quantity,stock},updateCartItemQuantity,handleRemoveFromCart}) =>{



    return(
        <div className="Products">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Precio: {price}</span>
            {stock >= quantity ?
                <input type="number" min={1} max={stock} defaultValue={quantity} onChange={(e)=> updateCartItemQuantity("9HRkBkT8hsZmyyNlVOL8",id,e.target.value)} />
                :
                <div>
                    <span>no hay stock disponible</span>
                    <button onClick={()=> updateCartItemQuantity("9HRkBkT8hsZmyyNlVOL8",id,stock) }>quiero lo que alla de stock</button>
                </div>
                
            }
            
            <button onClick={() => handleRemoveFromCart("9HRkBkT8hsZmyyNlVOL8",id)}>Borrar</button>
        </div>
    )
}

export default Index