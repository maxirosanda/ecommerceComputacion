import './index.css'


const Index = ({favorite:{id,title,description,price},handleRemoveFromFavorites}) =>{

    return(
        <div className="Products">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Precio: {price}</span>
            <button onClick={() => handleRemoveFromFavorites("9HRkBkT8hsZmyyNlVOL8",id)}>Borrar</button>
        </div>
    )
}

export default Index