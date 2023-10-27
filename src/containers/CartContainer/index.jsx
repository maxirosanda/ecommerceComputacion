import { useContext } from "react"
import './index.css'
import { CartContext } from "../../contexts/CartContext"
import CartItem from "../../components/CartItem"
import { ProductsContext } from "../../contexts/productContext"
const Index = () =>{

    const [,cart,updateCartItemQuantity,handleRemoveFromCart] = useContext(CartContext)
    const [products] = useContext(ProductsContext)

    
 return (
        <div className="EditProductsContainer">
            {
                cart.map((elementCart,index )=> {
                    const matchedProduct = products.find(elementProduct => elementCart.idProduct === elementProduct.id);
                    
                    if (matchedProduct) {
                        return <CartItem key={index} cart={{ ...matchedProduct, quantity: elementCart.quantity }} updateCartItemQuantity={updateCartItemQuantity} handleRemoveFromCart={handleRemoveFromCart} />;
                    }
                    handleRemoveFromCart("9HRkBkT8hsZmyyNlVOL8",elementCart.idProduct)
                    return null;
                })
    
            }
          
        </div>
    )
}

export default Index