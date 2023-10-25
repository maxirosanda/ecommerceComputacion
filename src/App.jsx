import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductView from './views/ProductView'
import IndexView from './views/IndexView'
import CartView from './views/CartView'
import EditProductView from "./views/EditProductsView"
import ProductsProvider from './contexts/productContext'
import CartProvider from './contexts/CartContext'

const App = () => {
  return (
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/'   element={<IndexView/>}/>
                <Route path="product/:id" element={<ProductView/>} />
              <Route path='/carrito'  element={<CartView/>} />
              <Route path='/editProducts'  element={<EditProductView/>} />
            </Routes>
            <Footer/>
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    
  )
    

}

export default App
