import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductView from './views/ProductView'
import IndexView from './views/IndexView'
import CartView from './views/CartView'
import CartProvider from './contexts/CartContext'

const App = () => {
  return (
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/'   element={<IndexView/>}/>
              <Route path="product/:id" element={<ProductView/>} />
            <Route path='/carrito'  element={<CartView/>} />
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    
  )
    

}

export default App
